#!/usr/bin/env node
// scripts/indexnow-ping.mjs
//
// Submit URLs to the IndexNow protocol (https://www.indexnow.org).
//
// Usage:
//   # ping a few specific URLs
//   node scripts/indexnow-ping.mjs https://kerblabs.com/foo https://kerblabs.com/bar
//
//   # walk /sitemap-index, collect every URL, ping them all in batches of 10000
//   node scripts/indexnow-ping.mjs --all-sitemap
//
//   # use a different host/base (e.g. staging)
//   BASE_URL=https://staging.kerblabs.com node scripts/indexnow-ping.mjs --all-sitemap
//
//   # dry run — show what would be submitted, don't POST
//   node scripts/indexnow-ping.mjs --all-sitemap --dry-run
//
// How the key is resolved (in order of priority):
//   1. INDEXNOW_KEY env var
//   2. The first file in /public matching /^[a-f0-9]{32}\.txt$/
//   3. Error out
//
// This script is deliberately stand-alone (pure Node 18+, no deps, .mjs)
// so it can be invoked from CI, cron, a post-deploy hook, etc. without
// pulling in the Next runtime. For in-process use (route handlers,
// webhooks) import `lib/indexnow.ts` instead.

import { readdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(HERE, "..");
const PUBLIC_DIR = join(REPO_ROOT, "public");

const INDEXNOW_ENDPOINT = "https://api.indexnow.org/IndexNow";
const BATCH_SIZE = 10000; // IndexNow protocol cap
const BASE_URL = (process.env.BASE_URL || "https://kerblabs.com").replace(
  /\/$/,
  "",
);

// ---------- CLI ----------

const argv = process.argv.slice(2);
if (argv.includes("--help") || argv.includes("-h") || argv.length === 0) {
  console.log(`indexnow-ping.mjs — submit URLs to IndexNow

Usage:
  node scripts/indexnow-ping.mjs <url> [<url> ...]
  node scripts/indexnow-ping.mjs --all-sitemap

Flags:
  --all-sitemap     Fetch BASE_URL/sitemap-index, walk every sub-sitemap,
                    collect all <loc>s, and submit them in batches of ${BATCH_SIZE}.
  --dry-run         Resolve key, collect URLs, print summary — but don't POST.
  --help, -h        Show this help.

Env:
  BASE_URL          Origin to read sitemaps from and submit URLs for.
                    Default: https://kerblabs.com
  INDEXNOW_KEY      Override the key (otherwise resolved from /public/*.txt).
  INDEXNOW_HOST     Override host in the JSON body (default: BASE_URL's host).
  INDEXNOW_KEY_LOCATION
                    Override the public URL of the key file
                    (default: <BASE_URL>/<key>.txt).
`);
  process.exit(0);
}

const DRY_RUN = argv.includes("--dry-run");
const USE_SITEMAP = argv.includes("--all-sitemap");
const CLI_URLS = argv.filter((a) => !a.startsWith("--"));

// ---------- Key resolution ----------

function resolveKey() {
  if (process.env.INDEXNOW_KEY) {
    const k = process.env.INDEXNOW_KEY.trim();
    if (!/^[a-f0-9]{8,128}$/i.test(k)) {
      throw new Error(
        `INDEXNOW_KEY env var "${k}" is not a hex string of 8-128 chars`,
      );
    }
    return k;
  }
  let entries;
  try {
    entries = readdirSync(PUBLIC_DIR);
  } catch (err) {
    throw new Error(`Could not read ${PUBLIC_DIR}: ${err.message}`);
  }
  const candidates = entries.filter((f) => /^[a-f0-9]{32}\.txt$/i.test(f));
  if (candidates.length === 0) {
    throw new Error(
      `No IndexNow key file found in /public. Expected a file named like " <32-hex>.txt".`,
    );
  }
  // If there are multiple, prefer the one whose content matches its name.
  for (const file of candidates) {
    const expected = file.replace(/\.txt$/i, "").toLowerCase();
    const content = readFileSync(join(PUBLIC_DIR, file), "utf8")
      .replace(/^﻿/, "")
      .trim()
      .toLowerCase();
    if (content === expected) return expected;
  }
  // Fall back to the first candidate's name.
  return candidates[0].replace(/\.txt$/i, "").toLowerCase();
}

// ---------- Sitemap walking ----------

async function fetchText(url) {
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) {
    throw new Error(`GET ${url} -> ${res.status}`);
  }
  return res.text();
}

function extractLocs(xml) {
  // Cheap-and-correct enough — sitemaps are simple and we control them.
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
}

async function collectUrlsFromSitemapIndex(base) {
  // /sitemap-index is the canonical index on this site; /sitemap.xml is a
  // combined fallback. Prefer the index because it tells us about sub-sitemaps.
  let indexXml;
  try {
    indexXml = await fetchText(`${base}/sitemap-index`);
  } catch (err) {
    console.warn(
      `! /sitemap-index unreachable (${err.message}), falling back to /sitemap.xml`,
    );
    indexXml = await fetchText(`${base}/sitemap.xml`);
  }

  const locs = extractLocs(indexXml);
  if (locs.length === 0) {
    throw new Error(
      "sitemap index returned no <loc> entries — nothing to walk",
    );
  }

  // If the locs look like sub-sitemaps (contain "sitemap" in the path),
  // walk each. Otherwise treat them as terminal page URLs.
  const looksLikeIndex = locs.some((u) => /sitemap/i.test(new URL(u).pathname));
  const pageUrls = new Set();

  if (looksLikeIndex) {
    for (const subUrl of locs) {
      try {
        const subXml = await fetchText(subUrl);
        for (const loc of extractLocs(subXml)) pageUrls.add(loc);
      } catch (err) {
        console.warn(`! sub-sitemap ${subUrl} failed: ${err.message}`);
      }
    }
  } else {
    for (const loc of locs) pageUrls.add(loc);
  }

  return [...pageUrls];
}

// ---------- POST ----------

async function postBatch({ urls, key, host, keyLocation }) {
  const body = JSON.stringify({ host, key, keyLocation, urlList: urls });
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 30000);
  try {
    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
      },
      body,
      signal: controller.signal,
    });
    let detail = "";
    if (res.status >= 400) {
      try {
        detail = (await res.text()).slice(0, 500);
      } catch {
        // ignore
      }
    }
    return { status: res.status, detail };
  } finally {
    clearTimeout(timer);
  }
}

// ---------- Main ----------

async function main() {
  const key = resolveKey();
  const host = process.env.INDEXNOW_HOST || new URL(BASE_URL).hostname;
  const keyLocation =
    process.env.INDEXNOW_KEY_LOCATION || `${BASE_URL}/${key}.txt`;

  console.log(`IndexNow ping`);
  console.log(`  endpoint:    ${INDEXNOW_ENDPOINT}`);
  console.log(`  host:        ${host}`);
  console.log(`  key:         ${key}`);
  console.log(`  keyLocation: ${keyLocation}`);

  // Collect URLs.
  let urls = [];
  if (USE_SITEMAP) {
    console.log(`  mode:        --all-sitemap (walking ${BASE_URL}/sitemap-index)`);
    urls = await collectUrlsFromSitemapIndex(BASE_URL);
  } else {
    urls = CLI_URLS;
  }

  // Sanity filter — same host as keyLocation.
  const expectedHost = host.toLowerCase();
  const sameHost = (u) => {
    try {
      return new URL(u).hostname.toLowerCase() === expectedHost;
    } catch {
      return false;
    }
  };
  const filtered = urls.filter(sameHost);
  const dropped = urls.length - filtered.length;
  if (dropped > 0) {
    console.warn(
      `! dropped ${dropped} URL(s) that don't match host "${expectedHost}"`,
    );
  }

  if (filtered.length === 0) {
    console.error("✗ no URLs to submit — aborting");
    process.exit(1);
  }
  console.log(`  urls:        ${filtered.length}`);

  if (DRY_RUN) {
    console.log(`\n--dry-run set — not POSTing. First 5 URLs:`);
    for (const u of filtered.slice(0, 5)) console.log(`    ${u}`);
    process.exit(0);
  }

  // Batch and POST.
  let ok = 0;
  let fail = 0;
  for (let i = 0; i < filtered.length; i += BATCH_SIZE) {
    const batch = filtered.slice(i, i + BATCH_SIZE);
    const batchNo = Math.floor(i / BATCH_SIZE) + 1;
    try {
      const { status, detail } = await postBatch({
        urls: batch,
        key,
        host,
        keyLocation,
      });
      if (status === 200 || status === 202) {
        ok += batch.length;
        console.log(
          `  batch ${batchNo} (${batch.length} URLs) -> ${status} OK`,
        );
      } else {
        fail += batch.length;
        console.log(
          `  batch ${batchNo} (${batch.length} URLs) -> ${status} FAIL ${detail ? `(${detail})` : ""}`,
        );
      }
    } catch (err) {
      fail += batch.length;
      console.log(`  batch ${batchNo} threw: ${err.message}`);
    }
  }

  console.log(
    `\nSummary: ${ok} URL(s) submitted, ${fail} failed (of ${filtered.length} total)`,
  );
  process.exit(fail > 0 ? 1 : 0);
}

main().catch((err) => {
  console.error(`✗ ${err.message}`);
  process.exit(1);
});

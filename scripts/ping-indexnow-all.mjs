#!/usr/bin/env node
// ping-indexnow-all.mjs
//
// Pings IndexNow with every URL in the kerblabs.com sitemap.
//
// Workflow:
//   1. Locate the IndexNow key file in public/  (filename = key.txt)
//   2. Fetch /sitemap-index, parse <sitemap><loc>...</loc></sitemap>
//   3. For each sub-sitemap, fetch and parse <url><loc>...</loc></url>
//   4. POST batches of up to 10,000 URLs to https://api.indexnow.org/IndexNow
//
// Usage:
//   node scripts/ping-indexnow-all.mjs
//   BASE_URL=https://staging.kerblabs.com node scripts/ping-indexnow-all.mjs
//   node scripts/ping-indexnow-all.mjs --dry-run     (parse + print, no POST)
//
// No external dependencies. Node 18+ (uses global fetch).

import { readdirSync, readFileSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = resolve(__dirname, "..");
const PUBLIC_DIR = join(PROJECT_ROOT, "public");

const BASE_URL = (process.env.BASE_URL || "https://kerblabs.com").replace(/\/$/, "");
const HOST = new URL(BASE_URL).host;
const DRY_RUN = process.argv.includes("--dry-run");
const BATCH_SIZE = 10_000;
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/IndexNow";

function die(msg, code = 1) {
  console.error(`ERROR: ${msg}`);
  process.exit(code);
}

// ---------------------------------------------------------------------------
// 1. Locate the IndexNow key file (public/<32-hex>.txt)
// ---------------------------------------------------------------------------
function findKeyFile() {
  let entries;
  try {
    entries = readdirSync(PUBLIC_DIR);
  } catch (e) {
    die(`Could not read public/ directory at ${PUBLIC_DIR}: ${e.message}`);
  }
  const matches = entries.filter((f) => /^[0-9a-f]{32}\.txt$/i.test(f));
  if (matches.length === 0) {
    die(
      `No IndexNow key file found in public/. Expected one file named <32-hex>.txt ` +
        `(e.g. 40aa3c12977540d3bfc142d678f8c504.txt).`
    );
  }
  if (matches.length > 1) {
    die(
      `Multiple IndexNow key files found in public/: ${matches.join(", ")}. ` +
        `Keep exactly one.`
    );
  }
  const filename = matches[0];
  const key = filename.replace(/\.txt$/i, "");
  const onDisk = readFileSync(join(PUBLIC_DIR, filename), "utf8").trim();
  if (onDisk !== key) {
    die(
      `Key file ${filename} content (${onDisk}) does not match its filename (${key}). ` +
        `IndexNow requires the file body to be exactly the key.`
    );
  }
  const keyLocation = `${BASE_URL}/${filename}`;
  return { key, keyLocation, filename };
}

// ---------------------------------------------------------------------------
// 2. Fetch + parse sitemaps. No XML lib — a tiny regex-based extractor is
//    sufficient for our well-formed Next.js-generated sitemaps.
// ---------------------------------------------------------------------------
async function fetchText(url) {
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
  return res.text();
}

function extractLocs(xml) {
  const locs = [];
  const re = /<loc>\s*([^<\s][^<]*?)\s*<\/loc>/g;
  let m;
  while ((m = re.exec(xml)) !== null) {
    locs.push(m[1].trim());
  }
  return locs;
}

async function collectAllUrls() {
  const indexUrl = `${BASE_URL}/sitemap-index`;
  console.log(`Fetching sitemap index: ${indexUrl}`);
  const indexXml = await fetchText(indexUrl);

  const subSitemaps = extractLocs(indexXml);
  if (subSitemaps.length === 0) {
    // Fallback: treat /sitemap-index as a urlset itself (defensive)
    console.warn("  sitemap-index had no <sitemap> entries; treating as urlset.");
    return extractLocs(indexXml);
  }

  console.log(`  Found ${subSitemaps.length} sub-sitemap(s):`);
  for (const s of subSitemaps) console.log(`    - ${s}`);

  const all = new Set();
  for (const sub of subSitemaps) {
    try {
      const xml = await fetchText(sub);
      const urls = extractLocs(xml);
      console.log(`  ${sub} -> ${urls.length} URLs`);
      for (const u of urls) {
        // IndexNow requires every URL to share the registered host.
        try {
          if (new URL(u).host === HOST) all.add(u);
        } catch {
          // skip malformed
        }
      }
    } catch (e) {
      console.warn(`  WARN: failed to fetch ${sub}: ${e.message}`);
    }
  }
  return [...all];
}

// ---------------------------------------------------------------------------
// 3. POST batches to IndexNow.
//    Spec: https://www.indexnow.org/documentation
//    Success: 200 OK or 202 Accepted.
// ---------------------------------------------------------------------------
async function pingBatch(urls, key, keyLocation, batchIdx, totalBatches) {
  const body = {
    host: HOST,
    key,
    keyLocation,
    urlList: urls,
  };
  const label = `batch ${batchIdx + 1}/${totalBatches} (${urls.length} URLs)`;

  if (DRY_RUN) {
    console.log(`[dry-run] would POST ${label}`);
    return { ok: true, status: 0, label };
  }

  try {
    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });
    const ok = res.status === 200 || res.status === 202;
    const text = await res.text().catch(() => "");
    return {
      ok,
      status: res.status,
      label,
      detail: text ? text.slice(0, 200) : res.statusText,
    };
  } catch (e) {
    return { ok: false, status: 0, label, detail: e.message };
  }
}

// ---------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------
(async () => {
  console.log(`IndexNow full-sitemap ping for ${BASE_URL}${DRY_RUN ? " (DRY RUN)" : ""}`);
  console.log("");

  const { key, keyLocation, filename } = findKeyFile();
  console.log(`Key file: public/${filename}`);
  console.log(`Key location: ${keyLocation}`);
  console.log("");

  const urls = await collectAllUrls();
  console.log("");
  console.log(`Collected ${urls.length} unique URL(s) on host ${HOST}.`);
  if (urls.length === 0) {
    console.warn("Nothing to ping. Exiting 0.");
    process.exit(0);
  }

  const batches = [];
  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    batches.push(urls.slice(i, i + BATCH_SIZE));
  }
  console.log(`Submitting ${batches.length} batch(es) of up to ${BATCH_SIZE} URLs.`);
  console.log("");

  let okCount = 0;
  let failCount = 0;
  for (let i = 0; i < batches.length; i++) {
    const result = await pingBatch(batches[i], key, keyLocation, i, batches.length);
    if (result.ok) {
      okCount++;
      console.log(`  OK   ${result.label}  [HTTP ${result.status}]`);
    } else {
      failCount++;
      console.log(
        `  FAIL ${result.label}  [HTTP ${result.status}]  ${result.detail || ""}`
      );
    }
  }

  console.log("");
  console.log(`Done. ${okCount} ok, ${failCount} failed.`);
  process.exit(failCount === 0 ? 0 : 1);
})().catch((e) => {
  console.error(`Unhandled error: ${e.stack || e.message}`);
  process.exit(1);
});

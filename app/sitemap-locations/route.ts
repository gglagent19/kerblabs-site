// /sitemap-locations — XML sitemap for Tier 1 city pages AND industry-city
// combo pages. Tier 2/3 cities are intentionally omitted (those routes are
// noindexed in the page metadata).
//
// Tier 1 includes both UK cities and the US launch cities — Miami, New York
// City, Los Angeles, Chicago, Houston (slugs prefixed "us-"). UK combos pair
// with UK Tier 1 cities; US-only combos (med-spa-marketing today) pair with
// US Tier 1 cities only.
import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import {
  locations,
  comboIndustrySlugs,
  locationCountry,
  type ComboIndustrySlug,
} from "@/lib/seo-data";

export const dynamic = "force-static";
export const revalidate = false;

const BASE = "https://kerblabs.com";
const ROOT = process.cwd();
const BUILD_TIME = new Date();

// Mirror of US_ONLY_COMBOS in components/seo/ComboPage.tsx. If this set
// diverges, the combo page itself will 404 for the wrong country pairing,
// so the worst-case outcome is a 404 in the sitemap (still better than a
// noindexed 200).
const US_ONLY_COMBOS: ReadonlySet<string> = new Set(["med-spa-marketing"]);

function lastmodISO(candidates: string[]): string {
  let best: Date | null = null;
  for (const rel of candidates) {
    try {
      const m = fs.statSync(path.join(ROOT, rel)).mtime;
      if (!best || m > best) best = m;
    } catch {
      // file missing — skip
    }
  }
  return (best ?? BUILD_TIME).toISOString();
}

function xmlEscape(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function GET(): NextResponse {
  const tier1 = locations.filter((l) => l.tier === "tier1");

  // Plain /locations/[slug] pages (one per Tier 1 city).
  const cityUrls = tier1.map((l) => {
    const loc = `${BASE}/locations/${l.slug}`;
    const lastmod = lastmodISO([
      `lib/rich-content/cities/${l.slug}.ts`,
      "lib/seo-data.ts",
    ]);
    return `  <url>\n    <loc>${xmlEscape(loc)}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
  });

  // Combo /[combo-slug]/[city-slug] pages.
  const comboUrls: string[] = [];
  for (const combo of comboIndustrySlugs as readonly ComboIndustrySlug[]) {
    const isUsOnly = US_ONLY_COMBOS.has(combo);
    const eligible = tier1.filter((l) =>
      isUsOnly ? locationCountry(l) === "US" : locationCountry(l) === "GB"
    );
    for (const l of eligible) {
      const loc = `${BASE}/${combo}/${l.slug}`;
      const lastmod = lastmodISO([
        `lib/rich-content/combos/${combo}-${l.slug}.ts`,
        "lib/seo-data.ts",
      ]);
      comboUrls.push(
        `  <url>\n    <loc>${xmlEscape(loc)}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`
      );
    }
  }

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    [...cityUrls, ...comboUrls].join("\n") +
    `\n</urlset>\n`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

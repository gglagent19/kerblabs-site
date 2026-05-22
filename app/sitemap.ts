// Root /sitemap.xml — combined urlset of every canonical URL on the site.
//
// Why both this AND /sitemap-index?
//   Next.js's `app/sitemap.ts` metadata-route convention can only emit a
//   <urlset>, not a <sitemapindex>. The real sitemap-index lives at
//   /sitemap-index (see app/sitemap-index/route.ts), and that is the URL we
//   advertise in robots.txt. This file remains a working /sitemap.xml so any
//   crawler that probes the legacy path still gets a valid sitemap.
//
// Per-URL fields are intentionally limited to <loc> and <lastmod> only —
// Google has publicly stated it ignores <priority> and <changefreq>, and
// stripping them improves signal density and reduces noise.
import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";
import {
  services,
  industries,
  locations,
  comboIndustrySlugs,
  locationCountry,
  getIndustryByComboSlug,
  type ComboIndustrySlug,
} from "@/lib/seo-data";

const BASE = "https://kerblabs.com";
const ROOT = process.cwd();
const BUILD_TIME = new Date();

// US-only combo verticals — mirror of the set declared in
// components/seo/ComboPage.tsx. Kept local to avoid widening the import
// surface; if the set diverges, the static-params generator in ComboPage is
// the source of truth at build time and combo pages will still resolve.
const US_ONLY_COMBOS: ReadonlySet<string> = new Set(["med-spa-marketing"]);

// statMtime — return mtime for a backing source file, or null if missing.
// We use this so each URL's <lastmod> reflects when its real content last
// changed, rather than a synthetic single date for the whole site.
function statMtime(relPath: string): Date | null {
  try {
    return fs.statSync(path.join(ROOT, relPath)).mtime;
  } catch {
    return null;
  }
}

// lastmodFor — pick the freshest mtime from a list of candidate files, falling
// back to build time if none exist. Build time is the right fallback for pages
// that are pure-generated from in-memory data.
function lastmodFor(candidates: string[]): Date {
  let best: Date | null = null;
  for (const rel of candidates) {
    const m = statMtime(rel);
    if (m && (!best || m > best)) best = m;
  }
  return best ?? BUILD_TIME;
}

// Backing file map: industry hub pages have a 1:1 rich-content TS module.
// Slugs that aren't in the map (rare; only those without rich content) fall
// back to seo-data.ts mtime.
function industryRichPath(slug: string): string {
  return `lib/rich-content/industries/${slug}.ts`;
}

function cityRichPath(slug: string): string {
  return `lib/rich-content/cities/${slug}.ts`;
}

function comboRichPath(combo: string, city: string): string {
  return `lib/rich-content/combos/${combo}-${city}.ts`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const seoDataPath = "lib/seo-data.ts";

  // ── Pages section (homepage, services hub, industries hub, about, locations hub)
  const homePagePath = "app/page.tsx";
  const aboutPagePath = "app/about/page.tsx";
  const servicesHubPath = "app/services/page.tsx";
  const locationsHubPath = "app/locations/page.tsx";

  const pages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: lastmodFor([homePagePath, seoDataPath]) },
    { url: `${BASE}/about`, lastModified: lastmodFor([aboutPagePath]) },
    { url: `${BASE}/services`, lastModified: lastmodFor([servicesHubPath, seoDataPath]) },
    { url: `${BASE}/locations`, lastModified: lastmodFor([locationsHubPath, seoDataPath]) },
  ];

  // ── Services
  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    // Service detail copy lives entirely in seo-data.ts.
    lastModified: lastmodFor([seoDataPath]),
  }));

  // ── Industries
  const industryPages: MetadataRoute.Sitemap = industries.map((i) => ({
    url: `${BASE}/industries/${i.slug}`,
    // Prefer rich-content mtime, fall back to seo-data.ts mtime.
    lastModified: lastmodFor([industryRichPath(i.slug), seoDataPath]),
  }));

  // ── Locations — Tier 1 only (Tier 2/3 pages are noindex).
  // Tier 1 includes both UK cities and the US launch cities (us-miami,
  // us-new-york-city, us-los-angeles, us-chicago, us-houston).
  const tier1Locations = locations.filter((l) => l.tier === "tier1");

  const locationPages: MetadataRoute.Sitemap = tier1Locations.map((l) => ({
    url: `${BASE}/locations/${l.slug}`,
    lastModified: lastmodFor([cityRichPath(l.slug), seoDataPath]),
  }));

  // ── Combo pages (industry × city). Each combo vertical is either UK-only
  // or US-only; med-spa-marketing is the only US-only combo today and pairs
  // exclusively with the 5 US Tier 1 cities.
  const comboPages: MetadataRoute.Sitemap = (
    comboIndustrySlugs as readonly ComboIndustrySlug[]
  ).flatMap((combo) => {
    const isUsOnly = US_ONLY_COMBOS.has(combo);
    return tier1Locations
      .filter((l) =>
        isUsOnly ? locationCountry(l) === "US" : locationCountry(l) === "GB"
      )
      .map((l) => {
        // Combo industry is resolved purely so we never list a combo whose
        // backing industry slug has been removed.
        try {
          getIndustryByComboSlug(combo);
        } catch {
          return null;
        }
        return {
          url: `${BASE}/${combo}/${l.slug}`,
          lastModified: lastmodFor([comboRichPath(combo, l.slug), seoDataPath]),
        };
      })
      .filter((x): x is { url: string; lastModified: Date } => x !== null);
  });

  return [...pages, ...servicePages, ...industryPages, ...locationPages, ...comboPages];
}

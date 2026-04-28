import type { MetadataRoute } from "next";
import {
  services,
  industries,
  locations,
  comboIndustrySlugs,
} from "@/lib/seo-data";

const BASE = "https://kerblabs.com";

// Date stamps. For now we have one ship date per content tier — updated when
// content is rewritten. This avoids the synthetic "all URLs same timestamp"
// issue that hurts crawl signal quality.
const TIER1_LASTMOD = new Date("2026-04-28T00:00:00Z");
const TIER2_LASTMOD = new Date("2026-04-28T00:00:00Z");
const TIER3_LASTMOD = new Date("2026-04-28T00:00:00Z");
const CORE_LASTMOD = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  // Core indexable pages (homepage, services, industries, about, locations hub)
  const core: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: CORE_LASTMOD, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/services`, lastModified: CORE_LASTMOD, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/about`, lastModified: CORE_LASTMOD, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/locations`, lastModified: CORE_LASTMOD, changeFrequency: "monthly", priority: 0.8 },
  ];

  // Service pages (all indexable)
  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: CORE_LASTMOD,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // Industry pages (all indexable)
  const industryPages: MetadataRoute.Sitemap = industries.map((i) => ({
    url: `${BASE}/industries/${i.slug}`,
    lastModified: CORE_LASTMOD,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // Location pages — ONLY Tier 1 in sitemap (Tier 2/3 are noindexed)
  const tier1Locations: MetadataRoute.Sitemap = locations
    .filter((l) => l.tier === "tier1")
    .map((l) => ({
      url: `${BASE}/locations/${l.slug}`,
      lastModified: TIER1_LASTMOD,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  // Combo pages — ONLY Tier 1 city combos (4 industries × 25 cities = 100 pages)
  const tier1Combos: MetadataRoute.Sitemap = comboIndustrySlugs.flatMap((c) =>
    locations
      .filter((l) => l.tier === "tier1")
      .map((l) => ({
        url: `${BASE}/${c}/${l.slug}`,
        lastModified: TIER1_LASTMOD,
        changeFrequency: "monthly",
        priority: 0.8,
      }))
  );

  return [
    ...core,
    ...servicePages,
    ...industryPages,
    ...tier1Locations,
    ...tier1Combos,
  ];
}

import type { MetadataRoute } from "next";
import {
  services,
  industries,
  locations,
  comboIndustrySlugs,
} from "@/lib/seo-data";

const BASE = "https://kerblabs.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Core pages
  const core: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/locations`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // Industry pages
  const industryPages: MetadataRoute.Sitemap = industries.map((i) => ({
    url: `${BASE}/industries/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // Location pages — Tier 1 highest, Tier 2 medium, Tier 3 lower
  const locationPages: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${BASE}/locations/${l.slug}`,
    lastModified: now,
    changeFrequency:
      l.tier === "tier1" ? "monthly" : l.tier === "tier2" ? "monthly" : "yearly",
    priority: l.tier === "tier1" ? 0.8 : l.tier === "tier2" ? 0.7 : 0.5,
  }));

  // Combo pages: 4 industries × all locations
  const comboPages: MetadataRoute.Sitemap = comboIndustrySlugs.flatMap((c) =>
    locations.map((l) => ({
      url: `${BASE}/${c}/${l.slug}`,
      lastModified: now,
      changeFrequency:
        l.tier === "tier1" ? "monthly" : "yearly" as const,
      priority: l.tier === "tier1" ? 0.8 : l.tier === "tier2" ? 0.65 : 0.5,
    }))
  );

  return [...core, ...servicePages, ...industryPages, ...locationPages, ...comboPages];
}

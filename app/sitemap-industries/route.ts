// /sitemap-industries — XML sitemap for /industries/[slug] hub pages.
// Industries with rich content backing (lib/rich-content/industries/<slug>.ts)
// use that file's mtime; others fall back to lib/seo-data.ts.
import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { industries } from "@/lib/seo-data";

export const dynamic = "force-static";
export const revalidate = false;

const BASE = "https://kerblabs.com";
const ROOT = process.cwd();
const BUILD_TIME = new Date();

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
  const urls = industries
    .map((i) => {
      const loc = `${BASE}/industries/${i.slug}`;
      const lastmod = lastmodISO([
        `lib/rich-content/industries/${i.slug}.ts`,
        "lib/seo-data.ts",
      ]);
      return `  <url>\n    <loc>${xmlEscape(loc)}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

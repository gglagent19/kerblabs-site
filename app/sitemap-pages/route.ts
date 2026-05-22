// /sitemap-pages — XML sitemap for static "pages" (homepage, hubs, about).
// Listed in the sitemap-index at /sitemap-index. Per-URL fields are
// <loc> and <lastmod> only (Google ignores <priority> and <changefreq>).
import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";

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

interface Entry {
  loc: string;
  lastmod: string;
}

function renderUrlset(entries: Entry[]): string {
  const body = entries
    .map(
      (e) =>
        `  <url>\n    <loc>${xmlEscape(e.loc)}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n  </url>`
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

export function GET(): NextResponse {
  const entries: Entry[] = [
    { loc: `${BASE}/`, lastmod: lastmodISO(["app/page.tsx", "lib/seo-data.ts"]) },
    { loc: `${BASE}/about`, lastmod: lastmodISO(["app/about/page.tsx"]) },
    { loc: `${BASE}/services`, lastmod: lastmodISO(["app/services/page.tsx", "lib/seo-data.ts"]) },
    { loc: `${BASE}/locations`, lastmod: lastmodISO(["app/locations/page.tsx", "lib/seo-data.ts"]) },
  ];

  return new NextResponse(renderUrlset(entries), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

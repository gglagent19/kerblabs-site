// /sitemap-index — the real <sitemapindex> XML referenced by robots.txt.
//
// Next.js's `app/sitemap.ts` metadata convention can only emit a <urlset>
// (see node_modules/next/dist/build/webpack/loaders/metadata/resolve-route-data.js
// resolveSitemap, which always wraps output in <urlset>). To split the
// sitemap by section we therefore expose this Route Handler that emits a
// proper <sitemapindex>, and host each section under its own /sitemap-*
// route.
import { NextResponse } from "next/server";

export const dynamic = "force-static";
export const revalidate = false;

const BASE = "https://kerblabs.com";

// Sub-sitemaps in declaration order. The order is not significant to
// crawlers, but it makes diffs and audits easier to read.
const SUBSITEMAPS = [
  "/sitemap-pages",
  "/sitemap-services",
  "/sitemap-industries",
  "/sitemap-locations",
];

function xmlEscape(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function GET(): NextResponse {
  // <lastmod> on the index uses build time — Google treats this as a hint
  // to re-crawl the sub-sitemaps; per-URL <lastmod> in each sub-sitemap is
  // what actually drives prioritisation.
  const lastmod = new Date().toISOString();

  const body = SUBSITEMAPS.map(
    (p) =>
      `  <sitemap>\n    <loc>${xmlEscape(BASE + p)}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </sitemap>`
  ).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</sitemapindex>\n`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

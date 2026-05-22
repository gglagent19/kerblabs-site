# SEO Notes — Sitemap split

## What this branch changes

The site previously shipped a single `/sitemap.xml` with `<priority>` and
`<changefreq>` on every URL and a synthetic single `lastmod` per content
tier. That has been replaced with a proper split-sitemap setup:

| URL | Format | Contents |
| --- | --- | --- |
| `/sitemap-index` | `<sitemapindex>` | Index referencing the 4 sub-sitemaps below |
| `/sitemap-pages` | `<urlset>` | Homepage, `/about`, `/services` hub, `/locations` hub |
| `/sitemap-services` | `<urlset>` | All `/services/[slug]` detail pages |
| `/sitemap-industries` | `<urlset>` | All `/industries/[slug]` hub pages |
| `/sitemap-locations` | `<urlset>` | Tier 1 city pages + every UK & US industry × city combo |
| `/sitemap.xml` | `<urlset>` | Combined fallback — all canonical URLs in one file (legacy crawlers) |

Per-URL fields are now **`<loc>` + `<lastmod>` only**. `<priority>` and
`<changefreq>` were dropped because Google has publicly confirmed it ignores
them, and stripping them reduces sitemap noise.

`<lastmod>` is derived from `fs.statSync(...).mtime` of the file backing
each page (e.g. `lib/rich-content/cities/<slug>.ts` for a city page, or
`lib/seo-data.ts` for a service page whose copy lives there). Pages with no
backing file fall back to build time.

## US expansion

`lib/seo-data.ts` adds 5 US Tier 1 cities (slugs prefixed `us-`):

- `us-miami`, `us-new-york-city`, `us-los-angeles`, `us-chicago`, `us-houston`

The `med-spa-marketing` combo vertical is US-only and is paired exclusively
with the 5 US cities in `/sitemap-locations`. All other combo verticals are
UK-only and pair with UK Tier 1 cities only — this mirrors the
`US_ONLY_COMBOS` set in `components/seo/ComboPage.tsx`.

## robots.txt

`public/robots.txt` now exists as a static file and advertises
`Sitemap: https://kerblabs.com/sitemap-index`.

> **IMPORTANT — `app/robots.ts` still takes precedence at runtime.** Next.js
> 15 registers `app/robots.ts` as a metadata route and serves it at
> `/robots.txt`, shadowing the static `public/robots.txt`. The verified
> build output (`.next/server/app/robots.txt.body`) is the content from
> `app/robots.ts`, which still references `Sitemap:
> https://kerblabs.com/sitemap.xml`.
>
> `/sitemap.xml` is a valid combined sitemap on this branch (it lists every
> canonical URL), so the live `/robots.txt` continues to point at a
> working sitemap. The static `public/robots.txt` is in place for the
> moment a follow-up branch removes `app/robots.ts` — at that point the
> static file becomes the served response and the `/sitemap-index` URL
> takes over.
>
> This branch deliberately did not touch `app/robots.ts` (out of scope).

## Why `/sitemap-index` instead of `/sitemap.xml` for the index?

Next.js's `app/sitemap.ts` metadata-route convention emits `<urlset>` and
cannot emit `<sitemapindex>` (see
`node_modules/next/dist/build/webpack/loaders/metadata/resolve-route-data.js`,
`resolveSitemap()` — it hard-codes the `<urlset>` wrapper). To expose a
real `<sitemapindex>`, we need a plain Route Handler, hosted under a
distinct path. `/sitemap-index` is the path advertised in robots.txt and
the one to submit in Google Search Console.

`/sitemap.xml` remains live (Next.js metadata route) as a combined
fallback. It contains the same URLs the sub-sitemaps cover, so any crawler
that probes the conventional path still gets a complete index.

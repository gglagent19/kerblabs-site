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

## IndexNow protocol

This branch wires up [IndexNow](https://www.indexnow.org) so we can notify
Bing/Yandex/Naver/Seznam/Yep (and via shared submission, everyone who
subscribes to the IndexNow feed) the instant a URL is created, updated, or
deleted, instead of waiting for the next crawl.

### Pieces

| File | Purpose |
| --- | --- |
| `public/e6cf3962fe127d9968f3310d2341baff.txt` | The IndexNow key file. Next.js serves `public/` at the site root, so this lives at `https://kerblabs.com/e6cf3962fe127d9968f3310d2341baff.txt`. The file body is the same 32-char hex string — that's how IndexNow verifies we own the host. |
| `lib/indexnow.ts` | Exports `pingIndexNow(urls)` — a small `fetch`-based helper for in-process use (route handlers, webhooks, ISR revalidation hooks, anywhere we already know a URL just changed). |
| `scripts/indexnow-ping.mjs` | Stand-alone Node 18+ script for CLI / CI / cron use. Auto-discovers the key from `public/*.txt`. |

> Note: an earlier branch added a second key file
> (`public/40aa3c12977540d3bfc142d678f8c504.txt`) for a separate verification.
> Both files can coexist — IndexNow only cares that the key in the POST
> body matches the file at `keyLocation`. The script in this branch
> resolves the key by hex-filename pattern and prefers the file whose
> content matches its own name.

### Common invocations

```bash
# ping a few specific URLs (e.g. right after publishing a case study)
node scripts/indexnow-ping.mjs \
  https://kerblabs.com/case-studies/youmesushi \
  https://kerblabs.com/case-studies

# resubmit everything in the sitemap — useful after a big content push
node scripts/indexnow-ping.mjs --all-sitemap

# dry run — show what would happen
node scripts/indexnow-ping.mjs --all-sitemap --dry-run

# point at staging
BASE_URL=https://staging.kerblabs.com node scripts/indexnow-ping.mjs --all-sitemap
```

`--all-sitemap` fetches `/sitemap-index`, walks every sub-sitemap, dedupes,
and POSTs in batches of 10,000 (the IndexNow protocol cap).

### Programmatic use

```ts
import { pingIndexNow } from "@/lib/indexnow";

// after a CMS update / ISR revalidation
const result = await pingIndexNow([
  "https://kerblabs.com/services/web-design",
]);
if (!result.ok) {
  console.warn("IndexNow ping failed:", result.status, result.error);
}
```

### Env overrides

| Env | Default | Notes |
| --- | --- | --- |
| `INDEXNOW_KEY` | `e6cf3962fe127d9968f3310d2341baff` | Override the key. Must match `public/<KEY>.txt`. |
| `INDEXNOW_HOST` | `kerblabs.com` | Bare host (no scheme). |
| `INDEXNOW_KEY_LOCATION` | `https://<host>/<key>.txt` | Public URL of the key file. |
| `BASE_URL` (script only) | `https://kerblabs.com` | Origin to read sitemaps from. |

### Post-deploy verification

Once the branch ships, confirm the key file is reachable:

```bash
curl -i https://kerblabs.com/e6cf3962fe127d9968f3310d2341baff.txt
# expect HTTP 200 with body: e6cf3962fe127d9968f3310d2341baff
```

Then run a real ping and watch for `200`/`202`:

```bash
node scripts/indexnow-ping.mjs https://kerblabs.com/
```

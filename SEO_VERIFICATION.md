# SEO Verification — Post-Deploy Checklist

This document covers what shipped in the unified SEO PR (8 parallel branches
merged into `seo-fixes-and-us-expansion`) and how to confirm every fix is live
on production at https://kerblabs.com after Vercel deploys.

---

## 1. What was deployed

High level, by branch:

| Branch | Change |
| --- | --- |
| `seo/industries-hub-and-llms` | New `/industries` hub page listing every vertical, plus `/llms.txt` for AI crawler discovery. |
| `seo/sitemap-split` | Split monolithic sitemap into an index (`/sitemap.xml`) with sub-sitemaps per content type (services, industries, locations, case-studies, blog). `robots.txt` updated to point at the index. |
| `seo/case-studies` | `/case-studies` index expanded from stub to real listing; individual `/case-studies/[slug]` pages added with results, schema, internal links. |
| `seo/about-founder` | `/about` rewritten to name founder Chandra Alladi (E-E-A-T signal), with Person + Organization schema. |
| `seo/lazy-calendly` | Calendly `widget.js` removed from initial HTML; loaded only on user intent (click placeholder button). LCP/TBT win. |
| `seo/us-med-spa-combos` | New US med-spa city pages, e.g. `/med-spa-marketing/miami` with neighborhood-level content (Brickell, Wynwood, etc.). |
| `seo/comparison-pages` | "X vs Y" / "alternatives to X" programmatic comparison pages for high-intent SERPs. |
| `seo/verification-script` | This script + checklist (no user-facing change). |

Cross-cutting:

- Hreflang `en-GB` (and `en-US` where US-specific pages exist) added to `<head>`.
- Organization JSON-LD anchored with `"@id":"https://kerblabs.com/#organization"`
  so other schema (Article, Person, Service) can reference it via `@id` and
  Google can build a single knowledge-graph node.

---

## 2. Manual checks Chandu must do

These are NOT covered by the script — they need a human or admin console:

1. **Vercel TLS for `www.kerblabs.com`** — Add the `www` domain in the Vercel
   project settings so it serves a valid cert. Until done, the script reports
   the TLS check as `SKIP` (cert error is expected).
2. **Photo upload for `/about`** — Replace the placeholder headshot with a real
   photo of Chandra. The script only checks the name is present, not the image.
3. **Google Search Console** — Resubmit the new `/sitemap.xml` index and the
   sub-sitemaps. Watch the Coverage report for 24–72 hrs to confirm Google
   picked up the new pages (`/industries`, case studies, US med-spa cities).
4. **Bing Webmaster Tools** — Same sitemap resubmission.
5. **Calendly booking flow** — Click the booking button on the homepage once
   in production and confirm the widget actually loads on demand (lazy-load
   correctness, not just absence of inline script).
6. **Schema validator** — Paste the homepage URL into
   https://validator.schema.org and confirm 0 errors.
7. **Lighthouse / PSI run** — Run https://pagespeed.web.dev/ against `/` and
   confirm LCP < 2.5s on mobile (the Calendly lazy-load should help).
8. **`/llms.txt` content review** — Read it once and confirm it accurately
   represents Kerblabs' services and target verticals (the script checks
   structure, not editorial quality).

---

## 3. How to run the verification script

No dependencies to install — uses Node 18+ built-in `fetch`.

```bash
# Against production (default)
node scripts/verify-seo.mjs

# Against a local dev server
BASE_URL=http://localhost:3000 node scripts/verify-seo.mjs

# Against a Vercel preview deployment
BASE_URL=https://kerblabs-site-git-seo-fixes-and-us-expansion-kerblabs.vercel.app \
  node scripts/verify-seo.mjs

# See help
node scripts/verify-seo.mjs --help
```

Exit codes:

- `0` — every check passed (skips are allowed)
- `1` — at least one check failed

---

## 4. Expected results

When the deploy is healthy, the script should print:

| # | Check | Expected |
| --- | --- | --- |
| 1 | TLS `www.kerblabs.com` | `PASS` once Vercel www domain configured, otherwise `SKIP` |
| 2 | `/industries` hub | `PASS` — 200, body mentions dental + one more industry |
| 3 | `/llms.txt` | `PASS` — 200, `text/*`, >500 chars, ≥5 URLs, "Kerblabs" |
| 4 | `/sitemap.xml` index | `PASS` — XML sitemapindex with sub-sitemaps all 200 |
| 5 | `/case-studies` index | `PASS` — 200, body >2000 chars |
| 6 | `/case-studies/[slug]` | `PASS` — at least one slug returns 200 |
| 7 | `/about` page | `PASS` — 200, contains "Chandra Alladi" |
| 8 | Hreflang `en-GB` | `PASS` — tag present in HTML |
| 9 | Calendly lazy-loaded | `PASS` — no inline `calendly.com/widget.js` script tag |
| 10 | `/med-spa-marketing/miami` | `PASS` — 200, contains "Brickell" or "Wynwood" |
| 11 | `robots.txt` sitemap | `PASS` — `Sitemap:` line points to `/sitemap.xml` |
| 12 | Organization JSON-LD `@id` | `PASS` — `"@id":"https://kerblabs.com/#organization"` |

Target: **12 passed, 0 failed, 0–1 skipped.**

---

## 5. What to do if a check fails

Decide between hotfix and rollback based on which check failed:

| Failing check | Severity | Action |
| --- | --- | --- |
| 1 (TLS www) | Low | Manual Vercel config — no rollback needed. |
| 2 (`/industries`) | High | Hotfix branch off `master`. Page is linked from sitemap; 404 is worse than rollback. |
| 3 (`/llms.txt`) | Medium | Hotfix — file should be in `public/`. Cheap fix. |
| 4 (sitemap) | High | Rollback. A broken sitemap is fed to Google and can deindex pages. |
| 5–6 (case studies) | Medium | Hotfix — if the index page is back to a stub or a slug 500s, revert just that branch's merge. |
| 7 (`/about`) | Low | Hotfix — content-only fix, no risk. |
| 8 (hreflang) | Medium | Hotfix the layout/head component. |
| 9 (Calendly inline) | Medium | Hotfix — confirms the lazy-load regression. Performance, not correctness. |
| 10 (Miami page) | Low | Hotfix the page template / data file. |
| 11 (robots.txt) | High | Hotfix immediately — robots misconfiguration can block crawl. |
| 12 (schema `@id`) | Medium | Hotfix the JSON-LD generator. |

**Rollback procedure (if needed):**

```bash
# On master, revert the merge commit of the unified PR
git revert -m 1 <merge-commit-sha>
git push origin master
# Vercel will redeploy the previous good build automatically.
```

**Hotfix procedure:**

```bash
git checkout master
git pull
git checkout -b seo/hotfix-<short-desc>
# ...fix...
git commit -am "fix(seo): ..."
git push -u origin seo/hotfix-<short-desc>
gh pr create --fill
# After merge, re-run: node scripts/verify-seo.mjs
```

Re-run `node scripts/verify-seo.mjs` after any hotfix or rollback completes
deploying. The script is safe to run as many times as needed — it's read-only.

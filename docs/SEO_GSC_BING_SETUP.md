# GSC + Bing Webmaster + IndexNow setup

One-time setup so kerblabs.com shows up correctly in Google Search
Console (GSC), Bing Webmaster Tools, and the IndexNow API. After this is
done, the ongoing work is just running
`scripts/ping-indexnow-all.mjs` after major content changes and
glancing at the GSC dashboard weekly.

---

## 1. Google Search Console

### Verify the property

1. Sign in at https://search.google.com/search-console with the
   workspace email that owns kerblabs.com analytics.
2. Click **Add property** -> choose **Domain** (not URL prefix). This
   covers `https://`, `http://`, `www`, and bare-domain in one go.
3. Enter `kerblabs.com`.
4. GSC prints a DNS TXT record like
   `google-site-verification=AbCdEf...`. Add this as a TXT record on
   the root of the domain in the DNS provider (Cloudflare / GoDaddy /
   whoever owns the zone).
5. Wait 5-15 min, click **Verify**.

If DNS access is unavailable, fall back to URL-prefix verification with
the HTML meta tag — `app/layout.tsx` already has a slot for
`google-site-verification` in the `<head>` (look for
`verification.google` in the metadata export).

### Submit the sitemap

1. Left nav -> **Sitemaps**.
2. In the "Add a new sitemap" box, paste exactly: `sitemap-index`
   (GSC prepends the domain).
3. Click **Submit**. Status should flip to "Success" within an hour.

### What to watch (weekly)

- **Performance -> Search results**: impressions, clicks, average
  position. Filter to **Country: United Kingdom** for the core market.
- **Indexing -> Pages**: any URL in "Not indexed" with reason "Crawled
  - currently not indexed" is the most common warning sign — usually
  thin content or duplicate.
- **Sitemaps**: each sub-sitemap (`sitemap-pages`, `sitemap-services`,
  `sitemap-industries`, `sitemap-locations`) should show a URL count
  matching local build output.

---

## 2. Bing Webmaster Tools

### Fast path: import from GSC

1. Sign in at https://www.bing.com/webmasters with a Microsoft account.
2. Top-right -> **Import from GSC**. Authorise the OAuth prompt.
3. Tick `kerblabs.com`, click **Import**. Bing reuses the GSC
   verification, no DNS work needed.

### Manual path (if GSC import fails)

1. **Add site** -> enter `https://kerblabs.com`.
2. Choose **DNS verification**, add the TXT record Bing provides.
3. Wait for propagation, click **Verify**.

### Submit the sitemap

1. Left nav -> **Sitemaps**.
2. Click **Submit sitemap**.
3. Paste full URL: `https://kerblabs.com/sitemap-index`.
4. Submit. Bing shows "Processed" within ~6 hours.

### What to watch

- **Search performance**: Bing impressions are roughly 5-10% of Google
  in the UK but disproportionately matter because **ChatGPT web search
  uses Bing under the hood**. Bing rankings -> AI Overview odds.
- **Backlinks**: Bing surfaces inbound links earlier and more
  completely than GSC. Useful for tracking the brand-seeding work in
  `SEO_BRAND_SEEDING.md`.

---

## 3. IndexNow

IndexNow is the push-based protocol Bing/Yandex/Seznam/Naver
co-published in 2021. Telling them about a URL change is a single HTTP
POST. Google does not participate but ChatGPT/Perplexity benefit
indirectly via Bing.

### Key file

The key file is already at
`public/40aa3c12977540d3bfc142d678f8c504.txt` (deployed by P9). The
filename is the key; the file's body is the same key. Both must match
or the IndexNow API rejects the ping.

Verify in production:

```
curl -fsS https://kerblabs.com/40aa3c12977540d3bfc142d678f8c504.txt
# should print:  40aa3c12977540d3bfc142d678f8c504
```

### When to ping

Run after any of the following:

- New page deployed (e.g. a new industry landing or location page)
- Substantive content change to an existing page (FAQ update, price
  change, hero rewrite)
- Sitemap regenerated (which happens on every build)

```
node scripts/ping-indexnow-all.mjs
```

For a single URL (targeted) use P9's companion script:

```
node scripts/indexnow-ping.mjs https://kerblabs.com/med-spa-marketing
```

### Quotas

IndexNow has no published quota, but real-world: do not ping the same
URL more than ~10 times/day. The "full sitemap" script is safe to run
once per deployment.

---

## 4. Periodic verification

Run the post-deploy SEO smoke tests:

```
node scripts/verify-seo.mjs
```

This confirms sitemap accessibility, robots.txt rules, canonical tags,
and hreflang — all the pieces GSC/Bing depend on. Run it after any
infrastructure change.

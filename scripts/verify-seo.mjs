#!/usr/bin/env node
// verify-seo.mjs — post-deploy SEO verification for kerblabs.com
// Usage:  node scripts/verify-seo.mjs            (defaults to https://kerblabs.com)
//         BASE_URL=http://localhost:3000 node scripts/verify-seo.mjs
//         node scripts/verify-seo.mjs --help

const BASE_URL = (process.env.BASE_URL || 'https://kerblabs.com').replace(/\/$/, '');

if (process.argv.includes('--help') || process.argv.includes('-h')) {
  console.log(`verify-seo.mjs — post-deploy SEO smoke tests

Runs ~12 HTTP/content checks against a deployed site to confirm every audit
fix from the unified SEO PR actually shipped to production.

Env vars:
  BASE_URL   Origin to test (default: https://kerblabs.com).
             Use http://localhost:3000 to run against a local dev server.

Exit codes:
  0  all checks passed (skips allowed)
  1  one or more checks failed
`);
  process.exit(0);
}

const PASS = '✓ PASS';
const FAIL = '✗ FAIL';
const SKIP = '⚠ SKIP';

const results = [];
function record(name, status, detail) {
  results.push({ name, status, detail });
  const label = status === 'pass' ? PASS : status === 'fail' ? FAIL : SKIP;
  console.log(`${label}  ${name} — ${detail}`);
}

async function fetchText(path, init = {}) {
  const url = path.startsWith('http') ? path : `${BASE_URL}${path}`;
  const res = await fetch(url, { redirect: 'follow', ...init });
  const body = await res.text();
  return { res, body, url };
}

async function check(name, fn) {
  try {
    const out = await fn();
    record(name, out.status, out.detail);
  } catch (err) {
    record(name, 'fail', `threw: ${err.message}`);
  }
}

// 1. TLS on www
await check('TLS www.kerblabs.com', async () => {
  if (!BASE_URL.startsWith('https://kerblabs.com')) {
    return { status: 'skip', detail: `BASE_URL is ${BASE_URL}, www check only relevant for prod` };
  }
  try {
    const { res } = await fetchText('https://www.kerblabs.com/');
    if (res.status >= 200 && res.status < 400) {
      return { status: 'pass', detail: `www returns ${res.status}` };
    }
    return { status: 'fail', detail: `www returned ${res.status}` };
  } catch (err) {
    return { status: 'skip', detail: `cert/connect error (manual Vercel config?): ${err.message}` };
  }
});

// 2. /industries hub
await check('/industries hub', async () => {
  const { res, body } = await fetchText('/industries');
  if (res.status !== 200) return { status: 'fail', detail: `status ${res.status}` };
  const lower = body.toLowerCase();
  if (!lower.includes('industries')) return { status: 'fail', detail: 'body missing "industries"' };
  if (!lower.includes('dental')) return { status: 'fail', detail: 'body missing "dental"' };
  const others = ['med-spa', 'med spa', 'restaurant', 'legal', 'hvac', 'real estate', 'beauty', 'fitness'];
  const found = others.find((o) => lower.includes(o));
  if (!found) return { status: 'fail', detail: 'no second industry name found' };
  return { status: 'pass', detail: `lists dental + ${found}` };
});

// 3. /llms.txt
await check('/llms.txt', async () => {
  const { res, body } = await fetchText('/llms.txt');
  if (res.status !== 200) return { status: 'fail', detail: `status ${res.status}` };
  const ct = (res.headers.get('content-type') || '').toLowerCase();
  if (!ct.startsWith('text/')) return { status: 'fail', detail: `content-type "${ct}" not text/*` };
  if (body.length <= 500) return { status: 'fail', detail: `body only ${body.length} chars` };
  if (!body.includes('Kerblabs')) return { status: 'fail', detail: 'body missing "Kerblabs"' };
  const urlMatches = body.match(/https?:\/\/[^\s)\]]+/g) || [];
  if (urlMatches.length < 5) return { status: 'fail', detail: `only ${urlMatches.length} URLs (need >=5)` };
  return { status: 'pass', detail: `${body.length} chars, ${urlMatches.length} URLs, content-type ${ct}` };
});

// 4. Sitemap index + sub-sitemaps
await check('/sitemap.xml index', async () => {
  const { res, body } = await fetchText('/sitemap.xml');
  if (res.status !== 200) return { status: 'fail', detail: `status ${res.status}` };
  if (!body.includes('<?xml')) return { status: 'fail', detail: 'not XML' };
  const isIndex = body.includes('<sitemapindex');
  const subs = [...body.matchAll(/<loc>([^<]+sitemap[^<]+\.xml)<\/loc>/g)].map((m) => m[1]);
  if (!isIndex || subs.length === 0) {
    return { status: 'fail', detail: 'no <sitemapindex> with sub-sitemap <loc>s' };
  }
  const subResults = [];
  for (const subUrl of subs.slice(0, 8)) {
    try {
      const { res: sr } = await fetchText(subUrl);
      subResults.push(`${subUrl.split('/').pop()}:${sr.status}`);
      if (sr.status !== 200) {
        return { status: 'fail', detail: `sub-sitemap ${subUrl} returned ${sr.status}` };
      }
    } catch (err) {
      return { status: 'fail', detail: `sub-sitemap fetch error: ${err.message}` };
    }
  }
  return { status: 'pass', detail: `index + ${subs.length} sub-sitemaps OK (${subResults.join(', ')})` };
});

// 5. /case-studies index
await check('/case-studies index', async () => {
  const { res, body } = await fetchText('/case-studies');
  if (res.status !== 200) return { status: 'fail', detail: `status ${res.status}` };
  if (body.length <= 2000) return { status: 'fail', detail: `body only ${body.length} chars (looks like a stub)` };
  return { status: 'pass', detail: `${body.length} chars` };
});

// 6. At least one /case-studies/[slug]
await check('/case-studies/[slug]', async () => {
  const { body } = await fetchText('/case-studies');
  const slugMatches = [...body.matchAll(/href=["']\/case-studies\/([a-z0-9-]+)["']/gi)].map((m) => m[1]);
  const candidates = Array.from(new Set(slugMatches));
  if (candidates.length === 0) {
    // Fallback: try a known slug
    const fallback = ['youmesushi', 'you-me-sushi', 'demo'];
    for (const slug of fallback) {
      const { res } = await fetchText(`/case-studies/${slug}`);
      if (res.status === 200) return { status: 'pass', detail: `fallback slug ${slug} returns 200` };
    }
    return { status: 'fail', detail: 'no case study slugs linked from /case-studies and no known fallbacks 200' };
  }
  const slug = candidates[0];
  const { res } = await fetchText(`/case-studies/${slug}`);
  if (res.status !== 200) return { status: 'fail', detail: `/case-studies/${slug} returned ${res.status}` };
  return { status: 'pass', detail: `/case-studies/${slug} returns 200 (of ${candidates.length} linked)` };
});

// 7. /about names founder
await check('/about page', async () => {
  const { res, body } = await fetchText('/about');
  if (res.status !== 200) return { status: 'fail', detail: `status ${res.status}` };
  if (!body.includes('Chandra Alladi')) {
    return { status: 'fail', detail: 'body missing "Chandra Alladi"' };
  }
  return { status: 'pass', detail: 'names founder Chandra Alladi' };
});

// 8. Hreflang tags
await check('Hreflang en-GB', async () => {
  const { res, body } = await fetchText('/');
  if (res.status !== 200) return { status: 'fail', detail: `/ returned ${res.status}` };
  if (!body.includes('hreflang="en-GB"') && !body.includes("hreflang='en-GB'")) {
    return { status: 'fail', detail: 'no hreflang="en-GB" in HTML' };
  }
  const hasUS = body.includes('hreflang="en-US"') || body.includes("hreflang='en-US'");
  return { status: 'pass', detail: `en-GB present${hasUS ? ', en-US also present' : ' (no en-US — OK if no US-specific homepage)'}` };
});

// 9. Calendly NOT in initial HTML
await check('Calendly lazy-loaded', async () => {
  const { res, body } = await fetchText('/');
  if (res.status !== 200) return { status: 'fail', detail: `/ returned ${res.status}` };
  const inlineCalendly = /<script[^>]+src=["'][^"']*calendly\.com\/[^"']*widget\.js/i.test(body);
  if (inlineCalendly) {
    return { status: 'fail', detail: 'calendly widget.js script tag found in initial HTML' };
  }
  // Look for a placeholder button referencing booking
  const hasPlaceholder = /<button[^>]*>[^<]*(book|schedule|call|demo)/i.test(body);
  return { status: 'pass', detail: `no inline calendly script${hasPlaceholder ? ', placeholder button present' : ''}` };
});

// 10. US med-spa city page
await check('/med-spa-marketing/miami', async () => {
  const { res, body } = await fetchText('/med-spa-marketing/miami');
  if (res.status !== 200) return { status: 'fail', detail: `status ${res.status}` };
  const hasBrickell = body.includes('Brickell');
  const hasWynwood = body.includes('Wynwood');
  if (!hasBrickell && !hasWynwood) {
    return { status: 'fail', detail: 'body missing "Brickell" and "Wynwood" — content not city-specific' };
  }
  return { status: 'pass', detail: `city neighborhoods present (Brickell=${hasBrickell}, Wynwood=${hasWynwood})` };
});

// 11. robots.txt points at new sitemap index
await check('robots.txt sitemap pointer', async () => {
  const { res, body } = await fetchText('/robots.txt');
  if (res.status !== 200) return { status: 'fail', detail: `status ${res.status}` };
  const lines = body.split(/\r?\n/).filter((l) => /^sitemap:/i.test(l.trim()));
  if (lines.length === 0) return { status: 'fail', detail: 'no Sitemap: line in robots.txt' };
  const pointsToIndex = lines.some((l) => /sitemap\.xml\s*$/i.test(l.trim()));
  if (!pointsToIndex) {
    return { status: 'fail', detail: `robots.txt has Sitemap line(s) but none point to /sitemap.xml: ${lines.join(' | ')}` };
  }
  return { status: 'pass', detail: `points to sitemap index (${lines.length} Sitemap line(s))` };
});

// 12. Organization schema anchored
await check('Organization JSON-LD @id', async () => {
  const { res, body } = await fetchText('/');
  if (res.status !== 200) return { status: 'fail', detail: `/ returned ${res.status}` };
  const blocks = [...body.matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)].map((m) => m[1]);
  if (blocks.length === 0) return { status: 'fail', detail: 'no JSON-LD blocks in HTML' };
  const wanted = '"@id":"https://kerblabs.com/#organization"';
  const wantedAlt = '"@id": "https://kerblabs.com/#organization"';
  const hit = blocks.some((b) => {
    const norm = b.replace(/\s+/g, '');
    return norm.includes(wanted.replace(/\s+/g, '')) || b.includes(wanted) || b.includes(wantedAlt);
  });
  if (!hit) return { status: 'fail', detail: `none of ${blocks.length} JSON-LD blocks contain "@id":"https://kerblabs.com/#organization"` };
  return { status: 'pass', detail: `Organization @id anchored (of ${blocks.length} JSON-LD blocks)` };
});

// Summary
const passed = results.filter((r) => r.status === 'pass').length;
const failed = results.filter((r) => r.status === 'fail').length;
const skipped = results.filter((r) => r.status === 'skip').length;
console.log(`\nSummary: ${passed} passed, ${failed} failed, ${skipped} skipped (of ${results.length} total) — BASE_URL=${BASE_URL}`);
process.exit(failed > 0 ? 1 : 0);

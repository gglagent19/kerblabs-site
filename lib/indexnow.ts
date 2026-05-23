// lib/indexnow.ts
//
// Tiny helper around the IndexNow protocol (https://www.indexnow.org).
//
// IndexNow lets us ping search engines (Bing, Yandex, Naver, Seznam, Yep —
// and via the shared endpoint, anything that subscribes) the moment a URL
// is created, updated, or deleted, instead of waiting for the next crawl.
//
// Two things have to be true for a ping to be accepted:
//   1. A key file must be reachable at the site root, e.g.
//        https://kerblabs.com/<KEY>.txt
//      whose body is the same <KEY>. This file lives in /public on this repo.
//   2. The POST body must reference that same key + keyLocation.
//
// We expose a single function — `pingIndexNow(urls)` — that other code
// (scripts, route handlers, webhooks, ISR revalidation hooks, etc.) can
// call. It returns a plain `{ ok, status?, error? }` so callers don't
// have to wrap it in try/catch unless they want to.
//
// The key + host are resolved from env so we never bake secrets in:
//   INDEXNOW_KEY            32-char hex key, matches /public/<KEY>.txt
//                           (falls back to the literal key shipped in
//                           this repo so the script works out of the box)
//   INDEXNOW_HOST           bare host, e.g. "kerblabs.com"  (default below)
//   INDEXNOW_KEY_LOCATION   public URL of the key file
//                           (default: https://<host>/<key>.txt)
//
// The endpoint is the shared `api.indexnow.org/IndexNow` URL — Bing fans
// out to every other participating engine, so a single POST is enough.

export const INDEXNOW_ENDPOINT = "https://api.indexnow.org/IndexNow";

/** Default key shipped with this repo. Override with INDEXNOW_KEY in prod. */
export const DEFAULT_INDEXNOW_KEY = "e6cf3962fe127d9968f3310d2341baff";

/** Default host. Override with INDEXNOW_HOST. */
export const DEFAULT_INDEXNOW_HOST = "kerblabs.com";

export interface PingIndexNowResult {
  ok: boolean;
  status?: number;
  error?: string;
  /** Number of URLs in the batch we attempted to submit. */
  submitted?: number;
}

export interface PingIndexNowOptions {
  /** Override the 32-char hex key. Defaults to env INDEXNOW_KEY or DEFAULT_INDEXNOW_KEY. */
  key?: string;
  /** Override the bare host (no scheme). Defaults to env INDEXNOW_HOST or DEFAULT_INDEXNOW_HOST. */
  host?: string;
  /** Override the public URL of the key file. Defaults to https://<host>/<key>.txt. */
  keyLocation?: string;
  /** Override the endpoint (useful in tests). */
  endpoint?: string;
  /** Optional fetch timeout in milliseconds (default 15s). */
  timeoutMs?: number;
}

/**
 * Submit a batch of URLs to IndexNow.
 *
 * IndexNow allows up to 10,000 URLs per request. This function does **not**
 * chunk for you — pass a single batch. The companion script in
 * `scripts/indexnow-ping.mjs` handles batching for the sitemap-wide case.
 *
 * Every URL must be on the same host as `host`/`keyLocation`, otherwise
 * IndexNow returns 422.
 */
export async function pingIndexNow(
  urls: string[],
  options: PingIndexNowOptions = {},
): Promise<PingIndexNowResult> {
  if (!Array.isArray(urls) || urls.length === 0) {
    return { ok: false, error: "no URLs provided", submitted: 0 };
  }
  if (urls.length > 10000) {
    return {
      ok: false,
      error: `too many URLs (${urls.length}); IndexNow caps batches at 10000`,
      submitted: urls.length,
    };
  }

  const key =
    options.key ?? process.env.INDEXNOW_KEY ?? DEFAULT_INDEXNOW_KEY;
  const host =
    options.host ?? process.env.INDEXNOW_HOST ?? DEFAULT_INDEXNOW_HOST;
  const keyLocation =
    options.keyLocation ??
    process.env.INDEXNOW_KEY_LOCATION ??
    `https://${host}/${key}.txt`;
  const endpoint = options.endpoint ?? INDEXNOW_ENDPOINT;
  const timeoutMs = options.timeoutMs ?? 15000;

  if (!/^[a-f0-9]{8,128}$/i.test(key)) {
    return {
      ok: false,
      error: `INDEXNOW_KEY "${key}" is not a hex string of 8-128 chars`,
      submitted: urls.length,
    };
  }

  const body = JSON.stringify({
    host,
    key,
    keyLocation,
    urlList: urls,
  });

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
      },
      body,
      signal: controller.signal,
    });
    clearTimeout(timer);

    // IndexNow returns:
    //   200 OK             accepted
    //   202 Accepted       accepted but still being validated
    //   400 Bad Request    malformed
    //   403 Forbidden      key invalid (file missing or content mismatch)
    //   422 Unprocessable  URL host mismatch, or invalid URLs
    //   429 Too Many       rate-limited
    if (res.status === 200 || res.status === 202) {
      return { ok: true, status: res.status, submitted: urls.length };
    }
    // Best-effort: pull any error text the engine gave us.
    let detail = "";
    try {
      detail = (await res.text()).slice(0, 500);
    } catch {
      // swallow — body read failed, status is enough
    }
    return {
      ok: false,
      status: res.status,
      error: detail || `HTTP ${res.status}`,
      submitted: urls.length,
    };
  } catch (err) {
    clearTimeout(timer);
    const msg = err instanceof Error ? err.message : String(err);
    return { ok: false, error: msg, submitted: urls.length };
  }
}

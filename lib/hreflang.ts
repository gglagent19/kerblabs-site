/**
 * Per-page hreflang helper.
 *
 * Emits self-referential alternates for each page based on the page's
 * country. UK pages get `en-GB` + `x-default`; US pages get `en-US` +
 * `x-default`. Where a page has both UK and US versions, pass both
 * alternates explicitly via `getAlternatesWithRegions`.
 *
 * IMPORTANT: this replaces the broken sitewide alternates that previously
 * pointed every page's `en-GB` / `en-US` / `x-default` at the homepage.
 * Per-page alternates must be set in each page's `metadata` /
 * `generateMetadata` and they will override anything inherited from
 * `app/layout.tsx`.
 */

export type Country = "GB" | "US";

export interface PageAlternates {
  canonical: string;
  languages: Record<string, string>;
}

const SITE = "https://kerblabs.com";

function toUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE}${normalized === "/" ? "" : normalized}`;
}

/**
 * Self-referential alternates for a single-country page.
 *
 * @param path  Page path (e.g. "/about", "/services/local-seo") or a full URL.
 * @param country  "GB" (default) emits en-GB + x-default; "US" emits en-US + x-default.
 */
export function getAlternates(
  path: string,
  country: Country = "GB"
): PageAlternates {
  const url = toUrl(path);
  const lang = country === "US" ? "en-US" : "en-GB";
  return {
    canonical: url,
    languages: {
      [lang]: url,
      "x-default": url,
    },
  };
}

/**
 * Alternates for a page that has equivalent regional versions (e.g. the
 * homepage when a US-localised homepage exists). Pass the en-GB URL and
 * en-US URL explicitly. `xDefault` defaults to the en-GB URL.
 */
export function getAlternatesWithRegions(opts: {
  selfPath: string;
  enGB: string;
  enUS: string;
  xDefault?: string;
}): PageAlternates {
  const self = toUrl(opts.selfPath);
  return {
    canonical: self,
    languages: {
      "en-GB": opts.enGB,
      "en-US": opts.enUS,
      "x-default": opts.xDefault ?? opts.enGB,
    },
  };
}

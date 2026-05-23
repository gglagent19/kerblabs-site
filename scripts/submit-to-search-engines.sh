#!/usr/bin/env bash
# submit-to-search-engines.sh
# Prints the URLs Chandu visits in a browser to submit the kerblabs.com
# sitemap to Google Search Console and Bing Webmaster Tools.
#
# These tools require authentication (Google / Microsoft account) so the
# submission step itself cannot be automated. This script just gives a
# clean, copy-pasteable starting list so nothing is forgotten after a
# major content drop.
#
# Usage:  bash scripts/submit-to-search-engines.sh

set -eu

SITE="https://kerblabs.com"
SITEMAP_INDEX="${SITE}/sitemap-index"

echo "=== Submit kerblabs.com sitemap to search engines ==="
echo
echo "Sitemap index URL (paste into each tool):"
echo "  ${SITEMAP_INDEX}"
echo
echo "----------------------------------------------------"
echo "1. Google Search Console"
echo "----------------------------------------------------"
echo "   Open:"
echo "   https://search.google.com/search-console?resource_id=${SITE}"
echo
echo "   Then:"
echo "     - Left nav -> Sitemaps"
echo "     - 'Add a new sitemap' -> paste:  sitemap-index"
echo "       (GSC prepends the domain automatically)"
echo "     - Click Submit"
echo
echo "----------------------------------------------------"
echo "2. Bing Webmaster Tools"
echo "----------------------------------------------------"
echo "   Open:"
echo "   https://www.bing.com/webmasters/sitemaps?siteUrl=${SITE}"
echo
echo "   Then:"
echo "     - 'Submit sitemap' -> paste full URL:"
echo "       ${SITEMAP_INDEX}"
echo "     - Click Submit"
echo
echo "----------------------------------------------------"
echo "3. IndexNow (Bing + Yandex + Seznam + Naver)"
echo "----------------------------------------------------"
echo "   No browser visit needed. Auto-pings every URL in"
echo "   the sitemap. Run after each major content change:"
echo
echo "     node scripts/ping-indexnow-all.mjs"
echo
echo "   For single-URL targeted pings use the companion"
echo "   script (P9): node scripts/indexnow-ping.mjs <url>"
echo
echo "----------------------------------------------------"
echo "4. Optional: also ping these (no auth required)"
echo "----------------------------------------------------"
echo "   Google ping (deprecated June 2023, harmless):"
echo "     curl -fsS 'https://www.google.com/ping?sitemap=${SITEMAP_INDEX}' || true"
echo
echo "   Bing ping (still works alongside IndexNow):"
echo "     curl -fsS 'https://www.bing.com/ping?sitemap=${SITEMAP_INDEX}' || true"
echo
echo "===================================================="
echo "Expected timeline after submission:"
echo "  - GSC:  24-72 hours before impressions appear"
echo "  - Bing: 1-3 days for fresh URLs to enter index"
echo "  - IndexNow: minutes to hours (Bing usually <1 hr)"
echo "===================================================="

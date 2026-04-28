from playwright.sync_api import sync_playwright
import os

OUT = r"D:/new 1/k/agency/kerblabs-site/screenshots"
os.makedirs(OUT, exist_ok=True)

PAGES = [
    ("ai-voice", "https://kerblabs.com/services/ai-voice-receptionist"),
    ("manchester", "https://kerblabs.com/locations/manchester"),
    ("dental-london", "https://kerblabs.com/dental-marketing/london"),
    ("dental-practices", "https://kerblabs.com/industries/dental-practices"),
]

VIEWPORTS = [
    ("mobile", 375, 812),
    ("desktop", 1920, 1080),
]

results = {}

with sync_playwright() as p:
    browser = p.chromium.launch()
    for vp_name, w, h in VIEWPORTS:
        for slug, url in PAGES:
            ctx = browser.new_context(viewport={"width": w, "height": h},
                                       user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15" if vp_name == "mobile" else None)
            page = ctx.new_page()
            try:
                page.goto(url, wait_until="domcontentloaded", timeout=45000)
                page.wait_for_timeout(2500)
                # above-the-fold
                atf_path = f"{OUT}/{slug}_{vp_name}_atf.png"
                page.screenshot(path=atf_path, full_page=False)
                # full
                full_path = f"{OUT}/{slug}_{vp_name}_full.png"
                page.screenshot(path=full_path, full_page=True)

                # Collect data
                data = page.evaluate("""() => {
                    const h1 = document.querySelector('h1');
                    const body = document.body;
                    const bodyStyle = getComputedStyle(body);
                    const h1Style = h1 ? getComputedStyle(h1) : null;
                    const h1Rect = h1 ? h1.getBoundingClientRect() : null;
                    // sticky/fixed nav
                    const navs = Array.from(document.querySelectorAll('header, nav'));
                    const stickyNav = navs.find(n => {
                        const s = getComputedStyle(n);
                        return s.position === 'fixed' || s.position === 'sticky';
                    });
                    const stickyRect = stickyNav ? stickyNav.getBoundingClientRect() : null;
                    // CTAs
                    const allLinks = Array.from(document.querySelectorAll('a, button'));
                    const cta = allLinks.find(a => /book.*demo|free demo|book a free/i.test(a.textContent || ''));
                    const ctaRect = cta ? cta.getBoundingClientRect() : null;
                    // breadcrumb
                    const bc = document.querySelector('[aria-label*="readcrumb" i], nav.breadcrumb, .breadcrumb, [class*="readcrumb" i]');
                    const bcRect = bc ? bc.getBoundingClientRect() : null;
                    // images above fold
                    const vh = window.innerHeight;
                    const imgs = Array.from(document.querySelectorAll('img')).filter(i => {
                        const r = i.getBoundingClientRect();
                        return r.top < vh && r.bottom > 0;
                    }).map(i => ({
                        src: (i.currentSrc || i.src || '').slice(0,80),
                        loading: i.loading,
                        w: i.naturalWidth, h: i.naturalHeight,
                        top: i.getBoundingClientRect().top
                    }));
                    // tap targets above fold
                    const tapTargets = allLinks.filter(a => {
                        const r = a.getBoundingClientRect();
                        return r.top < vh && r.bottom > 0 && r.width > 0 && r.height > 0;
                    }).map(a => ({
                        text: (a.textContent || '').trim().slice(0,40),
                        w: Math.round(a.getBoundingClientRect().width),
                        h: Math.round(a.getBoundingClientRect().height)
                    }));
                    // font family
                    const fontFamily = bodyStyle.fontFamily;
                    const bodyFontSize = bodyStyle.fontSize;
                    const bgColor = bodyStyle.backgroundColor;
                    const textColor = bodyStyle.color;
                    return {
                        h1: h1 ? {
                            text: (h1.textContent||'').trim().slice(0,120),
                            fontSize: h1Style.fontSize,
                            color: h1Style.color,
                            top: h1Rect.top, bottom: h1Rect.bottom,
                            width: h1Rect.width
                        } : null,
                        body: { fontFamily, bodyFontSize, bgColor, textColor },
                        stickyNav: stickyRect ? { top: stickyRect.top, height: stickyRect.height } : null,
                        cta: ctaRect ? {
                            text: (cta.textContent||'').trim().slice(0,40),
                            top: ctaRect.top, h: ctaRect.height, w: ctaRect.width,
                            visibleAboveFold: ctaRect.top < vh && ctaRect.bottom > 0
                        } : null,
                        breadcrumb: bcRect ? { top: bcRect.top, height: bcRect.height } : null,
                        imagesAboveFold: imgs.slice(0, 6),
                        tapTargetsAboveFold: tapTargets.slice(0, 12),
                        viewport: { w: window.innerWidth, h: window.innerHeight },
                        scrollHeight: document.documentElement.scrollHeight
                    };
                }""")
                results[f"{slug}_{vp_name}"] = data
                print(f"OK {slug} {vp_name}")
            except Exception as e:
                print(f"FAIL {slug} {vp_name}: {e}")
                results[f"{slug}_{vp_name}"] = {"error": str(e)}
            ctx.close()
    browser.close()

import json
with open(f"{OUT}/audit_data.json", "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2)
print("DONE")

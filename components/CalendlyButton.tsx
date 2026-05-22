"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Click-to-load Calendly popup button.
 *
 * No Calendly assets (script, CSS, popup CSS) are loaded until the user
 * either focuses/hovers the button (preconnect only) or clicks it (full
 * widget bundle). This keeps third-party JS off the main thread on first
 * paint and removes the inline embed from initial LCP/INP cost.
 *
 * GA4 tracking is fired manually before opening the popup, mirroring the
 * existing global listener in app/layout.tsx that watches anchor clicks to
 * calendly.com.
 */

const CALENDLY_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";

type GtagFn = (
  command: "event",
  eventName: string,
  params?: Record<string, unknown>,
) => void;

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
    gtag?: GtagFn;
  }
}

let scriptLoadingPromise: Promise<void> | null = null;

function ensureCalendlyAssets(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  if (window.Calendly) {
    return Promise.resolve();
  }

  if (scriptLoadingPromise) {
    return scriptLoadingPromise;
  }

  scriptLoadingPromise = new Promise<void>((resolve, reject) => {
    // Inject the Calendly popup stylesheet (required for the modal chrome).
    if (!document.querySelector(`link[href="${CALENDLY_CSS}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CALENDLY_CSS;
      document.head.appendChild(link);
    }

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${CALENDLY_SCRIPT}"]`,
    );
    if (existing && window.Calendly) {
      resolve();
      return;
    }

    const script = existing ?? document.createElement("script");
    script.src = CALENDLY_SCRIPT;
    script.async = true;
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener(
      "error",
      () => {
        scriptLoadingPromise = null;
        reject(new Error("Failed to load Calendly widget"));
      },
      { once: true },
    );
    if (!existing) {
      document.head.appendChild(script);
    }
  });

  return scriptLoadingPromise;
}

function fireBookCallTracking(opts: {
  url: string;
  label: string;
  eventName: string;
}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  const payload = {
    link_url: opts.url,
    link_text: opts.label.slice(0, 100),
    page_path:
      typeof location !== "undefined" ? location.pathname : undefined,
  };
  try {
    window.gtag("event", opts.eventName, payload);
    // Also emit generate_lead to match the existing global tracker in layout.tsx.
    if (opts.eventName !== "generate_lead") {
      window.gtag("event", "generate_lead", payload);
    }
  } catch {
    // Swallow — analytics must never break UX.
  }
}

export interface CalendlyButtonProps {
  url: string;
  children: ReactNode;
  className?: string;
  /** GA4 event name fired on click. Defaults to `book_call_click`. */
  gaEventName?: string;
  /** Accessible label override for tracking and screen readers. */
  ariaLabel?: string;
}

export default function CalendlyButton({
  url,
  children,
  className,
  gaEventName = "book_call_click",
  ariaLabel,
}: CalendlyButtonProps) {
  const [warmed, setWarmed] = useState(false);
  const [loading, setLoading] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Render <link rel="preconnect"> only after the user signals intent
  // (hover/focus). We attach them to <head> imperatively so SSR is unaffected.
  useEffect(() => {
    if (!warmed || typeof document === "undefined") return;
    const hosts = [
      "https://assets.calendly.com",
      "https://calendly.com",
    ];
    const added: HTMLLinkElement[] = [];
    for (const href of hosts) {
      if (document.head.querySelector(`link[rel="preconnect"][href="${href}"]`)) {
        continue;
      }
      const link = document.createElement("link");
      link.rel = "preconnect";
      link.href = href;
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);
      added.push(link);
    }
    return () => {
      // Leave hints in place — they're harmless and only added once per session.
      void added;
    };
  }, [warmed]);

  const warm = useCallback(() => {
    if (!warmed) setWarmed(true);
  }, [warmed]);

  const handleClick = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const label =
        ariaLabel ?? buttonRef.current?.innerText?.trim() ?? "Book a call";
      fireBookCallTracking({ url, label, eventName: gaEventName });

      if (typeof window === "undefined") return;

      const openPopup = () => {
        const w = window as Window & {
          Calendly?: { initPopupWidget: (o: { url: string }) => void };
        };
        if (w.Calendly && typeof w.Calendly.initPopupWidget === "function") {
          w.Calendly.initPopupWidget({ url });
          return true;
        }
        return false;
      };

      // Fast path: already loaded.
      if (openPopup()) return;

      setLoading(true);
      try {
        await ensureCalendlyAssets();
        if (!openPopup()) {
          // Final fallback: open the booking page in a new tab so the click
          // never feels broken if the script loaded but didn't expose Calendly.
          window.open(url, "_blank", "noopener,noreferrer");
        }
      } catch {
        window.open(url, "_blank", "noopener,noreferrer");
      } finally {
        setLoading(false);
      }
    },
    [ariaLabel, gaEventName, url],
  );

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={handleClick}
      onMouseEnter={warm}
      onFocus={warm}
      onTouchStart={warm}
      aria-label={ariaLabel}
      aria-busy={loading || undefined}
      data-calendly-url={url}
      className={className}
    >
      {children}
    </button>
  );
}

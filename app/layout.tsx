import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA4_ID = "G-4GTQ5LE0TH";

export const metadata: Metadata = {
  title: "Kerblabs — Full-stack AI marketing atelier",
  description:
    "SEO, GBP, AI voice agents, web design, automation & CRM. A full-end AI marketing agency built for independent UK businesses.",
  metadataBase: new URL("https://kerblabs.com"),
  openGraph: {
    title: "Kerblabs — Full-stack AI marketing atelier",
    description:
      "SEO, GBP, AI voice, web, automation. One shop for every growth system.",
    type: "website",
  },
  verification: {
    google: "V1iKVUDuS2TymSaIND99inJcGHXHAJPtbfsah_RX0lQ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA4_ID}', { anonymize_ip: true });
          `}
        </Script>
        <Script id="ga4-calendly-tracking" strategy="afterInteractive">
          {`
            document.addEventListener('click', function(e) {
              var a = e.target.closest && e.target.closest('a[href*="calendly.com"]');
              if (!a) return;
              var label = (a.innerText || a.getAttribute('aria-label') || '').trim().slice(0, 100);
              if (typeof gtag === 'function') {
                gtag('event', 'book_call_click', {
                  link_url: a.href,
                  link_text: label,
                  page_path: location.pathname,
                });
                gtag('event', 'generate_lead', {
                  link_url: a.href,
                  link_text: label,
                  page_path: location.pathname,
                });
              }
            }, { capture: true });
          `}
        </Script>
      </head>
      <body>
        <div className="noise" aria-hidden />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="noise" aria-hidden />
        {children}
      </body>
    </html>
  );
}

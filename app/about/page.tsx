import type { Metadata } from "next";
import SeoNav from "@/components/seo/SeoNav";
import SeoFooter from "@/components/seo/SeoFooter";
import Schema from "@/components/seo/Schema";
import {
  Breadcrumb,
  SeoHero,
  SectionHead,
  CtaSection,
  Section,
} from "@/components/seo/SeoSections";

export const metadata: Metadata = {
  title: "About Kerblabs — AI Marketing for UK Local Businesses | Kerblabs",
  description:
    "Kerblabs Ltd is a UK-wide remote AI marketing platform for independent local businesses. We bundle 12 systems into one team, one fee, no lock-in.",
  alternates: { canonical: "https://kerblabs.com/about" },
  openGraph: {
    title: "About Kerblabs",
    description:
      "AI marketing systems for UK local businesses. Fully remote. Serving the whole UK.",
    type: "website",
    url: "https://kerblabs.com/about",
    siteName: "Kerblabs",
  },
};

export default function AboutPage() {
  return (
    <main className="relative">
      <Schema
        breadcrumbs={[
          { name: "Home", url: "https://kerblabs.com" },
          { name: "About", url: "https://kerblabs.com/about" },
        ]}
        extra={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            mainEntity: { "@id": "https://kerblabs.com/#organization" },
          },
        ]}
      />

      <SeoNav />

      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "About" }]} />

      <SeoHero
        eyebrow="ABOUT KERBLABS"
        h1="Twelve systems."
        highlight="One team. One fee."
        subhead="Kerblabs Ltd is a UK-wide AI marketing platform built for independent local businesses — dental practices, salons, contractors, estate agents — that need every growth system but don't have a marketing department to run them. We're fully remote: no junior account managers, no London retainer prices, no lock-in."
        primaryCta={{
          label: "Book a free demo",
          href: "https://calendly.com/chandraalladi07/30min",
        }}
        secondaryCta={{ label: "See services", href: "/services" }}
      />

      <Section>
        <SectionHead label="WHAT WE BELIEVE" title="Local businesses deserve" highlight="systems, not retainers." />
        <div className="prose max-w-3xl text-[color:var(--color-text-dim)] space-y-5 leading-relaxed">
          <p>
            Most marketing agencies sell time. They charge a £2,000-10,000 monthly retainer, deliver a report, and call it a service. That works for big brands with marketing managers who can interpret the report. It doesn&apos;t work for an independent dental practice in Bristol, a hair salon in Manchester, or a plumber in Birmingham.
          </p>
          <p>
            Local businesses need systems that work without supervision. They need an AI that answers calls when they&apos;re with a patient. A review engine that sends every customer a request before they&apos;ve reached the car park. A Google profile that ranks itself. A CRM that doesn&apos;t need a sales operations team to run.
          </p>
          <p>
            That&apos;s what Kerblabs is. Twelve systems, one platform, one fee. They install in 10 days, they run themselves, and they don&apos;t lock you in. If they don&apos;t work for your business, you cancel and walk away — no contracts, no hostage data.
          </p>
        </div>
      </Section>

      <Section background="surface">
        <SectionHead
          label="HOW WE WORK"
          title="Fully remote."
          highlight="UK-wide."
        />
        <div className="prose max-w-3xl text-[color:var(--color-text-dim)] space-y-5 leading-relaxed">
          <p>
            Kerblabs has no physical office and no plans to open one. Every client interaction happens via video call, every system is delivered remotely, and our team works from across the UK.
          </p>
          <p>
            This is intentional. By staying remote, we stay lean — which means we can charge £97-£497/month for what most agencies charge £2,000-10,000/month for. The savings go to clients, not commercial property in Soho.
          </p>
          <p>
            We serve businesses across all 25 major UK cities, 75 large towns, and 300+ districts. From London to Aberdeen, Belfast to Brighton — same platform, same systems, same fee.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHead label="THE ORG" title="Kerblabs Ltd" highlight="— UK." />
        <div className="prose max-w-3xl text-[color:var(--color-text-dim)] space-y-3 leading-relaxed">
          <p>
            <strong className="text-[color:var(--color-text)]">Kerblabs Ltd</strong> is registered in the United Kingdom. Booking a demo will get you a 30-minute video call with the founder — no junior account managers in between.
          </p>
          <p>
            <strong className="text-[color:var(--color-text)]">Service area:</strong> Whole United Kingdom.
            <br />
            <strong className="text-[color:var(--color-text)]">Languages:</strong> English (UK).
            <br />
            <strong className="text-[color:var(--color-text)]">Pricing:</strong> £97–£497/month with one-time setup. No lock-in.
          </p>
        </div>
      </Section>

      <CtaSection
        title="Want to meet"
        highlight="the team?"
        subtitle="Book a free 30-minute video call. We'll walk you through the platform, show how it works for your industry, and you'll know within 30 minutes whether Kerblabs is right for your business."
      />

      <SeoFooter />
    </main>
  );
}

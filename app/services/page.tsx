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
  FeatureGrid,
} from "@/components/seo/SeoSections";
import { services } from "@/lib/seo-data";
import { getAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Our Services — AI Marketing Systems for UK Businesses | Kerblabs",
  description:
    "Eight AI-powered services for UK local businesses: AI Voice Receptionist, Missed Call Text Back, Review Engine, Local SEO, GBP Management, CRM, Booking, Reputation Monitoring. From £97/mo.",
  alternates: getAlternates("/services", "GB"),
  openGraph: {
    title: "AI Marketing Services for UK Local Businesses | Kerblabs",
    description:
      "Eight AI-powered systems that bundle together. From £97/mo. No lock-in. 10-day setup.",
    type: "website",
    url: "https://kerblabs.com/services",
    siteName: "Kerblabs",
  },
};

export default function ServicesIndex() {
  return (
    <main className="relative">
      <Schema
        breadcrumbs={[
          { name: "Home", url: "https://kerblabs.com" },
          { name: "Services", url: "https://kerblabs.com/services" },
        ]}
      />

      <SeoNav />

      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Services" }]} />

      <SeoHero
        eyebrow="EIGHT AI SYSTEMS, ONE PLATFORM"
        h1="Every growth system"
        highlight="UK local businesses need."
        subhead="Pick any single service stand-alone, or bundle the full engine. Every Kerblabs service is built for independent UK businesses with under 10 staff and no marketing team. From £97/month, no lock-in, live in 10 days."
        primaryCta={{
          label: "Book a free demo",
          href: "https://calendly.com/hello-kerblabs/15-min-discovery-call",
        }}
        secondaryCta={{ label: "See pricing", href: "/#pricing" }}
      />

      <Section>
        <SectionHead
          label="THE FULL CATALOG"
          title="All 8 services,"
          highlight="ranked by impact."
        />
        <FeatureGrid
          items={services.map((s) => ({
            number: s.number,
            category: s.category,
            title: s.name,
            body: s.subhead.slice(0, 130) + "…",
            href: `/services/${s.slug}`,
          }))}
        />
      </Section>

      <CtaSection
        title="Not sure which to start with?"
        highlight="Book a free strategy call."
        subtitle="We'll look at your business and recommend the right starting plan — Spark, Momentum, Autopilot, or Full Engine."
      />

      <SeoFooter />
    </main>
  );
}

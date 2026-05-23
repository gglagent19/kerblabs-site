import type { Metadata } from "next";
import Link from "next/link";
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
import { locations, locationCountry } from "@/lib/seo-data";
import { getAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "AI Marketing for Local Businesses Across the UK | Kerblabs",
  description:
    "Kerblabs serves local businesses in 25 major UK cities — from London to Aberdeen, Belfast to Brighton. Find your city and see how AI marketing automation can grow your business.",
  alternates: getAlternates("/locations", "GB"),
  openGraph: {
    title: "AI Marketing for Local Businesses Across the UK | Kerblabs",
    description:
      "Kerblabs serves local businesses across 25 major UK cities.",
    type: "website",
    url: "https://kerblabs.com/locations",
    siteName: "Kerblabs",
  },
};

export default function LocationsHub() {
  // Only show UK Tier 1 cities — these are the only pages that exist
  // under /locations/. US cities live under US-only verticals (e.g.
  // /med-spa-marketing/us-miami) and are listed separately on /industries/med-spa.
  const tier1 = locations.filter(
    (l) => l.tier === "tier1" && locationCountry(l) === "GB"
  );

  // Group by region for scannability
  const byRegion = tier1.reduce((acc, loc) => {
    if (!acc[loc.region]) acc[loc.region] = [];
    acc[loc.region].push(loc);
    return acc;
  }, {} as Record<string, typeof tier1>);

  return (
    <main className="relative">
      <Schema
        breadcrumbs={[
          { name: "Home", url: "https://kerblabs.com" },
          { name: "Locations", url: "https://kerblabs.com/locations" },
        ]}
      />

      <SeoNav />

      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Locations" }]} />

      <SeoHero
        eyebrow="UK-WIDE COVERAGE"
        h1="AI marketing for local businesses"
        highlight="across the UK."
        subhead={`Kerblabs serves businesses across 25 major UK cities. Whether you're a dental practice in Manchester, a salon in Bristol, a contractor in Birmingham, or an estate agent in Edinburgh — our AI growth systems work the same wherever you are. We're fully remote, so even if your city isn't on this list, we still serve you. Book a free demo and we'll show you what we can do for your business.`}
        primaryCta={{
          label: "Book a free demo",
          href: "https://calendly.com/hello-kerblabs/15-min-discovery-call",
        }}
        stats={[
          { value: `${tier1.length}`, label: "UK cities with dedicated pages" },
          { value: "100", label: "Industry × city specialist pages" },
          { value: "UK-wide", label: "Remote service" },
        ]}
      />

      <Section>
        <SectionHead
          label="MAJOR UK CITIES"
          title="Pick your"
          highlight="city."
          subtitle="Each city page covers AI marketing for dental practices, hair salons, contractors, and estate agents — with real local market context, named neighbourhoods, and city-specific FAQs."
        />
        <div className="space-y-12">
          {Object.entries(byRegion).map(([region, locs]) => (
            <div key={region}>
              <h3 className="font-display font-bold text-sm uppercase tracking-[0.15em] text-[color:var(--color-text-faint)] mb-5">
                {region}
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {locs.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/locations/${c.slug}`}
                    className="card p-5 group block"
                  >
                    <h4 className="font-display font-bold text-base mb-1 group-hover:text-[color:var(--color-lime)] transition">
                      {c.name}
                    </h4>
                    <p className="text-xs text-[color:var(--color-text-dim)]">
                      {c.county}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section background="surface">
        <SectionHead
          label="NOT ON THE LIST?"
          title="We still serve"
          highlight="your city."
          subtitle={`Kerblabs is fully remote — we serve businesses across the entire UK. The pages above cover the 25 cities with the most search volume, but the platform works the same wherever you're based. Book a demo and tell us where your business is — we'll show you what we can do.`}
        />
      </Section>

      <CtaSection
        title="Ready to grow your"
        highlight="local business?"
        subtitle="Book a free 30-minute strategy call. We'll show you exactly what Kerblabs can do, regardless of where you're based in the UK."
      />

      <SeoFooter />
    </main>
  );
}

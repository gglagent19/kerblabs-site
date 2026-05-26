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
  title: "AI Marketing Locations — Florida Med Spas + UK Local Businesses | Kerblabs",
  description:
    "Kerblabs serves Florida med spas (Miami, Tampa, Orlando, Jacksonville, Fort Lauderdale) and local businesses across 25 major UK cities. Find your city.",
  alternates: getAlternates("/locations", "GB"),
  openGraph: {
    title: "AI Marketing Locations — FL Med Spas + UK Local Businesses | Kerblabs",
    description:
      "Florida med spas and UK local businesses. 9 US Tier-1 cities and 25 UK Tier-1 cities served, fully remote.",
    type: "website",
    url: "https://kerblabs.com/locations",
    siteName: "Kerblabs",
  },
};

export default function LocationsHub() {
  // UK Tier 1 cities (existing footprint).
  const ukTier1 = locations.filter(
    (l) => l.tier === "tier1" && locationCountry(l) === "GB"
  );
  // US Tier 1 cities (the med-spa launch footprint — 5 original + 4 FL Sprint Cohort 1 cities).
  const usTier1 = locations.filter(
    (l) => l.tier === "tier1" && locationCountry(l) === "US"
  );
  // FL cities surface first within the US section (Cohort 1 priority).
  const usFlorida = usTier1.filter((l) => l.region === "Florida");
  const usOther = usTier1.filter((l) => l.region !== "Florida");

  // Group UK by region for scannability
  const byRegion = ukTier1.reduce((acc, loc) => {
    if (!acc[loc.region]) acc[loc.region] = [];
    acc[loc.region].push(loc);
    return acc;
  }, {} as Record<string, typeof ukTier1>);

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
        eyebrow="US + UK COVERAGE"
        h1="AI marketing for local businesses"
        highlight="in Florida and across the UK."
        subhead={`Kerblabs serves Florida med spas — Miami, Tampa, Orlando, Jacksonville, Fort Lauderdale — plus local businesses across 25 major UK cities. The Florida footprint runs on the Spa Sprint mechanic ($0 upfront, $99 refundable, $1,200 only on KPI hit). The UK footprint runs on the £97-£497/mo Spark-to-Full-Engine tiers. Fully remote, no lock-in either side.`}
        primaryCta={{
          label: "Book a free demo",
          href: "https://calendly.com/hello-kerblabs/15-min-discovery-call",
        }}
        secondaryCta={{
          label: "See The 5 Spa Sprint",
          href: "/sprint",
        }}
        stats={[
          { value: `${usTier1.length}`, label: "US cities served (med-spa launch)" },
          { value: `${ukTier1.length}`, label: "UK cities with dedicated pages" },
          { value: "Remote", label: "FL + UK delivery" },
        ]}
      />

      <Section>
        <SectionHead
          label="UNITED STATES — FLORIDA + MAJOR METROS"
          title="The US"
          highlight="footprint."
          subtitle="The US launch covers the med-spa vertical. Florida (Cohort 1 of The 5 Spa Sprint) sits at the front of the queue; the four other Tier-1 metros — New York, Los Angeles, Chicago, Houston — round out the national coverage."
        />
        {usFlorida.length > 0 && (
          <div className="mb-10">
            <h3 className="font-display font-bold text-sm uppercase tracking-[0.15em] text-[color:var(--color-lime)] mb-5">
              Florida — The 5 Spa Sprint footprint
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {usFlorida.map((c) => (
                <Link
                  key={c.slug}
                  href={`/med-spa-marketing/${c.slug}`}
                  className="card p-5 group block"
                >
                  <h4 className="font-display font-bold text-base mb-1 group-hover:text-[color:var(--color-lime)] transition">
                    {c.name}
                  </h4>
                  <p className="text-xs text-[color:var(--color-text-dim)]">
                    {c.county}, FL
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
        {usOther.length > 0 && (
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-[0.15em] text-[color:var(--color-text-faint)] mb-5">
              Other US Tier-1 metros (med-spa)
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {usOther.map((c) => (
                <Link
                  key={c.slug}
                  href={`/med-spa-marketing/${c.slug}`}
                  className="card p-5 group block"
                >
                  <h4 className="font-display font-bold text-base mb-1 group-hover:text-[color:var(--color-lime)] transition">
                    {c.name}
                  </h4>
                  <p className="text-xs text-[color:var(--color-text-dim)]">
                    {c.county}, {c.region}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Section>

      <Section background="surface">
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

      <Section>
        <SectionHead
          label="NOT ON THE LIST?"
          title="We still serve"
          highlight="your city."
          subtitle={`Kerblabs is fully remote — Florida med spas anywhere in the state plus UK businesses anywhere in the four nations. The pages above cover the cities with the most search volume; the platform works the same wherever you're based. Book a demo and tell us where you're located — we'll show you what we can do.`}
        />
      </Section>

      <CtaSection
        title="Ready to grow your"
        highlight="local business?"
        subtitle="Book a free 30-minute strategy call. We'll show you exactly what Kerblabs can do, whether you're a Florida med spa or a UK local business."
      />

      <SeoFooter />
    </main>
  );
}

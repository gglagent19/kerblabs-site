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
  PillLinks,
} from "@/components/seo/SeoSections";
import { locations } from "@/lib/seo-data";

export const metadata: Metadata = {
  title: "AI Marketing for Local Businesses Across the UK | Kerblabs",
  description:
    "Kerblabs serves local businesses across the UK — from London to Edinburgh, Bristol to Belfast. Find your area and see how AI marketing automation can grow your business.",
  alternates: { canonical: "https://kerblabs.com/locations" },
  openGraph: {
    title: "AI Marketing for Local Businesses Across the UK | Kerblabs",
    description:
      "Kerblabs serves local businesses across the UK — from London to Edinburgh, Bristol to Belfast.",
    type: "website",
    url: "https://kerblabs.com/locations",
    siteName: "Kerblabs",
  },
};

export default function LocationsHub() {
  const tier1 = locations.filter((l) => l.tier === "tier1");
  const tier2 = locations.filter((l) => l.tier === "tier2");
  const tier3 = locations.filter((l) => l.tier === "tier3");

  // Group tier3 by region
  const tier3ByRegion = tier3.reduce((acc, loc) => {
    if (!acc[loc.region]) acc[loc.region] = [];
    acc[loc.region].push(loc);
    return acc;
  }, {} as Record<string, typeof tier3>);

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
        highlight="across the whole UK."
        subhead={`Kerblabs serves businesses across all ${locations.length}+ UK local authority areas. Whether you're a dental practice in Manchester, a salon in Bristol, a contractor in Birmingham, or an estate agent in Edinburgh — our AI growth systems work the same wherever you are.`}
        primaryCta={{
          label: "Book a free demo",
          href: "https://calendly.com/chandraalladi07/30min",
        }}
        stats={[
          { value: `${tier1.length}`, label: "Major UK cities" },
          { value: `${tier2.length}`, label: "Large UK towns" },
          { value: `${tier3.length}+`, label: "Districts & boroughs" },
        ]}
      />

      <Section>
        <SectionHead
          label="MAJOR CITIES"
          title="The UK's"
          highlight="largest markets."
          subtitle="Our most popular city pages — full-detail content for major UK cities."
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {tier1.map((c) => (
            <Link
              key={c.slug}
              href={`/locations/${c.slug}`}
              className="card p-5 group"
            >
              <h3 className="font-display font-bold text-base mb-1 group-hover:text-[color:var(--color-lime)] transition">
                {c.name}
              </h3>
              <p className="text-xs text-[color:var(--color-text-dim)]">{c.region}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section background="surface">
        <SectionHead
          label="LARGE TOWNS"
          title="Tier 2"
          highlight="UK towns."
          subtitle="Strong growth markets across England, Wales, Scotland, and Northern Ireland."
        />
        <PillLinks
          links={tier2.map((t) => ({
            label: t.name,
            href: `/locations/${t.slug}`,
          }))}
        />
      </Section>

      <Section>
        <SectionHead
          label="DISTRICTS & BOROUGHS"
          title="Every UK"
          highlight="local area."
          subtitle="Every UK local authority district, including all 33 London boroughs and 274+ districts across the rest of the UK."
        />
        <div className="space-y-10">
          {Object.entries(tier3ByRegion).map(([region, locs]) => (
            <div key={region}>
              <h3 className="font-display font-bold text-sm uppercase tracking-[0.15em] text-[color:var(--color-text-faint)] mb-4">
                {region} ({locs.length})
              </h3>
              <PillLinks
                links={locs.map((l) => ({
                  label: l.name,
                  href: `/locations/${l.slug}`,
                }))}
              />
            </div>
          ))}
        </div>
      </Section>

      <CtaSection
        title="Don't see your area?"
        highlight="We still serve you."
        subtitle="Kerblabs is fully remote and serves every UK local authority. Book a call — we'll cover wherever you are."
      />

      <SeoFooter />
    </main>
  );
}

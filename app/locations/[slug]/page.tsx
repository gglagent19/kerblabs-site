import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SeoNav from "@/components/seo/SeoNav";
import SeoFooter from "@/components/seo/SeoFooter";
import Schema from "@/components/seo/Schema";
import {
  Breadcrumb,
  SeoHero,
  SectionHead,
  PricingCallout,
  Faq,
  CtaSection,
  Section,
  FeatureGrid,
  PillLinks,
} from "@/components/seo/SeoSections";
import {
  locations,
  getLocationBySlug,
  services,
  industries,
  getNearbyLocations,
  comboIndustrySlugs,
} from "@/lib/seo-data";

const industryToCombo: Record<string, (typeof comboIndustrySlugs)[number]> = {
  "dental-practices": "dental-marketing",
  "hair-salons": "salon-marketing",
  contractors: "contractor-marketing",
  "estate-agents": "estate-agent-marketing",
};

export async function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);
  if (!loc) return {};
  const url = `https://kerblabs.com/locations/${loc.slug}`;
  const title =
    loc.tier === "tier1"
      ? `AI Marketing Agency in ${loc.name} | Kerblabs`
      : loc.tier === "tier2"
      ? `AI Marketing for ${loc.name} Local Businesses | Kerblabs`
      : `Local Business Marketing in ${loc.name} | Kerblabs`;
  const description = `Kerblabs helps ${loc.name} businesses grow with AI voice, automated reviews, and local SEO. Dental, salons, contractors, estate agents. From £97/mo. Serving ${loc.county}, ${loc.region}.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, type: "website", url, siteName: "Kerblabs" },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);
  if (!loc) notFound();

  const url = `https://kerblabs.com/locations/${loc.slug}`;
  const nearby = getNearbyLocations(loc, 6);
  const isTier1 = loc.tier === "tier1";

  return (
    <main className="relative">
      <Schema
        breadcrumbs={[
          { name: "Home", url: "https://kerblabs.com" },
          { name: "Locations", url: "https://kerblabs.com/locations" },
          { name: loc.name, url },
        ]}
        extra={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: `AI Marketing Services in ${loc.name}`,
            provider: { "@type": "Organization", name: "Kerblabs" },
            areaServed: {
              "@type": loc.tier === "tier1" ? "City" : "AdministrativeArea",
              name: loc.name,
              containedInPlace: { "@type": "AdministrativeArea", name: loc.county },
            },
            description: `AI-powered marketing systems for ${loc.name} local businesses including dental practices, hair salons, contractors and estate agents.`,
            offers: { "@type": "Offer", price: "97", priceCurrency: "GBP" },
          },
        ]}
      />

      <SeoNav />

      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: loc.name },
        ]}
      />

      <SeoHero
        eyebrow={`SERVING ${loc.county.toUpperCase()}, ${loc.region.toUpperCase()}`}
        h1={`AI Growth Systems for`}
        highlight={`${loc.name} businesses.`}
        subhead={`${loc.name} is ${loc.character}. Independent businesses across ${loc.name} — dental practices, hair salons, contractors, and estate agents — face the same challenge: missed calls, uncollected reviews, and weak local Google rankings. Kerblabs is the AI growth engine that fixes all three. From £97/mo. No lock-in. 10-day setup.`}
        primaryCta={{
          label: "Book a free 30-min demo",
          href: "https://calendly.com/chandraalladi07/30min",
        }}
        secondaryCta={{ label: "See pricing", href: "/#pricing" }}
        stats={[
          { value: "10 days", label: "From signup to live" },
          { value: "24/7", label: "AI voice answering" },
          { value: "£97", label: "Starting price/month" },
        ]}
      />

      <Section>
        <SectionHead
          label="WHO WE HELP"
          title={`Local businesses in`}
          highlight={loc.name + "."}
          subtitle={`We work with independent businesses across ${loc.name} and the wider ${loc.county} area, including ${loc.areas.slice(0, 3).join(", ")}${loc.areas.length > 3 ? ` and ${loc.areas[3]}` : ""}.`}
        />
        <p className="text-[color:var(--color-text-dim)] leading-relaxed max-w-3xl mb-10">
          {loc.name} sits within {loc.county} in the {loc.region} region. Local businesses here face the same core challenges as anywhere in the UK: missed calls going unanswered while staff are with customers, Google reviews going uncollected after every job, and weak local SEO meaning customers can&apos;t find them online. Kerblabs fixes all three — automatically. Whether your business operates from {loc.areas[0]} or any other part of {loc.name}, the Kerblabs growth engine works the same way.
        </p>

        <FeatureGrid
          items={services.slice(0, 4).map((s) => ({
            number: s.number,
            category: s.category,
            title: s.shortName,
            body: `Built for ${loc.name} businesses across ${loc.county}.`,
            href: `/services/${s.slug}`,
          }))}
        />
      </Section>

      <Section background="surface">
        <SectionHead
          label={`INDUSTRIES IN ${loc.name.toUpperCase()}`}
          title="Your industry."
          highlight="Your area."
        />
        <FeatureGrid
          items={industries.map((ind) => ({
            title: `${ind.emoji} ${ind.name} in ${loc.name}`,
            body: `${loc.name} ${ind.industryPlural.toLowerCase()} use Kerblabs to win more customers, manage reviews, and never miss a call.`,
            href: `/${industryToCombo[ind.slug]}/${loc.slug}`,
          }))}
          columns={4}
        />
      </Section>

      <Section>
        <SectionHead label="PRICING" title="Start small." highlight="Scale when ready." />
        <PricingCallout
          plan="Spark"
          price={97}
          description={`The Spark plan is the perfect entry point for ${loc.name} businesses. Includes local SEO, GBP optimisation, and automated review collection. Add AI voice, CRM, and more as you grow.`}
        />
      </Section>

      <Section background="surface">
        <SectionHead
          label="NEARBY"
          title="Also serving"
          highlight={`${loc.county}.`}
        />
        <PillLinks
          links={nearby.map((n) => ({
            label: n.name,
            href: `/locations/${n.slug}`,
          }))}
        />
      </Section>

      <Section>
        <SectionHead label="FAQ" title="Common questions" highlight={`from ${loc.name}.`} />
        <Faq
          items={[
            {
              q: `Do you serve businesses across all of ${loc.name}, including ${loc.areas[0]}?`,
              a: `Yes — Kerblabs serves businesses across the entire ${loc.name} area and surrounding ${loc.county}. Our delivery is fully remote, so location within the area doesn't matter; what matters is your Google visibility, which we fix.`,
            },
            {
              q: `How quickly can a ${loc.name} business start ranking on Google?`,
              a: `Most ${loc.name} businesses see Google Business Profile improvements within 2-4 weeks and meaningful organic ranking improvements within 6-12 weeks of starting with Kerblabs.`,
            },
            {
              q: `How is Kerblabs different from a traditional marketing agency in ${loc.name}?`,
              a: `Traditional agencies charge £2,000-10,000/month retainers and deliver reports. We charge from £97/mo and deliver actual systems — AI voice, review automation, local SEO, CRM — all built and maintained for you.`,
            },
            {
              q: `What's the minimum commitment?`,
              a: `No long-term contracts. Month-to-month from £97/mo. Cancel any time. Most ${loc.name} clients stay for years because the system keeps working.`,
            },
          ]}
        />
      </Section>

      <CtaSection
        title="Ready to grow your"
        highlight={`${loc.name} business?`}
        subtitle={`Book a free 30-minute strategy call. We'll show you exactly what Kerblabs can do for your ${loc.name} business.`}
      />

      <SeoFooter />
    </main>
  );
}

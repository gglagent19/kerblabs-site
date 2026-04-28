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
  getIndustryByComboSlug,
  fillIntroTemplate,
  comboIndustrySlugs,
  type ComboIndustrySlug,
} from "@/lib/seo-data";

const industryToCombo: Record<string, ComboIndustrySlug> = {
  "dental-practices": "dental-marketing",
  "hair-salons": "salon-marketing",
  contractors: "contractor-marketing",
  "estate-agents": "estate-agent-marketing",
};

const comboToIndustry: Record<ComboIndustrySlug, string> = {
  "dental-marketing": "dental-practices",
  "salon-marketing": "hair-salons",
  "contractor-marketing": "contractors",
  "estate-agent-marketing": "estate-agents",
};

const COMBO_TITLES: Record<ComboIndustrySlug, string> = {
  "dental-marketing": "Dental Practice Marketing",
  "salon-marketing": "Hair Salon Marketing",
  "contractor-marketing": "Contractor Marketing",
  "estate-agent-marketing": "Estate Agent Marketing",
};

export function generateComboStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateComboMetadata(
  comboSlug: ComboIndustrySlug,
  slug: string
): Promise<Metadata> {
  const loc = getLocationBySlug(slug);
  const industry = getIndustryByComboSlug(comboSlug);
  if (!loc || !industry) return {};
  const title = `${COMBO_TITLES[comboSlug]} in ${loc.name} | Kerblabs`;
  const description = `AI marketing systems built for ${loc.name} ${industry.industryPlural.toLowerCase()}. From £${industry.recommendedPrice}/mo. No lock-in. 10-day setup.`;
  const url = `https://kerblabs.com/${comboSlug}/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, type: "website", url, siteName: "Kerblabs" },
  };
}

interface ComboPageProps {
  comboSlug: ComboIndustrySlug;
  locationSlug: string;
}

export default async function ComboPage({ comboSlug, locationSlug }: ComboPageProps) {
  const loc = getLocationBySlug(locationSlug);
  const industry = getIndustryByComboSlug(comboSlug);
  if (!loc || !industry) notFound();

  const url = `https://kerblabs.com/${comboSlug}/${locationSlug}`;
  const intro = fillIntroTemplate(industry.comboIntroTemplate, loc);
  const otherCombos = comboIndustrySlugs.filter((c) => c !== comboSlug);

  // Same industry, nearby cities (5)
  const sameIndustryNearby = locations
    .filter(
      (l) =>
        l.slug !== loc.slug &&
        (l.tier === "tier1" || (l.region === loc.region && l.tier === "tier2"))
    )
    .slice(0, 5);

  // Same city, other industries
  const sameCityOtherIndustries = otherCombos.map((c) => ({
    label: `${COMBO_TITLES[c]} in ${loc.name}`,
    href: `/${c}/${loc.slug}`,
  }));

  return (
    <main className="relative">
      <Schema
        breadcrumbs={[
          { name: "Home", url: "https://kerblabs.com" },
          {
            name: COMBO_TITLES[comboSlug],
            url: `https://kerblabs.com/industries/${comboToIndustry[comboSlug]}`,
          },
          { name: loc.name, url },
        ]}
        extra={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${COMBO_TITLES[comboSlug]} in ${loc.name}`,
            provider: { "@type": "Organization", name: "Kerblabs" },
            areaServed: {
              "@type": loc.tier === "tier1" ? "City" : "AdministrativeArea",
              name: loc.name,
            },
            audience: { "@type": "BusinessAudience", audienceType: industry.industryPlural },
            description: `AI marketing systems for ${loc.name} ${industry.industryPlural.toLowerCase()}.`,
            offers: {
              "@type": "Offer",
              price: industry.recommendedPrice.toString(),
              priceCurrency: "GBP",
            },
          },
        ]}
      />

      <SeoNav />

      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          {
            name: COMBO_TITLES[comboSlug],
            href: `/industries/${comboToIndustry[comboSlug]}`,
          },
          { name: loc.name },
        ]}
      />

      <SeoHero
        eyebrow={`${industry.industryPlural.toUpperCase()} IN ${loc.name.toUpperCase()}`}
        h1={industry.h1.replace("UK", loc.name)}
        highlight={industry.h1Highlight.replace("UK", loc.name)}
        subhead={`${industry.subhead} Built for ${loc.name} businesses across ${loc.county}.`}
        primaryCta={{
          label: "Book a free strategy call",
          href: "https://calendly.com/chandraalladi07/30min",
        }}
        secondaryCta={{ label: "See pricing", href: "/#pricing" }}
      />

      <Section>
        <SectionHead
          label={`THE ${loc.name.toUpperCase()} ${industry.industrySingular.toUpperCase()} MARKET`}
          title="What's actually happening"
          highlight="here."
        />
        <p className="text-[color:var(--color-text-dim)] leading-relaxed max-w-4xl text-base md:text-lg">
          {intro}
        </p>
      </Section>

      <Section background="surface">
        <SectionHead
          label="THE SYSTEMS"
          title="What we build"
          highlight={`for ${loc.name} ${industry.industryPlural.toLowerCase()}.`}
        />
        <FeatureGrid
          items={services.slice(0, 4).map((s) => ({
            number: s.number,
            category: s.category,
            title: s.shortName,
            body: s.subhead.slice(0, 130) + "…",
            href: `/services/${s.slug}`,
          }))}
        />
      </Section>

      <Section>
        <SectionHead label="PRICING" title="Recommended for" highlight={`${industry.industryPlural.toLowerCase()}.`} />
        <PricingCallout
          plan={industry.recommendedPlan}
          price={industry.recommendedPrice}
          description={industry.roiNote}
        />
      </Section>

      <Section background="surface">
        <SectionHead
          label="NEARBY"
          title={`${COMBO_TITLES[comboSlug]} in`}
          highlight="other cities."
        />
        <PillLinks
          links={sameIndustryNearby.map((c) => ({
            label: `${c.name} ${industry.industrySingular}s`,
            href: `/${comboSlug}/${c.slug}`,
          }))}
        />
      </Section>

      <Section>
        <SectionHead
          label={`MORE FOR ${loc.name.toUpperCase()}`}
          title="Other industries"
          highlight={`in ${loc.name}.`}
        />
        <PillLinks links={sameCityOtherIndustries} />
      </Section>

      <Section background="surface">
        <SectionHead label="FAQ" title="Common" highlight="questions." />
        <Faq
          items={[
            {
              q: `Do you work with ${industry.industryPlural.toLowerCase()} across all of ${loc.name}?`,
              a: `Yes — Kerblabs serves ${industry.industryPlural.toLowerCase()} across the entire ${loc.name} area and surrounding ${loc.county}. Our delivery is fully remote, so where in the area you're based doesn't matter; what matters is your Google visibility and lead capture systems, which we fix.`,
            },
            {
              q: `How quickly can a ${loc.name} ${industry.industrySingular} expect results?`,
              a: `Most ${loc.name} ${industry.industryPlural.toLowerCase()} see Google Business Profile improvements within 2-4 weeks, AI voice and review systems live within 10 days, and meaningful organic ranking improvements within 6-12 weeks.`,
            },
            {
              q: `What's the minimum commitment?`,
              a: `No long-term contracts. Month-to-month from £${industry.recommendedPrice}/mo on the ${industry.recommendedPlan} plan. Cancel any time.`,
            },
          ]}
        />
      </Section>

      <CtaSection
        title="Ready to grow your"
        highlight={`${loc.name} ${industry.industrySingular}?`}
        subtitle={`Book a free 30-minute strategy call. We'll show you exactly what Kerblabs can do for your ${loc.name} ${industry.industrySingular}.`}
      />

      <SeoFooter />
    </main>
  );
}

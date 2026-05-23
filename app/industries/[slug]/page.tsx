import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import SeoNav from "@/components/seo/SeoNav";
import SeoFooter from "@/components/seo/SeoFooter";
import Schema from "@/components/seo/Schema";
import Breadcrumb from "@/components/Breadcrumb";
import {
  SeoHero,
  SectionHead,
  ProblemsGrid,
  PricingCallout,
  Faq,
  CtaSection,
  Section,
  FeatureGrid,
  PillLinks,
} from "@/components/seo/SeoSections";
import {
  industries,
  getIndustryBySlug,
  services,
  locations,
  comboIndustrySlugs,
  locationCountry,
  type ComboIndustrySlug,
} from "@/lib/seo-data";

const industryToCombo: Record<string, ComboIndustrySlug> = {
  "dental-practices": "dental-marketing",
  "hair-salons": "salon-marketing",
  contractors: "contractor-marketing",
  "estate-agents": "estate-agent-marketing",
  "aesthetic-clinics": "aesthetic-clinic-marketing",
  "private-gps": "gp-marketing",
  "junk-removal": "junk-removal-marketing",
  roofers: "roofer-marketing",
  "veterinary-practices": "vet-marketing",
  "opticians": "optician-marketing",
  "physiotherapists": "physio-marketing",
  "funeral-directors": "funeral-marketing",
  "solicitors": "solicitor-marketing",
  "accountants": "accountant-marketing",
  "driving-instructors": "driving-instructor-marketing",
  "gyms": "gym-marketing",
  "mobile-mechanics": "mechanic-marketing",
  "private-nurseries": "nursery-marketing",
  "wedding-photographers": "wedding-photographer-marketing",
  "kitchen-fitters": "kitchen-fitter-marketing",
  "property-managers": "property-manager-marketing",
  "locksmiths": "locksmith-marketing",
  "oven-cleaners": "oven-cleaner-marketing",
  "mobile-car-detailers": "car-detailer-marketing",
  "tree-surgeons": "tree-surgeon-marketing",
  "cleaning-services": "cleaning-marketing",
  "bathroom-fitters": "bathroom-fitter-marketing",
  "lawn-care": "lawn-care-marketing",
  "pressure-washing": "pressure-washing-marketing",
  "fencing-contractors": "fencing-marketing",
  "med-spa": "med-spa-marketing",
};

// US-only industries: render with US cities + USD currency + en-US hreflang.
const US_ONLY_INDUSTRIES: ReadonlySet<string> = new Set(["med-spa"]);

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ind = getIndustryBySlug(slug);
  if (!ind) return {};
  const isUs = US_ONLY_INDUSTRIES.has(ind.slug);
  const url = `https://kerblabs.com/industries/${ind.slug}`;
  return {
    title: ind.pageTitle,
    description: ind.metaDescription,
    alternates: {
      canonical: url,
      languages: {
        [isUs ? "en-US" : "en-GB"]: url,
        "x-default": url,
      },
    },
    openGraph: {
      title: ind.pageTitle,
      description: ind.metaDescription,
      type: "website",
      url,
      siteName: "Kerblabs",
    },
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ind = getIndustryBySlug(slug);
  if (!ind) notFound();

  const url = `https://kerblabs.com/industries/${ind.slug}`;
  const comboSlug = industryToCombo[ind.slug];
  const isUs = US_ONLY_INDUSTRIES.has(ind.slug);
  const otherIndustries = industries.filter((i) => i.slug !== ind.slug);

  // Top cities for combo links — match the industry's country.
  const topCities = locations
    .filter((l) => l.tier === "tier1")
    .filter((l) => (isUs ? locationCountry(l) === "US" : locationCountry(l) === "GB"))
    .slice(0, 12);

  return (
    <main className="relative">
      <Schema
        breadcrumbs={[
          { name: "Home", url: "https://kerblabs.com" },
          { name: "Industries", url: "https://kerblabs.com/industries" },
          { name: ind.name, url },
        ]}
        extra={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Marketing for ${ind.name} ${isUs ? "US" : "UK"}`,
            provider: { "@id": "https://kerblabs.com/#organization" },
            description: ind.metaDescription,
            areaServed: { "@type": "Country", name: isUs ? "United States" : "United Kingdom" },
            audience: { "@type": "BusinessAudience", audienceType: ind.industryPlural },
            offers: {
              "@type": "Offer",
              price: ind.recommendedPrice.toString(),
              priceCurrency: isUs ? "USD" : "GBP",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: ind.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]}
      />

      <SeoNav />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: ind.name },
        ]}
      />

      <SeoHero
        eyebrow={`FOR UK ${ind.industryPlural.toUpperCase()}`}
        h1={ind.h1}
        highlight={ind.h1Highlight}
        subhead={ind.subhead}
        primaryCta={{
          label: "Book a free strategy call",
          href: "https://calendly.com/hello-kerblabs/15-min-discovery-call",
        }}
        secondaryCta={{ label: "See pricing", href: "/#pricing" }}
        stats={ind.stats}
      />

      <Section>
        <SectionHead
          label={`THE ${ind.industryPlural.toUpperCase()} PROBLEM SET`}
          title="What every UK"
          highlight={`${ind.industrySingular} faces.`}
          subtitle={`The challenges below are shared across UK ${ind.industryPlural.toLowerCase()} — and they all have the same fix.`}
        />
        <ProblemsGrid problems={ind.problems} />
      </Section>

      <Section background="surface">
        <SectionHead
          label="THE FULL ENGINE"
          title="Every system you need,"
          highlight="bundled."
          subtitle={`The Kerblabs platform gives ${ind.industryPlural.toLowerCase()} every growth tool in one place — no duct-taping six different tools together.`}
        />
        <FeatureGrid
          items={services.slice(0, 6).map((s) => ({
            number: s.number,
            category: s.category,
            title: s.name,
            body: s.subhead.slice(0, 130) + "…",
            href: `/services/${s.slug}`,
          }))}
        />
      </Section>

      <Section>
        <SectionHead
          label="PRICING"
          title="ROI in"
          highlight="weeks, not years."
        />
        <PricingCallout
          plan={ind.recommendedPlan}
          price={ind.recommendedPrice}
          description={ind.roiNote}
        />
      </Section>

      {comboSlug && (
        <Section background="surface">
          <SectionHead
            label={`${ind.name.toUpperCase()} BY CITY`}
            title="Find your"
            highlight="city."
            subtitle={`We work with ${ind.industryPlural.toLowerCase()} across the entire UK. Click your city for a tailored page.`}
          />
          <PillLinks
            links={topCities.map((c) => ({
              label: `${c.name} ${ind.industrySingular}s`,
              href: `/${comboSlug}/${c.slug}`,
            }))}
          />
          <div className="mt-6">
            <Link
              href="/locations"
              className="text-sm text-[color:var(--color-lime)] hover:underline"
            >
              See all UK locations →
            </Link>
          </div>
        </Section>
      )}

      <Section>
        <SectionHead label="FAQ" title="Common" highlight="questions." />
        <Faq items={ind.faqs} />
      </Section>

      <Section background="surface">
        <SectionHead label="OTHER INDUSTRIES" title="Also serving" highlight="these verticals." />
        <PillLinks
          links={otherIndustries.map((i) => ({
            label: `${i.emoji} ${i.name}`,
            href: `/industries/${i.slug}`,
          }))}
        />
      </Section>

      <CtaSection
        title="Ready to grow your"
        highlight={ind.industrySingular + "?"}
        subtitle={`Book a free 30-minute strategy call. We'll show you exactly what works for ${ind.industryPlural.toLowerCase()} like yours.`}
      />

      <SeoFooter />
    </main>
  );
}

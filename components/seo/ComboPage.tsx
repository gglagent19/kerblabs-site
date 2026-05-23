import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SeoNav from "@/components/seo/SeoNav";
import SeoFooter from "@/components/seo/SeoFooter";
import Schema from "@/components/seo/Schema";
import Breadcrumb from "@/components/Breadcrumb";
import {
  SeoHero,
  SectionHead,
  PricingCallout,
  Faq,
  CtaSection,
  Section,
  ProblemsGrid,
  PillLinks,
} from "@/components/seo/SeoSections";
import {
  locations,
  getLocationBySlug,
  services,
  getIndustryByComboSlug,
  fillIntroTemplate,
  comboIndustrySlugs,
  locationCountry,
  clampDescription,
  type ComboIndustrySlug,
  type Location,
} from "@/lib/seo-data";
import { getRichComboContent } from "@/lib/rich-content";

const comboToIndustry: Record<ComboIndustrySlug, string> = {
  "dental-marketing": "dental-practices",
  "salon-marketing": "hair-salons",
  "contractor-marketing": "contractors",
  "estate-agent-marketing": "estate-agents",
  "aesthetic-clinic-marketing": "aesthetic-clinics",
  "gp-marketing": "private-gps",
  "junk-removal-marketing": "junk-removal",
  "roofer-marketing": "roofers",
  "vet-marketing": "veterinary-practices",
  "optician-marketing": "opticians",
  "physio-marketing": "physiotherapists",
  "funeral-marketing": "funeral-directors",
  "solicitor-marketing": "solicitors",
  "accountant-marketing": "accountants",
  "driving-instructor-marketing": "driving-instructors",
  "gym-marketing": "gyms",
  "mechanic-marketing": "mobile-mechanics",
  "nursery-marketing": "private-nurseries",
  "wedding-photographer-marketing": "wedding-photographers",
  "kitchen-fitter-marketing": "kitchen-fitters",
  "property-manager-marketing": "property-managers",
  "locksmith-marketing": "locksmiths",
  "oven-cleaner-marketing": "oven-cleaners",
  "car-detailer-marketing": "mobile-car-detailers",
  "tree-surgeon-marketing": "tree-surgeons",
  "cleaning-marketing": "cleaning-services",
  "bathroom-fitter-marketing": "bathroom-fitters",
  "lawn-care-marketing": "lawn-care",
  "pressure-washing-marketing": "pressure-washing",
  "fencing-marketing": "fencing-contractors",
  "med-spa-marketing": "med-spa",
};

const COMBO_TITLES: Record<ComboIndustrySlug, string> = {
  "dental-marketing": "Dental Practice Marketing",
  "salon-marketing": "Hair Salon Marketing",
  "contractor-marketing": "Contractor Marketing",
  "estate-agent-marketing": "Estate Agent Marketing",
  "aesthetic-clinic-marketing": "Aesthetic Clinic Marketing",
  "gp-marketing": "Private GP Marketing",
  "junk-removal-marketing": "Junk Removal & House Clearance Marketing",
  "roofer-marketing": "Roofer Marketing",
  "vet-marketing": "Veterinary Practice Marketing",
  "optician-marketing": "Opticians Marketing",
  "physio-marketing": "Physiotherapists Marketing",
  "funeral-marketing": "Funeral Directors Marketing",
  "solicitor-marketing": "Solicitors Marketing",
  "accountant-marketing": "Accountants Marketing",
  "driving-instructor-marketing": "Driving Instructors Marketing",
  "gym-marketing": "Gyms Marketing",
  "mechanic-marketing": "Mobile Mechanics Marketing",
  "nursery-marketing": "Private Nurseries Marketing",
  "wedding-photographer-marketing": "Wedding Photographers Marketing",
  "kitchen-fitter-marketing": "Kitchen Fitters Marketing",
  "property-manager-marketing": "Property Managers Marketing",
  "locksmith-marketing": "Locksmiths Marketing",
  "oven-cleaner-marketing": "Oven Cleaners Marketing",
  "car-detailer-marketing": "Mobile Car Detailers Marketing",
  "tree-surgeon-marketing": "Tree Surgeons Marketing",
  "cleaning-marketing": "Cleaning Services Marketing",
  "bathroom-fitter-marketing": "Bathroom Fitters Marketing",
  "lawn-care-marketing": "Lawn Care Marketing",
  "pressure-washing-marketing": "Pressure Washing Marketing",
  "fencing-marketing": "Fencing Contractors Marketing",
  "med-spa-marketing": "Med Spa Marketing",
};

// US-only verticals (don't render UK city combos).
const US_ONLY_COMBOS: ReadonlySet<ComboIndustrySlug> = new Set([
  "med-spa-marketing",
]);

// Currency rendering helpers — US pages use $ / USD, UK stays £ / GBP.
function priceString(industryPrice: number, country: "GB" | "US"): string {
  return country === "US" ? `$${industryPrice}` : `£${industryPrice}`;
}
function currencyCode(country: "GB" | "US"): string {
  return country === "US" ? "USD" : "GBP";
}
function hreflang(country: "GB" | "US"): "en-GB" | "en-US" {
  return country === "US" ? "en-US" : "en-GB";
}

// Only Tier 1 city combos are built. UK combos serve UK cities; US-only
// combos serve US cities. Other combos had templated content with no search
// volume — they return 404 (the right SEO signal vs noindex).
//
// Default export is the UK static-params generator used by the 30 existing
// UK vertical pages. US-only verticals (e.g. /med-spa-marketing/[slug]) use
// `generateComboStaticParamsFor("med-spa-marketing")`.
export function generateComboStaticParams() {
  return locations
    .filter((l) => l.tier === "tier1" && locationCountry(l) === "GB")
    .map((l) => ({ slug: l.slug }));
}

export function generateComboStaticParamsFor(comboSlug: ComboIndustrySlug) {
  return () => {
    const isUsOnly = US_ONLY_COMBOS.has(comboSlug);
    return locations
      .filter((l) => l.tier === "tier1")
      .filter((l) =>
        isUsOnly ? locationCountry(l) === "US" : locationCountry(l) === "GB"
      )
      .map((l) => ({ slug: l.slug }));
  };
}

function comboLocationAllowed(loc: Location, comboSlug: ComboIndustrySlug): boolean {
  if (loc.tier !== "tier1") return false;
  const country = locationCountry(loc);
  if (US_ONLY_COMBOS.has(comboSlug)) return country === "US";
  return country === "GB";
}

export async function generateComboMetadata(
  comboSlug: ComboIndustrySlug,
  slug: string
): Promise<Metadata> {
  const loc = getLocationBySlug(slug);
  const industry = getIndustryByComboSlug(comboSlug);
  if (!loc || !comboLocationAllowed(loc, comboSlug) || !industry) return {};
  const country = locationCountry(loc);
  const rich = getRichComboContent(comboSlug, slug);
  const title = `${COMBO_TITLES[comboSlug]} in ${loc.name} | Kerblabs`;
  const fallbackDescription =
    country === "US"
      ? `AI marketing systems built for ${loc.name} ${industry.industryPlural.toLowerCase()}. $0 upfront. $99 refundable hold. Pay $1,200 only if we hit 2 of 3 KPIs in 60 days.`
      : `AI marketing systems built for ${loc.name} ${industry.industryPlural.toLowerCase()}. From £${industry.recommendedPrice}/mo. No lock-in. 10-day setup.`;
  const description = clampDescription(
    rich ? rich.heroSubhead : fallbackDescription,
    155
  );
  const url = `https://kerblabs.com/${comboSlug}/${slug}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        [hreflang(country)]: url,
        "x-default": url,
      },
    },
    robots: { index: true, follow: true },
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
  if (!loc || !comboLocationAllowed(loc, comboSlug) || !industry) notFound();

  const country = locationCountry(loc);
  const url = `https://kerblabs.com/${comboSlug}/${locationSlug}`;
  const rich = getRichComboContent(comboSlug, locationSlug);
  const fallbackIntro = fillIntroTemplate(industry.comboIntroTemplate, loc);
  const otherCombos = comboIndustrySlugs.filter((c) => c !== comboSlug);

  // Same-country tier-1 cities for "nearby" links.
  const sameIndustryNearby = locations
    .filter((l) => l.slug !== loc.slug && l.tier === "tier1")
    .filter((l) => locationCountry(l) === country)
    .slice(0, 5);

  // Cross-city pills for "other industries in this city" — match country.
  const sameCityOtherIndustries = otherCombos
    .filter((c) =>
      country === "US" ? US_ONLY_COMBOS.has(c) : !US_ONLY_COMBOS.has(c)
    )
    .map((c) => ({
      label: `${COMBO_TITLES[c]} in ${loc.name}`,
      href: `/${c}/${loc.slug}`,
    }));

  const priceCallout = priceString(industry.recommendedPrice, country);
  const offerCurrency = currencyCode(country);

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
            provider: { "@id": "https://kerblabs.com/#organization" },
            areaServed: {
              "@type": loc.tier === "tier1" ? "City" : "AdministrativeArea",
              name: loc.name,
            },
            audience: { "@type": "BusinessAudience", audienceType: industry.industryPlural },
            description: `AI marketing systems for ${loc.name} ${industry.industryPlural.toLowerCase()}.`,
            offers: {
              "@type": "Offer",
              price: industry.recommendedPrice.toString(),
              priceCurrency: offerCurrency,
            },
          },
          // FAQPage schema (only with rich content)
          ...(rich
            ? [
                {
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: rich.faqs.map((f) => ({
                    "@type": "Question",
                    name: f.q,
                    acceptedAnswer: { "@type": "Answer", text: f.a },
                  })),
                },
              ]
            : []),
        ]}
      />

      <SeoNav />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          {
            label: COMBO_TITLES[comboSlug],
            href: `/industries/${comboToIndustry[comboSlug]}`,
          },
          { label: loc.name },
        ]}
      />

      <SeoHero
        eyebrow={`${industry.industryPlural.toUpperCase()} IN ${loc.name.toUpperCase()}`}
        h1={industry.h1.replace("UK", loc.name).replace("US", loc.name)}
        highlight={industry.h1Highlight
          .replace("UK", loc.name)
          .replace("US", loc.name)}
        subhead={
          rich?.heroSubhead ??
          `${industry.subhead} Built for ${loc.name} businesses across ${loc.county}.`
        }
        primaryCta={{
          label:
            country === "US" ? "Claim your $99 refundable hold" : "Book a free strategy call",
          href: "https://calendly.com/hello-kerblabs/15-min-discovery-call",
        }}
        secondaryCta={{ label: "See pricing", href: "/#pricing" }}
        stats={
          rich?.stats
            ?.slice(0, 3)
            .map((s) => ({ value: s.value, label: s.label }))
        }
      />

      <Section>
        <SectionHead
          label={`THE ${loc.name.toUpperCase()} ${industry.industrySingular.toUpperCase()} MARKET`}
          title="What's actually happening"
          highlight="here."
        />
        <div className="max-w-4xl space-y-5 text-[color:var(--color-text-dim)] leading-relaxed text-base md:text-lg">
          {rich ? (
            rich.marketContext.map((para, i) => <p key={i}>{para}</p>)
          ) : (
            <p>{fallbackIntro}</p>
          )}
        </div>

        {rich && rich.stats.length > 3 && (
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl">
            {rich.stats.map((s, i) => (
              <div key={i}>
                <div className="font-display font-bold text-2xl md:text-3xl grad-lime">
                  {s.value}
                </div>
                <div className="text-xs md:text-sm text-[color:var(--color-text-dim)] mt-1.5 leading-snug">
                  {s.label}
                  {s.source && (
                    <span className="block text-[color:var(--color-text-faint)] mt-0.5">
                      Source: {s.source}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </Section>

      {/* Pain points (rich content only) */}
      {rich && rich.painPoints.length > 0 && (
        <Section background="surface">
          <SectionHead
            label={`${loc.name.toUpperCase()} ${industry.industryPlural.toUpperCase()} CHALLENGES`}
            title="What's costing you"
            highlight="customers right now."
          />
          <ProblemsGrid problems={rich.painPoints} />
        </Section>
      )}

      <Section background={rich ? "default" : "surface"}>
        <SectionHead
          label="THE SYSTEMS"
          title="What we build"
          highlight={`for ${loc.name} ${industry.industryPlural.toLowerCase()}.`}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.slice(0, 4).map((s) => (
            <a
              key={s.slug}
              href={`/services/${s.slug}`}
              className="card p-6 group block"
            >
              <span className="label text-[color:var(--color-lime)] block mb-3">
                {s.number} · {s.category}
              </span>
              <h3 className="font-display font-bold text-base mb-1.5">
                {s.shortName}
              </h3>
              <p className="text-sm text-[color:var(--color-text-dim)] leading-relaxed">
                {s.subhead.slice(0, 110)}…
              </p>
            </a>
          ))}
        </div>
      </Section>

      {rich?.approach && (
        <Section>
          <SectionHead
            label="OUR APPROACH"
            title={`How we'd work with`}
            highlight={`a ${loc.name} ${industry.industrySingular}.`}
          />
          <p className="text-[color:var(--color-text-dim)] leading-relaxed max-w-3xl text-base md:text-lg">
            {rich.approach}
          </p>
        </Section>
      )}

      <Section background="surface">
        <SectionHead
          label={country === "US" ? "PERFORMANCE-BASED PRICING" : "PRICING"}
          title="Recommended for"
          highlight={`${industry.industryPlural.toLowerCase()}.`}
        />
        <PricingCallout
          plan={industry.recommendedPlan}
          price={industry.recommendedPrice}
          currency={country === "US" ? "$" : "£"}
          priceSuffix={country === "US" ? " on KPI hit" : "/mo"}
          showSetupFee={country !== "US"}
          description={industry.roiNote}
        />
        {country === "US" && (
          <p className="mt-6 max-w-2xl text-sm text-[color:var(--color-text-dim)] leading-relaxed">
            <strong className="text-[color:var(--color-text)]">$0 upfront. $99 refundable hold.</strong>{" "}
            Pay {priceCallout} only if we hit 2 of 3 KPIs over 60 days — profile views +40%, calls/directions +30%, map-pack top 3.
          </p>
        )}
      </Section>

      <Section>
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

      <Section background="surface">
        <SectionHead
          label={`MORE FOR ${loc.name.toUpperCase()}`}
          title="Other industries"
          highlight={`in ${loc.name}.`}
        />
        <PillLinks links={sameCityOtherIndustries} />
      </Section>

      <Section>
        <SectionHead label="FAQ" title="Common" highlight="questions." />
        <Faq
          items={
            rich?.faqs ?? [
              {
                q: `Do you work with ${industry.industryPlural.toLowerCase()} across all of ${loc.name}?`,
                a: `Yes — Kerblabs serves ${industry.industryPlural.toLowerCase()} across the entire ${loc.name} area and surrounding ${loc.county}. Our delivery is fully remote.`,
              },
              {
                q: `How quickly can a ${loc.name} ${industry.industrySingular} expect results?`,
                a: `Most ${loc.name} ${industry.industryPlural.toLowerCase()} see Google Business Profile improvements within 2-4 weeks, AI voice and review systems live within 10 days, and meaningful organic ranking improvements within 6-12 weeks.`,
              },
              {
                q: `What's the minimum commitment?`,
                a:
                  country === "US"
                    ? `No long-term contracts. $0 upfront, $99 refundable hold, $1,200 only on hitting 2 of 3 KPIs over 60 days.`
                    : `No long-term contracts. Month-to-month from £${industry.recommendedPrice}/mo on the ${industry.recommendedPlan} plan. Cancel any time.`,
              },
            ]
          }
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

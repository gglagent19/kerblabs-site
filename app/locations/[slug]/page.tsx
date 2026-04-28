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
import { getRichCityContent } from "@/lib/rich-content";

const industryToCombo: Record<string, (typeof comboIndustrySlugs)[number]> = {
  "dental-practices": "dental-marketing",
  "hair-salons": "salon-marketing",
  contractors: "contractor-marketing",
  "estate-agents": "estate-agent-marketing",
};

// Only Tier 1 cities are built. Tier 2/3 had no real search volume and only
// templated content — they return 404, which is the right signal for Google
// to drop them from the index entirely (vs noindex which keeps the URL alive).
export async function generateStaticParams() {
  return locations.filter((l) => l.tier === "tier1").map((l) => ({ slug: l.slug }));
}

export const dynamicParams = false; // Reject any non-Tier-1 slug with 404

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);
  if (!loc || loc.tier !== "tier1") return {};
  const rich = getRichCityContent(slug);
  const url = `https://kerblabs.com/locations/${loc.slug}`;
  const title = `AI Marketing Agency in ${loc.name} | Kerblabs`;
  const description = rich
    ? rich.heroSubhead.slice(0, 156)
    : `Kerblabs helps ${loc.name} businesses grow with AI voice, automated reviews, and local SEO. Dental, salons, contractors, estate agents. From £97/mo.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
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
  if (!loc || loc.tier !== "tier1") notFound();

  const url = `https://kerblabs.com/locations/${loc.slug}`;
  const rich = getRichCityContent(slug);
  // Only show other Tier 1 cities as "nearby" — Tier 2/3 pages don't exist.
  const nearby = locations
    .filter((l) => l.tier === "tier1" && l.slug !== loc.slug)
    .filter((l) => l.region === loc.region || l.county === loc.county)
    .slice(0, 6);
  const nearbyFallback = locations
    .filter((l) => l.tier === "tier1" && l.slug !== loc.slug)
    .slice(0, 6);
  const nearbyDisplay = nearby.length >= 4 ? nearby : nearbyFallback;

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
            provider: { "@id": "https://kerblabs.com/#organization" },
            areaServed: {
              "@type": loc.tier === "tier1" ? "City" : "AdministrativeArea",
              name: loc.name,
              containedInPlace: { "@type": "AdministrativeArea", name: loc.county },
            },
            description: `AI-powered marketing systems for ${loc.name} local businesses including dental practices, hair salons, contractors and estate agents.`,
            offers: { "@type": "Offer", price: "97", priceCurrency: "GBP" },
          },
          // FAQPage schema (only if rich content with city-specific FAQs)
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
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: loc.name },
        ]}
      />

      <SeoHero
        eyebrow={
          rich?.heroEyebrow ??
          `SERVING ${loc.county.toUpperCase()}, ${loc.region.toUpperCase()}`
        }
        h1={rich?.heroH1 ?? `AI Growth Systems for`}
        highlight={rich?.heroHighlight ?? `${loc.name} businesses.`}
        subhead={
          rich?.heroSubhead ??
          `${loc.name} is ${loc.character}. Independent businesses across ${loc.name} — dental practices, hair salons, contractors, and estate agents — face the same challenge: missed calls, uncollected reviews, and weak local Google rankings. Kerblabs is the AI growth engine that fixes all three. From £97/mo. No lock-in. 10-day setup.`
        }
        primaryCta={{
          label: "Book a free 30-min demo",
          href: "https://calendly.com/chandraalladi07/30min",
        }}
        secondaryCta={{ label: "See pricing", href: "/#pricing" }}
        stats={
          rich?.stats?.slice(0, 3).map((s) => ({ value: s.value, label: s.label })) ?? [
            { value: "10 days", label: "From signup to live" },
            { value: "24/7", label: "AI voice answering" },
            { value: "£97", label: "Starting price/month" },
          ]
        }
      />

      {/* Rich city profile section (Tier 1 cities only) */}
      {rich && (
        <Section>
          <SectionHead
            label="WHO WE HELP"
            title={`Local businesses in`}
            highlight={loc.name + "."}
          />
          <div className="max-w-3xl space-y-5 text-[color:var(--color-text-dim)] leading-relaxed">
            {rich.cityProfile.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Stats grid (full set) */}
          {rich.stats.length > 3 && (
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
      )}

      {/* Named neighborhoods (Tier 1 only with rich content) */}
      {rich && rich.namedAreas.length > 0 && (
        <Section background="surface">
          <SectionHead
            label={`KEY ${loc.name.toUpperCase()} AREAS`}
            title="Where our"
            highlight={`${loc.name} clients are.`}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rich.namedAreas.map((a) => (
              <div key={a.name} className="card p-5">
                <h3 className="font-display font-bold text-base mb-1.5">{a.name}</h3>
                <p className="text-sm text-[color:var(--color-text-dim)] leading-relaxed">
                  {a.character}
                </p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Industries — rich version uses city-specific paragraphs */}
      <Section background={rich ? "default" : "surface"}>
        <SectionHead
          label={`INDUSTRIES IN ${loc.name.toUpperCase()}`}
          title="Your industry."
          highlight="Your area."
        />
        {rich ? (
          <div className="grid sm:grid-cols-2 gap-5">
            {industries.map((ind) => {
              const para =
                ind.slug === "dental-practices"
                  ? rich.industries.dental
                  : ind.slug === "hair-salons"
                  ? rich.industries.salon
                  : ind.slug === "contractors"
                  ? rich.industries.contractor
                  : rich.industries.estateAgent;
              return (
                <a
                  key={ind.slug}
                  href={`/${industryToCombo[ind.slug]}/${loc.slug}`}
                  className="card p-6 group block"
                >
                  <div className="text-3xl mb-3">{ind.emoji}</div>
                  <h3 className="font-display font-bold text-lg mb-2">
                    {ind.name} in {loc.name}
                  </h3>
                  <p className="text-sm text-[color:var(--color-text-dim)] leading-relaxed mb-3">
                    {para}
                  </p>
                  <span className="text-xs text-[color:var(--color-lime)]">
                    See {ind.industrySingular} marketing in {loc.name} →
                  </span>
                </a>
              );
            })}
          </div>
        ) : (
          <FeatureGrid
            items={industries.map((ind) => ({
              title: `${ind.emoji} ${ind.name} in ${loc.name}`,
              body: `${loc.name} ${ind.industryPlural.toLowerCase()} use Kerblabs to win more customers, manage reviews, and never miss a call.`,
              href: `/${industryToCombo[ind.slug]}/${loc.slug}`,
            }))}
            columns={4}
          />
        )}
      </Section>

      <Section background={rich ? "surface" : "default"}>
        <SectionHead label="THE FULL ENGINE" title="Eight services." highlight="One platform." />
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
          links={nearbyDisplay.map((n) => ({
            label: n.name,
            href: `/locations/${n.slug}`,
          }))}
        />
      </Section>

      <Section>
        <SectionHead label="FAQ" title="Common questions" highlight={`from ${loc.name}.`} />
        <Faq
          items={
            rich?.faqs ?? [
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
                a: `Traditional agencies charge £2,000-10,000/month retainers and deliver reports. We charge from £97/mo and deliver actual systems.`,
              },
              {
                q: `What's the minimum commitment?`,
                a: `No long-term contracts. Month-to-month from £97/mo. Cancel any time.`,
              },
            ]
          }
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

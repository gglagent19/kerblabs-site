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
import { industries } from "@/lib/seo-data";
import { getAlternates } from "@/lib/hreflang";

// US-only industries get a separate group (currently just med-spa).
const US_ONLY_INDUSTRY_SLUGS: ReadonlySet<string> = new Set(["med-spa"]);

export const metadata: Metadata = {
  title: "Industries We Serve — AI Marketing for Local Businesses | Kerblabs",
  description:
    "Kerblabs builds AI marketing systems for 30+ UK industries — dental practices, hair salons, contractors, estate agents, aesthetic clinics, vets, opticians, solicitors, accountants and more — plus US med spas. From £97/mo.",
  alternates: getAlternates("/industries", "GB"),
  openGraph: {
    title: "Industries We Serve | Kerblabs",
    description:
      "AI marketing automation for 30+ UK local-business verticals and US med spas. From £97/mo, no lock-in, live in 10 days.",
    type: "website",
    url: "https://kerblabs.com/industries",
    siteName: "Kerblabs",
  },
};

export default function IndustriesHub() {
  const ukIndustries = industries.filter((i) => !US_ONLY_INDUSTRY_SLUGS.has(i.slug));
  const usIndustries = industries.filter((i) => US_ONLY_INDUSTRY_SLUGS.has(i.slug));

  // One-sentence description per industry — derived from the first sentence
  // of the existing subhead so we don't duplicate or hand-write copy.
  const oneLiner = (subhead: string): string => {
    const first = subhead.split(/(?<=[.!?])\s+/)[0] ?? subhead;
    return first.length > 180 ? first.slice(0, 177) + "…" : first;
  };

  return (
    <main className="relative">
      <Schema
        breadcrumbs={[
          { name: "Home", url: "https://kerblabs.com" },
          { name: "Industries", url: "https://kerblabs.com/industries" },
        ]}
        extra={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Industries served by Kerblabs",
            url: "https://kerblabs.com/industries",
            description:
              "All industry verticals served by Kerblabs across the UK and the US med-spa market.",
            isPartOf: { "@id": "https://kerblabs.com/#website" },
            hasPart: industries.map((i) => ({
              "@type": "WebPage",
              name: i.name,
              url: `https://kerblabs.com/industries/${i.slug}`,
              description: i.metaDescription,
            })),
          },
        ]}
      />

      <SeoNav />

      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Industries" }]} />

      <SeoHero
        eyebrow="30+ INDUSTRY VERTICALS"
        h1="AI marketing built for"
        highlight="your industry."
        subhead="Kerblabs is the bundled AI growth platform for independent local businesses. Every page below is a dedicated playbook for that vertical — the exact problems we solve, the recommended plan, the city-by-city specialist pages, and the FAQs that matter to operators in that industry. Pick yours."
        primaryCta={{
          label: "Book a free demo",
          href: "https://calendly.com/hello-kerblabs/15-min-discovery-call",
        }}
        secondaryCta={{ label: "See pricing", href: "/#pricing" }}
        stats={[
          { value: `${ukIndustries.length}`, label: "UK industries with dedicated pages" },
          { value: `${usIndustries.length}`, label: "US verticals (med spa, 2026)" },
          { value: "From £97", label: "/mo, no lock-in" },
        ]}
      />

      <Section>
        <SectionHead
          label="UK INDUSTRIES"
          title="Find your"
          highlight="vertical."
          subtitle="Every UK industry below has a dedicated page with vertical-specific stats, problems, recommended plan, ROI note, and FAQs. Click through to your industry to see the exact playbook."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ukIndustries.map((i) => (
            <Link
              key={i.slug}
              href={`/industries/${i.slug}`}
              className="card p-6 group block h-full flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl leading-none" aria-hidden="true">
                  {i.emoji}
                </span>
                <h3 className="font-display font-bold text-base md:text-lg group-hover:text-[color:var(--color-lime)] transition">
                  {i.name}
                </h3>
              </div>
              <p className="text-sm text-[color:var(--color-text-dim)] leading-relaxed flex-1">
                {oneLiner(i.subhead)}
              </p>
              <span className="mt-4 text-xs text-[color:var(--color-lime)] tracking-wide inline-flex items-center gap-1.5">
                See the {i.industrySingular} playbook →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {usIndustries.length > 0 && (
        <Section background="surface">
          <SectionHead
            label="US INDUSTRIES (NEW, 2026)"
            title="Now serving"
            highlight="US verticals."
            subtitle="Kerblabs is expanding into the United States in 2026, starting with the med-spa vertical across five flagship cities."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {usIndustries.map((i) => (
              <Link
                key={i.slug}
                href={`/industries/${i.slug}`}
                className="card p-6 group block h-full flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl leading-none" aria-hidden="true">
                    {i.emoji}
                  </span>
                  <h3 className="font-display font-bold text-base md:text-lg group-hover:text-[color:var(--color-lime)] transition">
                    {i.name}
                  </h3>
                </div>
                <p className="text-sm text-[color:var(--color-text-dim)] leading-relaxed flex-1">
                  {oneLiner(i.subhead)}
                </p>
                <span className="mt-4 text-xs text-[color:var(--color-lime)] tracking-wide inline-flex items-center gap-1.5">
                  See the {i.industrySingular} playbook →
                </span>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <Section>
        <SectionHead
          label="DON'T SEE YOURS?"
          title="The platform works"
          highlight="for any local business."
          subtitle="The pages above cover the verticals with the highest search volume and clearest economics. Kerblabs is industry-agnostic — if you're an independent local business with under 10 staff and customers who find you on Google, the platform applies. Book a demo and we'll tailor it to your trade."
        />
      </Section>

      <CtaSection
        title="Ready to grow your"
        highlight="business?"
        subtitle="Book a free 30-minute strategy call. We'll show you exactly which plan fits your industry, your stage, and your budget."
      />

      <SeoFooter />
    </main>
  );
}

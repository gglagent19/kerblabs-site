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
  Faq,
  CtaSection,
  Section,
} from "@/components/seo/SeoSections";
import {
  comparisons,
  getComparisonBySlug,
} from "@/lib/comparisons";
import { getAlternates } from "@/lib/hreflang";

export async function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cmp = getComparisonBySlug(slug);
  if (!cmp) return {};
  const url = `https://kerblabs.com/vs/${cmp.slug}`;
  return {
    title: cmp.seoTitle,
    description: cmp.metaDescription,
    alternates: getAlternates(`/vs/${cmp.slug}`, "GB"),
    openGraph: {
      title: cmp.seoTitle,
      description: cmp.metaDescription,
      type: "article",
      url,
      siteName: "Kerblabs",
    },
    robots: { index: true, follow: true },
  };
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cmp = getComparisonBySlug(slug);
  if (!cmp) notFound();

  const url = `https://kerblabs.com/vs/${cmp.slug}`;
  const otherComparisons = comparisons.filter((c) => c.slug !== cmp.slug);

  // ─── JSON-LD: Article + competitor Organization + FAQPage ────────
  // We intentionally DO NOT emit Review/AggregateRating schema that references
  // the competitor — it's a factual/legal hazard. Article schema is the right
  // primitive for a comparison piece, and we link Kerblabs by @id back to the
  // root Organization defined in components/seo/Schema.tsx.
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cmp.seoTitle,
    description: cmp.metaDescription,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    inLanguage: "en-GB",
    author: { "@id": "https://kerblabs.com/#organization" },
    publisher: { "@id": "https://kerblabs.com/#organization" },
    about: [
      { "@id": "https://kerblabs.com/#organization" },
      { "@id": cmp.competitor.url },
    ],
    datePublished: "2026-05-22",
    dateModified: "2026-05-22",
  };

  const competitorSchema: {
    "@context": string;
    "@type": string;
    "@id": string;
    name: string;
    description: string;
    sameAs?: string[];
  } = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": cmp.competitor.url,
    name: cmp.competitor.name,
    description: cmp.competitor.description,
  };
  if (cmp.competitor.sameAs && cmp.competitor.sameAs.length > 0) {
    competitorSchema.sameAs = cmp.competitor.sameAs;
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cmp.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="relative">
      <Schema
        breadcrumbs={[
          { name: "Home", url: "https://kerblabs.com" },
          { name: "Comparisons", url: "https://kerblabs.com/vs" },
          { name: `Kerblabs vs ${cmp.competitorLabel}`, url },
        ]}
        extra={[articleSchema, competitorSchema, faqSchema]}
      />

      <SeoNav />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Comparisons", href: "/vs" },
          { label: `vs ${cmp.competitorLabel}` },
        ]}
      />

      <SeoHero
        eyebrow={cmp.eyebrow}
        h1={cmp.h1}
        highlight={cmp.h1Highlight}
        subhead={cmp.subhead}
        primaryCta={{
          label: "Book a free demo",
          href: "https://calendly.com/hello-kerblabs/15-min-discovery-call",
        }}
        secondaryCta={{ label: "See pricing", href: "/#pricing" }}
      />

      {/* ─── What each does ─────────────────────────────────────── */}
      <Section>
        <SectionHead
          label="WHAT EACH DOES"
          title="Two different tools"
          highlight="for two different jobs."
        />
        <div className="grid md:grid-cols-2 gap-5">
          <div className="card p-6 md:p-8">
            <div className="label mb-3 text-[color:var(--color-lime)]">
              Kerblabs
            </div>
            <h3 className="font-display font-bold text-xl md:text-2xl mb-3">
              Your owned growth system
            </h3>
            <p className="text-sm md:text-base text-[color:var(--color-text-dim)] leading-relaxed">
              {cmp.whatEachDoes.kerblabs}
            </p>
          </div>
          <div className="card p-6 md:p-8">
            <div className="label mb-3">{cmp.competitorLabel}</div>
            <h3 className="font-display font-bold text-xl md:text-2xl mb-3">
              {cmp.competitor.whatItIs}
            </h3>
            <p className="text-sm md:text-base text-[color:var(--color-text-dim)] leading-relaxed">
              {cmp.whatEachDoes.competitor}
            </p>
          </div>
        </div>
      </Section>

      {/* ─── Pricing comparison ─────────────────────────────────── */}
      <Section background="surface">
        <SectionHead
          label="PRICING"
          title="What you actually"
          highlight="pay."
          subtitle="We've stated only what we can verify — for competitor pricing details that change over time, we link out rather than guess."
        />
        <div className="grid md:grid-cols-2 gap-5">
          <div className="card p-6 md:p-8">
            <div className="label mb-3 text-[color:var(--color-lime)]">
              Kerblabs pricing
            </div>
            <p className="text-sm md:text-base text-[color:var(--color-text-dim)] leading-relaxed">
              {cmp.pricingComparison.kerblabs}
            </p>
          </div>
          <div className="card p-6 md:p-8">
            <div className="label mb-3">
              {cmp.competitorLabel} pricing
            </div>
            <p className="text-sm md:text-base text-[color:var(--color-text-dim)] leading-relaxed">
              {cmp.pricingComparison.competitor}
            </p>
            <p className="mt-4 text-xs text-[color:var(--color-text-faint)] leading-relaxed">
              {cmp.competitor.pricingNote}
            </p>
          </div>
        </div>
      </Section>

      {/* ─── Feature matrix ─────────────────────────────────────── */}
      <Section>
        <SectionHead
          label="FEATURE MATRIX"
          title="Side by side,"
          highlight="row by row."
        />
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="border-b border-[color:var(--color-border)]">
                <th className="text-left font-display font-bold py-4 pr-4 w-1/3">
                  Capability
                </th>
                <th className="text-left font-display font-bold py-4 pr-4 w-1/3 text-[color:var(--color-lime)]">
                  Kerblabs
                </th>
                <th className="text-left font-display font-bold py-4 w-1/3">
                  {cmp.competitorLabel}
                </th>
              </tr>
            </thead>
            <tbody>
              {cmp.featureMatrix.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-[color:var(--color-border)] align-top"
                >
                  <td className="py-4 pr-4 font-medium">{row.feature}</td>
                  <td className="py-4 pr-4 text-[color:var(--color-text-dim)] leading-relaxed">
                    {row.kerblabs}
                  </td>
                  <td className="py-4 text-[color:var(--color-text-dim)] leading-relaxed">
                    {row.competitor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ─── Who each is best for ───────────────────────────────── */}
      <Section background="surface">
        <SectionHead
          label="WHO IT'S FOR"
          title="Best fit"
          highlight="for each."
        />
        <div className="grid md:grid-cols-2 gap-5">
          <div className="card p-6 md:p-8">
            <div className="label mb-3 text-[color:var(--color-lime)]">
              Choose Kerblabs if
            </div>
            <p className="text-sm md:text-base text-[color:var(--color-text-dim)] leading-relaxed">
              {cmp.bestFor.kerblabs}
            </p>
          </div>
          <div className="card p-6 md:p-8">
            <div className="label mb-3">
              Choose {cmp.competitorLabel} if
            </div>
            <p className="text-sm md:text-base text-[color:var(--color-text-dim)] leading-relaxed">
              {cmp.bestFor.competitor}
            </p>
          </div>
        </div>
      </Section>

      {/* ─── Why customers choose Kerblabs ──────────────────────── */}
      <Section>
        <SectionHead
          label="WHY KERBLABS"
          title="Why customers choose"
          highlight="the full stack."
          subtitle="Different tools for different jobs — but here's the legitimate case for the integrated, owned approach."
        />
        <div className="grid sm:grid-cols-2 gap-4">
          {cmp.whyKerblabs.map((it) => (
            <div key={it.title} className="card p-6">
              <h3 className="font-display font-bold text-base md:text-lg mb-2">
                {it.title}
              </h3>
              <p className="text-sm text-[color:var(--color-text-dim)] leading-relaxed">
                {it.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── FAQ ────────────────────────────────────────────────── */}
      <Section background="surface">
        <SectionHead
          label="FAQ"
          title="Common"
          highlight="questions."
        />
        <Faq items={cmp.faqs} />
      </Section>

      {/* ─── Other comparisons ──────────────────────────────────── */}
      {otherComparisons.length > 0 && (
        <Section>
          <SectionHead
            label="MORE COMPARISONS"
            title="Other"
            highlight="comparisons."
          />
          <div className="grid sm:grid-cols-2 gap-4">
            {otherComparisons.map((o) => (
              <Link
                key={o.slug}
                href={`/vs/${o.slug}`}
                className="card p-6 group block"
              >
                <h3 className="font-display font-bold text-base md:text-lg mb-2">
                  Kerblabs vs {o.competitorLabel}
                </h3>
                <p className="text-sm text-[color:var(--color-text-dim)] leading-relaxed">
                  {o.indexTeaser}
                </p>
                <span className="mt-4 text-xs text-[color:var(--color-lime)] tracking-wide inline-flex items-center gap-1.5">
                  Read comparison →
                </span>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <CtaSection
        title="Still weighing it up?"
        highlight="Talk to us."
        subtitle={cmp.ctaSubtitle}
      />

      <SeoFooter />
    </main>
  );
}

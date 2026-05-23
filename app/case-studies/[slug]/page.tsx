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
  StepsList,
  CtaSection,
  Section,
  PillLinks,
} from "@/components/seo/SeoSections";
import { caseStudies, getCaseStudyBySlug } from "@/lib/case-studies";
import { getAlternates } from "@/lib/hreflang";

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return {};

  const url = `https://kerblabs.com/case-studies/${cs.slug}`;
  const displayName = cs.anonymized
    ? `Anonymized ${cs.industry.toLowerCase()}, ${cs.city}`
    : cs.clientName;
  const title = `${displayName} — Case Study | Kerblabs`;

  return {
    title,
    description: cs.metaDescription,
    // Country-aware hreflang so US case studies are flagged en-US and UK ones en-GB.
    alternates: getAlternates(`/case-studies/${cs.slug}`, cs.country === "US" ? "US" : "GB"),
    openGraph: {
      title,
      description: cs.metaDescription,
      type: "article",
      url,
      siteName: "Kerblabs",
      publishedTime: cs.dateCompleted,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  const url = `https://kerblabs.com/case-studies/${cs.slug}`;
  const displayName = cs.anonymized
    ? `Anonymized ${cs.industry.toLowerCase()}, ${cs.city}`
    : cs.clientName;

  const otherCaseStudies = caseStudies.filter((c) => c.slug !== cs.slug);

  // Article schema — about the engagement.
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: `${displayName} — Kerblabs case study`,
    description: cs.metaDescription,
    url,
    datePublished: cs.dateCompleted,
    dateModified: cs.dateCompleted,
    inLanguage: cs.country === "US" ? "en-US" : "en-GB",
    author: { "@id": "https://kerblabs.com/#organization" },
    publisher: { "@id": "https://kerblabs.com/#organization" },
    about: cs.servicesUsed.map((s) => ({ "@type": "Thing", name: s })),
    keywords: cs.servicesUsed.join(", "),
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  // Review schema — Kerblabs (the service) being reviewed by the client.
  // itemReviewed points to the Kerblabs Organization @id, per the spec.
  const reviewSchema = cs.quote
    ? {
        "@context": "https://schema.org",
        "@type": "Review",
        "@id": `${url}#review`,
        itemReviewed: { "@id": "https://kerblabs.com/#organization" },
        reviewBody: cs.quote.text,
        author: {
          "@type": "Person",
          name: cs.quote.attribution,
          ...(cs.quote.role ? { jobTitle: cs.quote.role } : {}),
        },
        publisher: { "@id": "https://kerblabs.com/#organization" },
        datePublished: cs.dateCompleted,
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
      }
    : null;

  const extraSchema = reviewSchema ? [articleSchema, reviewSchema] : [articleSchema];

  return (
    <main className="relative">
      <Schema
        breadcrumbs={[
          { name: "Home", url: "https://kerblabs.com" },
          { name: "Case Studies", url: "https://kerblabs.com/case-studies" },
          { name: displayName, url },
        ]}
        extra={extraSchema}
      />

      <SeoNav />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
          { label: displayName },
        ]}
      />

      <SeoHero
        eyebrow={`${cs.industry.toUpperCase()} · ${cs.city.toUpperCase()}`}
        h1={displayName}
        highlight=""
        subhead={cs.summary}
        primaryCta={{
          label: "Book a free demo",
          href: "https://calendly.com/hello-kerblabs/15-min-discovery-call",
        }}
        secondaryCta={{ label: "All case studies", href: "/case-studies" }}
        stats={cs.headlineMetrics.map((m) => ({
          value: m.value,
          label: m.label,
        }))}
      />

      {cs.anonymized && cs.anonymizedNotice && (
        <Section>
          <div className="max-w-3xl card p-5 md:p-6 border-[color:var(--color-warm)]/30 bg-[color:var(--color-warm)]/[0.04]">
            <div className="flex gap-3 items-start">
              <span className="shrink-0 mt-0.5 text-[color:var(--color-warm)]">
                ⚠
              </span>
              <div>
                <div className="label mb-1.5 text-[color:var(--color-warm)]">
                  Disclosure
                </div>
                <p className="text-sm md:text-base text-[color:var(--color-text-dim)] leading-relaxed">
                  {cs.anonymizedNotice}
                </p>
              </div>
            </div>
          </div>
        </Section>
      )}

      <Section>
        <SectionHead
          label="THE PROBLEM"
          title="What they came"
          highlight="to us with."
        />
        <div className="max-w-3xl text-base md:text-lg text-[color:var(--color-text-dim)] leading-relaxed">
          <p>{cs.problem}</p>
        </div>
      </Section>

      <Section background="surface">
        <SectionHead
          label="WHAT WE DID"
          title="The Kerblabs"
          highlight="playbook."
        />
        <StepsList
          steps={cs.solution.map((s, i) => ({
            step: String(i + 1).padStart(2, "0"),
            title: s.headline,
            body: s.body,
          }))}
        />
      </Section>

      <Section>
        <SectionHead
          label="RESULTS"
          title="Before, after,"
          highlight="and how long it took."
        />
        <div className="overflow-x-auto -mx-2 md:mx-0">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-[color:var(--color-border)]">
                <th className="font-display text-sm tracking-wide text-[color:var(--color-text-faint)] uppercase py-3 pr-4">
                  Metric
                </th>
                <th className="font-display text-sm tracking-wide text-[color:var(--color-text-faint)] uppercase py-3 px-4">
                  Before
                </th>
                <th className="font-display text-sm tracking-wide text-[color:var(--color-text-faint)] uppercase py-3 px-4">
                  After
                </th>
                <th className="font-display text-sm tracking-wide text-[color:var(--color-text-faint)] uppercase py-3 pl-4">
                  Period
                </th>
              </tr>
            </thead>
            <tbody>
              {cs.results.map((r) => (
                <tr
                  key={r.metric}
                  className="border-b border-[color:var(--color-border)]/60 align-top"
                >
                  <td className="py-4 pr-4">
                    <div className="font-medium text-sm md:text-base">
                      {r.metric}
                    </div>
                    {r.note && (
                      <div className="text-xs text-[color:var(--color-text-faint)] mt-1 leading-relaxed">
                        {r.note}
                      </div>
                    )}
                  </td>
                  <td className="py-4 px-4 text-sm text-[color:var(--color-text-dim)]">
                    {r.before}
                  </td>
                  <td className="py-4 px-4 text-sm font-display font-bold grad-lime">
                    {r.after}
                  </td>
                  <td className="py-4 pl-4 text-sm text-[color:var(--color-text-dim)]">
                    {r.period}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {cs.quote && (
        <Section background="surface">
          <div className="max-w-3xl mx-auto text-center">
            <div className="label mb-6 text-[color:var(--color-lime)]">
              IN THEIR WORDS
            </div>
            <blockquote className="font-display text-2xl md:text-4xl leading-[1.15] tracking-[-0.01em] mb-8">
              <span className="grad-lime">&ldquo;</span>
              {cs.quote.text}
              <span className="grad-lime">&rdquo;</span>
            </blockquote>
            <div className="text-sm text-[color:var(--color-text-dim)]">
              <span className="font-bold text-[color:var(--color-text)]">
                {cs.quote.attribution}
              </span>
              {cs.quote.role && (
                <>
                  <span className="text-[color:var(--color-text-faint)]"> · </span>
                  {cs.quote.role}
                </>
              )}
            </div>
          </div>
        </Section>
      )}

      <Section>
        <SectionHead
          label="SERVICES USED"
          title="The systems"
          highlight="that did the work."
        />
        <div className="flex flex-wrap gap-2.5">
          {cs.servicesUsed.map((s) => (
            <span
              key={s}
              className="px-4 py-2 rounded-full bg-[color:var(--color-surface)] border border-[color:var(--color-border)] text-xs md:text-sm text-[color:var(--color-text-dim)]"
            >
              {s}
            </span>
          ))}
        </div>
        {cs.plan && (
          <p className="mt-6 text-sm text-[color:var(--color-text-faint)]">
            Plan: <span className="text-[color:var(--color-text-dim)]">{cs.plan}</span>
          </p>
        )}
      </Section>

      {otherCaseStudies.length > 0 && (
        <Section background="surface">
          <SectionHead
            label="MORE CASE STUDIES"
            title="Other shops,"
            highlight="other industries."
          />
          <PillLinks
            links={otherCaseStudies.map((c) => ({
              label: `${c.industryEmoji} ${c.industry} — ${c.city}`,
              href: `/case-studies/${c.slug}`,
            }))}
          />
          <div className="mt-6">
            <Link
              href="/case-studies"
              className="text-sm text-[color:var(--color-lime)] hover:underline"
            >
              ← Back to all case studies
            </Link>
          </div>
        </Section>
      )}

      <CtaSection
        title="Want a case study"
        highlight="like this one?"
        subtitle="Book a free 30-minute call. We'll look at the leaks in your current setup and tell you exactly which ones we'd plug first."
      />

      <SeoFooter />
    </main>
  );
}

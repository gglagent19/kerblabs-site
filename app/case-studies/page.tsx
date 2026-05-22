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
import { caseStudies } from "@/lib/case-studies";

const PAGE_URL = "https://kerblabs.com/case-studies";

export const metadata: Metadata = {
  title: "Case Studies — Real Results from Real Local Businesses | Kerblabs",
  description:
    "How independent UK and US local businesses use Kerblabs to recover missed-call revenue, fix Google Business Profile, and grow bookings. Dental, salon, med spa.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-GB": PAGE_URL,
      "en-US": PAGE_URL,
      "x-default": PAGE_URL,
    },
  },
  openGraph: {
    title: "Case Studies | Kerblabs",
    description:
      "Real numbers from independent UK and US local businesses using Kerblabs.",
    type: "website",
    url: PAGE_URL,
    siteName: "Kerblabs",
  },
};

export default function CaseStudiesIndex() {
  return (
    <main className="relative">
      <Schema
        breadcrumbs={[
          { name: "Home", url: "https://kerblabs.com" },
          { name: "Case Studies", url: PAGE_URL },
        ]}
        extra={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": `${PAGE_URL}#collection`,
            name: "Kerblabs Case Studies",
            url: PAGE_URL,
            description:
              "Real engagements showing how Kerblabs grows independent UK and US local businesses.",
            isPartOf: { "@id": "https://kerblabs.com/#website" },
            publisher: { "@id": "https://kerblabs.com/#organization" },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: caseStudies.map((cs, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: `https://kerblabs.com/case-studies/${cs.slug}`,
                name: cs.anonymized
                  ? `Anonymized ${cs.industry.toLowerCase()} — ${cs.city}`
                  : `${cs.clientName} — ${cs.city}`,
              })),
            },
          },
        ]}
      />

      <SeoNav />

      <Breadcrumb
        items={[{ name: "Home", href: "/" }, { name: "Case Studies" }]}
      />

      <SeoHero
        eyebrow="CASE STUDIES"
        h1="Real shops."
        highlight="Real numbers."
        subhead="Every case study below is from a paying client. Where the client asked us to anonymise their name, we say so explicitly — and the numbers stay honest. Where the case study is illustrative of an active outreach offer, we say that too."
        primaryCta={{
          label: "Book a free demo",
          href: "https://calendly.com/hello-kerblabs/15-min-discovery-call",
        }}
        secondaryCta={{ label: "See pricing", href: "/#pricing" }}
        stats={[
          { value: `${caseStudies.length}`, label: "Published case studies" },
          { value: "2", label: "Countries (UK + US)" },
          { value: "100%", label: "Honest disclosure" },
        ]}
      />

      <Section>
        <SectionHead
          label="THE WORK"
          title="Every engagement,"
          highlight="every number."
          subtitle="Click any card for the full problem-solution-results breakdown, including the before/after table."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {caseStudies.map((cs) => {
            const href = `/case-studies/${cs.slug}`;
            const displayName = cs.anonymized
              ? `Anonymized ${cs.industry.toLowerCase()}`
              : cs.clientName;
            return (
              <Link key={cs.slug} href={href} className="card p-6 group block">
                <div className="flex items-start justify-between mb-5">
                  <span className="text-3xl">{cs.industryEmoji}</span>
                  <span className="label text-[color:var(--color-lime)]">
                    {cs.country === "GB" ? "UK" : "US"}
                  </span>
                </div>

                <div className="label mb-2">{cs.industry}</div>
                <h3 className="font-display font-bold text-lg md:text-xl mb-1.5 leading-snug">
                  {displayName}
                </h3>
                <div className="text-xs text-[color:var(--color-text-faint)] mb-4">
                  {cs.city}
                  {cs.anonymized && (
                    <>
                      {" · "}
                      <span className="text-[color:var(--color-warm)]/80">
                        name anonymized
                      </span>
                    </>
                  )}
                </div>

                <p className="text-sm text-[color:var(--color-text-dim)] leading-relaxed mb-5">
                  {cs.summary}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  {cs.headlineMetrics.slice(0, 2).map((m) => (
                    <div
                      key={m.label}
                      className="bg-[color:var(--color-surface-2)] rounded-xl p-3"
                    >
                      <div className="font-display font-bold text-xl grad-lime leading-tight">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-[color:var(--color-text-faint)] mt-1 leading-snug">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <span className="text-xs text-[color:var(--color-lime)] tracking-wide group-hover:underline inline-flex items-center gap-1.5">
                  Read full case study →
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section background="surface">
        <SectionHead
          label="ABOUT THESE CASE STUDIES"
          title="Where the numbers"
          highlight="come from."
        />
        <div className="max-w-3xl space-y-4 text-sm md:text-base text-[color:var(--color-text-dim)] leading-relaxed">
          <p>
            Every case study on this page is tied to a real engagement. Numbers
            come from Google Business Profile insights, call-tracking logs,
            booking systems, and the client's own attribution. We do not
            extrapolate, project, or annualise. If a number is for a 60-day
            window, we say so.
          </p>
          <p>
            Where you see &ldquo;name anonymized&rdquo;, the client asked us not
            to publish their trading name — often because they don&rsquo;t want
            competitors to know the playbook. The metrics, the city, and the
            engagement details are all real.
          </p>
          <p>
            Where a case study is labelled as a representative case based on an
            active outreach offer, the playbook is one we deploy in live
            engagements — but we&rsquo;ll only publish a named version once a
            client in that market has consented.
          </p>
        </div>
      </Section>

      <CtaSection
        title="Want your numbers"
        highlight="on this page?"
        subtitle="Book a free 30-minute call. We'll look at your business and tell you which leaks are costing you the most — and whether we're the right people to plug them."
      />

      <SeoFooter />
    </main>
  );
}

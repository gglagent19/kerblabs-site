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
import { comparisons } from "@/lib/comparisons";
import { getAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Kerblabs vs … — Honest Comparisons for Local Marketing in 2026",
  description:
    "Honest, factual comparisons of Kerblabs vs Treatwell, Checkatrade, and DIY Google Business Profile management for UK local businesses in 2026.",
  alternates: getAlternates("/vs", "GB"),
  openGraph: {
    title: "Kerblabs Comparisons — vs Treatwell, Checkatrade and DIY GBP",
    description:
      "Honest comparisons for UK local businesses choosing between Kerblabs, marketplaces, directories and doing it themselves.",
    type: "website",
    url: "https://kerblabs.com/vs",
    siteName: "Kerblabs",
  },
  robots: { index: true, follow: true },
};

export default function ComparisonsIndex() {
  return (
    <main className="relative">
      <Schema
        breadcrumbs={[
          { name: "Home", url: "https://kerblabs.com" },
          { name: "Comparisons", url: "https://kerblabs.com/vs" },
        ]}
      />

      <SeoNav />

      <Breadcrumb
        items={[{ name: "Home", href: "/" }, { name: "Comparisons" }]}
      />

      <SeoHero
        eyebrow="COMPARISONS"
        h1="Kerblabs vs the"
        highlight="alternatives."
        subhead="If you're weighing Kerblabs against a marketplace like Treatwell, a directory like Checkatrade, or just doing it yourself — these comparisons lay out, factually, what each is built for, how pricing works, and which kind of local business each fits best. We don't pretend the alternatives are bad; they're different tools for different jobs."
        primaryCta={{
          label: "Book a free demo",
          href: "https://calendly.com/hello-kerblabs/15-min-discovery-call",
        }}
        secondaryCta={{ label: "See pricing", href: "/#pricing" }}
      />

      <Section>
        <SectionHead
          label="ALL COMPARISONS"
          title="Pick the one that"
          highlight="matches your decision."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {comparisons.map((c) => (
            <Link
              key={c.slug}
              href={`/vs/${c.slug}`}
              className="card p-6 group block h-full flex flex-col"
            >
              <span className="label mb-3 text-[color:var(--color-lime)]">
                vs {c.competitorLabel}
              </span>
              <h3 className="font-display font-bold text-lg md:text-xl mb-2">
                Kerblabs vs {c.competitorLabel}
              </h3>
              <p className="text-sm text-[color:var(--color-text-dim)] leading-relaxed flex-1">
                {c.indexTeaser}
              </p>
              <span className="mt-5 text-xs text-[color:var(--color-lime)] tracking-wide group-hover:underline inline-flex items-center gap-1.5">
                Read comparison →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CtaSection
        title="Want a tailored answer?"
        highlight="Book a free strategy call."
        subtitle="30 minutes, free, no pitch. We'll review your current setup — your Google profile, any marketplaces or directories you're paying for, and what you're doing manually — and tell you honestly whether Kerblabs is the right fit."
      />

      <SeoFooter />
    </main>
  );
}

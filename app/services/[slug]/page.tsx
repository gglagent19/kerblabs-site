import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import SeoNav from "@/components/seo/SeoNav";
import SeoFooter from "@/components/seo/SeoFooter";
import Schema from "@/components/seo/Schema";
import {
  Breadcrumb,
  SeoHero,
  SectionHead,
  ProblemsGrid,
  StepsList,
  PricingCallout,
  Faq,
  CtaSection,
  Section,
  PillLinks,
} from "@/components/seo/SeoSections";
import { services, getServiceBySlug, industries } from "@/lib/seo-data";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  const url = `https://kerblabs.com/services/${service.slug}`;
  return {
    title: service.pageTitle,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: service.pageTitle,
      description: service.metaDescription,
      type: "website",
      url,
      siteName: "Kerblabs",
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const url = `https://kerblabs.com/services/${service.slug}`;
  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <main className="relative">
      <Schema
        breadcrumbs={[
          { name: "Home", url: "https://kerblabs.com" },
          { name: "Services", url: "https://kerblabs.com/#store" },
          { name: service.name, url },
        ]}
        extra={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.name,
            provider: { "@type": "Organization", name: "Kerblabs" },
            description: service.metaDescription,
            areaServed: { "@type": "Country", name: "United Kingdom" },
            offers: {
              "@type": "Offer",
              price: service.pricingFromMonthly.toString(),
              priceCurrency: "GBP",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: service.faqs.map((f) => ({
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
          { name: "Home", href: "/" },
          { name: "Services", href: "/#store" },
          { name: service.name },
        ]}
      />

      <SeoHero
        eyebrow={service.category.toUpperCase()}
        h1={service.h1}
        highlight={service.h1Highlight}
        subhead={service.subhead}
        primaryCta={{
          label: "Book a free demo",
          href: "https://calendly.com/chandraalladi07/30min",
        }}
        secondaryCta={{ label: "See pricing", href: "/#pricing" }}
        stats={[
          { value: `£${service.pricingFromMonthly}`, label: `/mo on ${service.pricingPlan} plan` },
          { value: "10 days", label: "From signup to live" },
          { value: "No lock-in", label: "Month-to-month" },
        ]}
      />

      <Section>
        <SectionHead
          label="THE PROBLEM"
          title="Why local businesses lose money"
          highlight="every day."
          subtitle={`Most ${service.shortName.toLowerCase()} problems share the same root cause — and we fix all of them with one system.`}
        />
        <ProblemsGrid problems={service.problems} />
      </Section>

      <Section background="surface">
        <SectionHead label="HOW IT WORKS" title="From inbound" highlight="to booked." />
        <StepsList steps={service.howItWorks} />
      </Section>

      <Section>
        <SectionHead label="PRICING" title="Built for" highlight="local budgets." />
        <PricingCallout
          plan={service.pricingPlan}
          price={service.pricingFromMonthly}
          description={`The ${service.pricingPlan} plan is the best fit for ${service.shortName.toLowerCase()}. Includes everything you need to get up and running in 10 days, with no lock-in.`}
        />
      </Section>

      <Section background="surface">
        <SectionHead label="WHO IT'S FOR" title="Built for these" highlight="industries." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="card p-6 group"
            >
              <div className="text-3xl mb-3">{ind.emoji}</div>
              <h3 className="font-display font-bold text-base mb-1.5">{ind.name}</h3>
              <p className="text-sm text-[color:var(--color-text-dim)] leading-relaxed">
                {service.shortName} for {ind.industryPlural} →
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead label="FAQ" title="Common" highlight="questions." />
        <Faq items={service.faqs} />
      </Section>

      <Section background="surface">
        <SectionHead label="MORE SERVICES" title="The full" highlight="growth engine." />
        <PillLinks
          links={otherServices.map((s) => ({
            label: s.shortName,
            href: `/services/${s.slug}`,
          }))}
        />
      </Section>

      <CtaSection
        title="Ready to"
        highlight={`set up ${service.shortName.toLowerCase()}?`}
        subtitle="Book a free 30-minute call. We'll show you exactly how this works for your business."
      />

      <SeoFooter />
    </main>
  );
}

import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
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

export const metadata: Metadata = {
  title: "About Kerblabs — Founded by Chandra Alladi | AI Marketing for Local Businesses",
  description:
    "Kerblabs Ltd is an AI marketing platform for independent local businesses in the UK and US, founded by Chandra Alladi. Meet the founder, learn our story, and see why we exist.",
  alternates: { canonical: "https://kerblabs.com/about" },
  openGraph: {
    title: "About Kerblabs — Founded by Chandra Alladi",
    description:
      "AI marketing systems for UK and US local businesses. Founded in 2026 by Chandra Alladi. Fully remote, transparent pricing, no lock-in.",
    type: "website",
    url: "https://kerblabs.com/about",
    siteName: "Kerblabs",
  },
};

// TODO: Replace LinkedIn URL with the actual Chandra Alladi profile slug once confirmed.
const FOUNDER_LINKEDIN = "https://www.linkedin.com/in/chandra-alladi";

// Founder photo source resolution.
// Primary: `/founder-chandra.jpg` (real headshot — drop into /public when ready).
// Fallback: `/founder-chandra.placeholder.svg` (monogram avatar shipped with this repo).
// The check runs once at module load on the server. If the jpg is later added,
// just rebuild — no code change required.
const FOUNDER_JPG_PATH = join(process.cwd(), "public", "founder-chandra.jpg");
const FOUNDER_IMAGE_SRC: string = existsSync(FOUNDER_JPG_PATH)
  ? "/founder-chandra.jpg"
  : "/founder-chandra.placeholder.svg";

export default function AboutPage() {
  return (
    <main className="relative">
      <Schema
        breadcrumbs={[
          { name: "Home", url: "https://kerblabs.com" },
          { name: "About", url: "https://kerblabs.com/about" },
        ]}
        extra={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            mainEntity: { "@id": "https://kerblabs.com/#organization" },
          },
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "https://kerblabs.com/about#chandra-alladi",
            name: "Chandra Alladi",
            givenName: "Chandra",
            familyName: "Alladi",
            jobTitle: "Founder & CEO",
            worksFor: { "@id": "https://kerblabs.com/#organization" },
            url: "https://kerblabs.com/about",
            image: {
              "@type": "ImageObject",
              url: "https://kerblabs.com/founder-chandra.jpg",
              caption: "Chandra Alladi, founder of Kerblabs",
            },
            sameAs: [FOUNDER_LINKEDIN],
            knowsAbout: [
              "AI marketing automation",
              "Local SEO",
              "AI voice receptionist",
              "Marketing technology",
              "Small business growth",
            ],
            description:
              "Founder and CEO of Kerblabs. Built Kerblabs after years working in marketing automation tooling, watching independent local businesses lose revenue to missed calls, weak Google presence, and fragmented marketing stacks.",
            nationality: { "@type": "Country", name: "United Kingdom" },
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://kerblabs.com/#organization-about",
            name: "Kerblabs",
            legalName: "Kerblabs Ltd",
            foundingDate: "2026",
            founder: { "@id": "https://kerblabs.com/about#chandra-alladi" },
            // TODO: add `taxID` (VAT number), `vatID`, `identifier` (Companies House number),
            // and full `address` (street, city, postal code) once registration is finalized.
          },
        ]}
      />

      <SeoNav />

      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "About" }]} />

      <SeoHero
        eyebrow="ABOUT KERBLABS"
        h1="Meet the founder."
        highlight="One team. One fee. No lock-in."
        subhead="Kerblabs is an AI marketing platform for independent local businesses — built by Chandra Alladi after years watching dentists, salons, contractors, and estate agents lose revenue to missed calls and weak Google presence. We are fully remote, transparent on pricing, and we never lock you into a contract."
        primaryCta={{
          label: "Book a call with Chandra",
          href: "https://calendly.com/hello-kerblabs/15-min-discovery-call",
        }}
        secondaryCta={{ label: "See services", href: "/services" }}
      />

      {/* ─── Founder section (E-E-A-T anchor) ──────────────────────── */}
      <Section>
        <SectionHead
          label="THE FOUNDER"
          title="Chandra Alladi,"
          highlight="Founder & CEO."
        />

        <div className="grid md:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">
          {/* Founder photo */}
          <div className="card overflow-hidden">
            {/* TODO: Upload actual founder headshot to /public/founder-chandra.jpg
                Recommended: 800x800px square crop, professional headshot, neutral background.
                Until that file lands the SVG placeholder ships instead — same dimensions,
                so no CLS when the real photo replaces it. */}
            <div className="aspect-square bg-[color:var(--color-surface)] flex items-center justify-center relative">
              <Image
                src={FOUNDER_IMAGE_SRC}
                alt="Chandra Alladi, founder and CEO of Kerblabs Ltd, AI marketing platform for UK and US local businesses"
                width={560}
                height={560}
                sizes="(min-width: 768px) 280px, 100vw"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-5 border-t border-[color:var(--color-border)]">
              <div className="font-display font-bold text-lg leading-tight">Chandra Alladi</div>
              <div className="text-xs text-[color:var(--color-text-dim)] mt-1 mb-3">
                Founder &amp; CEO, Kerblabs Ltd
              </div>
              <a
                href={FOUNDER_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer me"
                className="inline-flex items-center gap-2 text-xs text-[color:var(--color-lime)] hover:underline"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* Founder bio */}
          <div className="prose max-w-3xl text-[color:var(--color-text-dim)] space-y-5 leading-relaxed">
            <p>
              Chandra spent years working in marketing automation tooling — building product for
              teams whose entire job was to make small marketing departments behave like big ones.
              The pattern he kept seeing was the same: independent businesses with great service and
              loyal customers were losing revenue every single day to problems that had nothing to
              do with how good they were at their craft. Missed calls during busy hours. Five
              one-star reviews from people who never bothered to write a five-star one. Google
              Business Profiles half-filled in a decade ago. Lead forms that nobody followed up on.
            </p>
            <p>
              Kerblabs started from that frustration. The big platforms are built for enterprise
              marketing teams. The local agencies charge a monthly retainer to write three social
              posts and call it growth. There was nothing in the middle for the dental practice in
              Bristol, the salon in Manchester, the plumber in Birmingham — a system that just{" "}
              <em>runs</em>, answers the phone, asks for the review, ranks the Google profile, and
              books the appointment, without needing a marketing department to babysit it. That is
              what Chandra built Kerblabs to be: twelve marketing systems bundled into one team, one
              fee, with no contract holding you in.
            </p>
          </div>
        </div>
      </Section>

      {/* ─── Mission & approach ───────────────────────────────────── */}
      <Section background="surface">
        <SectionHead
          label="WHAT WE BELIEVE"
          title="Local businesses deserve"
          highlight="systems, not retainers."
        />
        <div className="prose max-w-3xl text-[color:var(--color-text-dim)] space-y-5 leading-relaxed">
          <p>
            Most marketing agencies sell time. They charge a £2,000–10,000 monthly retainer,
            deliver a report, and call it a service. That works for big brands with a marketing
            manager who can read the report. It does not work for an independent dental practice,
            a hair salon, or a contractor. Local businesses do not need a report — they need the
            phone answered, the review collected, the appointment booked, and the Google profile
            ranked.
          </p>
          <p>
            Kerblabs replaces the retainer with a system. An AI voice receptionist that picks up
            every call, including the after-hours ones. A review engine that asks every happy
            customer for a five-star review before they leave the car park. Local SEO and Google
            Business Profile optimisation that compounds month after month. Missed-call text-back
            that recovers the leads your competitors are losing. A CRM that does not need a sales
            operations team to run it.
          </p>
          <p>
            We focus on what we sell. We do not run social media ad agencies on the side. We do not
            sell influencer campaigns. We build and operate AI-powered marketing infrastructure for
            local businesses — that is the entire job.
          </p>
        </div>
      </Section>

      {/* ─── How we work (fully remote) ───────────────────────────── */}
      <Section>
        <SectionHead label="HOW WE WORK" title="Fully remote." highlight="Transparent pricing." />
        <div className="prose max-w-3xl text-[color:var(--color-text-dim)] space-y-5 leading-relaxed">
          <p>
            Kerblabs has no physical office and no plans to open one. Every client conversation
            happens over video. Every system is delivered remotely. Our team works from across the
            UK.
          </p>
          <p>
            This is deliberate. Staying remote keeps us lean, which means we can charge £97–£497
            per month for what most agencies charge £2,000–10,000 per month for. The savings go to
            clients, not to commercial property. When you book a demo, you talk to Chandra directly
            — no junior account managers in between, no &ldquo;strategy lead&rdquo; you never speak
            to again after the first call.
          </p>
        </div>
      </Section>

      {/* ─── Industries + US expansion ────────────────────────────── */}
      <Section background="surface">
        <SectionHead
          label="WHO WE SERVE"
          title="UK local businesses,"
          highlight="and now US med spas."
        />
        <div className="prose max-w-3xl text-[color:var(--color-text-dim)] space-y-5 leading-relaxed">
          <p>
            In the United Kingdom, Kerblabs serves independent operators across four core
            industries: <strong className="text-[color:var(--color-text)]">dental practices</strong>{" "}
            and orthodontists,{" "}
            <strong className="text-[color:var(--color-text)]">hair salons, beauty studios and
            barbershops</strong>,{" "}
            <strong className="text-[color:var(--color-text)]">trades and contractors</strong>{" "}
            (plumbers, electricians, HVAC, roofers, landscapers), and{" "}
            <strong className="text-[color:var(--color-text)]">estate and letting agents</strong>.
            We work across all major UK cities and towns — London to Aberdeen, Belfast to Brighton —
            on the same platform, same systems, same fee.
          </p>
          <p>
            In 2026 we expanded into the United States with a focused launch around{" "}
            <strong className="text-[color:var(--color-text)]">med spa marketing</strong> in five
            metros: Miami, New York City, Los Angeles, Chicago, and Houston. Med spas were a
            natural first US vertical — they share the same operational pattern as a UK dental
            practice (high-value appointments, missed-call leakage, review-driven discovery) and
            our system maps to them with very little adjustment.
          </p>
          <p>
            See the full list of supported{" "}
            <Link href="/industries" className="text-[color:var(--color-lime)] underline">
              industries
            </Link>{" "}
            or browse{" "}
            <Link href="/services" className="text-[color:var(--color-lime)] underline">
              services
            </Link>{" "}
            to see exactly what we install and operate.
          </p>
        </div>
      </Section>

      {/* ─── Company info (UK B2B trust signals) ──────────────────── */}
      <Section>
        <SectionHead label="THE ORG" title="Kerblabs Ltd —" highlight="company details." />
        <div className="prose max-w-3xl text-[color:var(--color-text-dim)] space-y-3 leading-relaxed">
          <p>
            <strong className="text-[color:var(--color-text)]">Legal name:</strong> Kerblabs Ltd
            <br />
            <strong className="text-[color:var(--color-text)]">Founded:</strong> 2026
            <br />
            <strong className="text-[color:var(--color-text)]">Founder &amp; CEO:</strong>{" "}
            Chandra Alladi
            <br />
            <strong className="text-[color:var(--color-text)]">Registered in:</strong> England,
            United Kingdom
            {/* TODO: Replace with full registered office address (line 1, city, postcode)
                once Companies House registration is finalized. */}
            <br />
            <strong className="text-[color:var(--color-text)]">Registered office:</strong>{" "}
            <span className="italic">[Registered office address — to be added]</span>
            <br />
            {/* TODO: Add Companies House number (format: 8 digits or 2 letters + 6 digits) here. */}
            <strong className="text-[color:var(--color-text)]">Companies House number:</strong>{" "}
            <span className="italic">[Companies House number — to be added]</span>
            <br />
            {/* TODO: Add VAT number once Kerblabs is VAT-registered (format: GB123456789). */}
            <strong className="text-[color:var(--color-text)]">VAT number:</strong>{" "}
            <span className="italic">[VAT number — to be added]</span>
            <br />
            {/* TODO: Add ICO data protection registration number (format: ZA123456 or similar). */}
            <strong className="text-[color:var(--color-text)]">ICO registration:</strong>{" "}
            <span className="italic">[ICO registration number — to be added]</span>
          </p>
          <p>
            <strong className="text-[color:var(--color-text)]">Service area:</strong> United Kingdom
            (all cities and major towns) and the United States (med spa focus in Miami, NYC, LA,
            Chicago, Houston).
            <br />
            <strong className="text-[color:var(--color-text)]">Languages:</strong> English (UK and
            US).
            <br />
            <strong className="text-[color:var(--color-text)]">Pricing:</strong> £97–£497 per
            month with one-time setup. No long-term contract. Cancel any time.
          </p>
          <p className="text-sm">
            Kerblabs is a new agency. We do not claim a decade of case studies we have not built
            yet. What we offer is the platform, the systems, and direct access to the founder — and
            an honest 30-minute conversation about whether it fits your business.
          </p>
        </div>
      </Section>

      <CtaSection
        title="Book a call"
        highlight="with Chandra."
        subtitle="Thirty minutes on video with the founder. We will walk through the platform, look at your current setup, and you will know by the end whether Kerblabs is the right fit. No sales script, no second-call pitch, no contract."
      />

      <SeoFooter />
    </main>
  );
}

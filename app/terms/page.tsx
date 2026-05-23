import type { Metadata } from "next";
import Link from "next/link";
import SeoNav from "@/components/seo/SeoNav";
import SeoFooter from "@/components/seo/SeoFooter";
import Schema from "@/components/seo/Schema";
import {
  Breadcrumb,
  SeoHero,
  SectionHead,
  Section,
} from "@/components/seo/SeoSections";
import { getAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Terms of Service — Kerblabs Ltd | 60-Day GBP Optimisation Agreement",
  description:
    "Terms of Service for Kerblabs Ltd's 60-day Google Business Profile optimisation service. $0 upfront, $99 refundable hold, $1,200 success fee on 2-of-3 KPIs. Governed by the laws of England and Wales.",
  alternates: getAlternates("/terms", "GB"),
  openGraph: {
    title: "Terms of Service — Kerblabs Ltd",
    description:
      "The full terms covering Kerblabs Ltd's 60-day GBP optimisation service: fees, refunds, client obligations, liability, and dispute resolution.",
    type: "website",
    url: "https://kerblabs.com/terms",
    siteName: "Kerblabs",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const LAST_UPDATED = "2026-05-23";

export default function TermsOfServicePage() {
  return (
    <main className="relative">
      <Schema
        breadcrumbs={[
          { name: "Home", url: "https://kerblabs.com" },
          { name: "Terms of Service", url: "https://kerblabs.com/terms" },
        ]}
        extra={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Terms of Service",
            url: "https://kerblabs.com/terms",
            inLanguage: "en-GB",
            isPartOf: { "@id": "https://kerblabs.com/#website" },
            about: { "@id": "https://kerblabs.com/#organization" },
            dateModified: LAST_UPDATED,
          },
        ]}
      />

      <SeoNav />

      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Terms of Service" }]} />

      <SeoHero
        eyebrow="LEGAL"
        h1="Terms of Service."
        highlight="No surprises."
        subhead={
          <>
            The legal agreement between you and Kerblabs Ltd when you engage us to deliver our
            60-day Google Business Profile optimisation service. Plain English where the law lets
            us, lawyer English where it has to. Governed by the laws of England and Wales. Last
            updated <time dateTime={LAST_UPDATED}>{LAST_UPDATED}</time>.
          </>
        }
      />

      {/* ─── 1. Who we are ────────────────────────────────────────── */}
      <Section>
        <SectionHead label="1. THE PARTIES" title="Who Kerblabs is," highlight="and who we serve." />
        <div className="prose max-w-3xl text-[color:var(--color-text-dim)] space-y-5 leading-relaxed">
          <p>
            These Terms of Service (&ldquo;<strong className="text-[color:var(--color-text)]">Terms</strong>&rdquo;)
            are entered into between <strong className="text-[color:var(--color-text)]">Kerblabs
            Ltd</strong>, a private limited company incorporated in England and Wales
            (&ldquo;<strong className="text-[color:var(--color-text)]">Kerblabs</strong>&rdquo;,
            &ldquo;<strong className="text-[color:var(--color-text)]">we</strong>&rdquo;,
            &ldquo;<strong className="text-[color:var(--color-text)]">us</strong>&rdquo;,
            &ldquo;<strong className="text-[color:var(--color-text)]">our</strong>&rdquo;), and you,
            the business engaging us (&ldquo;<strong className="text-[color:var(--color-text)]">Client</strong>&rdquo;,
            &ldquo;<strong className="text-[color:var(--color-text)]">you</strong>&rdquo;,
            &ldquo;<strong className="text-[color:var(--color-text)]">your</strong>&rdquo;).
          </p>
          {/* TODO: Replace with full registered office address (street, city, postcode)
              once Companies House registration is finalized. */}
          <p>
            <strong className="text-[color:var(--color-text)]">Registered office:</strong>{" "}
            <span className="italic">[Registered office address — to be added]</span>
            <br />
            <strong className="text-[color:var(--color-text)]">Contact:</strong>{" "}
            <a
              href="mailto:hello@kerblabs.com"
              className="text-[color:var(--color-lime)] underline"
            >
              hello@kerblabs.com
            </a>
          </p>
          <p>
            We are an AI-powered marketing agency for independent local businesses in the United
            Kingdom and the United States. Our flagship service is a 60-day Google Business Profile
            (GBP) optimisation programme, described in Section 2 below.
          </p>
          <p>
            By signing a Sprint Agreement, by paying the refundable hold, or by otherwise
            instructing us to begin work, you agree to be bound by these Terms. If you do not
            agree, do not engage us.
          </p>
        </div>
      </Section>

      {/* ─── 2. The service ───────────────────────────────────────── */}
      <Section background="surface">
        <SectionHead
          label="2. THE SERVICE"
          title="What we do."
          highlight="60 days. 3 KPIs."
        />
        <div className="prose max-w-3xl text-[color:var(--color-text-dim)] space-y-5 leading-relaxed">
          <p>
            Kerblabs provides a fixed 60-day Google Business Profile optimisation programme (the
            &ldquo;<strong className="text-[color:var(--color-text)]">Service</strong>&rdquo;). The
            Service includes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Initial audit of the Client&apos;s GBP listing and competitive landscape.</li>
            <li>
              Documented changes to the Client&apos;s GBP: categories, services, business
              description, photos, posts, products, and Q&amp;A.
            </li>
            <li>
              Ongoing operational work for 60 days: GBP post cadence, photo additions, review
              monitoring, citation cleanup, and rank tracking on the Client&apos;s primary local
              search queries.
            </li>
            <li>Weekly performance report delivered every Wednesday during the engagement.</li>
            <li>Final 60-day report on Day 60 with KPI outcomes and recommendations.</li>
          </ul>
          <p>
            The Service does <strong className="text-[color:var(--color-text)]">not</strong> include
            paid media (Google Ads, Meta Ads), website redesign, custom CRM integration, or any
            work beyond the GBP optimisation scope, unless explicitly added in writing in the
            Sprint Agreement.
          </p>
        </div>
      </Section>

      {/* ─── 3. Fees ──────────────────────────────────────────────── */}
      <Section>
        <SectionHead label="3. FEES" title="Fees, refunds," highlight="and what you actually pay." />
        <div className="prose max-w-3xl text-[color:var(--color-text-dim)] space-y-5 leading-relaxed">
          <p>The fee structure for the Service is:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-[color:var(--color-text)]">$0 upfront.</strong> No agency
              retainer. No setup fee. No charges before the engagement begins.
            </li>
            <li>
              <strong className="text-[color:var(--color-text)]">$99 refundable hold</strong>, paid
              within 48 hours of signing the Sprint Agreement. This is a good-faith deposit that
              confirms the Client&apos;s commitment to the 60-day programme.
            </li>
            <li>
              <strong className="text-[color:var(--color-text)]">$1,200 success fee</strong>,
              invoiced on Day 60 and payable within 14 days, <em>only if</em> Kerblabs meets at
              least two of the three KPIs defined in Section 3.1.
            </li>
          </ul>

          <h3 className="font-display font-bold text-xl text-[color:var(--color-text)] mt-8 mb-3">
            3.1 The three KPIs
          </h3>
          <p>
            The Service is measured against three KPIs, calculated by comparing the Client&apos;s
            Google Business Profile Insights for the 60 days prior to engagement (the &ldquo;
            Baseline Period&rdquo;) to the 60 days of the engagement (the &ldquo;Engagement
            Period&rdquo;):
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-[color:var(--color-text)]">KPI 1 — Profile views:</strong> a
              minimum +40% increase in total GBP profile views.
            </li>
            <li>
              <strong className="text-[color:var(--color-text)]">KPI 2 — Calls and direction
              requests:</strong> a combined minimum +30% increase in calls plus direction requests
              originating from the GBP listing.
            </li>
            <li>
              <strong className="text-[color:var(--color-text)]">KPI 3 — Map-pack ranking:</strong>{" "}
              entry into the top-three Google Maps results for the primary query agreed in the
              Sprint Agreement, <em>or</em> a +3-position improvement in rank on that query if not
              previously in the top three.
            </li>
          </ul>
          <p>
            Hitting <strong className="text-[color:var(--color-text)]">2 of 3 KPIs</strong> at Day
            60 triggers the $1,200 success fee. Hitting 0 or 1 KPI triggers no fee — and triggers
            the refund described in Section 3.2.
          </p>

          <h3 className="font-display font-bold text-xl text-[color:var(--color-text)] mt-8 mb-3">
            3.2 Refund mechanics
          </h3>
          <p>
            <strong className="text-[color:var(--color-text)]">The $99 hold is refundable in full
            at Day 60, regardless of the KPI outcome.</strong> Refunds are processed within 14 days
            of Day 60, to the original payment method, in the same currency in which the hold was
            paid.
          </p>
          <p>
            Specifically:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              If Kerblabs hits <strong className="text-[color:var(--color-text)]">0 KPIs</strong> at
              Day 60: the $99 hold is returned, no $1,200 fee is charged, and the engagement ends.
            </li>
            <li>
              If Kerblabs hits <strong className="text-[color:var(--color-text)]">1 KPI</strong> at
              Day 60: the $99 hold is returned, no $1,200 fee is charged, and the engagement ends.
            </li>
            <li>
              If Kerblabs hits <strong className="text-[color:var(--color-text)]">2 KPIs</strong> at
              Day 60: the $99 hold is returned <em>and</em> a $1,200 invoice is issued.
            </li>
            <li>
              If Kerblabs hits <strong className="text-[color:var(--color-text)]">3 KPIs</strong> at
              Day 60: the $99 hold is returned <em>and</em> a $1,200 invoice is issued.
            </li>
          </ul>
          <p>
            Net total cost to the Client: $0 if Kerblabs fails the KPI threshold, $1,200 if
            Kerblabs hits it. The $99 hold is always returned. There are no other fees, no surprise
            line items, and no auto-renewal.
          </p>
          <p>
            All fees are exclusive of any applicable taxes (UK VAT, US sales tax). Where tax is
            due, it will be added to the invoice and is the responsibility of the Client.
          </p>
        </div>
      </Section>

      {/* ─── 4. Client obligations ────────────────────────────────── */}
      <Section background="surface">
        <SectionHead
          label="4. WHAT WE NEED FROM YOU"
          title="Client"
          highlight="obligations."
        />
        <div className="prose max-w-3xl text-[color:var(--color-text-dim)] space-y-5 leading-relaxed">
          <p>
            For Kerblabs to deliver the Service, the Client must:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Grant Kerblabs <strong className="text-[color:var(--color-text)]">Manager-level
              access</strong> to the Client&apos;s Google Business Profile within 48 hours of
              signing the Sprint Agreement.
            </li>
            <li>
              Respond to operational requests from Kerblabs (information requests, asset uploads,
              clarifications, photo approvals) <strong className="text-[color:var(--color-text)]">within
              five (5) business days</strong> of the request being sent.
            </li>
            <li>
              Maintain accurate, up-to-date business information on the GBP — opening hours,
              services offered, contact details — and notify Kerblabs of any operational change
              that materially affects the listing.
            </li>
            <li>
              Operate the business as normal during the Engagement Period. That includes answering
              phone calls during stated business hours, fulfilling appointments, and serving
              customers to a standard consistent with the Baseline Period.
            </li>
            <li>
              Refrain from engaging another GBP or local SEO agency during the Engagement Period.
              Concurrent agencies make attribution impossible and void the KPI measurement.
            </li>
            <li>
              Pay any invoice issued under Section 3.1 within 14 days of issue.
            </li>
          </ul>
          <p>
            If the Client fails to meet any of these obligations, Kerblabs reserves the right to
            (a) extend any deadline impacted by the delay on a day-for-day basis, or (b) terminate
            the engagement under Section 7 with the $99 hold retained as a contribution to work
            already performed.
          </p>
        </div>
      </Section>

      {/* ─── 5. IP + ownership ────────────────────────────────────── */}
      <Section>
        <SectionHead
          label="5. INTELLECTUAL PROPERTY"
          title="Who owns"
          highlight="what."
        />
        <div className="prose max-w-3xl text-[color:var(--color-text-dim)] space-y-5 leading-relaxed">
          <p>
            All changes made by Kerblabs to the Client&apos;s Google Business Profile are owned by
            the Client. Kerblabs claims no ownership of the GBP listing, the underlying business
            data, or the customer-generated content that accumulates on it (reviews, Q&amp;A, etc.).
          </p>
          <p>
            Reports, dashboards, internal playbooks, methodologies, and any proprietary software
            developed by Kerblabs to deliver the Service remain the intellectual property of
            Kerblabs. The Client receives a perpetual, non-exclusive licence to use the reports
            delivered as part of the engagement for the Client&apos;s own internal business
            purposes.
          </p>
          <p>
            Where the Client appears in a Kerblabs campaign that involves public reporting (such as
            The 5 Spa Sprint), the Client grants Kerblabs a non-exclusive, royalty-free licence to
            use the Client&apos;s business name, before-and-after screenshots, and rank metrics in
            Kerblabs marketing materials for the duration of the campaign and for 12 months after.
            This licence is explicit and additional to these Terms, and will be set out in the
            relevant Sprint Agreement.
          </p>
        </div>
      </Section>

      {/* ─── 6. Liability ─────────────────────────────────────────── */}
      <Section background="surface">
        <SectionHead
          label="6. LIABILITY"
          title="Limitation"
          highlight="of liability."
        />
        <div className="prose max-w-3xl text-[color:var(--color-text-dim)] space-y-5 leading-relaxed">
          <p>
            Nothing in these Terms limits or excludes either party&apos;s liability for (a) death
            or personal injury caused by negligence, (b) fraud or fraudulent misrepresentation, or
            (c) any other liability that cannot be limited or excluded by law in England and Wales.
          </p>
          <p>
            Subject to that paragraph:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Kerblabs&apos;s total aggregate liability arising under or in connection with the
              Service, whether in contract, tort (including negligence), breach of statutory duty,
              or otherwise, is <strong className="text-[color:var(--color-text)]">capped at the
              total fees actually paid by the Client to Kerblabs under the relevant
              engagement</strong>. For an engagement that resolves with no $1,200 fee, that cap is
              effectively $0 (since the $99 hold has been refunded).
            </li>
            <li>
              Neither party is liable to the other for any indirect, consequential, special, or
              punitive damages, including loss of profit, loss of revenue, loss of goodwill, or
              loss of business opportunity.
            </li>
            <li>
              Kerblabs makes no warranty that the Service will produce a specific outcome beyond
              the contractual mechanic in Section 3.1. Rankings, traffic, and conversions are
              influenced by factors outside our control (Google algorithm updates, competitor
              activity, seasonality, weather, force majeure). The KPI structure in Section 3.1 is
              the agreed performance measure; we make no other performance representation.
            </li>
          </ul>
        </div>
      </Section>

      {/* ─── 7. Termination ───────────────────────────────────────── */}
      <Section>
        <SectionHead label="7. TERMINATION" title="How either party" highlight="can exit." />
        <div className="prose max-w-3xl text-[color:var(--color-text-dim)] space-y-5 leading-relaxed">
          <p>
            Either party may terminate the engagement by giving the other party{" "}
            <strong className="text-[color:var(--color-text)]">fourteen (14) days&apos; written
            notice</strong>, sent by email to the other party&apos;s primary contact.
          </p>
          <p>
            If the Client terminates before Day 60:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              The $99 refundable hold is returned to the Client within 14 days, regardless of how
              much work Kerblabs has already done.
            </li>
            <li>
              No $1,200 success fee is owed (because the 60-day measurement cannot complete).
            </li>
            <li>
              Any campaign-specific escalators (for example, the $500 escalator in the first
              cohort of The 5 Spa Sprint) are voided automatically by the Client&apos;s early
              exit.
            </li>
            <li>
              Kerblabs will, on request, hand over the final state of the Client&apos;s GBP and any
              reports produced to that point, then close out access.
            </li>
          </ul>
          <p>If Kerblabs terminates before Day 60:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The $99 refundable hold is returned to the Client within 14 days.</li>
            <li>
              Kerblabs will hand over the final state of the Client&apos;s GBP and any reports
              produced to that point.
            </li>
            <li>
              The Client retains all changes Kerblabs has made to the GBP — there is no &ldquo;clawback&rdquo;
              of work already delivered.
            </li>
          </ul>
          <p>
            Either party may terminate the engagement immediately by written notice if the other
            party (a) commits a material breach of these Terms and fails to remedy it within 14
            days of being notified in writing, or (b) becomes insolvent, enters into administration,
            or is otherwise unable to perform its obligations.
          </p>
        </div>
      </Section>

      {/* ─── 8. Confidentiality ───────────────────────────────────── */}
      <Section background="surface">
        <SectionHead
          label="8. CONFIDENTIALITY"
          title="What stays"
          highlight="between us."
        />
        <div className="prose max-w-3xl text-[color:var(--color-text-dim)] space-y-5 leading-relaxed">
          <p>
            Each party agrees to keep the other party&apos;s confidential information confidential
            and to use it only for the purposes of performing this engagement. Confidential
            information includes commercial terms, financial information, customer data, and any
            internal information that a reasonable person would treat as confidential.
          </p>
          <p>
            Confidentiality does not apply to information that is (a) already public, (b)
            independently developed without reference to the confidential information, (c) required
            to be disclosed by law or by a court of competent jurisdiction, or (d) covered by the
            campaign-specific public-reporting carve-out described in Section 5 and consented to in
            the Sprint Agreement.
          </p>
        </div>
      </Section>

      {/* ─── 9. Data protection ───────────────────────────────────── */}
      <Section>
        <SectionHead label="9. DATA PROTECTION" title="Privacy" highlight="and personal data." />
        <div className="prose max-w-3xl text-[color:var(--color-text-dim)] space-y-5 leading-relaxed">
          <p>
            Kerblabs processes personal data in accordance with its{" "}
            <Link href="/privacy" className="text-[color:var(--color-lime)] underline">
              Privacy Policy
            </Link>
            . By engaging us, the Client confirms that any personal data shared with Kerblabs has
            been collected lawfully and that the Client has the necessary rights and consents to
            share it with us for the purposes of delivering the Service. Where Kerblabs acts as a
            data processor on the Client&apos;s behalf, a Data Processing Addendum will be signed
            alongside the Sprint Agreement.
          </p>
        </div>
      </Section>

      {/* ─── 10. Governing law ────────────────────────────────────── */}
      <Section background="surface">
        <SectionHead
          label="10. GOVERNING LAW"
          title="Governing law"
          highlight="and disputes."
        />
        <div className="prose max-w-3xl text-[color:var(--color-text-dim)] space-y-5 leading-relaxed">
          <p>
            These Terms are governed by, and construed in accordance with,{" "}
            <strong className="text-[color:var(--color-text)]">the laws of England and Wales</strong>.
            The parties submit to the exclusive jurisdiction of the courts of England and Wales for
            the resolution of any dispute arising under these Terms.
          </p>
          <p>
            If a dispute arises, the parties will first attempt to resolve it in good faith by
            direct discussion. If the dispute is not resolved within 30 days of being raised in
            writing, either party may submit it to mediation in London under the CEDR Model
            Mediation Procedure. Mediation is a precondition to commencing court proceedings, save
            for any application for urgent interim relief.
          </p>
        </div>
      </Section>

      {/* ─── 11. Misc ─────────────────────────────────────────────── */}
      <Section>
        <SectionHead label="11. GENERAL" title="The legal" highlight="boilerplate." />
        <div className="prose max-w-3xl text-[color:var(--color-text-dim)] space-y-5 leading-relaxed">
          <p>
            <strong className="text-[color:var(--color-text)]">Entire agreement.</strong> These
            Terms, together with the signed Sprint Agreement and any Data Processing Addendum,
            constitute the entire agreement between the parties relating to the Service and
            supersede any prior representations, proposals, or correspondence.
          </p>
          <p>
            <strong className="text-[color:var(--color-text)]">No waiver.</strong> A failure or
            delay by either party in exercising any right under these Terms does not constitute a
            waiver of that right.
          </p>
          <p>
            <strong className="text-[color:var(--color-text)]">Severability.</strong> If any
            provision of these Terms is held to be invalid or unenforceable, that provision will
            be severed and the remainder will continue in full force and effect.
          </p>
          <p>
            <strong className="text-[color:var(--color-text)]">Assignment.</strong> Neither party
            may assign these Terms without the prior written consent of the other, except that
            Kerblabs may assign these Terms to a successor entity in connection with a corporate
            reorganisation, merger, or sale.
          </p>
          <p>
            <strong className="text-[color:var(--color-text)]">Third-party rights.</strong> A
            person who is not a party to these Terms has no right under the Contracts (Rights of
            Third Parties) Act 1999 to enforce any provision of these Terms.
          </p>
          <p>
            <strong className="text-[color:var(--color-text)]">Force majeure.</strong> Neither
            party is liable for any failure or delay in performance to the extent caused by an
            event beyond its reasonable control, including acts of God, war, terrorism, civil
            unrest, government action, pandemic, internet or telecommunications failure, or major
            third-party platform outage (e.g. a prolonged Google outage that prevents GBP work).
          </p>
          <p>
            <strong className="text-[color:var(--color-text)]">Notices.</strong> All notices under
            these Terms must be in writing and sent by email to{" "}
            <a
              href="mailto:hello@kerblabs.com"
              className="text-[color:var(--color-lime)] underline"
            >
              hello@kerblabs.com
            </a>{" "}
            (for Kerblabs) or to the Client&apos;s primary contact email on the Sprint Agreement
            (for the Client). Notices are deemed received on the next business day after sending.
          </p>
          <p className="text-sm text-[color:var(--color-text-faint)]">
            Last updated <time dateTime={LAST_UPDATED}>{LAST_UPDATED}</time>. Version 1.0.
          </p>
        </div>
      </Section>

      <SeoFooter />
    </main>
  );
}

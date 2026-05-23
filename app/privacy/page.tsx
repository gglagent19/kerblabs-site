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
  title: "Privacy Policy — Kerblabs Ltd | UK GDPR + CCPA",
  description:
    "How Kerblabs Ltd collects, uses, retains, and shares personal data. UK GDPR and California (CCPA) compliant. Your rights of access, correction, and deletion explained in plain English.",
  alternates: getAlternates("/privacy", "GB"),
  openGraph: {
    title: "Privacy Policy — Kerblabs Ltd",
    description:
      "What data we collect, why, how long we keep it, who we share it with, and how to exercise your rights under UK GDPR and CCPA.",
    type: "website",
    url: "https://kerblabs.com/privacy",
    siteName: "Kerblabs",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const LAST_UPDATED = "2026-05-23";

export default function PrivacyPolicyPage() {
  return (
    <main className="relative">
      <Schema
        breadcrumbs={[
          { name: "Home", url: "https://kerblabs.com" },
          { name: "Privacy Policy", url: "https://kerblabs.com/privacy" },
        ]}
        extra={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy",
            url: "https://kerblabs.com/privacy",
            inLanguage: "en-GB",
            isPartOf: { "@id": "https://kerblabs.com/#website" },
            about: { "@id": "https://kerblabs.com/#organization" },
            dateModified: LAST_UPDATED,
          },
        ]}
      />

      <SeoNav />

      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Privacy Policy" }]} />

      <SeoHero
        eyebrow="LEGAL"
        h1="Privacy Policy."
        highlight="Plain English."
        subhead={
          <>
            How Kerblabs Ltd handles personal data, what we collect, why we collect it, how long we
            keep it, and what rights you have under UK GDPR, the UK Data Protection Act 2018, and
            the California Consumer Privacy Act (CCPA). Last updated{" "}
            <time dateTime={LAST_UPDATED}>{LAST_UPDATED}</time>.
          </>
        }
      />

      {/* ─── 1. Who we are ────────────────────────────────────────── */}
      <Section>
        <SectionHead label="1. THE BASICS" title="Who we are," highlight="and the controller." />
        <div className="prose max-w-3xl text-[color:var(--color-text-dim)] space-y-5 leading-relaxed">
          <p>
            Kerblabs is the trading name of <strong className="text-[color:var(--color-text)]">
            Kerblabs Ltd</strong>, a private limited company incorporated in England and Wales. For
            the purposes of UK GDPR, Kerblabs Ltd is the <strong className="text-[color:var(--color-text)]">
            data controller</strong> of personal data we collect about you when you visit
            kerblabs.com, fill in a contact form, book a call, become a client, or interact with our
            marketing on social platforms.
          </p>
          {/* TODO: Replace the placeholder address with the full registered office address
              (street, city, postcode) once Companies House registration is finalized. */}
          <p>
            <strong className="text-[color:var(--color-text)]">Registered office:</strong>{" "}
            <span className="italic">[Registered office address — to be added]</span>
            <br />
            <strong className="text-[color:var(--color-text)]">Email:</strong>{" "}
            <a
              href="mailto:hello@kerblabs.com"
              className="text-[color:var(--color-lime)] underline"
            >
              hello@kerblabs.com
            </a>
            <br />
            <strong className="text-[color:var(--color-text)]">Jurisdiction:</strong> England and
            Wales
          </p>
          <p>
            If you want to exercise any of the rights described in this policy — access, correction,
            deletion, portability, restriction, or objection — email{" "}
            <a
              href="mailto:hello@kerblabs.com"
              className="text-[color:var(--color-lime)] underline"
            >
              hello@kerblabs.com
            </a>{" "}
            with the subject line &ldquo;Data request&rdquo; and we will respond within 30 days, as
            required by UK GDPR Article 12.
          </p>
        </div>
      </Section>

      {/* ─── 2. What we collect ───────────────────────────────────── */}
      <Section background="surface">
        <SectionHead
          label="2. WHAT WE COLLECT"
          title="The data we hold"
          highlight="about you."
        />
        <div className="prose max-w-3xl text-[color:var(--color-text-dim)] space-y-5 leading-relaxed">
          <p>
            We collect only what we need to deliver the service you have asked for. There are three
            categories of personal data we process:
          </p>
          <p>
            <strong className="text-[color:var(--color-text)]">Prospect data.</strong> When you fill
            in a contact form, book a discovery call, or apply to a campaign such as The 5 Spa
            Sprint, we collect your <em>name</em>, <em>business name</em>, <em>email address</em>,{" "}
            <em>phone number</em>, the URL of your Google Business Profile (if you share it), and
            any free-text information you provide about your business goals. We collect this so we
            can respond to your enquiry, send the requested information, and decide whether
            Kerblabs is the right fit for you.
          </p>
          <p>
            <strong className="text-[color:var(--color-text)]">Client data.</strong> If you become a
            client, we additionally collect billing information (we do <em>not</em> store full card
            numbers — payment processing happens at PayU, see Section 5), invoicing addresses, and{" "}
            operational metadata required to deliver the service. For our 60-day Google Business
            Profile optimisation service this includes <em>Manager-level access</em> to your Google
            Business Profile, <em>read access</em> to your GBP Insights data, your business&apos;s
            primary local search queries, and competitor benchmarking data. We process all of this
            only with your explicit, written consent.
          </p>
          <p>
            <strong className="text-[color:var(--color-text)]">Visitor data.</strong> When you
            browse kerblabs.com we collect standard web analytics through Google Analytics 4 (GA4)
            and Google Tag Manager (GTM). This includes your IP address (anonymised before
            storage), browser type, device type, the pages you visit, the referrer that brought you
            to us, and approximate geographic location at country/region level. See Section 6 for
            details on cookies.
          </p>
          <p>
            We do <strong className="text-[color:var(--color-text)]">not</strong> knowingly collect
            data from anyone under 16. Our service is exclusively B2B and is not directed at
            children.
          </p>
        </div>
      </Section>

      {/* ─── 3. Why we use it / lawful basis ──────────────────────── */}
      <Section>
        <SectionHead
          label="3. WHY WE USE IT"
          title="Lawful basis"
          highlight="for processing."
        />
        <div className="prose max-w-3xl text-[color:var(--color-text-dim)] space-y-5 leading-relaxed">
          <p>
            Under UK GDPR Article 6 every piece of processing requires a lawful basis. Ours are:
          </p>
          <p>
            <strong className="text-[color:var(--color-text)]">Contract (Art. 6(1)(b)).</strong> If
            you become a paying client, we process your data because we need to in order to deliver
            the service you have contracted us to deliver — the 60-day GBP optimisation programme,
            weekly performance reporting, refund processing, and ongoing client communication.
          </p>
          <p>
            <strong className="text-[color:var(--color-text)]">Legitimate interests (Art.
            6(1)(f)).</strong> We process prospect data (e.g. your enquiry submission) under our
            legitimate interest in responding to potential clients and operating our business. You
            can object to this processing at any time by emailing{" "}
            <a
              href="mailto:hello@kerblabs.com"
              className="text-[color:var(--color-lime)] underline"
            >
              hello@kerblabs.com
            </a>
            .
          </p>
          <p>
            <strong className="text-[color:var(--color-text)]">Consent (Art. 6(1)(a)).</strong>{" "}
            Non-essential cookies (analytics, behavioural) and our weekly marketing email run on
            consent only — you opt in, and you can withdraw consent at any time. Withdrawal of
            consent does not affect the lawfulness of any processing that happened before you
            withdrew.
          </p>
          <p>
            <strong className="text-[color:var(--color-text)]">Legal obligation (Art. 6(1)(c)).</strong>{" "}
            UK accounting law (Companies Act 2006) requires us to retain invoicing and tax records
            for six years. We do that regardless of any deletion request, and we explain this below
            in the Retention section.
          </p>
        </div>
      </Section>

      {/* ─── 4. How we use it ─────────────────────────────────────── */}
      <Section background="surface">
        <SectionHead
          label="4. HOW WE USE IT"
          title="What we actually do"
          highlight="with your data."
        />
        <div className="prose max-w-3xl text-[color:var(--color-text-dim)] space-y-5 leading-relaxed">
          <p>We use personal data only for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Responding to your enquiry, sending you the information you requested, and booking
              follow-up calls.
            </li>
            <li>
              Delivering our 60-day GBP optimisation service: making documented changes to your
              Google Business Profile, monitoring rank, reviewing GBP Insights, producing weekly
              client reports.
            </li>
            <li>
              Sending you a weekly performance report (PDF + dashboard link) during the engagement,
              and a final 60-day report.
            </li>
            <li>
              Processing payments — the $99 refundable hold at the start and the $1,200 success fee
              at Day 60, if KPIs are met.
            </li>
            <li>
              Processing refunds (the $99 hold is refunded at Day 60 regardless of outcome; if
              fewer than two of three KPIs are met, no $1,200 fee is charged).
            </li>
            <li>
              Operating our website (uptime monitoring, security logging, GA4 + GTM analytics).
            </li>
            <li>
              Sending you our weekly newsletter, but only if you have opted in. Every email has an
              unsubscribe link.
            </li>
            <li>
              Meeting our legal and accounting obligations (HMRC, Companies House, ICO).
            </li>
          </ul>
          <p>
            We do <strong className="text-[color:var(--color-text)]">not</strong> sell your personal
            data. We do not rent, trade, or otherwise share it with third-party advertisers. We do
            not engage in profiling that produces legal or similarly significant effects on you.
          </p>
        </div>
      </Section>

      {/* ─── 5. Third parties ─────────────────────────────────────── */}
      <Section>
        <SectionHead
          label="5. THIRD PARTIES"
          title="Who we share data with,"
          highlight="and why."
        />
        <div className="prose max-w-3xl text-[color:var(--color-text-dim)] space-y-5 leading-relaxed">
          <p>
            We use a small number of third-party processors to deliver the service. Each is bound
            by a data processing agreement and we only share the minimum personal data each one
            needs to do its job. The current list:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong className="text-[color:var(--color-text)]">Google Cloud</strong> (Google LLC,
              including Google Workspace and Google Analytics 4). Hosts our operational email,
              calendar, documents, and our analytics. UK and US data centres. Privacy policy:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[color:var(--color-lime)] underline"
              >
                policies.google.com/privacy
              </a>
              .
            </li>
            <li>
              <strong className="text-[color:var(--color-text)]">PayU</strong> (PayU Payments
              Private Limited). Handles card processing for the $99 hold and $1,200 success fee.
              Card data is captured directly by PayU; we never see or store full card numbers.
              Privacy policy:{" "}
              <a
                href="https://corporate.payu.com/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[color:var(--color-lime)] underline"
              >
                corporate.payu.com/privacy-policy
              </a>
              .
            </li>
            <li>
              <strong className="text-[color:var(--color-text)]">SerpAPI</strong> (SerpApi, LLC).
              Used for automated Google search-result tracking that powers the weekly rank update
              on the client dashboard. SerpAPI does not receive client personal data — only the
              search queries we are tracking. Privacy policy:{" "}
              <a
                href="https://serpapi.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[color:var(--color-lime)] underline"
              >
                serpapi.com/legal/privacy-policy
              </a>
              .
            </li>
            <li>
              <strong className="text-[color:var(--color-text)]">Calendly</strong> (Calendly LLC).
              Powers the discovery-call booking flow. Calendly receives your name, email, and the
              time you booked. Privacy policy:{" "}
              <a
                href="https://calendly.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[color:var(--color-lime)] underline"
              >
                calendly.com/privacy
              </a>
              .
            </li>
            <li>
              <strong className="text-[color:var(--color-text)]">Tally</strong> (Tally B.V.). Hosts
              the application forms (e.g. The 5 Spa Sprint). Tally receives only the form fields
              you submit. Privacy policy:{" "}
              <a
                href="https://tally.so/help/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[color:var(--color-lime)] underline"
              >
                tally.so/help/privacy-policy
              </a>
              .
            </li>
          </ul>
          <p>
            Where any of these processors are based outside the United Kingdom or European Economic
            Area, transfers are protected by Standard Contractual Clauses or an adequacy decision
            as required by UK GDPR Articles 44–49.
          </p>
        </div>
      </Section>

      {/* ─── 6. Cookies + tracking ────────────────────────────────── */}
      <Section background="surface">
        <SectionHead
          label="6. COOKIES"
          title="Cookies and"
          highlight="similar technologies."
        />
        <div className="prose max-w-3xl text-[color:var(--color-text-dim)] space-y-5 leading-relaxed">
          <p>
            kerblabs.com uses cookies and similar technologies. We split them into two buckets:
          </p>
          <p>
            <strong className="text-[color:var(--color-text)]">Strictly necessary cookies</strong>{" "}
            keep the site working — session continuity, security tokens, and CDN routing. They
            cannot be switched off and they do not require consent under PECR.
          </p>
          <p>
            <strong className="text-[color:var(--color-text)]">Analytics and marketing cookies</strong>{" "}
            are set by Google Analytics 4 (GA4) and Google Tag Manager (GTM), and only after you
            have given consent through the cookie banner. They give us aggregated, anonymised
            statistics on which pages perform, where visitors come from, and which forms convert.
            We use IP anonymisation; we do not enable cross-site advertising features. You can
            withdraw consent at any time by clearing site data in your browser or by emailing{" "}
            <a
              href="mailto:hello@kerblabs.com"
              className="text-[color:var(--color-lime)] underline"
            >
              hello@kerblabs.com
            </a>
            .
          </p>
          <p>
            You can also block analytics entirely by enabling &ldquo;Do Not Track&rdquo; in your
            browser or by installing the Google Analytics opt-out browser add-on.
          </p>
        </div>
      </Section>

      {/* ─── 7. Retention ─────────────────────────────────────────── */}
      <Section>
        <SectionHead
          label="7. RETENTION"
          title="How long we"
          highlight="keep your data."
        />
        <div className="prose max-w-3xl text-[color:var(--color-text-dim)] space-y-5 leading-relaxed">
          <p>
            We keep personal data for as long as we genuinely need it, and no longer. Our defaults:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-[color:var(--color-text)]">Prospect data</strong> (form
              submissions, discovery-call notes for prospects who did not become clients): retained
              for 12 months after last contact, then deleted.
            </li>
            <li>
              <strong className="text-[color:var(--color-text)]">Client operational data</strong>{" "}
              (GBP access logs, weekly reports, performance dashboards): retained for{" "}
              <strong className="text-[color:var(--color-text)]">12 months
              post-engagement</strong>, after which it is deleted unless you are an active client
              of a follow-on engagement.
            </li>
            <li>
              <strong className="text-[color:var(--color-text)]">Invoicing and tax records</strong>{" "}
              (invoices, receipts, payment confirmations): retained for six years from the end of
              the tax year, as required by UK accounting law. We cannot delete these earlier on
              request.
            </li>
            <li>
              <strong className="text-[color:var(--color-text)]">Analytics data</strong>: retained
              for 14 months in GA4 (the platform default we have configured), then auto-deleted.
            </li>
            <li>
              <strong className="text-[color:var(--color-text)]">Email subscriber lists</strong>:
              retained until you unsubscribe. We re-confirm engagement annually and remove inactive
              subscribers.
            </li>
          </ul>
        </div>
      </Section>

      {/* ─── 8. Your rights ───────────────────────────────────────── */}
      <Section background="surface">
        <SectionHead label="8. YOUR RIGHTS" title="Your rights" highlight="under the law." />
        <div className="prose max-w-3xl text-[color:var(--color-text-dim)] space-y-5 leading-relaxed">
          <p>
            <strong className="text-[color:var(--color-text)]">If you are in the UK, EU, or EEA,</strong>{" "}
            UK GDPR gives you the following rights. You can exercise any of them by emailing{" "}
            <a
              href="mailto:hello@kerblabs.com"
              className="text-[color:var(--color-lime)] underline"
            >
              hello@kerblabs.com
            </a>{" "}
            with the subject line &ldquo;Data request&rdquo;:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-[color:var(--color-text)]">Right of access</strong> — ask us
              what data we hold about you and receive a copy.
            </li>
            <li>
              <strong className="text-[color:var(--color-text)]">Right to rectification</strong> —
              ask us to correct anything that is wrong.
            </li>
            <li>
              <strong className="text-[color:var(--color-text)]">Right to erasure</strong> (&ldquo;right
              to be forgotten&rdquo;) — ask us to delete your data, subject to the legal retention
              periods noted above.
            </li>
            <li>
              <strong className="text-[color:var(--color-text)]">Right to restriction</strong> —
              ask us to stop processing your data while a dispute is resolved.
            </li>
            <li>
              <strong className="text-[color:var(--color-text)]">Right to portability</strong> —
              ask us to send your data to you, or to another controller, in a structured machine-
              readable format.
            </li>
            <li>
              <strong className="text-[color:var(--color-text)]">Right to object</strong> — object
              to processing based on legitimate interests, including direct marketing.
            </li>
            <li>
              <strong className="text-[color:var(--color-text)]">Right to lodge a complaint</strong>{" "}
              with the UK Information Commissioner&apos;s Office (ICO) at{" "}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[color:var(--color-lime)] underline"
              >
                ico.org.uk
              </a>{" "}
              if you think we have got something wrong.
            </li>
          </ul>
          <p>
            <strong className="text-[color:var(--color-text)]">If you are a California resident,</strong>{" "}
            the California Consumer Privacy Act (CCPA), as amended by the CPRA, gives you the right
            to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Know what personal information we have collected about you in the past 12 months.</li>
            <li>
              Request deletion of that information (subject to legal retention requirements such as
              tax records).
            </li>
            <li>Correct inaccurate personal information.</li>
            <li>
              Opt out of any &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of your personal information
              for cross-context behavioural advertising. We do not sell or share personal
              information for these purposes, full stop — there is nothing to opt out of, but the
              right is yours regardless.
            </li>
            <li>Not be discriminated against for exercising any of these rights.</li>
          </ul>
          <p>
            To exercise any CCPA right, email{" "}
            <a
              href="mailto:hello@kerblabs.com"
              className="text-[color:var(--color-lime)] underline"
            >
              hello@kerblabs.com
            </a>{" "}
            with the subject line &ldquo;CCPA request&rdquo;. We will verify your identity using
            the email address on file and respond within 45 days.
          </p>
        </div>
      </Section>

      {/* ─── 9. Security ──────────────────────────────────────────── */}
      <Section>
        <SectionHead
          label="9. SECURITY"
          title="How we"
          highlight="protect your data."
        />
        <div className="prose max-w-3xl text-[color:var(--color-text-dim)] space-y-5 leading-relaxed">
          <p>
            Personal data is encrypted in transit (TLS 1.2+) and at rest. Access is restricted to
            named team members on a need-to-know basis. We maintain a documented incident response
            plan, and if a personal data breach affects you we will notify both the ICO and you
            within 72 hours of becoming aware, as required by UK GDPR Article 33–34. No system is
            perfectly secure, but we apply commercially reasonable safeguards proportionate to the
            risk.
          </p>
        </div>
      </Section>

      {/* ─── 10. Changes ──────────────────────────────────────────── */}
      <Section background="surface">
        <SectionHead label="10. CHANGES" title="Changes to" highlight="this policy." />
        <div className="prose max-w-3xl text-[color:var(--color-text-dim)] space-y-5 leading-relaxed">
          <p>
            We may update this Privacy Policy from time to time. The current version always lives
            at <Link href="/privacy" className="text-[color:var(--color-lime)] underline">
            kerblabs.com/privacy</Link>, and the &ldquo;Last updated&rdquo; date at the top of the
            page reflects the date of the most recent change. Material changes that affect how we
            process your data will be flagged in advance, by email if you are an existing client or
            an active subscriber.
          </p>
          <p>
            If you have any question about this policy, or about how we handle your data, email{" "}
            <a
              href="mailto:hello@kerblabs.com"
              className="text-[color:var(--color-lime)] underline"
            >
              hello@kerblabs.com
            </a>
            . A human will reply.
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

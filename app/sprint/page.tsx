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
  Faq,
  PillLinks,
} from "@/components/seo/SeoSections";
import { getAlternates } from "@/lib/hreflang";

// Tally form: The 5 Spa Sprint application (9 screening questions, see GTM 07 §6.1).
// Created 2026-05-23 under hello@kerblabs.com Tally workspace.
const TALLY_FORM_ID = "eqYL9O";

const COHORT_START_DATE = "2026-06-16";
const APPLICATIONS_CLOSE_DATE = "2026-06-12";
const FINAL_RESULTS_DATE = "2026-08-14";

export const metadata: Metadata = {
  title:
    "The 5 Spa Sprint — Five Florida Med Spas. Sixty Days. One Public Leaderboard. | Kerblabs",
  description:
    "Five Florida med spas. Sixty days. If we miss 2 of 3 Google Business Profile KPIs, we refund your $99 hold and write you a $500 check. Applications close June 12, 2026. Live leaderboard updates every Wednesday.",
  alternates: getAlternates("/sprint", "US"),
  openGraph: {
    title: "The 5 Spa Sprint — Kerblabs",
    description:
      "Five Florida med spas. Sixty days. If we miss, I write a $500 check. A public 60-day Google Business Profile rank race with a live leaderboard.",
    type: "website",
    url: "https://kerblabs.com/sprint",
    siteName: "Kerblabs",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SprintPage() {
  return (
    <main className="relative">
      <Schema
        breadcrumbs={[
          { name: "Home", url: "https://kerblabs.com" },
          { name: "The 5 Spa Sprint", url: "https://kerblabs.com/sprint" },
        ]}
        extra={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "The 5 Spa Sprint — Five Florida Med Spas. Sixty Days. One Public Leaderboard.",
            description:
              "Kerblabs publicly commits to ranking five Florida med spas on Google Maps in 60 days. If we miss 2 of 3 KPIs, we refund the $99 hold and pay the spa $500.",
            image: {
              "@type": "ImageObject",
              url: "https://kerblabs.com/kerblabs-logo.png",
              width: 1200,
              height: 630,
            },
            author: {
              "@type": "Person",
              name: "Chandra Alladi",
              url: "https://kerblabs.com/about",
            },
            publisher: { "@id": "https://kerblabs.com/#organization" },
            datePublished: "2026-05-23",
            dateModified: "2026-05-23",
            inLanguage: "en-US",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://kerblabs.com/sprint",
            },
            url: "https://kerblabs.com/sprint",
          },
          {
            "@context": "https://schema.org",
            "@type": "Event",
            name: "The 5 Spa Sprint — Cohort 1",
            description:
              "A public, 60-day Google Business Profile optimisation race for five Florida med spas. Live leaderboard updates every Wednesday. If Kerblabs misses 2 of 3 KPIs, each spa gets a refund of the $99 hold plus a $500 check.",
            startDate: COHORT_START_DATE,
            endDate: FINAL_RESULTS_DATE,
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
            location: {
              "@type": "Place",
              name: "Florida, United States",
              address: {
                "@type": "PostalAddress",
                addressRegion: "FL",
                addressCountry: "US",
              },
            },
            organizer: { "@id": "https://kerblabs.com/#organization" },
            url: "https://kerblabs.com/sprint",
            offers: {
              "@type": "Offer",
              name: "Cohort 1 Application — $99 refundable hold",
              description:
                "$99 refundable hold to lock the engagement. $1,200 success fee invoiced only if Kerblabs hits 2-of-3 KPIs at Day 60. If we miss, the $99 is refunded and Kerblabs writes a $500 escalator check.",
              price: "99.00",
              priceCurrency: "USD",
              availability: "https://schema.org/LimitedAvailability",
              url: "https://kerblabs.com/sprint#apply",
              validFrom: "2026-05-23",
              validThrough: APPLICATIONS_CLOSE_DATE,
              priceValidUntil: COHORT_START_DATE,
              category: "Med spa marketing",
              seller: { "@id": "https://kerblabs.com/#organization" },
            },
            isAccessibleForFree: false,
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is this a scam?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fair question. The structure is: $0 upfront, $99 refundable hold paid to PayU, $1,200 success fee only if Kerblabs hits 2 of 3 KPIs at Day 60. If we miss, the $99 comes back AND Chandu writes you a personal $500 check. The leaderboard is public and updates every Wednesday, with your business name on it, so we cannot quietly disappear if it goes wrong. The full Terms of Service live at kerblabs.com/terms.",
                },
              },
              {
                "@type": "Question",
                name: "Who qualifies for Cohort 1?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Florida-based med spas that have been operating for at least 12 months, with the owner directly involved and able to grant Manager-level Google Business Profile access. We pick five from across the state, not five from one city, so the leaderboard isn't five spas eating each other's rank.",
                },
              },
              {
                "@type": "Question",
                name: "What are the three KPIs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "1) GBP profile views +40% versus the 60-day baseline. 2) Calls plus direction requests +30% versus the 60-day baseline. 3) Map-pack top 3 on the primary query OR a +3 position rank improvement. Hitting any 2 of 3 triggers the $1,200 success fee.",
                },
              },
              {
                "@type": "Question",
                name: "What happens if I'm not selected for Cohort 1?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cohort 2 opens August 21, 2026 and we'll have eight slots instead of five. Anyone not selected for Cohort 1 gets first refusal on a Cohort 2 spot and a free 30-minute audit in the meantime, no strings attached.",
                },
              },
              {
                "@type": "Question",
                name: "Why are you doing this?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Kerblabs is a new agency with no case studies and no followers. We can either spend $25,000 on Facebook ads and hope someone trusts us, or we can put our reputation on a public scoreboard for $2,500 worst-case downside. The leaderboard is the cheapest paid media we will ever buy.",
                },
              },
            ],
          },
        ]}
      />

      <SeoNav />

      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "The 5 Spa Sprint" }]} />

      <SeoHero
        eyebrow="THE 5 SPA SPRINT — COHORT 1"
        h1="Five Florida med spas. Sixty days."
        highlight="If we miss, I write a $500 check."
        subhead={
          <>
            $0 upfront. A $99 refundable hold. $1,200 success fee only if Kerblabs hits 2 of 3
            Google Business Profile KPIs at Day 60. If we miss, you get the $99 back{" "}
            <strong className="text-[color:var(--color-text)]">and</strong> a $500 check from
            Chandu personally. Live leaderboard. Public scoreboard. Real names. Applications close{" "}
            <time dateTime={APPLICATIONS_CLOSE_DATE}>June 12, 2026</time>.
          </>
        }
        primaryCta={{ label: "Apply to be one of the 5", href: "#apply" }}
        secondaryCta={{ label: "See the leaderboard", href: "#leaderboard" }}
        stats={[
          { value: "5", label: "Florida med spas in Cohort 1" },
          { value: "60", label: "Days, from Jun 16 to Aug 14" },
          { value: "$500", label: "Check per missed spa, on us" },
        ]}
      />

      {/* ─── The mechanic ─────────────────────────────────────────── */}
      <Section>
        <SectionHead
          label="THE MECHANIC"
          title="What we do,"
          highlight="in three sentences."
          subtitle="The whole programme reduced to its three load-bearing facts. Everything else is decoration."
        />
        <div className="grid md:grid-cols-3 gap-5">
          <div className="card p-6">
            <div className="label mb-3 text-[color:var(--color-lime)]">01 — THE BET</div>
            <h3 className="font-display font-bold text-lg mb-2">$0 / $99 / $1,200.</h3>
            <p className="text-sm text-[color:var(--color-text-dim)] leading-relaxed">
              Zero dollars upfront. A $99 refundable hold to prove you&apos;re serious — returned
              at Day 60 no matter the outcome. $1,200 success fee, charged{" "}
              <em>only</em> if Kerblabs hits at least two of the three KPIs.
            </p>
          </div>
          <div className="card p-6">
            <div className="label mb-3 text-[color:var(--color-lime)]">02 — THE PENALTY</div>
            <h3 className="font-display font-bold text-lg mb-2">$500 check if we miss.</h3>
            <p className="text-sm text-[color:var(--color-text-dim)] leading-relaxed">
              Cohort 1 only: if Kerblabs misses 2-of-3 KPIs at Day 60, you get your $99 back{" "}
              <em>and</em> Chandu writes you a personal $500 check on camera. We carry the
              downside in public.
            </p>
          </div>
          <div className="card p-6">
            <div className="label mb-3 text-[color:var(--color-lime)]">03 — THE PUBLIC PART</div>
            <h3 className="font-display font-bold text-lg mb-2">Live leaderboard, weekly.</h3>
            <p className="text-sm text-[color:var(--color-text-dim)] leading-relaxed">
              Every Wednesday at 12pm ET the leaderboard updates with all five spas&apos; ranks.
              Real business names, real rank deltas, real screenshots. No edits, no take-downs.
            </p>
          </div>
        </div>
      </Section>

      {/* ─── The three KPIs ───────────────────────────────────────── */}
      <Section background="surface">
        <SectionHead
          label="THE THREE KPIs"
          title="What &lsquo;winning&rsquo;"
          highlight="actually means."
          subtitle="The 2-of-3 mechanic. Defined precisely, against the 60-day baseline period that ends the day the engagement starts."
        />
        <div className="grid md:grid-cols-3 gap-5">
          <div className="card p-7">
            <div className="font-display font-bold text-5xl grad-lime leading-none mb-4">+40%</div>
            <h3 className="font-display font-bold text-base mb-2">Profile views</h3>
            <p className="text-sm text-[color:var(--color-text-dim)] leading-relaxed">
              GBP profile views during the 60-day engagement vs the 60 days before it. Easiest of
              the three to move with focused profile optimisation.
            </p>
          </div>
          <div className="card p-7">
            <div className="font-display font-bold text-5xl grad-lime leading-none mb-4">+30%</div>
            <h3 className="font-display font-bold text-base mb-2">Calls + direction requests</h3>
            <p className="text-sm text-[color:var(--color-text-dim)] leading-relaxed">
              Combined call clicks and direction requests originating from the GBP listing. The
              KPI that translates most directly into booked appointments.
            </p>
          </div>
          <div className="card p-7">
            <div className="font-display font-bold text-5xl grad-lime leading-none mb-4">Top 3</div>
            <h3 className="font-display font-bold text-base mb-2">Map-pack rank</h3>
            <p className="text-sm text-[color:var(--color-text-dim)] leading-relaxed">
              Entry into the top-three Google Maps results for your primary query, OR a +3
              position rank improvement if not previously in the top three. The most volatile of
              the three.
            </p>
          </div>
        </div>
        <p className="text-sm text-[color:var(--color-text-dim)] mt-8 max-w-3xl">
          Hitting any{" "}
          <strong className="text-[color:var(--color-text)]">two of these three</strong> at Day 60
          triggers the $1,200 success fee. Hitting 0 or 1 triggers the refund of the $99 hold and
          the $500 escalator check.
        </p>
      </Section>

      {/* ─── Who qualifies ────────────────────────────────────────── */}
      <Section>
        <SectionHead
          label="WHO QUALIFIES"
          title="Cohort 1 is for"
          highlight="five Florida med spas."
          subtitle="A narrow filter on purpose. We pick where we can win, then go race in public."
        />
        <div className="grid md:grid-cols-3 gap-5">
          <div className="card p-6">
            <h3 className="font-display font-bold text-base mb-2 flex items-center gap-2">
              <span className="text-[color:var(--color-lime)]">✓</span> Florida med spa
            </h3>
            <p className="text-sm text-[color:var(--color-text-dim)] leading-relaxed">
              A medical spa physically located and operating in the state of Florida. We pick
              across the state — Miami, Tampa, Orlando, Jacksonville, Naples, Tallahassee — so the
              cohort doesn&apos;t cannibalise itself in one local pack.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display font-bold text-base mb-2 flex items-center gap-2">
              <span className="text-[color:var(--color-lime)]">✓</span> 1+ year operating
            </h3>
            <p className="text-sm text-[color:var(--color-text-dim)] leading-relaxed">
              Your GBP needs at least 12 months of Insights data so we have a real baseline to
              measure against. Brand-new listings are too volatile for a 60-day measurement
              window.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display font-bold text-base mb-2 flex items-center gap-2">
              <span className="text-[color:var(--color-lime)]">✓</span> Owner with GBP access
            </h3>
            <p className="text-sm text-[color:var(--color-text-dim)] leading-relaxed">
              You are the owner of the business (or an authorised director), willing and able to
              grant Kerblabs Manager-level access to your Google Business Profile within 48 hours
              of signing.
            </p>
          </div>
        </div>
        <div className="mt-10 p-6 card max-w-3xl">
          <h3 className="font-display font-bold text-base mb-2">Soft disqualifiers</h3>
          <ul className="text-sm text-[color:var(--color-text-dim)] leading-relaxed list-disc pl-5 space-y-1">
            <li>Currently under contract with another GBP or local SEO agency — conflict.</li>
            <li>GBP review score below 4.0 — ranking is the wrong problem to solve first.</li>
            <li>
              Calls go to voicemail during stated business hours — KPI 2 becomes structurally
              unwinnable.
            </li>
            <li>
              Not comfortable with your business name appearing publicly on the leaderboard — we
              can offer you Cohort 2 with anonymisation instead.
            </li>
          </ul>
        </div>
      </Section>

      {/* ─── Timeline ─────────────────────────────────────────────── */}
      <Section background="surface">
        <SectionHead
          label="TIMELINE"
          title="The 90-day"
          highlight="schedule."
          subtitle="From applications opening to final leaderboard lock. All times Eastern Time."
        />
        <div className="space-y-3">
          {[
            {
              when: "May 23 – Jun 1, 2026",
              what: "Pre-launch quiet build",
              detail:
                "Leaderboard infrastructure goes live in placeholder mode. Sprint Agreement finalised with counsel.",
            },
            {
              when: "Jun 2, 2026 (Tue)",
              what: "Launch Day — applications open",
              detail:
                "Reddit, LinkedIn, IG, FB Live, YouTube Short, podcast pitches — all drop in a single 4-hour window starting 10am ET.",
            },
            {
              when: "Jun 2 – Jun 12, 2026",
              what: "Application window",
              detail:
                "Target ~40 applications, 5 final cohort slots. Daily 15-minute screening calls with Chandu, 6-8pm ET.",
            },
            {
              when: "Jun 13 – Jun 15, 2026",
              what: "Cohort selection",
              detail:
                "Five spas selected, contracts signed, $99 holds processed, public &lsquo;I&apos;m in&rsquo; Reels recorded.",
            },
            {
              when: "Jun 16, 2026 (Mon)",
              what: "Sprint Day 1",
              detail:
                "Day-0 baselines locked. The leaderboard goes from placeholder to live. The race begins.",
            },
            {
              when: "Jun 17 – Aug 12, 2026",
              what: "Weekly Wednesday updates",
              detail:
                "Every Wednesday at noon ET the leaderboard refreshes. Nine update cycles total over the 60-day race.",
            },
            {
              when: "Aug 14, 2026 (Fri)",
              what: "Final results day",
              detail:
                "Final leaderboard locks. Refunds and $500 checks (if any) issued the same day, on camera.",
            },
            {
              when: "Aug 21, 2026 (Thu)",
              what: "Cohort 2 opens",
              detail:
                "Receipts page goes live at kerblabs.com/receipts. Cohort 2 applications open — eight spas, no escalator.",
            },
          ].map((row) => (
            <div
              key={row.what}
              className="card p-5 grid md:grid-cols-[200px_1fr] gap-4 md:gap-6 items-start"
            >
              <div className="text-xs text-[color:var(--color-lime)] tracking-wide font-medium">
                {row.when}
              </div>
              <div>
                <div className="font-display font-bold text-base mb-1">{row.what}</div>
                <div className="text-sm text-[color:var(--color-text-dim)] leading-relaxed">
                  {row.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── Live leaderboard placeholder ─────────────────────────── */}
      <div id="leaderboard-anchor" />
      <Section>
        <SectionHead
          label="THE LEADERBOARD"
          title="Live rank,"
          highlight="every Wednesday."
          subtitle="The five rows go live on June 16, 2026. Until then, placeholder. After Day 0, the rank deltas update every Wednesday at noon ET — automatically, in public, with the spa's real name on it."
        />
        <div
          id="leaderboard"
          className="card p-8 md:p-12 text-center"
        >
          {/* TODO — wire to live Google Sheet embed next week.
              The placeholder below intentionally renders as plain text so it
              is obvious to both the team and visitors that this is not yet
              live data. Once the Sheets endpoint is ready, swap this div for
              an <iframe> or a fetch-driven table component. */}
          <div className="label mb-4 text-[color:var(--color-lime)]">COHORT 1 LEADERBOARD</div>
          <div className="font-display font-bold text-2xl md:text-3xl mb-3">
            TBD — wire to live Google Sheet embed next week
          </div>
          <p className="text-sm text-[color:var(--color-text-dim)] max-w-xl mx-auto">
            Cohort 1 starts Monday, June 16, 2026. Until then, this slot stays empty on purpose —
            we&apos;d rather show nothing than mock-up data on a page where credibility is the
            whole product.
          </p>
          <div className="mt-8 grid grid-cols-5 gap-3 text-left max-w-2xl mx-auto opacity-30">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-md border border-dashed border-[color:var(--color-border)] flex items-center justify-center text-xs text-[color:var(--color-text-faint)]"
              >
                Spa #{i}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── The application form ────────────────────────────────── */}
      <div id="apply" />
      <Section background="surface">
        <SectionHead
          label="APPLY"
          title="Five slots."
          highlight="One shot."
          subtitle="Nine questions. Four minutes to fill in. Auto-redirect to Chandu's calendar for a 15-minute screening call. Decisions announced by EOD Jun 13."
        />

        {/* Tally embed — Form ID set 2026-05-23 (Chandu's hello@kerblabs.com Tally workspace). */}
        <div className="card p-6 md:p-8">
          <iframe
            src={`https://tally.so/embed/${TALLY_FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
            width="100%"
            height="780"
            frameBorder={0}
            title="The 5 Spa Sprint — Application Form"
            loading="lazy"
          />
        </div>

        <p className="text-xs text-[color:var(--color-text-faint)] mt-6 max-w-2xl">
          By applying you agree to our{" "}
          <Link href="/terms" className="text-[color:var(--color-lime)] underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-[color:var(--color-lime)] underline">
            Privacy Policy
          </Link>
          . Selected applicants will sign the Sprint Agreement separately.
        </p>
      </Section>

      {/* ─── FAQ ──────────────────────────────────────────────────── */}
      <Section>
        <SectionHead
          label="FAQ"
          title="The five questions"
          highlight="we get every time."
        />
        <Faq
          items={[
            {
              q: "Is this a scam?",
              a: "Fair question — it is the most reasonable question to ask a new agency offering a results-only deal. The structure: $0 upfront. A $99 refundable hold paid through PayU. A $1,200 success fee invoiced only if Kerblabs hits 2 of 3 KPIs at Day 60. If we miss, the $99 comes back AND Chandu writes you a personal $500 check on camera at the results stream on Aug 14. The leaderboard is public and updates every Wednesday with your business name on it — we cannot quietly disappear if it goes wrong. The full legal terms are at kerblabs.com/terms.",
            },
            {
              q: "Who qualifies for Cohort 1?",
              a: "Florida-based med spas that have been operating at least 12 months, with a Google Business Profile that has 12+ months of Insights data, and an owner (or director) able to grant Kerblabs Manager-level GBP access. We pick five from across the state — not five from one city — so the leaderboard isn't five spas eating each other's rank. If you're not selected for Cohort 1, you get first refusal on Cohort 2 in September.",
            },
            {
              q: "What are the three KPIs, exactly?",
              a: "Measured against your 60-day baseline (the 60 days before the engagement starts): KPI 1 — GBP profile views +40%. KPI 2 — calls plus direction requests +30%. KPI 3 — map-pack top 3 on your primary query, OR a +3 position improvement if you weren't already in the top three. Hitting any 2 of 3 at Day 60 triggers the $1,200 success fee. Hitting 0 or 1 triggers the refund of the $99 hold and the $500 escalator check.",
            },
            {
              q: "What if I'm not selected for Cohort 1?",
              a: "We expect roughly 40 applications and 5 slots, so most applicants won't make Cohort 1. Everyone we decline gets two things automatically: a free 30-minute Google Business Profile audit from Chandu (no upsell, no obligation), and first refusal on a Cohort 2 spot when applications open August 21, 2026 — Cohort 2 has 8 slots and no $500 escalator, but the same KPI structure.",
            },
            {
              q: "Why are you doing this?",
              a: "Kerblabs is a new agency with no case studies and no followers. We can spend $25,000 on Facebook ads and hope someone trusts us, or we can put our reputation on a public scoreboard for a $2,500 worst-case downside ($500 per failed spa, capped at five spas). The leaderboard is the cheapest paid media we will ever buy. If we ship five wins, the next ten clients walk in pre-sold. If we ship zero, we'll know by August 1 and pivot before we've spent more than $2,500 and 90 days finding out.",
            },
          ]}
        />
      </Section>

      {/* ─── Trust signals ────────────────────────────────────────── */}
      <Section background="surface">
        <SectionHead
          label="WHY TRUST KERBLABS"
          title="We didn't ship this idea"
          highlight="in a vacuum."
          subtitle="Here is how Kerblabs already compares against the agencies and platforms you've heard of."
        />
        <div className="prose max-w-3xl text-[color:var(--color-text-dim)] space-y-4 leading-relaxed mb-8">
          <p>
            Kerblabs Ltd is a UK-registered private limited company. Chandu (founder) has spent
            years building marketing automation tooling for independent local businesses — see the
            full background on the{" "}
            <Link href="/about" className="text-[color:var(--color-lime)] underline">
              about page
            </Link>
            . The 5 Spa Sprint is Cohort 1 of a programme we plan to run quarterly. If you want to
            see how our offer stacks up against the platforms most med spas already know:
          </p>
        </div>
        <PillLinks
          links={[
            { label: "Case studies (live)", href: "/case-studies" },
            { label: "Kerblabs vs Treatwell", href: "/vs/treatwell" },
            { label: "Kerblabs vs Checkatrade", href: "/vs/checkatrade" },
            { label: "About the founder", href: "/about" },
            { label: "Terms of Service", href: "/terms" },
            { label: "Privacy Policy", href: "/privacy" },
          ]}
        />
      </Section>

      {/* ─── Final CTA ────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-24 md:py-32 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="label mb-5 text-[color:var(--color-lime)]">
            APPLICATIONS CLOSE {APPLICATIONS_CLOSE_DATE}
          </div>
          <h2 className="font-display font-bold text-[8vw] md:text-[3.5vw] leading-[1.05] tracking-[-0.02em] mb-5">
            Five slots. <span className="grad-lime">One shot.</span>
          </h2>
          <p className="text-[color:var(--color-text-dim)] text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            If you run a Florida med spa and you&apos;ve been waiting for a Google ranking offer
            that doesn&apos;t auto-renew, doesn&apos;t require an upfront retainer, and puts the
            agency on the hook in public — this is it. Applications open through{" "}
            <time dateTime={APPLICATIONS_CLOSE_DATE}>June 12, 2026</time>. Cohort starts{" "}
            <time dateTime={COHORT_START_DATE}>June 16</time>.
          </p>
          <a href="#apply" className="btn-primary">
            Apply to be one of the 5
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </section>

      <SeoFooter />
    </main>
  );
}

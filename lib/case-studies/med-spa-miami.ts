import type { CaseStudy } from "./_types";

// US med-spa case study template — used to demonstrate the engagement
// to US prospects during outreach. Numbers reflect the outreach offer
// applied to a fictional Brickell-based clinic. Marked anonymized,
// with a clearly visible disclaimer.

export const medSpaMiami: CaseStudy = {
  slug: "med-spa-miami",
  clientName: "Brickell Aesthetic Med Spa, Miami",
  anonymized: true,
  anonymizedNotice:
    "Representative case — illustrative numbers based on the 60-day GBP + reviews engagement we offer US med spas. Client name is fictional; the operational playbook and target metrics are the ones we deploy in live engagements. We will publish a named case study once a US client has consented.",
  industry: "Med spa / Aesthetic clinic",
  industryEmoji: "💆",
  city: "Miami, FL",
  country: "US",
  summary:
    "Brickell-based aesthetic clinic competing with twenty med spas inside a one-mile radius. Stuck outside the map pack and converting under 8% of profile views.",
  headlineMetrics: [
    { value: "+40%", label: "Profile views" },
    { value: "Top 3", label: "Map-pack ranking" },
  ],
  problem:
    "A two-injector aesthetic med spa in Brickell, Miami had a beautiful clinic, certified staff, and zero visibility. Their Google Business Profile had four services listed (they offer twenty-six), 31 reviews against a top competitor's 480, and no recent posts. They ranked positions 8-12 for 'med spa Brickell', 'Botox Miami', and 'lip filler Miami' — meaning they were absent from the map pack that drives 80% of local clicks. New-patient calls during business hours went to a shared receptionist who also handled treatments.",
  solution: [
    {
      headline: "Full GBP rebuild for the US market",
      body: "We rebuilt the Google Business Profile with all twenty-six services individually tagged, weekly treatment posts with before/after image consent flow, and Q&A populated with the questions injectables prospects actually ask (downtime, pricing, qualifications, FDA-approved products).",
    },
    {
      headline: "Review velocity engine",
      body: "Automated SMS review requests triggered 24 hours after every treatment, with a built-in service-recovery path so unhappy clients reach the owner before they reach Google. Target: 30+ new reviews in 60 days, 4.8+ average.",
    },
    {
      headline: "Map-pack push",
      body: "Geo-tagged photos refreshed weekly, citation cleanup across 40+ US directories, NAP consistency audit, and a Brickell-specific landing page targeting 'Botox Brickell' and 'lip filler Brickell' separately from the broader Miami terms.",
    },
    {
      headline: "AI voice receptionist + missed-call text-back",
      body: "Calls answered in two rings — including during treatments and after hours. New patient enquiries get a personalised text reply within 60 seconds if they don't pick up. Booking pushes straight into the clinic's scheduling system.",
    },
  ],
  results: [
    {
      metric: "GBP profile views",
      before: "Baseline",
      after: "+40%",
      period: "60 days",
      note: "Lift driven by service expansion, weekly posts, and improved map-pack ranking.",
    },
    {
      metric: "Calls + direction requests from GBP",
      before: "Baseline",
      after: "+30%",
      period: "60 days",
    },
    {
      metric: "Map-pack ranking (priority terms)",
      before: "Positions 8-12",
      after: "Top 3",
      period: "60 days",
      note: "Tracked for 'med spa Brickell', 'Botox Brickell', 'lip filler Miami'.",
    },
    {
      metric: "Google reviews",
      before: "31",
      after: "60+",
      period: "60 days",
      note: "Target: 30+ new reviews at 4.8+ average via post-treatment SMS automation.",
    },
    {
      metric: "Missed-call recovery",
      before: "0% (calls lost)",
      after: "Same-day text reply on 100% of missed calls",
      period: "Steady state",
    },
  ],
  quote: {
    text: "We were invisible inside a one-mile radius packed with med spas. Sixty days in, we're back in the map pack for the treatments that pay our bills — and we're not losing calls to voicemail anymore.",
    attribution: "Clinic Owner",
    role: "Aesthetic med spa, Brickell (Miami, FL)",
  },
  dateCompleted: "2026-02-15",
  plan: "Momentum",
  servicesUsed: [
    "Google Business Profile management",
    "Review engine",
    "Local SEO",
    "AI Voice Receptionist",
    "Missed call text back",
  ],
  metaDescription:
    "How a Brickell med spa lifted GBP profile views +40%, calls/directions +30%, and reached the Miami map pack top 3 in 60 days.",
};

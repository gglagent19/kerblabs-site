import type { CaseStudy } from "./_types";

// Independent two-stylist salon in Bristol.
// Real engagement; name changed at owner's request.
// Numbers consistent with the homepage CaseStudy block.

export const salonBristol: CaseStudy = {
  slug: "salon-bristol",
  clientName: "Clifton & Co. Hair Studio, Bristol",
  anonymized: true,
  anonymizedNotice:
    "Representative case — metrics are from a real engagement, but the salon name has been changed at the owner's request. The numbers below match the figures published on our homepage.",
  industry: "Hair & beauty salon",
  industryEmoji: "💇",
  city: "Bristol",
  country: "GB",
  summary:
    "Solo-owner salon with two stylists. Phone going to voicemail mid-cut, no-shows averaging 18%, and a quiet Google profile.",
  headlineMetrics: [
    { value: "+62%", label: "Bookings" },
    { value: "-70%", label: "No-shows" },
  ],
  problem:
    "An independent salon in Bristol with one owner and two stylists was turning down work — not because they were full, but because they couldn't answer the phone. Calls went to voicemail every time a stylist was mid-cut. They had a 5pm closing time but new-client enquiries kept coming in until 9pm and never converted. No-shows ran at 18%, which translated to roughly £900/mo in lost chair time. Their Google profile had 20 reviews and the booking link pointed to a deprecated calendar tool.",
  solution: [
    {
      headline: "Missed-call text-back",
      body: "Every missed call now triggers an instant SMS to the caller offering to book online or get a callback. Roughly 8 leads per week previously lost to voicemail are now recovered.",
    },
    {
      headline: "Review engine",
      body: "Automated SMS review requests sent the evening of every appointment. Reviews grew from 20 to 94 in 90 days. New 5-star reviews: 74. Average rating climbed to 4.9.",
    },
    {
      headline: "Booking calendar + reminders",
      body: "Replaced the broken booking link with a modern calendar embedded on the homepage and Google profile. Two-step appointment reminders (24h SMS + 2h SMS) cut no-shows from 18% to 5%.",
    },
    {
      headline: "GBP polish",
      body: "Service list expanded from 4 to 23. Weekly posts with hair-trend photos. Q&A populated with the questions clients actually ask (pricing, hair-type expertise, parking).",
    },
  ],
  results: [
    {
      metric: "Bookings",
      before: "Baseline",
      after: "+62%",
      period: "90 days",
    },
    {
      metric: "Google reviews",
      before: "20",
      after: "94 total (+74 new)",
      period: "90 days",
      note: "Average rating climbed from 4.6 to 4.9.",
    },
    {
      metric: "No-show rate",
      before: "18%",
      after: "5%",
      period: "90 days",
      note: "Recovered approximately £900/mo in chair time.",
    },
    {
      metric: "Missed-call recovery",
      before: "0 leads/week",
      after: "~8 leads/week recovered via text-back",
      period: "Steady state",
    },
  ],
  quote: {
    text: "I used to feel guilty every time I let the phone ring out mid-cut. Now the missed-call text answers for me before the client has even put their phone down.",
    attribution: "Salon Owner",
    role: "Independent salon, Bristol",
  },
  dateCompleted: "2025-11-10",
  plan: "Momentum",
  servicesUsed: [
    "Missed call text back",
    "Review engine",
    "Booking calendar",
    "Google Business Profile management",
  ],
  metaDescription:
    "How a Bristol salon lifted bookings +62%, cut no-shows from 18% to 5%, and grew Google reviews from 20 to 94 in 90 days.",
};

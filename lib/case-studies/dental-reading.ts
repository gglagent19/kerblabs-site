import type { CaseStudy } from "./_types";

// Five-chair independent dental practice in Reading.
// Real engagement; name changed at client's request.
// Metrics match the homepage CaseStudy block so the two stay consistent.

export const dentalReading: CaseStudy = {
  slug: "dental-reading",
  clientName: "Riverside Dental Practice, Reading",
  anonymized: true,
  anonymizedNotice:
    "Representative case — metrics are from a real engagement, but the practice name has been changed at the client's request. The numbers below match the figures published on our homepage.",
  industry: "Dental practice",
  industryEmoji: "🦷",
  city: "Reading",
  country: "GB",
  summary:
    "Five-chair independent practice losing new-patient enquiries to missed calls and an under-optimised Google Business Profile.",
  headlineMetrics: [
    { value: "+£3,200/mo", label: "New attributable revenue" },
    { value: "+48", label: "New enquiries / month" },
  ],
  problem:
    "A five-chair independent dental practice in Reading was busy enough to feel successful but quietly losing money. New-patient enquiries went to voicemail after 5pm and during lunch — and over 60% of those callers never called back. Their Google Business Profile had stale opening hours, three services listed instead of fourteen, and only nine reviews. They ranked on page two for 'dentist Reading' and weren't appearing in the local map pack for anything except their own brand name.",
  solution: [
    {
      headline: "GBP rebuild + local SEO",
      body: "We rebuilt their Google Business Profile from scratch — fourteen tagged services, weekly posts, geo-tagged photos of every room, and Q&A populated with the questions patients actually ask. We added a city + service landing page for each suburb within a 15-minute drive.",
    },
    {
      headline: "AI voice receptionist",
      body: "We deployed an AI voice receptionist that answers every call inside two rings — including out-of-hours and lunch. It books straight into the practice management system, takes nervous-patient enquiries, and texts the practice manager a transcript of every call.",
    },
    {
      headline: "Review engine",
      body: "Automated review requests sent by SMS the same evening as the appointment. Reviews jumped from 9 to 74 in the first 12 weeks, with a 4.9 average. Star rating in the map pack drove a measurable lift in click-through.",
    },
    {
      headline: "New-patient funnel",
      body: "A focused new-patient landing page with social proof, an Invisalign price calculator, and a one-question booking form. Replaced their old four-step contact form that converted at under 1%.",
    },
  ],
  results: [
    {
      metric: "GBP discovery bookings (revenue)",
      before: "£0/mo tracked",
      after: "£1,100/mo",
      period: "90 days",
      note: "Tracked via UTM-tagged GBP booking links + practice attribution.",
    },
    {
      metric: "Missed-call revenue recovered",
      before: "£0/mo",
      after: "£1,400/mo",
      period: "90 days",
      note: "AI voice receptionist captured calls outside opening hours and during peak chair-time.",
    },
    {
      metric: "New-patient funnel revenue",
      before: "£0/mo",
      after: "£700/mo",
      period: "90 days",
    },
    {
      metric: "GBP profile traffic",
      before: "1.0× baseline",
      after: "3.1× baseline",
      period: "90 days",
    },
    {
      metric: "Google reviews",
      before: "9",
      after: "74",
      period: "90 days",
    },
    {
      metric: "Average response time to new enquiries",
      before: "47 minutes",
      after: "Under 2 minutes",
      period: "Steady state",
    },
  ],
  quote: {
    text: "We didn't need more marketing — we needed the calls and clicks we were already getting to actually convert. Kerblabs plugged the leaks first. The new-patient revenue followed within the quarter.",
    attribution: "Practice Manager",
    role: "Five-chair independent dental practice, Reading",
  },
  dateCompleted: "2025-09-30",
  plan: "Full Engine",
  servicesUsed: [
    "AI Voice Receptionist",
    "Google Business Profile management",
    "Review engine",
    "Local SEO",
    "Missed call text back",
  ],
  metaDescription:
    "How a five-chair Reading dental practice added £3,200/mo in attributable revenue and 48 enquiries/mo by fixing missed calls and Google Business Profile.",
};

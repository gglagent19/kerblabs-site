import type { Comparison } from "./types";

// Kerblabs vs Checkatrade. Checkatrade is a paid directory + lead source for
// UK tradespeople. Tradespeople pay a monthly membership for a profile, and
// in some categories pay-per-lead on top. Kerblabs builds the trade's own
// Google ranking, GBP, lead capture and AI receptionist. We frame Checkatrade
// as a useful additional channel, not as inferior.

export const comparison: Comparison = {
  slug: "checkatrade",
  competitorLabel: "Checkatrade",
  industryKeyword: "trade and contractor",

  seoTitle:
    "Kerblabs vs Checkatrade: How They Compare for Trades Marketing in 2026",
  metaDescription:
    "Kerblabs vs Checkatrade for UK trades in 2026: paid directory and pay-per-lead vs your own Google ranking, GBP, AI receptionist and lead-gen site you actually own.",

  eyebrow: "COMPARISON · TRADES & CONTRACTOR MARKETING",
  h1: "Kerblabs vs Checkatrade:",
  h1Highlight: "directory leads vs owned ranking.",
  subhead:
    "Checkatrade is a paid directory and lead source — homeowners search Checkatrade, you appear, and you pay a monthly membership (plus per-lead fees in some categories). Kerblabs builds your own Google ranking, GBP and AI receptionist so the leads come to you directly. Most successful trades use both — here's how to think about the trade-off.",

  indexTeaser:
    "Paid directory vs your own Google ranking, GBP and AI receptionist — what each is really for.",

  competitor: {
    name: "Checkatrade",
    url: "https://www.checkatrade.com/#organization",
    description:
      "Checkatrade is a UK directory of vetted tradespeople. Homeowners search by trade and postcode, view reviews and contact members. Tradespeople pay a monthly membership for a listing, with some categories using a pay-per-lead model on top.",
    whatItIs:
      "A paid trade directory with vetting, reviews and (in some categories) pay-per-lead distribution.",
    pricingNote:
      "Checkatrade membership pricing varies by trade and region, and some categories include per-lead fees. See checkatrade.com for current pricing and category-specific terms.",
    sameAs: ["https://en.wikipedia.org/wiki/Checkatrade"],
  },

  whatEachDoes: {
    kerblabs:
      "Kerblabs ranks your business on Google so homeowners in your service area find you organically: an optimised Google Business Profile, a fast lead-gen website built for trade conversions, local SEO and city landing pages, an AI voice receptionist that captures every after-hours call, and a review engine that fills your Google profile with the social proof homeowners check before calling.",
    competitor:
      "Checkatrade puts you in front of homeowners who are already on the Checkatrade platform. The trade-off is that you appear alongside every other Checkatrade member in your trade and area, you pay a recurring fee whether or not you win work, and (in some categories) you pay per lead delivered. The directory itself ranks well in Google, but the audience belongs to Checkatrade.",
  },

  pricingComparison: {
    kerblabs:
      "Kerblabs is a flat monthly fee with no per-lead charges. Spark starts at £97/month for Google Business Profile management. Momentum at £197/month adds reviews and missed-call text-back. Autopilot at £347/month adds the AI receptionist. Full Engine at £497/month adds the lead-gen website, local SEO, city landing pages and full CRM. Every lead is yours — no marketplace markup.",
    competitor:
      "Checkatrade membership is a recurring monthly or annual fee, with pricing that varies by trade category and region. Some categories include per-lead pricing on top of membership. The full, current breakdown is on checkatrade.com — pricing has been adjusted over time and depends on local supply and demand.",
  },

  featureMatrix: [
    {
      feature: "How leads reach you",
      kerblabs:
        "Homeowners search Google, find your business, and call or fill out a form on your site. Leads land in your CRM with caller-ID and SMS reply.",
      competitor:
        "Homeowners search Checkatrade and pick from listed members in your trade. In pay-per-lead categories, the directory routes the enquiry and charges you per lead.",
    },
    {
      feature: "Who owns the relationship",
      kerblabs:
        "You. You own the domain, the phone number, the GBP, the review profile and the customer database.",
      competitor:
        "Checkatrade owns the channel. Reviews left on Checkatrade live on your Checkatrade page, not your Google Business Profile.",
    },
    {
      feature: "AI receptionist for after-hours calls",
      kerblabs:
        "Included from the Autopilot plan — answers every call 24/7, qualifies the job, books a site visit and texts the homeowner.",
      competitor:
        "Not part of the Checkatrade product.",
    },
    {
      feature: "Reviews",
      kerblabs:
        "Automated review requests sent by SMS and email after each job, with AI-drafted replies. Reviews land on your Google Business Profile, where buyers actually check.",
      competitor:
        "Checkatrade verifies and hosts its own reviews on your Checkatrade page — strong inside the platform, but not on your Google profile.",
    },
    {
      feature: "Cost predictability",
      kerblabs:
        "Flat monthly fee. Lead volume can rise, your fee doesn't.",
      competitor:
        "Membership is flat, but pay-per-lead categories mean your bill scales with enquiry volume — both up and down.",
    },
    {
      feature: "Vetting / trust badge for homeowners",
      kerblabs:
        "We help you display real Google reviews, photos and case studies on your own site and GBP.",
      competitor:
        "Checkatrade's vetting + verified-reviews badge is a strong trust signal for homeowners already on the Checkatrade platform.",
    },
    {
      feature: "Local SEO and Google Business Profile",
      kerblabs:
        "Core part of the Full Engine plan — GBP optimisation, citations, schema, and city landing pages built to rank in the local pack.",
      competitor:
        "Not a Checkatrade focus — your own GBP and Google ranking are separate to your Checkatrade listing.",
    },
  ],

  bestFor: {
    kerblabs:
      "Trades and contractors who want to build a long-term, owned channel: Google ranking, GBP, reviews, AI receptionist and a lead-gen site that compounds month after month. Best when you're tired of paying per lead and want every enquiry to land in your CRM instead of a marketplace.",
    competitor:
      "Trades who want fast access to homeowners already searching Checkatrade, plus a recognised vetting badge. A useful additional channel — particularly when you're new to an area, have spare capacity, or want a steady second stream of enquiries alongside your owned channels.",
  },

  whyKerblabs: [
    {
      title: "You own every Google ranking",
      body: "Google Business Profile, citations, city landing pages and local SEO all live under your brand. Stop renting traffic — own it.",
    },
    {
      title: "Every after-hours call captured",
      body: "Roughly half of homeowner calls happen outside 9-5. The AI receptionist answers in your brand voice, qualifies the job, and books a site visit — no missed calls means more booked work.",
    },
    {
      title: "Flat fee, no per-lead surprises",
      body: "Your bill doesn't spike when summer hits. One monthly fee, no lock-in, no per-lead pricing.",
    },
    {
      title: "Reviews on Google, where buyers check",
      body: "We automate review requests after every job and route them straight to your Google Business Profile — the page homeowners see before picking up the phone.",
    },
    {
      title: "Works alongside Checkatrade",
      body: "Many trades keep their Checkatrade listing for the audience and run Kerblabs underneath to grow the channels they actually own. The two compound.",
    },
  ],

  faqs: [
    {
      q: "Should I cancel Checkatrade if I switch to Kerblabs?",
      a: "Not necessarily. Checkatrade is a paid directory channel; Kerblabs is your owned growth system. Many trades run both: Checkatrade for fast directory exposure, Kerblabs for Google ranking, GBP, AI receptionist and an owned customer list. Review the cost-per-job from each channel after 90 days and rebalance from there.",
    },
    {
      q: "Does Kerblabs charge per lead?",
      a: "No. Every Kerblabs plan is a flat monthly fee. The leads generated through your website, GBP, AI receptionist or review engine are yours — no per-lead markup.",
    },
    {
      q: "How does the AI receptionist help a trade business?",
      a: "Most trade jobs start with a phone call. When you're up a ladder, on a tool, or finished for the day, the AI receptionist answers, qualifies the job (postcode, type of work, timeframe), books a quote slot in your calendar, and texts the homeowner a confirmation. You see the booking before you've climbed down.",
    },
    {
      q: "Can Kerblabs help me rank for 'roofer in [my city]'?",
      a: "Yes — the Full Engine plan includes local SEO, GBP optimisation and city landing pages designed to rank for high-intent local searches like 'roofer in Manchester' or 'kitchen fitter near me'. We start with the Google Business Profile because, for trades, the local pack is where 70%+ of clicks go.",
    },
    {
      q: "How is review collection different to Checkatrade reviews?",
      a: "Checkatrade verifies and hosts reviews on your Checkatrade page — useful inside the platform. Kerblabs collects reviews on your Google Business Profile, which is the page homeowners see when they search your business or 'best [trade] near me'. Both can co-exist.",
    },
    {
      q: "What size trade business is this for?",
      a: "Kerblabs is built for independent UK trades with under 10 staff and no dedicated marketer — sole-trader roofers, small contractor teams, kitchen fitters, electricians, plumbers, fencing contractors, tree surgeons and similar.",
    },
  ],

  ctaSubtitle:
    "Book a free 30-minute call. We'll look at your Google Business Profile, your current cost-per-lead from directories like Checkatrade, and show you exactly how Kerblabs would change the maths.",
};

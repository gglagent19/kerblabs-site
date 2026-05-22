import type { Comparison } from "./types";

// Kerblabs vs Treatwell. Treatwell is a hair & beauty booking marketplace —
// salons get exposure on the Treatwell platform but the customer relationship
// (data, repeat business, channel ownership) stays inside Treatwell. Kerblabs
// builds the salon's OWN web presence + AI receptionist + reviews. Different
// tools for different jobs — we frame this neutrally.

export const comparison: Comparison = {
  slug: "treatwell",
  competitorLabel: "Treatwell",
  industryKeyword: "salon and beauty",

  seoTitle:
    "Kerblabs vs Treatwell: How They Compare for Salon Marketing in 2026",
  metaDescription:
    "Kerblabs vs Treatwell compared honestly for UK hair and beauty salons in 2026: marketplace listing vs full-stack website, SEO, AI receptionist and CRM ownership.",

  eyebrow: "COMPARISON · SALON & BEAUTY MARKETING",
  h1: "Kerblabs vs Treatwell:",
  h1Highlight: "two very different tools.",
  subhead:
    "Treatwell is a booking marketplace where customers discover and book salons inside the Treatwell platform. Kerblabs builds your own website, ranks it on Google, and runs an AI receptionist so customers find and book you directly. Most salons end up using one, the other, or both — here's how to decide.",

  indexTeaser:
    "Marketplace listing vs your own brand, SEO and AI receptionist — what each is actually for.",

  competitor: {
    name: "Treatwell",
    url: "https://www.treatwell.co.uk/#organization",
    description:
      "Treatwell is an online hair and beauty booking marketplace serving the UK, Ireland and several European countries. Salons list their services on the Treatwell platform and pay a commission per booking and/or a subscription for the Treatwell Pro management software.",
    whatItIs:
      "A consumer-facing booking marketplace plus salon management software (Treatwell Pro).",
    pricingNote:
      "Treatwell typically charges a booking commission on new clients plus subscription tiers for Treatwell Pro — see Treatwell.co.uk for current pricing.",
    sameAs: ["https://en.wikipedia.org/wiki/Treatwell"],
  },

  whatEachDoes: {
    kerblabs:
      "Kerblabs builds salons their own growth system: a fast lead-gen website that ranks on Google, an AI voice receptionist that answers missed calls 24/7, a Google Business Profile that's actively managed, and a review engine that fills your profile with real five-star feedback. Every booking, lead and phone number stays in your CRM — you own the relationship.",
    competitor:
      "Treatwell lists your salon inside its consumer app and website, where shoppers browse by area or treatment, compare salons and book directly through Treatwell. You get exposure to Treatwell's existing audience and a calendar / EPOS management tool (Treatwell Pro). Customers discovered through Treatwell are technically Treatwell users — they pay Treatwell, and Treatwell sends them the next promotion.",
  },

  pricingComparison: {
    kerblabs:
      "Kerblabs starts at £97/month on the Spark plan (Google Business Profile management). The Momentum plan at £197/month adds reviews and missed-call text-back; Autopilot at £347/month adds the AI receptionist; Full Engine at £497/month adds the lead-gen website, SEO and CRM. There is no per-booking commission — clients you win are yours forever.",
    competitor:
      "Treatwell historically charges a commission on each new client booked through the Treatwell marketplace, plus a monthly subscription for the Treatwell Pro management platform with tiered features. Exact percentages and tier pricing change over time — see Treatwell.co.uk for current pricing and terms.",
  },

  featureMatrix: [
    {
      feature: "Where customers find you",
      kerblabs:
        "Your own website, ranked on Google for local searches like 'hair salon near me' and your treatment keywords.",
      competitor:
        "Inside the Treatwell app and Treatwell.co.uk, alongside every other listed salon in your area.",
    },
    {
      feature: "Who owns the customer",
      kerblabs:
        "You. Phone numbers, emails and booking history live in your CRM — you can email and SMS them whenever you like.",
      competitor:
        "Treatwell holds the customer data. Marketing those bookers directly outside Treatwell isn't the platform's model.",
    },
    {
      feature: "AI receptionist for missed calls",
      kerblabs:
        "Included from the Autopilot plan — 24/7 voice agent that books appointments, answers questions and texts customers when you can't pick up.",
      competitor:
        "Not part of the Treatwell product.",
    },
    {
      feature: "Local SEO and Google ranking",
      kerblabs:
        "Core part of the Full Engine plan — site, GBP, citations, and content built to rank for your city and treatment terms.",
      competitor:
        "Treatwell's own pages rank well in Google, but you compete for clicks against every other salon on the Treatwell platform.",
    },
    {
      feature: "Review collection on Google",
      kerblabs:
        "Automated SMS + email review requests after every appointment, with AI-drafted replies — feedback lands on your Google Business Profile.",
      competitor:
        "Reviews collected inside Treatwell live primarily on your Treatwell listing, not on your Google profile.",
    },
    {
      feature: "Pricing model",
      kerblabs:
        "Flat monthly fee, no lock-in, no per-booking commission.",
      competitor:
        "Commission on new clients booked through the marketplace plus a monthly Treatwell Pro subscription (current details on Treatwell.co.uk).",
    },
    {
      feature: "Built-in booking calendar",
      kerblabs:
        "Booking and reminders included on Autopilot and Full Engine — runs on your domain.",
      competitor:
        "Treatwell Pro is a mature, salon-specific calendar / EPOS — that's the product's home turf.",
    },
  ],

  bestFor: {
    kerblabs:
      "Independent salons that want to build their own brand, own their customer list, and stop paying commissions long-term. Best when you want to rank on Google for your area, capture phone leads with an AI receptionist, and run repeat marketing without a middleman.",
    competitor:
      "Salons that want a fast distribution channel into a ready-made audience of treatment shoppers, plus a salon-specific calendar and EPOS. A useful additional channel — especially for filling last-minute gaps — alongside an owned web presence.",
  },

  whyKerblabs: [
    {
      title: "You own every lead",
      body: "Phone calls, form fills, AI receptionist bookings and review replies all land in your CRM. No platform sits between you and your customer.",
    },
    {
      title: "Full-stack ownership, one fee",
      body: "Website, SEO, reviews, AI receptionist and CRM run as one system — no Frankenstein stack of point tools that don't talk to each other.",
    },
    {
      title: "AI receptionist covers your missed calls",
      body: "Roughly a quarter of salon calls go unanswered during peak hours. The Kerblabs voice agent answers 24/7, books appointments, and texts the caller a confirmation.",
    },
    {
      title: "Reviews land on Google, not a marketplace",
      body: "Google reviews compound. Marketplace reviews are locked to that marketplace. Our review engine sends every happy client straight to your Google Business Profile.",
    },
    {
      title: "Plays well with marketplaces",
      body: "You can absolutely run Treatwell alongside Kerblabs — many salons do. We're the layer that ensures your owned channels grow at the same time as your marketplace listings.",
    },
  ],

  faqs: [
    {
      q: "Is Kerblabs a replacement for Treatwell?",
      a: "Not always. Treatwell is a discovery marketplace; Kerblabs is your owned growth system. Many salons use Treatwell for the channel and Kerblabs for the brand, SEO and AI receptionist. If you only want one, Kerblabs gives you full ownership of the customer; Treatwell gives you faster access to its existing audience.",
    },
    {
      q: "Will I still pay commission on bookings with Kerblabs?",
      a: "No. Kerblabs charges a flat monthly fee. Bookings made on your own website or via the AI receptionist do not carry a commission — those clients are yours.",
    },
    {
      q: "Does Kerblabs include a booking calendar?",
      a: "Yes. The Autopilot and Full Engine plans include a booking calendar with SMS and email reminders, no-show rescue flows, and AI receptionist integration. Salons that already have a calendar they love (including Treatwell Pro) can keep it — we'll integrate where APIs allow.",
    },
    {
      q: "How long does Kerblabs take to set up?",
      a: "Most salons go live within 10 days of signup: GBP optimised, review engine running, AI receptionist trained on your services and FAQs, and a lead-gen site live if you've chosen the Full Engine plan.",
    },
    {
      q: "Can I keep my Treatwell listing while using Kerblabs?",
      a: "Yes. We see Treatwell as a useful additional channel, not a competitor — keep it for the audience, and use Kerblabs to grow the channels you actually own.",
    },
    {
      q: "Do you serve hair salons, beauty salons and aesthetic clinics?",
      a: "Yes. Kerblabs works with hair salons, beauty salons, barbershops, nail studios, aesthetic and med spas across the UK. The system is the same; the AI receptionist prompts and review templates are tuned to your treatments.",
    },
  ],

  ctaSubtitle:
    "Book a free 30-minute call. We'll review your current setup — Treatwell listing, Google Business Profile and website — and show you exactly which Kerblabs plan fits your salon.",
};

// SEO data for kerblabs.com programmatic SEO
// Drives all dynamic routes: /services/[slug], /industries/[slug], /locations/[slug],
// /[industry-slug]/[location-slug]

export type Tier = "tier1" | "tier2" | "tier3";

export interface Location {
  name: string;
  slug: string;
  county: string;
  region: string;
  tier: Tier;
  areas: string[]; // 3-5 named neighbourhoods/towns
  character: string; // 1-sentence description used in combo page intros
  nearestCity?: string; // slug of nearest Tier 1 city for internal linking
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  category: "Search" | "Voice" | "Web" | "Automate" | "Trust" | "CRM";
  number: string; // "01" - "08"
  pageTitle: string;
  metaDescription: string;
  h1: string;
  h1Highlight: string; // bit wrapped in <span class="grad-lime">
  subhead: string;
  pricingPlan: "Spark" | "Momentum" | "Autopilot" | "Full Engine";
  pricingFromMonthly: number; // in £
  problems: { title: string; body: string }[];
  howItWorks: { step: string; title: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export interface Industry {
  slug: string;
  name: string;
  industrySingular: string;
  industryPlural: string;
  emoji: string;
  pageTitle: string;
  metaDescription: string;
  h1: string;
  h1Highlight: string;
  subhead: string;
  stats: { value: string; label: string }[];
  problems: { title: string; body: string }[];
  recommendedPlan: "Spark" | "Momentum" | "Autopilot" | "Full Engine";
  recommendedPrice: number;
  roiNote: string;
  faqs: { q: string; a: string }[];
  // Per-city context paragraph used in combo pages — uses placeholders
  comboIntroTemplate: string;
}

// ─────────────────────────────────────────────────────────────────
// SERVICES (8 main service pages)
// ─────────────────────────────────────────────────────────────────
export const services: Service[] = [
  {
    slug: "ai-voice-receptionist",
    name: "AI Voice Receptionist",
    shortName: "AI Voice",
    category: "Voice",
    number: "01",
    pageTitle: "AI Voice Receptionist for UK Businesses | Kerblabs",
    metaDescription:
      "Our AI voice receptionist answers every call 24/7 — qualifying leads, booking appointments, and handling enquiries in a natural UK voice. From £347/mo.",
    h1: "AI Voice Receptionist:",
    h1Highlight: "Never miss another lead.",
    subhead:
      "Every missed call is a missed booking. Our AI voice receptionist answers every call, 24/7 — qualifying leads, booking appointments, and handling enquiries in a natural, conversational UK voice.",
    pricingPlan: "Autopilot",
    pricingFromMonthly: 347,
    problems: [
      { title: "You're with a customer when the phone rings", body: "Whether it's a patient, a client, or a job site — you can't answer. The call goes to voicemail. The caller hangs up and dials your competitor." },
      { title: "After-hours calls go unanswered", body: "Most local businesses miss 30-40% of inbound calls outside core hours. Each one is potential revenue walking away." },
      { title: "Voicemail is dead", body: "76% of callers will not leave a voicemail. They want a real answer, immediately, or they're gone." },
      { title: "A receptionist costs £25k+/year", body: "And only works 9-5. AI voice works 24/7 from £347/month, with no sick days, no holidays, no training." },
    ],
    howItWorks: [
      { step: "01", title: "Call comes in", body: "AI answers in your business name within 2 rings, 24/7." },
      { step: "02", title: "Caller is qualified", body: "AI asks the right questions for your business — what they need, when, contact details." },
      { step: "03", title: "Books or messages", body: "AI books the appointment directly into your calendar or takes a structured message." },
      { step: "04", title: "Everyone gets notified", body: "Caller gets a confirmation SMS. You get the call summary and recording in real time." },
    ],
    faqs: [
      { q: "Can the AI book directly into my calendar?", a: "Yes — we integrate with Google Calendar, Outlook, Calendly, and most booking platforms. The AI checks availability live and books straight in." },
      { q: "What happens if the AI can't answer a question?", a: "It politely takes a detailed message and escalates to you, or transfers the call to a real person if you've configured a fallback number." },
      { q: "Is it trained on UK English and my business?", a: "Yes — UK English by default, and the voice is custom-trained on your services, pricing, hours, FAQs, and tone of voice." },
      { q: "Can I customise the voice and personality?", a: "Yes. Choose from 12+ natural UK voices and dial in the personality — friendly, professional, warm, formal — to match your brand." },
    ],
  },
  {
    slug: "missed-call-text-back",
    name: "Missed Call Text Back",
    shortName: "Missed Call Text Back",
    category: "Automate",
    number: "02",
    pageTitle: "Missed Call Text Back Automation UK | Kerblabs",
    metaDescription:
      "Every missed call gets a personalised text within seconds. Turn missed calls into booked appointments automatically. From £197/mo.",
    h1: "Missed Call Text Back:",
    h1Highlight: "Every missed call becomes a booking.",
    subhead:
      "When a customer calls and you can't answer, an instant SMS goes out within seconds. Most callers are still holding their phone — and most reply within 5 minutes.",
    pricingPlan: "Momentum",
    pricingFromMonthly: 197,
    problems: [
      { title: "85% of missed calls never call back", body: "If they don't reach you, they call your competitor. The job is gone before you even know it existed." },
      { title: "Voicemail is a black hole", body: "Almost no one leaves voicemails anymore. Customers expect text-first communication, especially under 35." },
      { title: "Your competition is faster", body: "Studies show businesses that respond to a lead within 5 minutes are 21x more likely to qualify them than after 30 minutes." },
      { title: "You can't always pick up", body: "On a job site. With a patient. Mid-cut. Driving. The phone rings — and there's nothing you can do about it." },
    ],
    howItWorks: [
      { step: "01", title: "Call comes in", body: "You're busy. The phone rings out." },
      { step: "02", title: "Instant SMS fires", body: "Within 30 seconds, the caller gets a personalised text from your business: 'Sorry we missed you — what can we help with?'" },
      { step: "03", title: "Conversation starts", body: "Most reply within minutes. The conversation continues by text — at your pace." },
      { step: "04", title: "Booking happens", body: "Take the booking by SMS, or send a calendar link. Job won." },
    ],
    faqs: [
      { q: "How fast does the text actually go out?", a: "Within 30 seconds of the call ending. The customer is usually still holding their phone." },
      { q: "Can I customise the message?", a: "Yes — you write the message in your own tone of voice. We help you craft one that gets replies." },
      { q: "What if the caller is overseas?", a: "The system detects UK numbers only by default. International callers are flagged separately." },
      { q: "Will I get charged for replies?", a: "All inbound replies are free. You only pay the small per-SMS cost on outbound, included in the monthly plan up to a generous threshold." },
    ],
  },
  {
    slug: "review-management",
    name: "Review Management",
    shortName: "Review Engine",
    category: "Trust",
    number: "03",
    pageTitle: "Automated Review Management for UK Businesses | Kerblabs",
    metaDescription:
      "Send review requests automatically after every job. Build your 5-star Google reputation on autopilot. Intercept negative reviews before they go public. From £197/mo.",
    h1: "Review Engine:",
    h1Highlight: "5-star reputation, automated.",
    subhead:
      "After every customer interaction, our system sends a review request via SMS and email. Happy customers post 5-star reviews. Unhappy ones are intercepted and resolved before they ever go public.",
    pricingPlan: "Momentum",
    pricingFromMonthly: 197,
    problems: [
      { title: "You forget to ask", body: "Most businesses ask for reviews when they remember — which is rarely. Asked customers leave reviews; unasked ones don't." },
      { title: "Negative reviews kill bookings", body: "73% of consumers check Google reviews before booking. One 1-star review can cost you 10 customers." },
      { title: "Your competitor has more reviews", body: "A 4.7 rating with 80 reviews beats a 5.0 with 5 reviews — every time. Volume signals trust." },
      { title: "Negative review interception", body: "Unhappy customers vent on Google. By the time you see it, the damage is done. We catch them first." },
    ],
    howItWorks: [
      { step: "01", title: "Job complete", body: "Customer leaves your salon, surgery, or job site." },
      { step: "02", title: "Smart review request", body: "Within 30 minutes, a friendly SMS asks how it went. We A/B test send times for max response." },
      { step: "03", title: "Happy → Google", body: "If the rating is 4-5 stars, we send them straight to your Google review page." },
      { step: "04", title: "Unhappy → caught", body: "If 1-3 stars, we route to you privately first. You resolve. They don't post publicly." },
    ],
    faqs: [
      { q: "How quickly does this build up my Google reviews?", a: "Most clients go from 12 to 80+ reviews in 90 days — depending on customer volume." },
      { q: "Is the negative review interception ethical?", a: "100%. We never block anyone from posting. We just give them a private channel to vent first, and most accept the resolution." },
      { q: "Does it work with Trustpilot, Facebook, Yelp?", a: "Yes — the system can be configured to direct reviewers to whichever platform you want to grow." },
      { q: "Do I have to write the messages?", a: "No — we provide proven templates. You can edit them or use ours straight out of the box." },
    ],
  },
  {
    slug: "google-business-profile-management",
    name: "Google Business Profile Management",
    shortName: "GBP Management",
    category: "Search",
    number: "04",
    pageTitle: "Google Business Profile Management UK | Kerblabs",
    metaDescription:
      "Full GBP rewrite, weekly posts, photo uploads, Q&A seeding, and review velocity management. Get into the Google local pack. From £97/mo.",
    h1: "Google Business Profile Management:",
    h1Highlight: "Own the local pack.",
    subhead:
      "We rewrite your GBP from scratch, post weekly, drop fresh photos, seed Q&As, and accelerate review velocity. The local pack is the most valuable real estate in local SEO — we get you there.",
    pricingPlan: "Spark",
    pricingFromMonthly: 97,
    problems: [
      { title: "Your GBP is half-finished", body: "Most local businesses fill 50% of their GBP fields and never log in again. Google penalises incomplete profiles." },
      { title: "No fresh signals", body: "Google ranks active profiles higher. Without weekly posts, photos, and Q&A activity, you slip behind competitors." },
      { title: "Wrong category, wrong attributes", body: "Picking the wrong primary category alone can cut your local pack visibility by 60%." },
      { title: "Review velocity matters", body: "Google ranks businesses with consistent, recent reviews higher than those with old reviews — even if the average is the same." },
    ],
    howItWorks: [
      { step: "01", title: "Full audit", body: "We audit your GBP across 47 ranking factors. You get a baseline report and priority fix list." },
      { step: "02", title: "Full rewrite", body: "Every field rewritten with keyword-targeted copy. Categories optimised. Photos curated." },
      { step: "03", title: "Weekly content", body: "We post weekly updates, drop new photos monthly, and seed Q&As that rank for voice search." },
      { step: "04", title: "Track and tune", body: "Monthly ranking reports. We see which queries you're winning and double down on what works." },
    ],
    faqs: [
      { q: "Will you post on my behalf?", a: "Yes — weekly GBP posts are included in every plan. We draft, you approve (or auto-publish if you prefer)." },
      { q: "Can you fix a suspended GBP?", a: "Often yes — depending on why it was suspended. Book a free audit and we'll tell you within 24 hours." },
      { q: "How long until I rank in the local pack?", a: "Most clients see local pack appearances within 4-8 weeks. Competitive cities (London) take longer." },
      { q: "Do I need a physical address?", a: "Yes — Google requires a verifiable physical address (or service area for SAB businesses)." },
    ],
  },
  {
    slug: "local-seo",
    name: "Local SEO",
    shortName: "Local SEO",
    category: "Search",
    number: "05",
    pageTitle: "Local SEO Services for UK Small Businesses | Kerblabs",
    metaDescription:
      "Topic maps, technical audits, city & service pages, schema markup, and citation building. Rank higher on Google and get more local customers. From £197/mo.",
    h1: "Local SEO:",
    h1Highlight: "Rank higher. Get found. Grow.",
    subhead:
      "We build the on-page SEO, location pages, schema, and citations that put your business on Google's first page for the queries that actually convert.",
    pricingPlan: "Momentum",
    pricingFromMonthly: 197,
    problems: [
      { title: "Your website is invisible", body: "If you're not on page 1 for 'your service near me', you're invisible to 75% of potential customers." },
      { title: "Wrong keywords", body: "Most agencies target generic high-volume keywords. We target high-intent local queries that actually book." },
      { title: "No location pages", body: "If you serve multiple towns, you need a page per town. Without them, you can't rank locally outside your office postcode." },
      { title: "Bad citations", body: "Inconsistent NAP (Name/Address/Phone) across the web destroys local rankings. Most businesses have 30+ inconsistencies." },
    ],
    howItWorks: [
      { step: "01", title: "Topic map", body: "We build a complete keyword and topic map for your business and locations." },
      { step: "02", title: "Technical fix", body: "Schema markup, page speed, mobile, internal linking — all the on-page foundations." },
      { step: "03", title: "Content build", body: "Service pages, location pages, FAQ pages — all targeting commercial-intent local queries." },
      { step: "04", title: "Citations + tracking", body: "Build authoritative citations across UK directories. Monthly rank tracking and reports." },
    ],
    faqs: [
      { q: "How long does local SEO take to show results?", a: "Most clients see meaningful ranking improvements in 8-12 weeks, with full impact by month 6." },
      { q: "Do you build the website too?", a: "Yes — included in our Full Engine plan, or we'll work on your existing WordPress, Squarespace, Webflow, or custom site." },
      { q: "What if I serve a service area, not a single location?", a: "Service area businesses (plumbers, electricians) actually have an advantage — we build town-by-town landing pages that rank better than generic 'we serve [region]' pages." },
      { q: "Will my rankings hold long-term?", a: "Yes — we use only white-hat tactics. Rankings built this way hold for years, not months." },
    ],
  },
  {
    slug: "crm-pipeline-management",
    name: "CRM & Pipeline Management",
    shortName: "CRM",
    category: "CRM",
    number: "06",
    pageTitle: "CRM & Pipeline Management for UK Local Businesses | Kerblabs",
    metaDescription:
      "See every lead, every conversation, every deal in one place. Never lose track of a prospect again. CRM built for local service businesses. From £197/mo.",
    h1: "CRM & Pipeline:",
    h1Highlight: "See every lead. Close every deal.",
    subhead:
      "Stop tracking leads in spreadsheets, sticky notes, and your inbox. One pipeline, every lead, every conversation — across SMS, email, calls, and forms.",
    pricingPlan: "Momentum",
    pricingFromMonthly: 197,
    problems: [
      { title: "Leads slip through cracks", body: "Sticky notes get lost. Spreadsheets don't follow up. Email threads die. Most leads never get a second touch." },
      { title: "Multiple inboxes, one customer", body: "A single customer might call, text, email, and DM you. Without a CRM, those conversations live in 4 places." },
      { title: "No follow-up", body: "80% of sales require 5+ touches. Most local businesses give up after 1." },
      { title: "Can't see what's working", body: "Without pipeline tracking, you don't know which leads close, which sources are profitable, or where deals get stuck." },
    ],
    howItWorks: [
      { step: "01", title: "Set up pipelines", body: "Custom pipelines for new leads, quoted, won, lost, follow-up — whatever fits your business." },
      { step: "02", title: "Auto-import everything", body: "SMS, email, calls, web forms, social DMs — everything flows into one timeline per customer." },
      { step: "03", title: "Trigger follow-ups", body: "Auto-trigger follow-ups, reminders, and nurture sequences based on pipeline stage." },
      { step: "04", title: "Track and report", body: "Live dashboards show what's working, what's stuck, and where revenue is hiding." },
    ],
    faqs: [
      { q: "Can I import contacts from my existing CRM?", a: "Yes — we import from Excel, HubSpot, Pipedrive, Salesforce, GoHighLevel, and most others." },
      { q: "Does it integrate with my email and calendar?", a: "Yes — Gmail, Outlook, Google Calendar, Microsoft 365 all integrate natively." },
      { q: "Can my whole team use it?", a: "Yes — multi-user with permissions. Each plan tier includes a different number of seats." },
      { q: "Will my data be safe?", a: "All data is encrypted at rest and in transit, hosted in UK data centres, GDPR compliant." },
    ],
  },
  {
    slug: "booking-calendar-reminders",
    name: "Booking Calendar & Reminders",
    shortName: "Booking & Reminders",
    category: "CRM",
    number: "07",
    pageTitle: "Booking Calendar & Appointment Reminders UK | Kerblabs",
    metaDescription:
      "Online booking, automated appointment reminders via SMS and email, and no-show reduction for UK local businesses. From £97/mo.",
    h1: "Booking & Reminders:",
    h1Highlight: "Fill your calendar. Eliminate no-shows.",
    subhead:
      "Online booking that works while you sleep. Automated SMS reminders that cut no-shows by 30-40%. Round-robin calendars for multi-staff teams.",
    pricingPlan: "Spark",
    pricingFromMonthly: 97,
    problems: [
      { title: "30% no-show rate", body: "Without automated reminders, salons and clinics see 30%+ no-show rates. Each one is a lost slot." },
      { title: "Phone tag for bookings", body: "Customers call, you call back, they're busy, you're busy. Most never book at all." },
      { title: "Multi-staff chaos", body: "Round-robin scheduling across 3+ staff members is impossible to manage manually." },
      { title: "Last-minute cancellations", body: "Without an automated cancellation policy, customers cancel without penalty — and slots stay empty." },
    ],
    howItWorks: [
      { step: "01", title: "Customers book online", body: "Beautiful booking page on your site. Choose service, staff, time. Done in 60 seconds." },
      { step: "02", title: "Confirmations + reminders", body: "Instant booking confirmation. SMS reminder 24h and 2h before. Cuts no-shows by 30-40%." },
      { step: "03", title: "Round-robin assigns", body: "Multi-staff calendars with auto-routing — book any available slot, system picks the staff member." },
      { step: "04", title: "No-show rescue", body: "If they no-show, automatic SMS asks them to rebook. 25% accept the rebook." },
    ],
    faqs: [
      { q: "Does it work with Google Calendar?", a: "Yes — bidirectional sync. Personal events block availability automatically." },
      { q: "Can I take payment at booking?", a: "Yes — full payment, deposit, or no-show fee. Stripe and GoCardless integrated." },
      { q: "Do I need a website to use it?", a: "No — we provide a hosted booking page if you don't have a site." },
      { q: "What about multiple locations?", a: "Yes — multi-location booking with location-specific staff and services." },
    ],
  },
  {
    slug: "reputation-monitoring",
    name: "Reputation Monitoring",
    shortName: "Reputation Monitoring",
    category: "Trust",
    number: "08",
    pageTitle: "Reputation Monitoring for UK Local Businesses | Kerblabs",
    metaDescription:
      "Monitor your Google, Facebook, and Trustpilot reviews in real-time. Get instant alerts for new reviews. Respond faster than your competitors. From £97/mo.",
    h1: "Reputation Monitoring:",
    h1Highlight: "Know what people are saying. Instantly.",
    subhead:
      "Real-time alerts for every review and brand mention across Google, Facebook, Trustpilot, Yelp, and 60+ other platforms. AI-drafted replies. Sentiment analysis.",
    pricingPlan: "Spark",
    pricingFromMonthly: 97,
    problems: [
      { title: "You miss negative reviews", body: "Most businesses don't see a negative review until weeks later. By then, the damage is done." },
      { title: "Slow response = bad signal", body: "Google ranks businesses that respond to reviews quickly higher in local pack. Most don't reply at all." },
      { title: "Reviews live in 10 places", body: "Google, Facebook, Trustpilot, Yelp, Yell, Bark — checking each manually is impossible." },
      { title: "AI-drafted replies save hours", body: "Hand-writing 50 review replies a month takes hours. AI drafts them in seconds — you just approve." },
    ],
    howItWorks: [
      { step: "01", title: "Connect all platforms", body: "Google, Facebook, Trustpilot, Yelp, Yell, Bark — all monitored from one dashboard." },
      { step: "02", title: "Real-time alerts", body: "New review? You get an SMS within 60 seconds. Negative review? Higher priority alert to action immediately." },
      { step: "03", title: "AI drafts the reply", body: "Trained on your brand voice. Drafts a personalised reply in your tone. You approve and post." },
      { step: "04", title: "Sentiment trends", body: "Monthly sentiment reports show what customers love, what they complain about, and how it's trending." },
    ],
    faqs: [
      { q: "Which platforms do you cover?", a: "Google, Facebook, Trustpilot, Yelp, Yell, Bark, Trustpilot, Capterra, G2, Tripadvisor — 60+ platforms total." },
      { q: "How fast do I get alerts?", a: "Within 60 seconds of the review being posted, in 95% of cases." },
      { q: "Can I see competitor reviews?", a: "Yes — competitor monitoring is included on Momentum and above." },
      { q: "Will the AI replies sound robotic?", a: "No — they're trained on your specific tone and previous replies. Most clients can't tell their own AI replies from manual ones." },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────
// INDUSTRIES (4 industry hub pages)
// ─────────────────────────────────────────────────────────────────
export const industries: Industry[] = [
  {
    slug: "dental-practices",
    name: "Dental Practices",
    industrySingular: "dental practice",
    industryPlural: "dental practices",
    emoji: "🦷",
    pageTitle: "AI Marketing Systems for UK Dental Practices | Kerblabs",
    metaDescription:
      "Kerblabs helps UK dental practices attract new patients, automate follow-up, and build 5-star reputations. AI receptionist, review engine, local SEO. From £347/mo.",
    h1: "AI Growth Systems for",
    h1Highlight: "UK Dental Practices.",
    subhead:
      "Help independent dental practices attract new patients, automate their follow-up, and dominate local Google results — without hiring a marketing manager.",
    stats: [
      { value: "11,000+", label: "UK dental practices" },
      { value: "73%", label: "of patients check Google reviews before booking" },
      { value: "£800+", label: "average value of a missed new patient call" },
    ],
    problems: [
      { title: "NHS waiting lists are driving patients private", body: "Record numbers of UK patients can't find an NHS dentist. They turn to private practices — and pick the one with the strongest Google presence." },
      { title: "Missed new patient calls cost £500-£5,000+ each", body: "Each new patient is worth £500-£5,000+ in lifetime treatment value. Missing 3 calls a week is six-figure annual revenue lost." },
      { title: "One bad review can undo months of work", body: "Patients are highly review-sensitive. A single 1-star review can drop your local pack rank and cost 10+ enquiries before you even see it." },
      { title: "No-shows waste chair time", body: "30%+ no-show rates are normal without automated reminders. Each no-show is £150-£500 in lost revenue. Automated SMS reminders cut no-shows by 30-40%." },
      { title: "Corporate chains outspend you", body: "Bupa, Mydentist, and Portman invest £100k+/year on marketing. Independent practices need leverage — automation gives it." },
    ],
    recommendedPlan: "Autopilot",
    recommendedPrice: 347,
    roiNote:
      "A single new Invisalign patient (avg £3,500) covers 10 months of Kerblabs fees. The system pays for itself with the first new high-value patient.",
    faqs: [
      { q: "Do you work with NHS dental practices?", a: "Yes — many of our dental clients run mixed NHS/private practices. The AI voice and review systems work the same for both." },
      { q: "Is the AI voice receptionist compliant with GDPR and dental regulations?", a: "Yes — fully GDPR compliant. We never store clinical or treatment data, only contact and appointment data. The AI is designed not to give clinical advice." },
      { q: "How quickly can a dental practice expect more new patient enquiries?", a: "Most practices see Google Business Profile enquiry uplift within 4-6 weeks. AI voice and review automation deliver immediate impact (within days)." },
      { q: "What happens if the AI can't answer a clinical question?", a: "It's designed not to attempt clinical answers. It says 'a clinician will need to speak with you about that — let me book you a consultation' and books the appointment." },
      { q: "Can we use just the review management tool without the full package?", a: "Yes — every service is available stand-alone. Most practices start with Spark (£97/mo, GBP + reviews) and add AI voice when they're ready." },
    ],
    comboIntroTemplate:
      "Dental practices in {city} face a unique market dynamic. {city} is {character}, which means dental practices here are competing both with NHS alternatives and with each other for the same patient pool. With NHS dental waiting lists at record levels across {county}, more patients than ever are turning to private practices — and they make their decision almost entirely based on Google reviews and search visibility. A {city} practice with 15 reviews ranked 4.1 stars consistently loses patients to a competitor with 80 reviews ranked 4.7 stars, regardless of the actual quality of care. Add in the cost of missed new patient calls (each typically worth £500-£5,000+ in lifetime treatment value), and the case for systematising patient acquisition, review collection, and call answering becomes unarguable. Kerblabs gives {city} dental practices the AI-powered systems to fix all three challenges simultaneously.",
  },
  {
    slug: "hair-salons",
    name: "Hair Salons",
    industrySingular: "hair salon",
    industryPlural: "hair salons",
    emoji: "✂️",
    pageTitle: "AI Growth Systems for UK Hair Salons | Kerblabs",
    metaDescription:
      "Kerblabs helps UK hair salons fill their books, reduce no-shows, automate review collection, and rank higher on Google — without a marketing team. From £97/mo.",
    h1: "AI Marketing Automation for",
    h1Highlight: "UK Hair Salons.",
    subhead:
      "Fill your chairs. Eliminate no-shows. Build a 5-star Google reputation. Without hiring a marketing manager or a receptionist.",
    stats: [
      { value: "48,578", label: "UK hair and beauty salons" },
      { value: "30-40%", label: "no-show rate without automated SMS reminders" },
      { value: "5-star", label: "Google rating drives 25% more bookings" },
    ],
    problems: [
      { title: "Empty chairs cost £40-150 per slot", body: "Between rent, staff, and utilities, each unfilled appointment costs £40-150 in pure margin. No-shows cost the same." },
      { title: "Instagram followers don't fill the diary", body: "Followers admire, Google searchers book. A salon with strong local SEO gets 5x more bookings than one relying on social alone." },
      { title: "Last-minute cancellations are killers", body: "Without a deposit or cancellation policy, customers cancel guilt-free — and the slot stays empty until the next walk-in." },
      { title: "Negative reviews destroy trust", body: "One 1-star review on a salon's Google profile drops bookings by 15% on average. Negative review interception is critical." },
      { title: "Multi-staff scheduling is chaos", body: "Round-robin booking across 3+ stylists is unmanageable manually. Customers want to pick their stylist — without ringing 3 times." },
    ],
    recommendedPlan: "Momentum",
    recommendedPrice: 197,
    roiNote:
      "Filling just 4 extra appointment slots per week (avg £55) recovers Kerblabs fees with margin to spare. Reducing no-shows by 30% on a busy salon recovers it 5x over.",
    faqs: [
      { q: "Can Kerblabs integrate with our existing booking software (Phorest, Treatwell, Fresha)?", a: "Yes — we integrate with most major UK salon booking platforms. We don't replace them; we layer on top to handle marketing, reviews, and missed calls." },
      { q: "How do you handle booking requests that come in overnight?", a: "AI chat or voice handles them immediately. Customer gets confirmation. You wake up to a full diary." },
      { q: "Do salons need the AI voice receptionist?", a: "It's most valuable for salons that miss calls during cuts. If your front-of-house always answers, AI chat + missed-call text-back is enough." },
      { q: "How quickly will we see more bookings?", a: "Most salons see GBP-driven booking uplift within 4-8 weeks, and immediate impact from review automation and no-show reduction." },
    ],
    comboIntroTemplate:
      "Hair salons across {city} face a tougher market every year. {city}'s {character} means there are dozens of salons competing for the same client base, and standing out has become harder. Empty chairs cost money — between rent, staff, and utilities, every untaken appointment slot costs £40-£150 in pure margin. No-shows are even worse: the slot is blocked and the revenue is lost. Most {city} salons rely heavily on Instagram, but Instagram followers don't fill the diary — Google searches do. A salon with a strong Google Business Profile, 60+ five-star reviews, and a clean 'hair salon near me' presence in {city} consistently outperforms competitors with better stylists but weaker online presence. Kerblabs gives {city} salons all three systems plus the local SEO to dominate 'near me' searches across {county}.",
  },
  {
    slug: "contractors",
    name: "Contractors",
    industrySingular: "contractor",
    industryPlural: "contractors",
    emoji: "🔧",
    pageTitle: "Marketing Automation for UK Contractors & Tradespeople | Kerblabs",
    metaDescription:
      "UK plumbers, electricians, builders use Kerblabs to never miss a call, collect reviews automatically, and rank #1 on Google for local searches. From £97/mo.",
    h1: "Never Miss Another Job —",
    h1Highlight: "AI Systems for UK Contractors.",
    subhead:
      "Plumbers, electricians, builders — you're on a job site when the phone rings. Whoever picks up first wins the work. Make sure that's you, every time.",
    stats: [
      { value: "45,000+", label: "UK plumbing & heating businesses" },
      { value: "£200-400", label: "lost per day from missing 3 calls/day" },
      { value: "91%", label: "of consumers use Google to find local tradespeople" },
    ],
    problems: [
      { title: "You're on site, hands dirty, when the phone rings", body: "You can't answer. The customer rings the next plumber. Job gone." },
      { title: "Customers call 3 plumbers — first to reply wins", body: "Speed of response is the #1 conversion factor for trades. Anyone who replies in 5 minutes wins almost every time." },
      { title: "You forget to ask for reviews", body: "After a job is done, the last thing on your mind is asking for a review. Result: you have 8 reviews while your competitor has 80." },
      { title: "Slow seasons need consistent leads", body: "Boilers in summer. Landscapers in winter. Without a marketing system, slow months hit hard." },
      { title: "Customers ghost after the quote", body: "You quote. You wait. You hear nothing. Without automated follow-up, 60% of quotes never close that could have." },
    ],
    recommendedPlan: "Momentum",
    recommendedPrice: 197,
    roiNote:
      "Recovering just one missed job per week (average value £400-£800) covers Kerblabs fees four times over. Most contractors see 3-5 recovered jobs per week within 60 days.",
    faqs: [
      { q: "I work alone — is Kerblabs worth it for a sole trader?", a: "Yes, especially. Sole traders miss the most calls and benefit most from AI handling them automatically. Spark or Momentum is usually right." },
      { q: "What trades does this work best for?", a: "Plumbing, heating, electrical, building, roofing, gas engineering, locksmithing, drainage, glazing, and similar trades — anywhere customers call for quotes." },
      { q: "How does the AI answer my calls if it doesn't know my pricing?", a: "It qualifies the job (what, where, when, urgency) and books a callback or visit slot. It doesn't quote — that's still you." },
      { q: "Can I set times when calls go to AI vs my phone?", a: "Yes — full control. Default rule: ring you first for 20 seconds, then divert to AI if you can't pick up." },
    ],
    comboIntroTemplate:
      "Contractors working in {city} — plumbers, electricians, builders, roofers, gas engineers — face one universal problem: they're on-site with their hands dirty during exactly the same hours when potential customers are calling for quotes. Every missed call is a job that goes to whoever picked up the phone first. {city} is {character}, with consistent demand for quality tradespeople across residential and commercial properties. Customers here typically call 2-3 contractors and hire the first one to respond, which means the difference between a fully-booked diary and quiet weeks often comes down to nothing more than whether you answered the phone. Kerblabs solves both problems with an AI voice receptionist that answers every call in your business name, qualifies the job, and books appointments while you're up a ladder — plus an automated review engine that turns every completed job into a fresh 5-star review.",
  },
  {
    slug: "estate-agents",
    name: "Estate Agents",
    industrySingular: "estate agent",
    industryPlural: "estate agents",
    emoji: "🏠",
    pageTitle: "AI-Powered Marketing for UK Estate Agents | Kerblabs",
    metaDescription:
      "UK estate agents and letting agents use Kerblabs to generate more vendor and buyer leads, automate follow-up, and build 5-star reputations. From £197/mo.",
    h1: "More Vendor Instructions for",
    h1Highlight: "UK Estate Agents.",
    subhead:
      "Win more vendor instructions, automate landlord nurture, and build the 5-star Google profile that beats the franchise down the road.",
    stats: [
      { value: "25,665", label: "UK estate agency businesses" },
      { value: "82%", label: "of vendors choose the first agent they speak to" },
      { value: "£2-8k+", label: "in lost commission per missed vendor enquiry" },
    ],
    problems: [
      { title: "Rightmove fees keep rising", body: "Portal costs are eating margins. Every agent needs owned lead channels — your own Google rankings, your own AI voice, your own database." },
      { title: "Missed vendor calls = lost instructions", body: "Vendors call multiple agents within an hour. The first to answer wins. After-hours enquiries are the highest-converting." },
      { title: "Reviews drive vendor choice", body: "Vendors compare your Google profile to the franchise's. A 4.7 with 80 reviews wins every time. Without review automation, you're invisible." },
      { title: "Landlord nurture is manual", body: "Your landlord database has 10x the lifetime value of a one-off sale. Without nurture sequences, most landlords forget you exist between transactions." },
      { title: "Corporate franchises outspend you", body: "Savills, Foxtons, Connells have huge marketing budgets. Independent agents need leverage — automation provides it." },
    ],
    recommendedPlan: "Momentum",
    recommendedPrice: 197,
    roiNote:
      "Winning just one extra vendor instruction per quarter (avg commission £3,500+) covers a full year of Kerblabs fees. Most agents win 3-5 extra instructions/quarter.",
    faqs: [
      { q: "Do you work with both sales and lettings agents?", a: "Yes — most of our estate agent clients run both. Sales and lettings have different lifecycles but the same lead-capture and review needs." },
      { q: "How does the AI handle after-hours vendor enquiries?", a: "It books a valuation appointment directly into your calendar and confirms by SMS. By morning, you've got a booked valuation." },
      { q: "Can the CRM manage landlord nurture campaigns?", a: "Yes — segment by landlord type, property count, location. Trigger automated nurture based on rent renewal dates, market changes, etc." },
      { q: "Is this suitable for both independent agents and franchises?", a: "Both. Independents benefit most from levelling the playing field; franchise branches use it to outperform sister branches." },
    ],
    comboIntroTemplate:
      "The estate agency market in {city} is fiercely competitive. {city} is {character}, and that local market dynamic shapes everything: vendor instructions are won by whoever responds first, the typical vendor calls multiple agents within an hour, and decisions are increasingly driven by Google reviews and online reputation rather than high street presence. Each missed valuation enquiry costs an agent £2,000-£8,000+ in potential commission. After-hours enquiries are particularly valuable — vendors often browse Rightmove and Zoopla in the evening and call agents off-hours, only to find no one answers. The agent who has an AI voice receptionist handling those calls wins instructions night after night while competitors lose them. Kerblabs gives {city} estate and letting agents the full system — AI voice, review engine, CRM, and local SEO — in one bundled platform.",
  },
];

// ─────────────────────────────────────────────────────────────────
// LOCATIONS (Tier 1 + Tier 2 + Tier 3 = 404 locations)
// ─────────────────────────────────────────────────────────────────
export const locations: Location[] = [
  // ═══ TIER 1 — 25 MAJOR CITIES ═══
  { name: "London", slug: "london", county: "Greater London", region: "London", tier: "tier1", areas: ["Shoreditch", "Hackney", "Clapham", "Islington", "Wimbledon"], character: "the UK's largest and most competitive market with 1.1 million small businesses" },
  { name: "Manchester", slug: "manchester", county: "Greater Manchester", region: "North West", tier: "tier1", areas: ["Northern Quarter", "Didsbury", "Chorlton", "Salford", "Trafford"], character: "the Northern Powerhouse capital with 130,000+ registered businesses and a fast-moving commercial culture" },
  { name: "Birmingham", slug: "birmingham", county: "West Midlands", region: "West Midlands", tier: "tier1", areas: ["Digbeth", "Jewellery Quarter", "Edgbaston", "Moseley", "Solihull"], character: "the UK's second city with 78,000+ SMEs and major HS2-driven regeneration" },
  { name: "Glasgow", slug: "glasgow", county: "Lanarkshire", region: "Scotland", tier: "tier1", areas: ["Merchant City", "West End", "Southside", "Pollokshields", "Govan"], character: "Scotland's largest city with 635k population and major post-industrial revival" },
  { name: "Leeds", slug: "leeds", county: "West Yorkshire", region: "Yorkshire and the Humber", tier: "tier1", areas: ["Headingley", "Chapel Allerton", "Roundhay", "Horsforth", "Morley"], character: "a major financial hub with three universities and growing professional sector" },
  { name: "Sheffield", slug: "sheffield", county: "South Yorkshire", region: "Yorkshire and the Humber", tier: "tier1", areas: ["Kelham Island", "Ecclesall Road", "Broomhill", "Hillsborough", "Crookes"], character: "a reinvented steel city with two universities and a creative tech quarter" },
  { name: "Edinburgh", slug: "edinburgh", county: "Lothian", region: "Scotland", tier: "tier1", areas: ["Leith", "Bruntsfield", "Morningside", "Stockbridge", "Marchmont"], character: "Scotland's capital with a major financial centre and significant tourism economy" },
  { name: "Bristol", slug: "bristol", county: "Somerset", region: "South West", tier: "tier1", areas: ["Clifton", "Stokes Croft", "Bedminster", "Redland", "Southville"], character: "the UK's most entrepreneurial city per capita with a health-conscious eco-aware demographic" },
  { name: "Liverpool", slug: "liverpool", county: "Merseyside", region: "North West", tier: "tier1", areas: ["Knowledge Quarter", "Baltic Triangle", "Allerton", "Woolton", "Crosby"], character: "a UNESCO city of music with revived maritime heritage and creative economy" },
  { name: "Nottingham", slug: "nottingham", county: "Nottinghamshire", region: "East Midlands", tier: "tier1", areas: ["Lace Market", "Hockley", "Beeston", "West Bridgford", "Mapperley"], character: "a city with two major universities and a growing tech sector" },
  { name: "Cardiff", slug: "cardiff", county: "Glamorgan", region: "Wales", tier: "tier1", areas: ["Pontcanna", "Canton", "Roath", "Cardiff Bay", "Cathays"], character: "the Welsh capital with growing tech and financial services sector" },
  { name: "Leicester", slug: "leicester", county: "Leicestershire", region: "East Midlands", tier: "tier1", areas: ["Belgrave Road", "Highfields", "Oadby", "Wigston", "Narborough Road"], character: "the UK's most diverse city with a strong multicultural community" },
  { name: "Newcastle", slug: "newcastle", county: "Tyne and Wear", region: "North East", tier: "tier1", areas: ["Quayside", "Ouseburn", "Jesmond", "Gosforth", "Heaton"], character: "a northeast hub with revived Quayside, two universities, and strong entrepreneurial culture" },
  { name: "Bradford", slug: "bradford", county: "West Yorkshire", region: "Yorkshire and the Humber", tier: "tier1", areas: ["Manningham", "Shipley", "Keighley", "Bingley", "Ilkley"], character: "the UK City of Culture 2025 with a diverse multicultural community" },
  { name: "Coventry", slug: "coventry", county: "West Midlands", region: "West Midlands", tier: "tier1", areas: ["Earlsdon", "Cheylesmore", "Binley", "Holbrooks", "Allesley"], character: "the UK City of Culture 2021 with two universities and automotive heritage" },
  { name: "Belfast", slug: "belfast", county: "County Antrim", region: "Northern Ireland", tier: "tier1", areas: ["Cathedral Quarter", "Titanic Quarter", "Botanic", "Stranmillis", "Ballyhackamore"], character: "a post-Troubles regenerating capital with growing tech and tourism" },
  { name: "Stoke-on-Trent", slug: "stoke-on-trent", county: "Staffordshire", region: "West Midlands", tier: "tier1", areas: ["Hanley", "Burslem", "Tunstall", "Stoke", "Longton"], character: "a six-towns city with ceramics heritage and ongoing regeneration" },
  { name: "Derby", slug: "derby", county: "Derbyshire", region: "East Midlands", tier: "tier1", areas: ["Cathedral Quarter", "Allestree", "Mickleover", "Spondon", "Chellaston"], character: "an industrial city with Rolls-Royce and Toyota employing engineering professionals" },
  { name: "Southampton", slug: "southampton", county: "Hampshire", region: "South East", tier: "tier1", areas: ["Ocean Village", "Bitterne", "Shirley", "Portswood", "Hedge End"], character: "a major port city with two universities and Ocean Village waterfront development" },
  { name: "Plymouth", slug: "plymouth", county: "Devon", region: "South West", tier: "tier1", areas: ["Barbican", "Mutley", "Plymstock", "Plympton", "Peverell"], character: "a naval city with HM Naval Base Devonport and a student population" },
  { name: "Reading", slug: "reading", county: "Berkshire", region: "South East", tier: "tier1", areas: ["Caversham", "Earley", "Woodley", "Tilehurst", "Calcot"], character: "the UK's Silicon Valley with high-income tech professionals from Microsoft, Oracle and Vodafone HQs" },
  { name: "Wolverhampton", slug: "wolverhampton", county: "West Midlands", region: "West Midlands", tier: "tier1", areas: ["Penn", "Finchfield", "Tettenhall", "Wednesfield", "Bilston"], character: "a Black Country city with diverse community and ongoing regeneration" },
  { name: "Swansea", slug: "swansea", county: "Glamorgan", region: "Wales", tier: "tier1", areas: ["Uplands", "Mumbles", "Sketty", "Gorseinon", "Port Talbot"], character: "the Welsh second city with a university and Swansea Bay City Deal investment" },
  { name: "Sunderland", slug: "sunderland", county: "Tyne and Wear", region: "North East", tier: "tier1", areas: ["Pallion", "Houghton-le-Spring", "Washington", "Seaham", "Hetton-le-Hole"], character: "a post-industrial northeast city with Nissan automotive base and Riverside regeneration" },
  { name: "Aberdeen", slug: "aberdeen", county: "Aberdeenshire", region: "Scotland", tier: "tier1", areas: ["Westhill", "Portlethen", "Stonehaven", "Inverurie", "Dyce"], character: "the oil capital of Europe with high-income energy sector workforce undergoing energy transition" },

  // ═══ TIER 2 — 75 LARGE TOWNS ═══
  { name: "Preston", slug: "preston", county: "Lancashire", region: "North West", tier: "tier2", areas: ["Fishergate", "Deepdale", "Fulwood", "Penwortham"], character: "a university town with industrial heritage and large student population", nearestCity: "manchester" },
  { name: "Cambridge", slug: "cambridge", county: "Cambridgeshire", region: "East of England", tier: "tier2", areas: ["Newnham", "Chesterton", "Cherry Hinton", "Trumpington"], character: "a world-famous university city with high-income academic and tech professionals", nearestCity: "london" },
  { name: "Oxford", slug: "oxford", county: "Oxfordshire", region: "South East", tier: "tier2", areas: ["Cowley", "Summertown", "Jericho", "Headington", "Botley"], character: "a prestigious university city with affluent professional population", nearestCity: "london" },
  { name: "York", slug: "york", county: "North Yorkshire", region: "Yorkshire and the Humber", tier: "tier2", areas: ["Micklegate", "Bishopthorpe", "Skelton", "Haxby", "Fulford"], character: "a historic walled city with strong tourism and university presence", nearestCity: "leeds" },
  { name: "Bath", slug: "bath", county: "Somerset", region: "South West", tier: "tier2", areas: ["Lansdown", "Widcombe", "Twerton", "Newbridge", "Combe Down"], character: "a UNESCO heritage spa town with very affluent population and premium market", nearestCity: "bristol" },
  { name: "Brighton", slug: "brighton", county: "East Sussex", region: "South East", tier: "tier2", areas: ["North Laine", "Kemptown", "Hove", "Whitehawk", "Patcham"], character: "a creative coastal city with diverse young population and London commuter market", nearestCity: "london" },
  { name: "Portsmouth", slug: "portsmouth", county: "Hampshire", region: "South East", tier: "tier2", areas: ["Southsea", "Fratton", "Cosham", "Paulsgrove"], character: "a naval city with military and university population", nearestCity: "southampton" },
  { name: "Norwich", slug: "norwich", county: "Norfolk", region: "East of England", tier: "tier2", areas: ["Tombland", "Golden Triangle", "Eaton", "Thorpe St Andrew", "Hellesdon"], character: "a cathedral city with creative economy and university presence", nearestCity: "london" },
  { name: "Ipswich", slug: "ipswich", county: "Suffolk", region: "East of England", tier: "tier2", areas: ["Christchurch Park", "Rushmere", "Kesgrave", "Stoke", "Whitton"], character: "a port town with financial services and professional workforce", nearestCity: "london" },
  { name: "Milton Keynes", slug: "milton-keynes", county: "Buckinghamshire", region: "South East", tier: "tier2", areas: ["Central MK", "Wolverton", "Bletchley", "Newport Pagnell", "Stony Stratford"], character: "a planned city with young workforce and major logistics hub", nearestCity: "london" },
  { name: "Luton", slug: "luton", county: "Bedfordshire", region: "East of England", tier: "tier2", areas: ["High Town", "Bury Park", "Leagrave", "Stopsley"], character: "a diverse multicultural town with airport economy and London commuter market", nearestCity: "london" },
  { name: "Northampton", slug: "northampton", county: "Northamptonshire", region: "East Midlands", tier: "tier2", areas: ["Abington", "Kingsthorpe", "Duston", "Weston Favell", "Hunsbury"], character: "a distribution and shoe-making heritage town with growing professional workforce", nearestCity: "leicester" },
  { name: "Swindon", slug: "swindon", county: "Wiltshire", region: "South West", tier: "tier2", areas: ["Old Town", "Walcot", "Freshbrook", "Wroughton", "Highworth"], character: "a business park economy with Honda, Intel, Nationwide HQs and good London/Bristol commuter links", nearestCity: "bristol" },
  { name: "Gloucester", slug: "gloucester", county: "Gloucestershire", region: "South West", tier: "tier2", areas: ["Kingsholm", "Barnwood", "Matson", "Quedgeley", "Tuffley"], character: "a historic cathedral city with regenerated docks and mixed economy", nearestCity: "bristol" },
  { name: "Cheltenham", slug: "cheltenham", county: "Gloucestershire", region: "South West", tier: "tier2", areas: ["Montpellier", "Pittville", "Leckhampton", "Prestbury", "Up Hatherley"], character: "an affluent Regency spa town with GCHQ headquarters and renowned racecourse", nearestCity: "bristol" },
  { name: "Bournemouth", slug: "bournemouth", county: "Dorset", region: "South West", tier: "tier2", areas: ["Boscombe", "Southbourne", "Charminster", "Pokesdown", "Westbourne"], character: "a coastal resort with universities and large retirement and lifestyle population", nearestCity: "southampton" },
  { name: "Poole", slug: "poole", county: "Dorset", region: "South West", tier: "tier2", areas: ["Canford Cliffs", "Sandbanks", "Broadstone", "Parkstone", "Hamworthy"], character: "an affluent coastal town with Sandbanks premium property market", nearestCity: "southampton" },
  { name: "Exeter", slug: "exeter", county: "Devon", region: "South West", tier: "tier2", areas: ["St Leonards", "Heavitree", "Pinhoe", "Exwick", "Alphington"], character: "a cathedral city with growing tech sector and university", nearestCity: "plymouth" },
  { name: "Peterborough", slug: "peterborough", county: "Cambridgeshire", region: "East of England", tier: "tier2", areas: ["Werrington", "Bretton", "Longthorpe", "Eye", "Deeping"], character: "a cathedral city logistics hub with diverse Eastern European community", nearestCity: "london" },
  { name: "Blackpool", slug: "blackpool", county: "Lancashire", region: "North West", tier: "tier2", areas: ["Marton", "Bispham", "Layton", "Cleveleys", "Lytham"], character: "a coastal resort with tourism economy and regeneration challenges", nearestCity: "manchester" },
  { name: "Bolton", slug: "bolton", county: "Greater Manchester", region: "North West", tier: "tier2", areas: ["Farnworth", "Horwich", "Westhoughton", "Halliwell", "Great Lever"], character: "a post-industrial town with multicultural community and Manchester commuter market", nearestCity: "manchester" },
  { name: "Huddersfield", slug: "huddersfield", county: "West Yorkshire", region: "Yorkshire and the Humber", tier: "tier2", areas: ["Lindley", "Marsh", "Almondbury", "Dalton", "Kirkburton"], character: "a university town with diverse South Asian community and textile heritage", nearestCity: "leeds" },
  { name: "Wigan", slug: "wigan", county: "Greater Manchester", region: "North West", tier: "tier2", areas: ["Standish", "Wigan town centre", "Leigh", "Ince", "Abram"], character: "a post-industrial Greater Manchester town with strong local identity", nearestCity: "manchester" },
  { name: "Warrington", slug: "warrington", county: "Cheshire", region: "North West", tier: "tier2", areas: ["Stockton Heath", "Orford", "Padgate", "Birchwood", "Lymm"], character: "a major logistics hub between Manchester and Liverpool with affluent suburbs", nearestCity: "manchester" },
  { name: "Chester", slug: "chester", county: "Cheshire", region: "North West", tier: "tier2", areas: ["Hoole", "Handbridge", "Upton", "Boughton", "Christleton"], character: "a historic Roman walled city with tourism and university economy", nearestCity: "liverpool" },
  { name: "Stockport", slug: "stockport", county: "Greater Manchester", region: "North West", tier: "tier2", areas: ["Edgeley", "Cheadle", "Bramhall", "Hazel Grove", "Marple"], character: "an affluent Manchester suburb with Victorian character and strong commuter market", nearestCity: "manchester" },
  { name: "Oldham", slug: "oldham", county: "Greater Manchester", region: "North West", tier: "tier2", areas: ["Chadderton", "Failsworth", "Shaw", "Royton", "Lees"], character: "a diverse multicultural post-industrial Greater Manchester town", nearestCity: "manchester" },
  { name: "Rochdale", slug: "rochdale", county: "Greater Manchester", region: "North West", tier: "tier2", areas: ["Norden", "Bamford", "Littleborough", "Milnrow", "Heywood"], character: "an historic cooperative movement town with diverse community", nearestCity: "manchester" },
  { name: "Barnsley", slug: "barnsley", county: "South Yorkshire", region: "Yorkshire and the Humber", tier: "tier2", areas: ["Wombwell", "Penistone", "Hoyland", "Cudworth", "Royston"], character: "a post-mining South Yorkshire town with strong community identity", nearestCity: "sheffield" },
  { name: "Rotherham", slug: "rotherham", county: "South Yorkshire", region: "Yorkshire and the Humber", tier: "tier2", areas: ["Wickersley", "Maltby", "Wath-upon-Dearne", "Swinton", "Rawmarsh"], character: "a post-steel South Yorkshire town adjacent to Sheffield", nearestCity: "sheffield" },
  { name: "Doncaster", slug: "doncaster", county: "South Yorkshire", region: "Yorkshire and the Humber", tier: "tier2", areas: ["Bessacarr", "Intake", "Balby", "Conisbrough", "Mexborough"], character: "a logistics and transport hub with strong community identity", nearestCity: "sheffield" },
  { name: "Wakefield", slug: "wakefield", county: "West Yorkshire", region: "Yorkshire and the Humber", tier: "tier2", areas: ["Sandal", "Lupset", "Outwood", "Ossett", "Horbury"], character: "a cathedral city and Leeds commuter town with growing creative economy", nearestCity: "leeds" },
  { name: "Harrogate", slug: "harrogate", county: "North Yorkshire", region: "Yorkshire and the Humber", tier: "tier2", areas: ["Knaresborough", "Ripon", "Pateley Bridge", "Pannal", "Bilton"], character: "one of England's wealthiest spa towns with affluent demographic", nearestCity: "leeds" },
  { name: "Middlesbrough", slug: "middlesbrough", county: "Teesside", region: "North East", tier: "tier2", areas: ["Linthorpe", "Acklam", "Nunthorpe", "Marton", "Coulby Newham"], character: "a post-industrial Teesside town with Teesworks hydrogen economy regeneration", nearestCity: "newcastle" },
  { name: "Gateshead", slug: "gateshead", county: "Tyne and Wear", region: "North East", tier: "tier2", areas: ["Dunston", "Felling", "Whickham", "Low Fell", "Teams"], character: "the Angel of the North town adjacent to Newcastle with regeneration projects", nearestCity: "newcastle" },
  { name: "Darlington", slug: "darlington", county: "County Durham", region: "North East", tier: "tier2", areas: ["Cockerton", "Harrowgate Hill", "Haughton-le-Skerne", "Hurworth"], character: "a railway heritage town with growing professional economy", nearestCity: "newcastle" },
  { name: "Dundee", slug: "dundee", county: "Angus", region: "Scotland", tier: "tier2", areas: ["Lochee", "Broughty Ferry", "Barnhill", "Menzieshill", "Ardler"], character: "a V&A regenerated Scottish city with gaming tech cluster and university", nearestCity: "edinburgh" },
  { name: "Inverness", slug: "inverness", county: "Highland", region: "Scotland", tier: "tier2", areas: ["Crown", "Dalneigh", "Inshes", "Merkinch", "Scorguie"], character: "the capital of the Scottish Highlands with tourism and service economy", nearestCity: "aberdeen" },
  { name: "Stirling", slug: "stirling", county: "Stirlingshire", region: "Scotland", tier: "tier2", areas: ["Bridge of Allan", "Bannockburn", "Raploch", "Cambusbarron", "Dunblane"], character: "a historic Scottish castle city with university and central Scotland gateway position", nearestCity: "edinburgh" },
  { name: "Paisley", slug: "paisley", county: "Renfrewshire", region: "Scotland", tier: "tier2", areas: ["Ferguslie Park", "Gallowhill", "Ralston", "Foxbar", "Johnstone"], character: "a regenerating Greater Glasgow town with University of West of Scotland", nearestCity: "glasgow" },
  { name: "Newport", slug: "newport", county: "Gwent", region: "Wales", tier: "tier2", areas: ["Rogerstone", "Malpas", "Ringland", "Bettws", "Caerleon"], character: "the South Wales gateway city with growing cyber tech sector", nearestCity: "cardiff" },
  { name: "Wrexham", slug: "wrexham", county: "Clwyd", region: "Wales", tier: "tier2", areas: ["Rhostyllen", "Ruabon", "Chirk", "Coedpoeth", "Johnstown"], character: "a North Wales border town with Wrexham AFC profile and manufacturing base", nearestCity: "liverpool" },
  { name: "Merthyr Tydfil", slug: "merthyr-tydfil", county: "Mid Glamorgan", region: "Wales", tier: "tier2", areas: ["Cyfarthfa", "Dowlais", "Penydarren", "Treharris", "Aberfan"], character: "a Welsh valleys regeneration town with Amazon fulfilment centre", nearestCity: "cardiff" },
  { name: "Carlisle", slug: "carlisle", county: "Cumbria", region: "North West", tier: "tier2", areas: ["Stanwix", "Botcherby", "Denton Holme", "Harraby", "Wreay"], character: "a historic border city serving as agricultural and service hub", nearestCity: "newcastle" },
  { name: "Blackburn", slug: "blackburn", county: "Lancashire", region: "North West", tier: "tier2", areas: ["Darwen", "Rishton", "Great Harwood", "Accrington", "Mill Hill"], character: "a diverse multicultural Lancashire town with large South Asian community", nearestCity: "manchester" },
  { name: "Burnley", slug: "burnley", county: "Lancashire", region: "North West", tier: "tier2", areas: ["Padiham", "Nelson", "Colne", "Brierfield", "Pendle"], character: "a post-industrial East Lancashire town with affordable housing and community identity", nearestCity: "manchester" },
  { name: "Maidstone", slug: "maidstone", county: "Kent", region: "South East", tier: "tier2", areas: ["Barming", "Bearsted", "Loose", "Tovil", "Weavering"], character: "the Kent county town with growing London commuter market", nearestCity: "london" },
  { name: "Canterbury", slug: "canterbury", county: "Kent", region: "South East", tier: "tier2", areas: ["Herne Bay", "Whitstable", "Faversham", "Chartham", "Blean"], character: "a UNESCO cathedral city with three universities and strong tourism", nearestCity: "london" },
  { name: "Crawley", slug: "crawley", county: "West Sussex", region: "South East", tier: "tier2", areas: ["Tilgate", "Southgate", "Bewbush", "Worth", "Three Bridges"], character: "a Gatwick Airport economy hub with aerospace and logistics industries", nearestCity: "london" },
  { name: "Guildford", slug: "guildford", county: "Surrey", region: "South East", tier: "tier2", areas: ["Merrow", "Burpham", "Stoughton", "Shalford", "Compton"], character: "an affluent Surrey commuter town with university and premium market", nearestCity: "london" },
  { name: "Woking", slug: "woking", county: "Surrey", region: "South East", tier: "tier2", areas: ["Knaphill", "Sheerwater", "Maybury", "Old Woking", "Pyrford"], character: "an affluent Surrey commuter town with excellent London rail links", nearestCity: "london" },
  { name: "Basingstoke", slug: "basingstoke", county: "Hampshire", region: "South East", tier: "tier2", areas: ["Popley", "Winklebury", "Brighton Hill", "Tadley", "Oakridge"], character: "a corporate business park town with AA, Eli Lilly, Motorola HQs", nearestCity: "london" },
  { name: "Winchester", slug: "winchester", county: "Hampshire", region: "South East", tier: "tier2", areas: ["Harestock", "Stanmore", "Weeke", "Twyford", "Chandler's Ford"], character: "a very affluent Hampshire cathedral city with premium market", nearestCity: "southampton" },
  { name: "Salisbury", slug: "salisbury", county: "Wiltshire", region: "South West", tier: "tier2", areas: ["Laverstock", "Amesbury", "Tisbury", "Wilton", "Downton"], character: "a cathedral city with Stonehenge tourism and Salisbury Plain military presence", nearestCity: "southampton" },
  { name: "Taunton", slug: "taunton", county: "Somerset", region: "South West", tier: "tier2", areas: ["Wilton", "Bishops Hull", "Norton Fitzwarren", "Wellington", "Minehead"], character: "the Somerset county town with agricultural and government economy", nearestCity: "bristol" },
  { name: "Torquay", slug: "torquay", county: "Devon", region: "South West", tier: "tier2", areas: ["Paignton", "Brixham", "Newton Abbot", "Teignmouth", "Dawlish"], character: "an English Riviera coastal resort with year-round tourism economy", nearestCity: "plymouth" },
  { name: "Eastbourne", slug: "eastbourne", county: "East Sussex", region: "South East", tier: "tier2", areas: ["Old Town", "Meads", "Hampden Park", "Willingdon", "Polegate"], character: "an affluent coastal resort with significant retirement population", nearestCity: "brighton" },
  { name: "Worthing", slug: "worthing", county: "West Sussex", region: "South East", tier: "tier2", areas: ["Goring-by-Sea", "Tarring", "Broadwater", "Findon", "Lancing"], character: "a coastal commuter town with Brighton overspill and retirement market", nearestCity: "brighton" },
  { name: "Hastings", slug: "hastings", county: "East Sussex", region: "South East", tier: "tier2", areas: ["St Leonards-on-Sea", "Ore", "Hollington", "Battle", "Bexhill"], character: "a coastal creative revival town with London artist overspill", nearestCity: "brighton" },
  { name: "Colchester", slug: "colchester", county: "Essex", region: "East of England", tier: "tier2", areas: ["Lexden", "Wivenhoe", "Tiptree", "Mersea Island", "Braintree"], character: "Britain's oldest recorded town with University of Essex and Garrison", nearestCity: "london" },
  { name: "Southend-on-Sea", slug: "southend-on-sea", county: "Essex", region: "East of England", tier: "tier2", areas: ["Leigh-on-Sea", "Westcliff", "Thorpe Bay", "Shoeburyness", "Rochford"], character: "a coastal London overspill with excellent rail links to capital", nearestCity: "london" },
  { name: "Chelmsford", slug: "chelmsford", county: "Essex", region: "East of England", tier: "tier2", areas: ["Writtle", "Broomfield", "Galleywood", "Springfield", "Great Baddow"], character: "the Essex county town with strong London commuter market", nearestCity: "london" },
  { name: "Watford", slug: "watford", county: "Hertfordshire", region: "East of England", tier: "tier2", areas: ["Oxhey", "Garston", "Carpenders Park", "South Oxhey", "Bushey"], character: "a major London gateway town in Hertfordshire", nearestCity: "london" },
  { name: "St Albans", slug: "st-albans", county: "Hertfordshire", region: "East of England", tier: "tier2", areas: ["London Colney", "Harpenden", "Redbourn", "Park Street", "Sandridge"], character: "a very affluent Roman heritage Hertfordshire city with premium London commuter market", nearestCity: "london" },
  { name: "Stevenage", slug: "stevenage", county: "Hertfordshire", region: "East of England", tier: "tier2", areas: ["Chells", "Shephall", "Bedwell", "Pin Green", "Symonds Green"], character: "the first UK new town with aerospace workforce", nearestCity: "london" },
  { name: "High Wycombe", slug: "high-wycombe", county: "Buckinghamshire", region: "South East", tier: "tier2", areas: ["Booker", "Cressex", "Micklefield", "Downley", "Terriers"], character: "a Chilterns town with furniture heritage and London access", nearestCity: "london" },
  { name: "Slough", slug: "slough", county: "Berkshire", region: "South East", tier: "tier2", areas: ["Langley", "Burnham", "Cippenham", "Chalvey", "Colnbrook"], character: "a diverse business hub near Heathrow with Mars, O2 HQ", nearestCity: "london" },
  { name: "Aldershot", slug: "aldershot", county: "Hampshire", region: "South East", tier: "tier2", areas: ["Farnborough", "Fleet", "Farnham", "Camberley", "Ash"], character: "a major UK military garrison town with stable forces community", nearestCity: "london" },
  { name: "Wokingham", slug: "wokingham", county: "Berkshire", region: "South East", tier: "tier2", areas: ["Woodley", "Earley", "Twyford", "Sonning", "Winnersh"], character: "an affluent Berkshire commuter town near Microsoft/Oracle campuses", nearestCity: "reading" },
  { name: "Bracknell", slug: "bracknell", county: "Berkshire", region: "South East", tier: "tier2", areas: ["Sandhurst", "Crowthorne", "Binfield", "Warfield", "Forest Park"], character: "a new town with tech offices (Dell, HP) and London commuter market", nearestCity: "reading" },
  { name: "Halifax", slug: "halifax", county: "West Yorkshire", region: "Yorkshire and the Humber", tier: "tier2", areas: ["Sowerby Bridge", "Elland", "Brighouse", "Hebden Bridge", "Ripponden"], character: "a post-industrial West Yorkshire town with creative revival nearby", nearestCity: "leeds" },
  { name: "Kidderminster", slug: "kidderminster", county: "Worcestershire", region: "West Midlands", tier: "tier2", areas: ["Bewdley", "Stourport-on-Severn", "Hartlebury", "Blakedown", "Cookley"], character: "a West Midlands carpet manufacturing heritage town", nearestCity: "birmingham" },
  { name: "Telford", slug: "telford", county: "Shropshire", region: "West Midlands", tier: "tier2", areas: ["Wellington", "Oakengates", "Dawley", "Madeley", "Newport"], character: "a modern new town with major manufacturing and Amazon fulfilment hub", nearestCity: "birmingham" },
  { name: "Hereford", slug: "hereford", county: "Herefordshire", region: "West Midlands", tier: "tier2", areas: ["Belmont", "Bobblestock", "Newton Farm", "Tupsley", "Holmer"], character: "a cathedral city serving as agricultural and service hub for rural Herefordshire", nearestCity: "birmingham" },
  { name: "Lincoln", slug: "lincoln", county: "Lincolnshire", region: "East Midlands", tier: "tier2", areas: ["Bracebridge Heath", "Washingborough", "Waddington", "Heighington", "Skellingthorpe"], character: "a historic cathedral city with growing University of Lincoln and expanding business base", nearestCity: "nottingham" },

  // ═══ TIER 3 — LONDON BOROUGHS (33) ═══
  { name: "Hackney", slug: "hackney", county: "Greater London", region: "London", tier: "tier3", areas: ["Hackney Central", "Stoke Newington", "Dalston", "Shoreditch", "Clapton"], character: "a creative East London borough with strong independent business culture", nearestCity: "london" },
  { name: "Camden", slug: "camden", county: "Greater London", region: "London", tier: "tier3", areas: ["Camden Town", "Holborn", "Hampstead", "Kentish Town", "Bloomsbury"], character: "a vibrant central London borough with major tourism and creative industries", nearestCity: "london" },
  { name: "Westminster", slug: "westminster", county: "Greater London", region: "London", tier: "tier3", areas: ["Soho", "Mayfair", "Marylebone", "Pimlico", "Victoria"], character: "central London's premier business and tourist district", nearestCity: "london" },
  { name: "Croydon", slug: "croydon", county: "Greater London", region: "London", tier: "tier3", areas: ["Croydon", "Purley", "South Norwood", "Coulsdon", "Thornton Heath"], character: "South London's largest borough with major regeneration and diverse business base", nearestCity: "london" },
  { name: "Brent", slug: "brent", county: "Greater London", region: "London", tier: "tier3", areas: ["Wembley", "Kilburn", "Harlesden", "Willesden", "Kingsbury"], character: "a diverse North West London borough with Wembley as commercial heart", nearestCity: "london" },
  { name: "Ealing", slug: "ealing", county: "Greater London", region: "London", tier: "tier3", areas: ["Ealing", "Acton", "Southall", "Hanwell", "Greenford"], character: "a diverse West London borough with major South Asian and Eastern European communities", nearestCity: "london" },
  { name: "Lambeth", slug: "lambeth", county: "Greater London", region: "London", tier: "tier3", areas: ["Brixton", "Clapham", "Streatham", "Stockwell", "Norwood"], character: "a diverse South London borough with vibrant Brixton and Clapham districts", nearestCity: "london" },
  { name: "Wandsworth", slug: "wandsworth", county: "Greater London", region: "London", tier: "tier3", areas: ["Wandsworth", "Battersea", "Balham", "Tooting", "Putney"], character: "an affluent South West London borough with strong professional population", nearestCity: "london" },
  { name: "Southwark", slug: "southwark", county: "Greater London", region: "London", tier: "tier3", areas: ["Peckham", "Bermondsey", "Camberwell", "Dulwich", "Borough"], character: "a regenerating South East London borough including Borough Market and Bankside", nearestCity: "london" },
  { name: "Tower Hamlets", slug: "tower-hamlets", county: "Greater London", region: "London", tier: "tier3", areas: ["Whitechapel", "Bethnal Green", "Bow", "Poplar", "Isle of Dogs"], character: "a diverse East London borough including Canary Wharf financial district", nearestCity: "london" },
  { name: "Islington", slug: "islington", county: "Greater London", region: "London", tier: "tier3", areas: ["Islington", "Highbury", "Holloway", "Finsbury Park", "Angel"], character: "an affluent inner North London borough with major creative and tech industries", nearestCity: "london" },
  { name: "Newham", slug: "newham", county: "Greater London", region: "London", tier: "tier3", areas: ["Stratford", "West Ham", "East Ham", "Canning Town", "Forest Gate"], character: "a regenerating East London borough including the Olympic Park area", nearestCity: "london" },
  { name: "Greenwich", slug: "greenwich", county: "Greater London", region: "London", tier: "tier3", areas: ["Greenwich", "Woolwich", "Eltham", "Charlton", "Plumstead"], character: "a maritime South East London borough with major tourism and regeneration", nearestCity: "london" },
  { name: "Lewisham", slug: "lewisham", county: "Greater London", region: "London", tier: "tier3", areas: ["Lewisham", "Catford", "Deptford", "Forest Hill", "Sydenham"], character: "a diverse South East London borough with strong community character", nearestCity: "london" },
  { name: "Bromley", slug: "bromley", county: "Greater London", region: "London", tier: "tier3", areas: ["Bromley", "Beckenham", "Penge", "Orpington", "West Wickham"], character: "London's largest borough by area, suburban with strong professional population", nearestCity: "london" },
  { name: "Bexley", slug: "bexley", county: "Greater London", region: "London", tier: "tier3", areas: ["Bexleyheath", "Sidcup", "Erith", "Welling", "Belvedere"], character: "an outer South East London borough with stable suburban character", nearestCity: "london" },
  { name: "Havering", slug: "havering", county: "Greater London", region: "London", tier: "tier3", areas: ["Romford", "Hornchurch", "Upminster", "Rainham", "Harold Wood"], character: "an outer East London borough centred on Romford with Essex character", nearestCity: "london" },
  { name: "Redbridge", slug: "redbridge", county: "Greater London", region: "London", tier: "tier3", areas: ["Ilford", "Wanstead", "Woodford", "Gants Hill", "Goodmayes"], character: "a diverse outer East London borough with strong South Asian communities", nearestCity: "london" },
  { name: "Waltham Forest", slug: "waltham-forest", county: "Greater London", region: "London", tier: "tier3", areas: ["Walthamstow", "Leyton", "Leytonstone", "Chingford", "Highams Park"], character: "a regenerating East London borough with creative scene in Walthamstow", nearestCity: "london" },
  { name: "Enfield", slug: "enfield", county: "Greater London", region: "London", tier: "tier3", areas: ["Enfield", "Edmonton", "Palmers Green", "Southgate", "Ponders End"], character: "a diverse North London borough with mixed urban and suburban character", nearestCity: "london" },
  { name: "Haringey", slug: "haringey", county: "Greater London", region: "London", tier: "tier3", areas: ["Tottenham", "Wood Green", "Muswell Hill", "Hornsey", "Crouch End"], character: "a diverse North London borough spanning affluent Crouch End to regenerating Tottenham", nearestCity: "london" },
  { name: "Barnet", slug: "barnet", county: "Greater London", region: "London", tier: "tier3", areas: ["Finchley", "Hendon", "Chipping Barnet", "Edgware", "Whetstone"], character: "London's most populous borough with diverse suburban character", nearestCity: "london" },
  { name: "Harrow", slug: "harrow", county: "Greater London", region: "London", tier: "tier3", areas: ["Harrow", "Pinner", "Stanmore", "Wealdstone", "Kenton"], character: "an outer North West London borough with strong South Asian community", nearestCity: "london" },
  { name: "Hillingdon", slug: "hillingdon", county: "Greater London", region: "London", tier: "tier3", areas: ["Uxbridge", "Hayes", "Ruislip", "Northolt", "Yiewsley"], character: "London's second-largest borough by area, including Heathrow", nearestCity: "london" },
  { name: "Hounslow", slug: "hounslow", county: "Greater London", region: "London", tier: "tier3", areas: ["Hounslow", "Chiswick", "Brentford", "Feltham", "Isleworth"], character: "a West London borough on the Thames with diverse character including Heathrow access", nearestCity: "london" },
  { name: "Richmond upon Thames", slug: "richmond-upon-thames", county: "Greater London", region: "London", tier: "tier3", areas: ["Richmond", "Twickenham", "Teddington", "Barnes", "Kew"], character: "an affluent South West London borough with strong river and parkland character", nearestCity: "london" },
  { name: "Kingston upon Thames", slug: "kingston-upon-thames", county: "Greater London", region: "London", tier: "tier3", areas: ["Kingston", "New Malden", "Surbiton", "Tolworth", "Chessington"], character: "an affluent South West London borough with major shopping centre and university", nearestCity: "london" },
  { name: "Merton", slug: "merton", county: "Greater London", region: "London", tier: "tier3", areas: ["Wimbledon", "Mitcham", "Morden", "Raynes Park", "Colliers Wood"], character: "a South West London borough best known for Wimbledon tennis", nearestCity: "london" },
  { name: "Sutton", slug: "sutton", county: "Greater London", region: "London", tier: "tier3", areas: ["Sutton", "Cheam", "Carshalton", "Wallington", "Belmont"], character: "an affluent outer South London borough with stable suburban character", nearestCity: "london" },
  { name: "Kensington and Chelsea", slug: "kensington-and-chelsea", county: "Greater London", region: "London", tier: "tier3", areas: ["Kensington", "Chelsea", "Notting Hill", "Knightsbridge", "Earls Court"], character: "London's wealthiest borough with iconic shopping districts", nearestCity: "london" },
  { name: "Hammersmith and Fulham", slug: "hammersmith-and-fulham", county: "Greater London", region: "London", tier: "tier3", areas: ["Hammersmith", "Fulham", "Shepherd's Bush", "Parsons Green", "White City"], character: "a West London borough with major media (BBC) and financial business presence", nearestCity: "london" },
  { name: "Barking and Dagenham", slug: "barking-and-dagenham", county: "Greater London", region: "London", tier: "tier3", areas: ["Barking", "Dagenham", "Chadwell Heath", "Becontree"], character: "an outer East London borough with major regeneration and Ford manufacturing heritage", nearestCity: "london" },

  // ═══ TIER 3 — KEY UK DISTRICTS (~270 more) ═══
  // KENT
  { name: "Sevenoaks", slug: "sevenoaks", county: "Kent", region: "South East", tier: "tier3", areas: ["Sevenoaks", "Swanley", "Edenbridge"], character: "an affluent commuter district in West Kent", nearestCity: "london" },
  { name: "Tunbridge Wells", slug: "tunbridge-wells", county: "Kent", region: "South East", tier: "tier3", areas: ["Tunbridge Wells", "Southborough", "Paddock Wood"], character: "an affluent spa town district in Kent", nearestCity: "london" },
  { name: "Medway", slug: "medway", county: "Kent", region: "South East", tier: "tier3", areas: ["Chatham", "Gillingham", "Rochester", "Rainham"], character: "a unitary authority covering five Medway towns with naval heritage", nearestCity: "london" },
  { name: "Gravesham", slug: "gravesham", county: "Kent", region: "South East", tier: "tier3", areas: ["Gravesend", "Northfleet"], character: "a Thames-side district with diverse community and London commuter links", nearestCity: "london" },
  { name: "Dartford", slug: "dartford", county: "Kent", region: "South East", tier: "tier3", areas: ["Dartford", "Swanscombe", "Stone"], character: "a Thames-side commuter district with major shopping (Bluewater) nearby", nearestCity: "london" },
  { name: "Swale", slug: "swale", county: "Kent", region: "South East", tier: "tier3", areas: ["Sittingbourne", "Faversham", "Sheerness"], character: "a North Kent district with mixed coastal and inland character", nearestCity: "london" },
  { name: "Thanet", slug: "thanet", county: "Kent", region: "South East", tier: "tier3", areas: ["Margate", "Ramsgate", "Broadstairs"], character: "an East Kent coastal district with creative revival in Margate", nearestCity: "london" },
  { name: "Tonbridge and Malling", slug: "tonbridge-and-malling", county: "Kent", region: "South East", tier: "tier3", areas: ["Tonbridge", "West Malling", "Kings Hill"], character: "an affluent commuter district in West Kent", nearestCity: "london" },
  { name: "Folkestone and Hythe", slug: "folkestone-and-hythe", county: "Kent", region: "South East", tier: "tier3", areas: ["Folkestone", "Hythe", "Romney Marsh"], character: "an East Kent coastal district with creative regeneration in Folkestone", nearestCity: "london" },
  { name: "Ashford", slug: "ashford", county: "Kent", region: "South East", tier: "tier3", areas: ["Ashford", "Tenterden", "Charing"], character: "a Kent district with major commuter rail links to London and Continental Europe", nearestCity: "london" },
  { name: "Dover", slug: "dover", county: "Kent", region: "South East", tier: "tier3", areas: ["Dover", "Deal", "Sandwich"], character: "a Channel-port district with maritime heritage", nearestCity: "london" },
  { name: "Canterbury", slug: "canterbury-district", county: "Kent", region: "South East", tier: "tier3", areas: ["Canterbury", "Whitstable", "Herne Bay"], character: "a district covering the cathedral city and North Kent coastal towns", nearestCity: "london" },

  // SURREY
  { name: "Surrey Heath", slug: "surrey-heath", county: "Surrey", region: "South East", tier: "tier3", areas: ["Camberley", "Frimley", "Bagshot"], character: "an affluent military and corporate commuter district in north Surrey", nearestCity: "london" },
  { name: "Mole Valley", slug: "mole-valley", county: "Surrey", region: "South East", tier: "tier3", areas: ["Dorking", "Leatherhead", "Ashtead"], character: "an affluent Surrey Hills commuter district", nearestCity: "london" },
  { name: "Reigate and Banstead", slug: "reigate-and-banstead", county: "Surrey", region: "South East", tier: "tier3", areas: ["Reigate", "Redhill", "Banstead"], character: "an affluent Surrey commuter district near Gatwick", nearestCity: "london" },
  { name: "Spelthorne", slug: "spelthorne", county: "Surrey", region: "South East", tier: "tier3", areas: ["Staines-upon-Thames", "Ashford", "Shepperton"], character: "a Thames-side commuter district near Heathrow", nearestCity: "london" },
  { name: "Waverley", slug: "waverley", county: "Surrey", region: "South East", tier: "tier3", areas: ["Godalming", "Farnham", "Haslemere"], character: "an affluent rural-to-commuter Surrey district", nearestCity: "london" },
  { name: "Elmbridge", slug: "elmbridge", county: "Surrey", region: "South East", tier: "tier3", areas: ["Esher", "Cobham", "Walton-on-Thames", "Weybridge"], character: "one of the UK's most affluent commuter districts", nearestCity: "london" },
  { name: "Runnymede", slug: "runnymede", county: "Surrey", region: "South East", tier: "tier3", areas: ["Chertsey", "Addlestone", "Virginia Water", "Egham"], character: "an affluent Thames-side commuter district near Heathrow", nearestCity: "london" },
  { name: "Epsom and Ewell", slug: "epsom-and-ewell", county: "Surrey", region: "South East", tier: "tier3", areas: ["Epsom", "Ewell", "Stoneleigh"], character: "an affluent Surrey commuter district known for Epsom Downs racecourse", nearestCity: "london" },
  { name: "Tandridge", slug: "tandridge", county: "Surrey", region: "South East", tier: "tier3", areas: ["Oxted", "Caterham", "Warlingham", "Lingfield"], character: "an affluent commuter district in east Surrey", nearestCity: "london" },

  // HAMPSHIRE
  { name: "East Hampshire", slug: "east-hampshire", county: "Hampshire", region: "South East", tier: "tier3", areas: ["Alton", "Petersfield", "Liphook"], character: "a rural commuter district in east Hampshire", nearestCity: "southampton" },
  { name: "Eastleigh", slug: "eastleigh", county: "Hampshire", region: "South East", tier: "tier3", areas: ["Eastleigh", "Chandler's Ford", "Hedge End"], character: "a Southampton commuter district with strong professional population", nearestCity: "southampton" },
  { name: "Fareham", slug: "fareham", county: "Hampshire", region: "South East", tier: "tier3", areas: ["Fareham", "Portchester", "Stubbington"], character: "a Solent district with naval and commuter character", nearestCity: "southampton" },
  { name: "Gosport", slug: "gosport", county: "Hampshire", region: "South East", tier: "tier3", areas: ["Gosport", "Lee-on-the-Solent", "Alverstoke"], character: "a Solent peninsula district with naval heritage", nearestCity: "southampton" },
  { name: "Havant", slug: "havant", county: "Hampshire", region: "South East", tier: "tier3", areas: ["Havant", "Leigh Park", "Waterlooville", "Emsworth"], character: "a south Hampshire district near Portsmouth", nearestCity: "southampton" },
  { name: "New Forest", slug: "new-forest", county: "Hampshire", region: "South East", tier: "tier3", areas: ["Lyndhurst", "Ringwood", "Lymington", "Totton"], character: "a National Park district with affluent rural and coastal character", nearestCity: "southampton" },
  { name: "Test Valley", slug: "test-valley", county: "Hampshire", region: "South East", tier: "tier3", areas: ["Andover", "Romsey", "Stockbridge"], character: "a rural district covering north and south Hampshire", nearestCity: "southampton" },
  { name: "Hart", slug: "hart", county: "Hampshire", region: "South East", tier: "tier3", areas: ["Fleet", "Hook", "Hartley Wintney"], character: "an affluent Hampshire commuter district", nearestCity: "london" },
  { name: "Rushmoor", slug: "rushmoor", county: "Hampshire", region: "South East", tier: "tier3", areas: ["Aldershot", "Farnborough", "Cove"], character: "a major UK military garrison district", nearestCity: "london" },

  // SUSSEX
  { name: "Adur", slug: "adur", county: "West Sussex", region: "South East", tier: "tier3", areas: ["Shoreham-by-Sea", "Lancing", "Southwick"], character: "a coastal West Sussex district", nearestCity: "brighton" },
  { name: "Arun", slug: "arun", county: "West Sussex", region: "South East", tier: "tier3", areas: ["Bognor Regis", "Littlehampton", "Arundel"], character: "a coastal West Sussex district with mixed tourism and commuter character", nearestCity: "brighton" },
  { name: "Chichester", slug: "chichester", county: "West Sussex", region: "South East", tier: "tier3", areas: ["Chichester", "Selsey", "Midhurst"], character: "an affluent cathedral city and rural South Downs district", nearestCity: "southampton" },
  { name: "Horsham", slug: "horsham", county: "West Sussex", region: "South East", tier: "tier3", areas: ["Horsham", "Billingshurst", "Henfield"], character: "an affluent commuter district in north West Sussex", nearestCity: "london" },
  { name: "Mid Sussex", slug: "mid-sussex", county: "West Sussex", region: "South East", tier: "tier3", areas: ["Burgess Hill", "Haywards Heath", "East Grinstead"], character: "an affluent commuter district between Brighton and London", nearestCity: "brighton" },
  { name: "Lewes", slug: "lewes", county: "East Sussex", region: "South East", tier: "tier3", areas: ["Lewes", "Newhaven", "Seaford"], character: "an East Sussex district with historic county town and coastal character", nearestCity: "brighton" },
  { name: "Rother", slug: "rother", county: "East Sussex", region: "South East", tier: "tier3", areas: ["Bexhill-on-Sea", "Battle", "Rye"], character: "an East Sussex coastal and rural district", nearestCity: "brighton" },
  { name: "Wealden", slug: "wealden", county: "East Sussex", region: "South East", tier: "tier3", areas: ["Crowborough", "Heathfield", "Uckfield", "Hailsham"], character: "a rural East Sussex commuter district", nearestCity: "brighton" },

  // BUCKS / OXFORDSHIRE / BERKSHIRE
  { name: "Aylesbury Vale", slug: "aylesbury-vale", county: "Buckinghamshire", region: "South East", tier: "tier3", areas: ["Aylesbury", "Buckingham", "Winslow"], character: "the largest Buckinghamshire district covering the county town and rural areas", nearestCity: "london" },
  { name: "Chiltern", slug: "chiltern", county: "Buckinghamshire", region: "South East", tier: "tier3", areas: ["Amersham", "Chesham", "Chalfont St Giles"], character: "an affluent Chilterns commuter district", nearestCity: "london" },
  { name: "Cherwell", slug: "cherwell", county: "Oxfordshire", region: "South East", tier: "tier3", areas: ["Banbury", "Bicester", "Kidlington"], character: "a north Oxfordshire district with major retail (Bicester Village) and rural character", nearestCity: "oxford" },
  { name: "South Oxfordshire", slug: "south-oxfordshire", county: "Oxfordshire", region: "South East", tier: "tier3", areas: ["Didcot", "Henley-on-Thames", "Thame"], character: "an affluent south Oxfordshire district with mixed market town and rural character", nearestCity: "oxford" },
  { name: "Vale of White Horse", slug: "vale-of-white-horse", county: "Oxfordshire", region: "South East", tier: "tier3", areas: ["Abingdon", "Wantage", "Faringdon"], character: "a rural south Oxfordshire district", nearestCity: "oxford" },
  { name: "West Oxfordshire", slug: "west-oxfordshire", county: "Oxfordshire", region: "South East", tier: "tier3", areas: ["Witney", "Chipping Norton", "Burford"], character: "an affluent rural Cotswolds district in west Oxfordshire", nearestCity: "oxford" },

  // ESSEX
  { name: "Epping Forest", slug: "epping-forest", county: "Essex", region: "East of England", tier: "tier3", areas: ["Epping", "Chigwell", "Loughton", "Buckhurst Hill"], character: "an affluent commuter district in west Essex", nearestCity: "london" },
  { name: "Harlow", slug: "harlow", county: "Essex", region: "East of England", tier: "tier3", areas: ["Harlow", "Old Harlow"], character: "a Essex new town district with manufacturing and tech", nearestCity: "london" },
  { name: "Brentwood", slug: "brentwood", county: "Essex", region: "East of England", tier: "tier3", areas: ["Brentwood", "Ingatestone", "Shenfield"], character: "an affluent Essex commuter district", nearestCity: "london" },
  { name: "Maldon", slug: "maldon", county: "Essex", region: "East of England", tier: "tier3", areas: ["Maldon", "Burnham-on-Crouch", "Heybridge"], character: "an Essex coastal and estuary district", nearestCity: "london" },
  { name: "Rochford", slug: "rochford", county: "Essex", region: "East of England", tier: "tier3", areas: ["Rayleigh", "Hockley", "Rochford"], character: "an Essex commuter district adjacent to Southend", nearestCity: "london" },
  { name: "Tendring", slug: "tendring", county: "Essex", region: "East of England", tier: "tier3", areas: ["Clacton-on-Sea", "Harwich", "Frinton-on-Sea"], character: "an Essex coastal district with seaside towns", nearestCity: "london" },
  { name: "Uttlesford", slug: "uttlesford", county: "Essex", region: "East of England", tier: "tier3", areas: ["Saffron Walden", "Stansted Mountfitchet", "Great Dunmow"], character: "an affluent rural north Essex district near Stansted", nearestCity: "london" },
  { name: "Braintree", slug: "braintree", county: "Essex", region: "East of England", tier: "tier3", areas: ["Braintree", "Witham", "Halstead"], character: "a north Essex market town district", nearestCity: "london" },
  { name: "Basildon", slug: "basildon", county: "Essex", region: "East of England", tier: "tier3", areas: ["Basildon", "Billericay", "Wickford", "Pitsea"], character: "an Essex new town district with strong commuter links", nearestCity: "london" },
  { name: "Castle Point", slug: "castle-point", county: "Essex", region: "East of England", tier: "tier3", areas: ["Canvey Island", "Hadleigh", "Benfleet"], character: "an Essex Thames estuary commuter district", nearestCity: "london" },

  // HERTFORDSHIRE
  { name: "East Hertfordshire", slug: "east-hertfordshire", county: "Hertfordshire", region: "East of England", tier: "tier3", areas: ["Hertford", "Bishop's Stortford", "Ware", "Sawbridgeworth"], character: "an affluent commuter district in east Hertfordshire", nearestCity: "london" },
  { name: "Hertsmere", slug: "hertsmere", county: "Hertfordshire", region: "East of England", tier: "tier3", areas: ["Borehamwood", "Potters Bar", "Radlett"], character: "an affluent commuter district known for film studios at Borehamwood", nearestCity: "london" },
  { name: "North Hertfordshire", slug: "north-hertfordshire", county: "Hertfordshire", region: "East of England", tier: "tier3", areas: ["Hitchin", "Letchworth", "Baldock", "Royston"], character: "a north Hertfordshire commuter district", nearestCity: "london" },
  { name: "Three Rivers", slug: "three-rivers", county: "Hertfordshire", region: "East of England", tier: "tier3", areas: ["Rickmansworth", "Chorleywood", "Croxley Green"], character: "an affluent west Hertfordshire commuter district", nearestCity: "london" },
  { name: "Broxbourne", slug: "broxbourne", county: "Hertfordshire", region: "East of England", tier: "tier3", areas: ["Cheshunt", "Hoddesdon", "Waltham Cross"], character: "an east Hertfordshire commuter district", nearestCity: "london" },
  { name: "Dacorum", slug: "dacorum", county: "Hertfordshire", region: "East of England", tier: "tier3", areas: ["Hemel Hempstead", "Berkhamsted", "Tring"], character: "a west Hertfordshire commuter district covering Hemel Hempstead new town", nearestCity: "london" },
  { name: "Welwyn Hatfield", slug: "welwyn-hatfield", county: "Hertfordshire", region: "East of England", tier: "tier3", areas: ["Welwyn Garden City", "Hatfield"], character: "a Hertfordshire commuter district covering two garden cities", nearestCity: "london" },

  // BEDS / SUFFOLK
  { name: "Bedford", slug: "bedford", county: "Bedfordshire", region: "East of England", tier: "tier3", areas: ["Bedford", "Kempston", "Biddenham"], character: "a Bedfordshire unitary authority covering Bedford and surrounds", nearestCity: "london" },
  { name: "Central Bedfordshire", slug: "central-bedfordshire", county: "Bedfordshire", region: "East of England", tier: "tier3", areas: ["Dunstable", "Leighton Buzzard", "Biggleswade"], character: "a Bedfordshire unitary authority spanning multiple market towns", nearestCity: "london" },
  { name: "Babergh", slug: "babergh", county: "Suffolk", region: "East of England", tier: "tier3", areas: ["Sudbury", "Hadleigh", "Long Melford"], character: "a rural south Suffolk district with affluent character", nearestCity: "london" },
  { name: "Mid Suffolk", slug: "mid-suffolk", county: "Suffolk", region: "East of England", tier: "tier3", areas: ["Stowmarket", "Eye", "Needham Market"], character: "a rural mid-Suffolk district", nearestCity: "norwich" },
  { name: "East Suffolk", slug: "east-suffolk", county: "Suffolk", region: "East of England", tier: "tier3", areas: ["Woodbridge", "Beccles", "Saxmundham"], character: "a coastal east Suffolk district", nearestCity: "norwich" },
  { name: "West Suffolk", slug: "west-suffolk", county: "Suffolk", region: "East of England", tier: "tier3", areas: ["Bury St Edmunds", "Newmarket", "Haverhill"], character: "a west Suffolk district covering Bury St Edmunds and racing town Newmarket", nearestCity: "cambridge" },

  // NORFOLK
  { name: "Great Yarmouth", slug: "great-yarmouth", county: "Norfolk", region: "East of England", tier: "tier3", areas: ["Great Yarmouth", "Gorleston", "Caister-on-Sea"], character: "a Norfolk coastal district with tourism and offshore energy economy", nearestCity: "norwich" },
  { name: "Breckland", slug: "breckland", county: "Norfolk", region: "East of England", tier: "tier3", areas: ["Thetford", "Dereham", "Attleborough"], character: "a rural mid-Norfolk district", nearestCity: "norwich" },
  { name: "Broadland", slug: "broadland", county: "Norfolk", region: "East of England", tier: "tier3", areas: ["Wroxham", "Aylsham", "Acle"], character: "a Norfolk Broads district near Norwich", nearestCity: "norwich" },
  { name: "North Norfolk", slug: "north-norfolk", county: "Norfolk", region: "East of England", tier: "tier3", areas: ["Cromer", "Holt", "Fakenham", "Sheringham"], character: "a coastal north Norfolk district with tourism", nearestCity: "norwich" },
  { name: "South Norfolk", slug: "south-norfolk", county: "Norfolk", region: "East of England", tier: "tier3", areas: ["Long Stratton", "Diss", "Wymondham"], character: "a rural south Norfolk district", nearestCity: "norwich" },
  { name: "Kings Lynn and West Norfolk", slug: "kings-lynn-and-west-norfolk", county: "Norfolk", region: "East of England", tier: "tier3", areas: ["King's Lynn", "Downham Market", "Hunstanton"], character: "a west Norfolk district covering Kings Lynn and rural areas", nearestCity: "norwich" },

  // CAMBRIDGESHIRE
  { name: "South Cambridgeshire", slug: "south-cambridgeshire", county: "Cambridgeshire", region: "East of England", tier: "tier3", areas: ["Sawston", "Cambourne", "Bar Hill"], character: "an affluent rural commuter district around Cambridge", nearestCity: "cambridge" },
  { name: "East Cambridgeshire", slug: "east-cambridgeshire", county: "Cambridgeshire", region: "East of England", tier: "tier3", areas: ["Ely", "Soham", "Littleport"], character: "an east Cambridgeshire district covering cathedral city Ely", nearestCity: "cambridge" },
  { name: "Fenland", slug: "fenland", county: "Cambridgeshire", region: "East of England", tier: "tier3", areas: ["Wisbech", "March", "Chatteris", "Whittlesey"], character: "a rural Fenland district in north Cambridgeshire", nearestCity: "peterborough" },
  { name: "Huntingdonshire", slug: "huntingdonshire", county: "Cambridgeshire", region: "East of England", tier: "tier3", areas: ["Huntingdon", "St Ives", "St Neots"], character: "a Cambridgeshire commuter district", nearestCity: "cambridge" },

  // GLOUCESTERSHIRE
  { name: "Cotswold", slug: "cotswold", county: "Gloucestershire", region: "South West", tier: "tier3", areas: ["Cirencester", "Bourton-on-the-Water", "Moreton-in-Marsh"], character: "an affluent Cotswolds tourism district", nearestCity: "bristol" },
  { name: "Forest of Dean", slug: "forest-of-dean", county: "Gloucestershire", region: "South West", tier: "tier3", areas: ["Cinderford", "Lydney", "Coleford"], character: "a rural Gloucestershire district covering the Forest of Dean", nearestCity: "bristol" },
  { name: "Stroud", slug: "stroud", county: "Gloucestershire", region: "South West", tier: "tier3", areas: ["Stroud", "Nailsworth", "Minchinhampton"], character: "a Cotswolds market town district with creative population", nearestCity: "bristol" },
  { name: "Tewkesbury", slug: "tewkesbury", county: "Gloucestershire", region: "South West", tier: "tier3", areas: ["Tewkesbury", "Bishops Cleeve", "Winchcombe"], character: "a north Gloucestershire district covering Tewkesbury", nearestCity: "bristol" },
  { name: "South Gloucestershire", slug: "south-gloucestershire", county: "Gloucestershire", region: "South West", tier: "tier3", areas: ["Yate", "Thornbury", "Chipping Sodbury", "Kingswood"], character: "a unitary authority north of Bristol with mixed urban and rural character", nearestCity: "bristol" },

  // SOMERSET
  { name: "North Somerset", slug: "north-somerset", county: "Somerset", region: "South West", tier: "tier3", areas: ["Weston-super-Mare", "Clevedon", "Portishead"], character: "a Somerset unitary authority covering coastal towns near Bristol", nearestCity: "bristol" },
  { name: "Mendip", slug: "mendip", county: "Somerset", region: "South West", tier: "tier3", areas: ["Wells", "Glastonbury", "Frome", "Shepton Mallet"], character: "a Somerset district covering Wells, Glastonbury and rural Mendip Hills", nearestCity: "bristol" },
  { name: "Sedgemoor", slug: "sedgemoor", county: "Somerset", region: "South West", tier: "tier3", areas: ["Bridgwater", "Burnham-on-Sea", "Highbridge"], character: "a Somerset district covering market towns and the Levels", nearestCity: "bristol" },
  { name: "South Somerset", slug: "south-somerset", county: "Somerset", region: "South West", tier: "tier3", areas: ["Yeovil", "Chard", "Crewkerne"], character: "a rural south Somerset district", nearestCity: "bristol" },

  // DEVON
  { name: "East Devon", slug: "east-devon", county: "Devon", region: "South West", tier: "tier3", areas: ["Exmouth", "Honiton", "Sidmouth"], character: "an affluent east Devon coastal and rural district", nearestCity: "exeter" },
  { name: "Mid Devon", slug: "mid-devon", county: "Devon", region: "South West", tier: "tier3", areas: ["Crediton", "Tiverton", "Cullompton"], character: "a rural mid-Devon district", nearestCity: "exeter" },
  { name: "North Devon", slug: "north-devon", county: "Devon", region: "South West", tier: "tier3", areas: ["Barnstaple", "Ilfracombe", "Bideford"], character: "a north Devon coastal and rural district", nearestCity: "plymouth" },
  { name: "South Hams", slug: "south-hams", county: "Devon", region: "South West", tier: "tier3", areas: ["Totnes", "Ivybridge", "Dartmouth", "Kingsbridge"], character: "an affluent south Devon coastal and rural district", nearestCity: "plymouth" },
  { name: "Teignbridge", slug: "teignbridge", county: "Devon", region: "South West", tier: "tier3", areas: ["Newton Abbot", "Dawlish", "Teignmouth"], character: "a south Devon coastal district", nearestCity: "exeter" },
  { name: "Torridge", slug: "torridge", county: "Devon", region: "South West", tier: "tier3", areas: ["Bideford", "Great Torrington", "Holsworthy"], character: "a rural north Devon district", nearestCity: "plymouth" },
  { name: "West Devon", slug: "west-devon", county: "Devon", region: "South West", tier: "tier3", areas: ["Tavistock", "Okehampton"], character: "a rural west Devon district near Dartmoor", nearestCity: "plymouth" },

  // CORNWALL & DORSET
  { name: "Cornwall", slug: "cornwall", county: "Cornwall", region: "South West", tier: "tier3", areas: ["Truro", "Penzance", "Newquay", "Falmouth", "St Austell"], character: "a Cornish unitary authority covering the entire county with major tourism", nearestCity: "plymouth" },
  { name: "Isles of Scilly", slug: "isles-of-scilly", county: "Isles of Scilly", region: "South West", tier: "tier3", areas: ["St Mary's", "Tresco"], character: "a small island archipelago off Cornwall with tourism economy", nearestCity: "plymouth" },
  { name: "Purbeck", slug: "purbeck", county: "Dorset", region: "South West", tier: "tier3", areas: ["Wareham", "Swanage"], character: "a Dorset coastal district covering the Isle of Purbeck", nearestCity: "bournemouth" },
  { name: "West Dorset", slug: "west-dorset", county: "Dorset", region: "South West", tier: "tier3", areas: ["Dorchester", "Bridport", "Sherborne"], character: "a rural west Dorset district", nearestCity: "bournemouth" },
  { name: "Weymouth and Portland", slug: "weymouth-and-portland", county: "Dorset", region: "South West", tier: "tier3", areas: ["Weymouth", "Portland"], character: "a Dorset coastal district", nearestCity: "bournemouth" },
  { name: "Christchurch", slug: "christchurch", county: "Dorset", region: "South West", tier: "tier3", areas: ["Christchurch", "Highcliffe"], character: "a Dorset coastal district adjacent to Bournemouth", nearestCity: "bournemouth" },
  { name: "East Dorset", slug: "east-dorset", county: "Dorset", region: "South West", tier: "tier3", areas: ["Wimborne Minster", "Ferndown", "Verwood"], character: "an east Dorset commuter district", nearestCity: "bournemouth" },
  { name: "North Dorset", slug: "north-dorset", county: "Dorset", region: "South West", tier: "tier3", areas: ["Blandford Forum", "Shaftesbury", "Gillingham"], character: "a rural north Dorset district", nearestCity: "bournemouth" },
  { name: "Wiltshire", slug: "wiltshire", county: "Wiltshire", region: "South West", tier: "tier3", areas: ["Trowbridge", "Chippenham", "Devizes", "Marlborough"], character: "a Wiltshire unitary authority covering the entire county", nearestCity: "bristol" },

  // EAST MIDLANDS
  { name: "Amber Valley", slug: "amber-valley", county: "Derbyshire", region: "East Midlands", tier: "tier3", areas: ["Ripley", "Heanor", "Alfreton", "Belper"], character: "a Derbyshire post-industrial market town district", nearestCity: "derby" },
  { name: "Bolsover", slug: "bolsover", county: "Derbyshire", region: "East Midlands", tier: "tier3", areas: ["Bolsover", "Shirebrook", "Clowne"], character: "a north Derbyshire post-mining district", nearestCity: "sheffield" },
  { name: "Chesterfield", slug: "chesterfield", county: "Derbyshire", region: "East Midlands", tier: "tier3", areas: ["Chesterfield", "Dronfield", "Staveley"], character: "a north Derbyshire market town adjacent to the Peak District", nearestCity: "sheffield" },
  { name: "Derbyshire Dales", slug: "derbyshire-dales", county: "Derbyshire", region: "East Midlands", tier: "tier3", areas: ["Matlock", "Ashbourne", "Bakewell"], character: "a rural Peak District commuter district", nearestCity: "derby" },
  { name: "Erewash", slug: "erewash", county: "Derbyshire", region: "East Midlands", tier: "tier3", areas: ["Ilkeston", "Long Eaton", "Sandiacre"], character: "a Derbyshire commuter district between Nottingham and Derby", nearestCity: "nottingham" },
  { name: "High Peak", slug: "high-peak", county: "Derbyshire", region: "East Midlands", tier: "tier3", areas: ["Glossop", "Buxton", "Chapel-en-le-Frith"], character: "a Peak District tourism and commuter district", nearestCity: "manchester" },
  { name: "North East Derbyshire", slug: "north-east-derbyshire", county: "Derbyshire", region: "East Midlands", tier: "tier3", areas: ["Dronfield", "Clay Cross", "Eckington"], character: "a north Derbyshire commuter district near Sheffield", nearestCity: "sheffield" },
  { name: "South Derbyshire", slug: "south-derbyshire", county: "Derbyshire", region: "East Midlands", tier: "tier3", areas: ["Swadlincote", "Melbourne", "Repton"], character: "a south Derbyshire district covering market towns", nearestCity: "derby" },
  { name: "Charnwood", slug: "charnwood", county: "Leicestershire", region: "East Midlands", tier: "tier3", areas: ["Loughborough", "Shepshed", "Quorn"], character: "a Leicestershire district covering Loughborough university town", nearestCity: "leicester" },
  { name: "Harborough", slug: "harborough", county: "Leicestershire", region: "East Midlands", tier: "tier3", areas: ["Market Harborough", "Lutterworth", "Kibworth"], character: "an affluent rural south Leicestershire district", nearestCity: "leicester" },
  { name: "Hinckley and Bosworth", slug: "hinckley-and-bosworth", county: "Leicestershire", region: "East Midlands", tier: "tier3", areas: ["Hinckley", "Burbage", "Earl Shilton"], character: "a west Leicestershire district", nearestCity: "leicester" },
  { name: "Melton", slug: "melton", county: "Leicestershire", region: "East Midlands", tier: "tier3", areas: ["Melton Mowbray", "Bottesford"], character: "a rural east Leicestershire district known for Melton Mowbray pork pies", nearestCity: "leicester" },
  { name: "North West Leicestershire", slug: "north-west-leicestershire", county: "Leicestershire", region: "East Midlands", tier: "tier3", areas: ["Coalville", "Ashby-de-la-Zouch", "Castle Donington"], character: "a north Leicestershire district near East Midlands Airport", nearestCity: "leicester" },
  { name: "Oadby and Wigston", slug: "oadby-and-wigston", county: "Leicestershire", region: "East Midlands", tier: "tier3", areas: ["Oadby", "Wigston", "South Wigston"], character: "a Leicester commuter district", nearestCity: "leicester" },
  { name: "Broxtowe", slug: "broxtowe", county: "Nottinghamshire", region: "East Midlands", tier: "tier3", areas: ["Beeston", "Stapleford", "Eastwood"], character: "a Nottingham commuter district covering Beeston (university)", nearestCity: "nottingham" },
  { name: "Gedling", slug: "gedling", county: "Nottinghamshire", region: "East Midlands", tier: "tier3", areas: ["Arnold", "Carlton", "Ravenshead"], character: "a Nottingham suburban commuter district", nearestCity: "nottingham" },
  { name: "Mansfield", slug: "mansfield", county: "Nottinghamshire", region: "East Midlands", tier: "tier3", areas: ["Mansfield", "Mansfield Woodhouse", "Forest Town"], character: "a north Nottinghamshire post-mining market town district", nearestCity: "nottingham" },
  { name: "Newark and Sherwood", slug: "newark-and-sherwood", county: "Nottinghamshire", region: "East Midlands", tier: "tier3", areas: ["Newark-on-Trent", "Bingham", "Southwell", "Ollerton"], character: "an east Nottinghamshire district covering Newark and rural areas", nearestCity: "nottingham" },
  { name: "Rushcliffe", slug: "rushcliffe", county: "Nottinghamshire", region: "East Midlands", tier: "tier3", areas: ["West Bridgford", "Bingham", "Radcliffe on Trent"], character: "an affluent south Nottinghamshire commuter district", nearestCity: "nottingham" },
  { name: "Bassetlaw", slug: "bassetlaw", county: "Nottinghamshire", region: "East Midlands", tier: "tier3", areas: ["Worksop", "Retford", "Harworth"], character: "a north Nottinghamshire district", nearestCity: "sheffield" },
  { name: "Corby", slug: "corby", county: "Northamptonshire", region: "East Midlands", tier: "tier3", areas: ["Corby", "Weldon"], character: "a north Northamptonshire post-industrial new town district", nearestCity: "leicester" },
  { name: "Daventry", slug: "daventry", county: "Northamptonshire", region: "East Midlands", tier: "tier3", areas: ["Daventry", "Towcester", "Long Buckby"], character: "a south Northamptonshire rural district", nearestCity: "leicester" },
  { name: "East Northamptonshire", slug: "east-northamptonshire", county: "Northamptonshire", region: "East Midlands", tier: "tier3", areas: ["Thrapston", "Oundle", "Rushden"], character: "an east Northamptonshire district", nearestCity: "leicester" },
  { name: "Kettering", slug: "kettering", county: "Northamptonshire", region: "East Midlands", tier: "tier3", areas: ["Kettering", "Desborough", "Rothwell"], character: "a Northamptonshire market town district", nearestCity: "leicester" },
  { name: "Wellingborough", slug: "wellingborough", county: "Northamptonshire", region: "East Midlands", tier: "tier3", areas: ["Wellingborough", "Irthlingborough"], character: "a Northamptonshire commuter district", nearestCity: "leicester" },
  { name: "South Northamptonshire", slug: "south-northamptonshire", county: "Northamptonshire", region: "East Midlands", tier: "tier3", areas: ["Towcester", "Brackley", "Silverstone"], character: "an affluent south Northamptonshire rural district", nearestCity: "northampton" },
  { name: "Boston", slug: "boston", county: "Lincolnshire", region: "East Midlands", tier: "tier3", areas: ["Boston", "Kirton"], character: "a Lincolnshire market town district", nearestCity: "lincoln" },
  { name: "East Lindsey", slug: "east-lindsey", county: "Lincolnshire", region: "East Midlands", tier: "tier3", areas: ["Skegness", "Louth", "Mablethorpe", "Horncastle"], character: "a Lincolnshire coastal and rural district", nearestCity: "lincoln" },
  { name: "North Kesteven", slug: "north-kesteven", county: "Lincolnshire", region: "East Midlands", tier: "tier3", areas: ["Sleaford", "North Hykeham"], character: "a south Lincolnshire commuter district", nearestCity: "lincoln" },
  { name: "South Holland", slug: "south-holland", county: "Lincolnshire", region: "East Midlands", tier: "tier3", areas: ["Spalding", "Holbeach", "Long Sutton"], character: "a south Lincolnshire fenland district", nearestCity: "peterborough" },
  { name: "South Kesteven", slug: "south-kesteven", county: "Lincolnshire", region: "East Midlands", tier: "tier3", areas: ["Grantham", "Stamford", "Bourne"], character: "a south Lincolnshire district covering Grantham and Stamford", nearestCity: "nottingham" },
  { name: "West Lindsey", slug: "west-lindsey", county: "Lincolnshire", region: "East Midlands", tier: "tier3", areas: ["Gainsborough", "Market Rasen"], character: "a rural west Lincolnshire district", nearestCity: "lincoln" },
  { name: "Rutland", slug: "rutland", county: "Rutland", region: "East Midlands", tier: "tier3", areas: ["Oakham", "Uppingham"], character: "England's smallest historic county, an affluent rural district", nearestCity: "leicester" },

  // WEST MIDLANDS
  { name: "Bromsgrove", slug: "bromsgrove", county: "Worcestershire", region: "West Midlands", tier: "tier3", areas: ["Bromsgrove", "Hagley", "Rubery"], character: "an affluent Birmingham commuter district", nearestCity: "birmingham" },
  { name: "Malvern Hills", slug: "malvern-hills", county: "Worcestershire", region: "West Midlands", tier: "tier3", areas: ["Malvern", "Upton upon Severn"], character: "a rural Worcestershire district at the foot of the Malvern Hills", nearestCity: "birmingham" },
  { name: "Redditch", slug: "redditch", county: "Worcestershire", region: "West Midlands", tier: "tier3", areas: ["Redditch", "Headless Cross"], character: "a Worcestershire new town district", nearestCity: "birmingham" },
  { name: "Wychavon", slug: "wychavon", county: "Worcestershire", region: "West Midlands", tier: "tier3", areas: ["Evesham", "Droitwich", "Pershore"], character: "a Worcestershire market town district", nearestCity: "birmingham" },
  { name: "Wyre Forest", slug: "wyre-forest", county: "Worcestershire", region: "West Midlands", tier: "tier3", areas: ["Kidderminster", "Stourport-on-Severn", "Bewdley"], character: "a Worcestershire district covering Kidderminster", nearestCity: "birmingham" },
  { name: "Worcester", slug: "worcester", county: "Worcestershire", region: "West Midlands", tier: "tier3", areas: ["Worcester", "St Johns", "Warndon"], character: "a Worcestershire cathedral city district", nearestCity: "birmingham" },
  { name: "Cannock Chase", slug: "cannock-chase", county: "Staffordshire", region: "West Midlands", tier: "tier3", areas: ["Cannock", "Rugeley", "Hednesford"], character: "a south Staffordshire post-mining district", nearestCity: "birmingham" },
  { name: "Lichfield", slug: "lichfield", county: "Staffordshire", region: "West Midlands", tier: "tier3", areas: ["Lichfield", "Burntwood"], character: "an affluent Staffordshire cathedral city district", nearestCity: "birmingham" },
  { name: "Newcastle-under-Lyme", slug: "newcastle-under-lyme", county: "Staffordshire", region: "West Midlands", tier: "tier3", areas: ["Newcastle-under-Lyme", "Kidsgrove", "Madeley"], character: "a Staffordshire university town district adjacent to Stoke", nearestCity: "stoke-on-trent" },
  { name: "Stafford", slug: "stafford", county: "Staffordshire", region: "West Midlands", tier: "tier3", areas: ["Stafford", "Stone", "Eccleshall"], character: "a Staffordshire county town district", nearestCity: "birmingham" },
  { name: "Staffordshire Moorlands", slug: "staffordshire-moorlands", county: "Staffordshire", region: "West Midlands", tier: "tier3", areas: ["Leek", "Biddulph", "Cheadle"], character: "a rural north Staffordshire district at the edge of the Peak District", nearestCity: "stoke-on-trent" },
  { name: "South Staffordshire", slug: "south-staffordshire", county: "Staffordshire", region: "West Midlands", tier: "tier3", areas: ["Codsall", "Wombourne", "Brewood"], character: "a south Staffordshire commuter district", nearestCity: "birmingham" },
  { name: "Tamworth", slug: "tamworth", county: "Staffordshire", region: "West Midlands", tier: "tier3", areas: ["Tamworth", "Wilnecote"], character: "a Staffordshire commuter town district", nearestCity: "birmingham" },
  { name: "East Staffordshire", slug: "east-staffordshire", county: "Staffordshire", region: "West Midlands", tier: "tier3", areas: ["Burton upon Trent", "Uttoxeter"], character: "a Staffordshire district covering Burton upon Trent brewing town", nearestCity: "derby" },
  { name: "North Warwickshire", slug: "north-warwickshire", county: "Warwickshire", region: "West Midlands", tier: "tier3", areas: ["Atherstone", "Polesworth", "Coleshill"], character: "a north Warwickshire rural district", nearestCity: "birmingham" },
  { name: "Nuneaton and Bedworth", slug: "nuneaton-and-bedworth", county: "Warwickshire", region: "West Midlands", tier: "tier3", areas: ["Nuneaton", "Bedworth", "Bulkington"], character: "a north Warwickshire district near Coventry", nearestCity: "coventry" },
  { name: "Rugby", slug: "rugby", county: "Warwickshire", region: "West Midlands", tier: "tier3", areas: ["Rugby", "Hillmorton"], character: "a Warwickshire market town district", nearestCity: "coventry" },
  { name: "Stratford-upon-Avon", slug: "stratford-upon-avon", county: "Warwickshire", region: "West Midlands", tier: "tier3", areas: ["Stratford-upon-Avon", "Alcester", "Shipston-on-Stour"], character: "a Warwickshire heritage tourism district covering Shakespeare's birthplace", nearestCity: "birmingham" },
  { name: "Warwick", slug: "warwick", county: "Warwickshire", region: "West Midlands", tier: "tier3", areas: ["Warwick", "Leamington Spa", "Kenilworth"], character: "an affluent Warwickshire district covering Warwick castle and Leamington Spa", nearestCity: "coventry" },
  { name: "Shrewsbury", slug: "shrewsbury", county: "Shropshire", region: "West Midlands", tier: "tier3", areas: ["Shrewsbury", "Atcham", "Bayston Hill"], character: "a Shropshire county town district", nearestCity: "birmingham" },
  { name: "Bridgnorth", slug: "bridgnorth", county: "Shropshire", region: "West Midlands", tier: "tier3", areas: ["Bridgnorth", "Broseley"], character: "a Shropshire market town district", nearestCity: "birmingham" },
  { name: "Oswestry", slug: "oswestry", county: "Shropshire", region: "West Midlands", tier: "tier3", areas: ["Oswestry", "Gobowen"], character: "a Shropshire border market town district", nearestCity: "birmingham" },
  { name: "South Shropshire", slug: "south-shropshire", county: "Shropshire", region: "West Midlands", tier: "tier3", areas: ["Ludlow", "Church Stretton"], character: "a rural south Shropshire district", nearestCity: "birmingham" },
  { name: "Telford and Wrekin", slug: "telford-and-wrekin", county: "Shropshire", region: "West Midlands", tier: "tier3", areas: ["Telford", "Wellington", "Newport"], character: "a Shropshire unitary authority covering Telford new town", nearestCity: "birmingham" },
  { name: "Shropshire", slug: "shropshire-council", county: "Shropshire", region: "West Midlands", tier: "tier3", areas: ["Shrewsbury", "Oswestry", "Bridgnorth", "Ludlow"], character: "a Shropshire unitary authority covering most of the county", nearestCity: "birmingham" },
  { name: "Herefordshire", slug: "herefordshire", county: "Herefordshire", region: "West Midlands", tier: "tier3", areas: ["Hereford", "Leominster", "Ross-on-Wye"], character: "a Herefordshire unitary authority covering the entire county", nearestCity: "birmingham" },
  { name: "Walsall", slug: "walsall", county: "West Midlands", region: "West Midlands", tier: "tier3", areas: ["Walsall", "Aldridge", "Brownhills"], character: "a Black Country borough adjacent to Birmingham", nearestCity: "birmingham" },
  { name: "Sandwell", slug: "sandwell", county: "West Midlands", region: "West Midlands", tier: "tier3", areas: ["West Bromwich", "Smethwick", "Oldbury", "Tipton"], character: "a Black Country borough covering six former industrial towns", nearestCity: "birmingham" },
  { name: "Dudley", slug: "dudley", county: "West Midlands", region: "West Midlands", tier: "tier3", areas: ["Dudley", "Stourbridge", "Halesowen"], character: "a Black Country borough with strong manufacturing heritage", nearestCity: "birmingham" },
  { name: "Solihull", slug: "solihull", county: "West Midlands", region: "West Midlands", tier: "tier3", areas: ["Solihull", "Shirley", "Knowle", "Dorridge"], character: "an affluent West Midlands borough adjacent to Birmingham", nearestCity: "birmingham" },

  // YORKSHIRE
  { name: "Craven", slug: "craven", county: "North Yorkshire", region: "Yorkshire and the Humber", tier: "tier3", areas: ["Skipton", "Settle", "Ingleton"], character: "a rural Yorkshire Dales district", nearestCity: "leeds" },
  { name: "Hambleton", slug: "hambleton", county: "North Yorkshire", region: "Yorkshire and the Humber", tier: "tier3", areas: ["Northallerton", "Thirsk", "Bedale"], character: "a rural North Yorkshire district", nearestCity: "leeds" },
  { name: "Richmondshire", slug: "richmondshire", county: "North Yorkshire", region: "Yorkshire and the Humber", tier: "tier3", areas: ["Richmond", "Catterick", "Leyburn"], character: "a rural Yorkshire Dales district with major military presence", nearestCity: "leeds" },
  { name: "Ryedale", slug: "ryedale", county: "North Yorkshire", region: "Yorkshire and the Humber", tier: "tier3", areas: ["Pickering", "Malton", "Norton"], character: "a rural North York Moors district", nearestCity: "leeds" },
  { name: "Scarborough", slug: "scarborough", county: "North Yorkshire", region: "Yorkshire and the Humber", tier: "tier3", areas: ["Scarborough", "Whitby", "Filey"], character: "a Yorkshire coast tourism district", nearestCity: "leeds" },
  { name: "Selby", slug: "selby", county: "North Yorkshire", region: "Yorkshire and the Humber", tier: "tier3", areas: ["Selby", "Tadcaster", "Sherburn-in-Elmet"], character: "a North Yorkshire commuter district near Leeds", nearestCity: "leeds" },
  { name: "Calderdale", slug: "calderdale", county: "West Yorkshire", region: "Yorkshire and the Humber", tier: "tier3", areas: ["Halifax", "Brighouse", "Hebden Bridge"], character: "a West Yorkshire borough covering Halifax and creative Hebden Bridge", nearestCity: "leeds" },
  { name: "Kirklees", slug: "kirklees", county: "West Yorkshire", region: "Yorkshire and the Humber", tier: "tier3", areas: ["Huddersfield", "Dewsbury", "Batley"], character: "a West Yorkshire borough covering Huddersfield and surrounding towns", nearestCity: "leeds" },
  { name: "East Riding of Yorkshire", slug: "east-riding-of-yorkshire", county: "East Yorkshire", region: "Yorkshire and the Humber", tier: "tier3", areas: ["Beverley", "Bridlington", "Goole"], character: "an East Yorkshire unitary authority covering rural and coastal areas", nearestCity: "leeds" },
  { name: "North Lincolnshire", slug: "north-lincolnshire", county: "Lincolnshire", region: "Yorkshire and the Humber", tier: "tier3", areas: ["Scunthorpe", "Brigg", "Barton-upon-Humber"], character: "a north Lincolnshire unitary authority with steel-making heritage", nearestCity: "leeds" },
  { name: "North East Lincolnshire", slug: "north-east-lincolnshire", county: "Lincolnshire", region: "Yorkshire and the Humber", tier: "tier3", areas: ["Grimsby", "Cleethorpes", "Immingham"], character: "a Humber estuary unitary authority covering Grimsby fishing port", nearestCity: "leeds" },
  { name: "Hull", slug: "hull", county: "East Yorkshire", region: "Yorkshire and the Humber", tier: "tier3", areas: ["Hull", "Cottingham"], character: "a Humber port city unitary authority", nearestCity: "leeds" },

  // NORTH WEST
  { name: "Cheshire East", slug: "cheshire-east", county: "Cheshire", region: "North West", tier: "tier3", areas: ["Macclesfield", "Crewe", "Congleton", "Wilmslow"], character: "an east Cheshire unitary authority including affluent Wilmslow", nearestCity: "manchester" },
  { name: "Cheshire West and Chester", slug: "cheshire-west-and-chester", county: "Cheshire", region: "North West", tier: "tier3", areas: ["Chester", "Ellesmere Port", "Northwich"], character: "a west Cheshire unitary authority covering historic Chester", nearestCity: "liverpool" },
  { name: "West Lancashire", slug: "west-lancashire", county: "Lancashire", region: "North West", tier: "tier3", areas: ["Ormskirk", "Skelmersdale", "Burscough"], character: "a Lancashire commuter district near Liverpool", nearestCity: "liverpool" },
  { name: "Ribble Valley", slug: "ribble-valley", county: "Lancashire", region: "North West", tier: "tier3", areas: ["Clitheroe", "Longridge", "Whalley"], character: "an affluent rural Lancashire district", nearestCity: "manchester" },
  { name: "Rossendale", slug: "rossendale", county: "Lancashire", region: "North West", tier: "tier3", areas: ["Rawtenstall", "Bacup", "Haslingden"], character: "a Lancashire post-industrial town district", nearestCity: "manchester" },
  { name: "South Ribble", slug: "south-ribble", county: "Lancashire", region: "North West", tier: "tier3", areas: ["Leyland", "Bamber Bridge", "Penwortham"], character: "a Lancashire commuter district near Preston", nearestCity: "preston" },
  { name: "Pendle", slug: "pendle", county: "Lancashire", region: "North West", tier: "tier3", areas: ["Nelson", "Colne", "Barnoldswick"], character: "an east Lancashire post-industrial district", nearestCity: "manchester" },
  { name: "Hyndburn", slug: "hyndburn", county: "Lancashire", region: "North West", tier: "tier3", areas: ["Accrington", "Church", "Great Harwood"], character: "an east Lancashire post-industrial district", nearestCity: "manchester" },
  { name: "Fylde", slug: "fylde", county: "Lancashire", region: "North West", tier: "tier3", areas: ["Lytham St Annes", "Kirkham", "Wesham"], character: "a Lancashire coastal commuter district", nearestCity: "manchester" },
  { name: "Wyre", slug: "wyre", county: "Lancashire", region: "North West", tier: "tier3", areas: ["Fleetwood", "Cleveleys", "Garstang"], character: "a Lancashire coastal district", nearestCity: "manchester" },
  { name: "Copeland", slug: "copeland", county: "Cumbria", region: "North West", tier: "tier3", areas: ["Whitehaven", "Millom", "Cleator Moor"], character: "a west Cumbria district with Sellafield nuclear plant", nearestCity: "carlisle" },
  { name: "Eden", slug: "eden", county: "Cumbria", region: "North West", tier: "tier3", areas: ["Penrith", "Appleby", "Alston"], character: "a rural Cumbria district covering the Eden Valley", nearestCity: "carlisle" },
  { name: "South Lakeland", slug: "south-lakeland", county: "Cumbria", region: "North West", tier: "tier3", areas: ["Kendal", "Windermere", "Ulverston"], character: "a Lake District tourism and commuter district", nearestCity: "manchester" },
  { name: "Allerdale", slug: "allerdale", county: "Cumbria", region: "North West", tier: "tier3", areas: ["Workington", "Cockermouth", "Keswick"], character: "a west Cumbria district covering Lake District towns", nearestCity: "carlisle" },
  { name: "Barrow-in-Furness", slug: "barrow-in-furness", county: "Cumbria", region: "North West", tier: "tier3", areas: ["Barrow-in-Furness", "Dalton-in-Furness"], character: "a south Cumbria shipbuilding town district", nearestCity: "manchester" },
  { name: "Knowsley", slug: "knowsley", county: "Merseyside", region: "North West", tier: "tier3", areas: ["Kirkby", "Huyton", "Prescot"], character: "a Merseyside borough adjacent to Liverpool", nearestCity: "liverpool" },
  { name: "St Helens", slug: "st-helens", county: "Merseyside", region: "North West", tier: "tier3", areas: ["St Helens", "Newton-le-Willows", "Rainford"], character: "a Merseyside post-industrial borough between Liverpool and Manchester", nearestCity: "liverpool" },
  { name: "Sefton", slug: "sefton", county: "Merseyside", region: "North West", tier: "tier3", areas: ["Southport", "Bootle", "Crosby", "Formby"], character: "a Merseyside borough covering coastal Southport and Bootle", nearestCity: "liverpool" },
  { name: "Wirral", slug: "wirral", county: "Merseyside", region: "North West", tier: "tier3", areas: ["Birkenhead", "Wallasey", "Bebington", "Heswall"], character: "a Wirral peninsula borough across the Mersey from Liverpool", nearestCity: "liverpool" },
  { name: "Bury", slug: "bury", county: "Greater Manchester", region: "North West", tier: "tier3", areas: ["Bury", "Radcliffe", "Whitefield", "Prestwich"], character: "a Greater Manchester borough north of the city", nearestCity: "manchester" },
  { name: "Salford", slug: "salford", county: "Greater Manchester", region: "North West", tier: "tier3", areas: ["Salford", "Eccles", "Swinton", "Walkden"], character: "a Greater Manchester city covering Salford Quays MediaCity", nearestCity: "manchester" },
  { name: "Tameside", slug: "tameside", county: "Greater Manchester", region: "North West", tier: "tier3", areas: ["Ashton-under-Lyne", "Hyde", "Stalybridge"], character: "an east Greater Manchester borough", nearestCity: "manchester" },
  { name: "Trafford", slug: "trafford", county: "Greater Manchester", region: "North West", tier: "tier3", areas: ["Altrincham", "Sale", "Stretford", "Urmston"], character: "an affluent Greater Manchester borough covering Altrincham and Old Trafford", nearestCity: "manchester" },

  // NORTH EAST
  { name: "County Durham", slug: "county-durham", county: "County Durham", region: "North East", tier: "tier3", areas: ["Durham", "Bishop Auckland", "Consett", "Chester-le-Street"], character: "a County Durham unitary authority covering the historic county", nearestCity: "newcastle" },
  { name: "Northumberland", slug: "northumberland", county: "Northumberland", region: "North East", tier: "tier3", areas: ["Alnwick", "Berwick-upon-Tweed", "Morpeth", "Hexham"], character: "England's northernmost county, a unitary authority with rural and coastal areas", nearestCity: "newcastle" },
  { name: "South Tyneside", slug: "south-tyneside", county: "Tyne and Wear", region: "North East", tier: "tier3", areas: ["South Shields", "Jarrow", "Hebburn"], character: "a Tyne and Wear borough on the south bank of the Tyne", nearestCity: "newcastle" },
  { name: "North Tyneside", slug: "north-tyneside", county: "Tyne and Wear", region: "North East", tier: "tier3", areas: ["North Shields", "Wallsend", "Whitley Bay"], character: "a Tyne and Wear borough on the north bank of the Tyne", nearestCity: "newcastle" },
  { name: "Stockton-on-Tees", slug: "stockton-on-tees", county: "Teesside", region: "North East", tier: "tier3", areas: ["Stockton-on-Tees", "Billingham", "Ingleby Barwick"], character: "a Teesside unitary authority", nearestCity: "newcastle" },
  { name: "Hartlepool", slug: "hartlepool", county: "County Durham", region: "North East", tier: "tier3", areas: ["Hartlepool", "Seaton Carew"], character: "a Teesside coastal unitary authority with maritime heritage", nearestCity: "newcastle" },
  { name: "Redcar and Cleveland", slug: "redcar-and-cleveland", county: "Yorkshire", region: "North East", tier: "tier3", areas: ["Redcar", "Guisborough", "Saltburn"], character: "a Tees-side unitary authority covering coastal towns", nearestCity: "newcastle" },

  // SCOTLAND
  { name: "Clackmannanshire", slug: "clackmannanshire", county: "Clackmannanshire", region: "Scotland", tier: "tier3", areas: ["Alloa", "Tillicoultry", "Alva"], character: "Scotland's smallest mainland council area", nearestCity: "edinburgh" },
  { name: "East Ayrshire", slug: "east-ayrshire", county: "Ayrshire", region: "Scotland", tier: "tier3", areas: ["Kilmarnock", "Cumnock", "Stewarton"], character: "an Ayrshire council area covering Kilmarnock and rural areas", nearestCity: "glasgow" },
  { name: "North Ayrshire", slug: "north-ayrshire", county: "Ayrshire", region: "Scotland", tier: "tier3", areas: ["Irvine", "Kilwinning", "Saltcoats", "Largs"], character: "a north Ayrshire coastal council area", nearestCity: "glasgow" },
  { name: "South Ayrshire", slug: "south-ayrshire", county: "Ayrshire", region: "Scotland", tier: "tier3", areas: ["Ayr", "Troon", "Prestwick", "Girvan"], character: "a south Ayrshire coastal council area", nearestCity: "glasgow" },
  { name: "East Dunbartonshire", slug: "east-dunbartonshire", county: "Dunbartonshire", region: "Scotland", tier: "tier3", areas: ["Bearsden", "Milngavie", "Kirkintilloch"], character: "an affluent Glasgow commuter council area", nearestCity: "glasgow" },
  { name: "West Dunbartonshire", slug: "west-dunbartonshire", county: "Dunbartonshire", region: "Scotland", tier: "tier3", areas: ["Dumbarton", "Clydebank", "Alexandria"], character: "a Clydeside council area west of Glasgow", nearestCity: "glasgow" },
  { name: "East Lothian", slug: "east-lothian", county: "Lothian", region: "Scotland", tier: "tier3", areas: ["Musselburgh", "Haddington", "North Berwick"], character: "an affluent Edinburgh commuter and coastal council area", nearestCity: "edinburgh" },
  { name: "Midlothian", slug: "midlothian", county: "Lothian", region: "Scotland", tier: "tier3", areas: ["Dalkeith", "Penicuik", "Loanhead"], character: "a south-of-Edinburgh commuter council area", nearestCity: "edinburgh" },
  { name: "West Lothian", slug: "west-lothian", county: "Lothian", region: "Scotland", tier: "tier3", areas: ["Livingston", "Bathgate", "Linlithgow", "Broxburn"], character: "a council area between Edinburgh and Glasgow", nearestCity: "edinburgh" },
  { name: "Fife", slug: "fife", county: "Fife", region: "Scotland", tier: "tier3", areas: ["Dunfermline", "Kirkcaldy", "Glenrothes", "St Andrews"], character: "a large Scottish council area covering historic kingdom of Fife", nearestCity: "edinburgh" },
  { name: "Angus", slug: "angus", county: "Angus", region: "Scotland", tier: "tier3", areas: ["Arbroath", "Forfar", "Montrose", "Brechin"], character: "an east Scotland coastal and rural council area", nearestCity: "dundee" },
  { name: "Perth and Kinross", slug: "perth-and-kinross", county: "Perthshire", region: "Scotland", tier: "tier3", areas: ["Perth", "Kinross", "Crieff", "Pitlochry"], character: "a central Scotland council area covering historic Perthshire", nearestCity: "edinburgh" },
  { name: "Moray", slug: "moray", county: "Moray", region: "Scotland", tier: "tier3", areas: ["Elgin", "Forres", "Keith", "Buckie"], character: "a north-east Scotland council area on the Moray Firth", nearestCity: "aberdeen" },
  { name: "Dumfries and Galloway", slug: "dumfries-and-galloway", county: "Dumfries and Galloway", region: "Scotland", tier: "tier3", areas: ["Dumfries", "Stranraer", "Castle Douglas"], character: "a south-west Scotland rural council area", nearestCity: "glasgow" },
  { name: "Scottish Borders", slug: "scottish-borders", county: "Scottish Borders", region: "Scotland", tier: "tier3", areas: ["Galashiels", "Hawick", "Jedburgh", "Peebles"], character: "a south-east Scotland rural council area", nearestCity: "edinburgh" },
  { name: "North Lanarkshire", slug: "north-lanarkshire", county: "Lanarkshire", region: "Scotland", tier: "tier3", areas: ["Motherwell", "Coatbridge", "Airdrie", "Cumbernauld"], character: "a council area east of Glasgow", nearestCity: "glasgow" },
  { name: "South Lanarkshire", slug: "south-lanarkshire", county: "Lanarkshire", region: "Scotland", tier: "tier3", areas: ["Hamilton", "East Kilbride", "Rutherglen", "Cambuslang"], character: "a council area south-east of Glasgow", nearestCity: "glasgow" },
  { name: "Argyll and Bute", slug: "argyll-and-bute", county: "Argyll", region: "Scotland", tier: "tier3", areas: ["Oban", "Dunoon", "Lochgilphead", "Campbeltown"], character: "a west Highland council area covering rural and island areas", nearestCity: "glasgow" },
  { name: "Highland", slug: "highland", county: "Highland", region: "Scotland", tier: "tier3", areas: ["Fort William", "Thurso", "Wick", "Nairn"], character: "the largest UK council area, covering most of the Scottish Highlands", nearestCity: "inverness" },
  { name: "Falkirk", slug: "falkirk", county: "Falkirk", region: "Scotland", tier: "tier3", areas: ["Falkirk", "Grangemouth", "Bo'ness"], character: "a central Scotland council area between Edinburgh and Glasgow", nearestCity: "edinburgh" },
  { name: "Renfrewshire", slug: "renfrewshire", county: "Renfrewshire", region: "Scotland", tier: "tier3", areas: ["Renfrew", "Johnstone", "Erskine"], character: "a west of Scotland council area covering Glasgow Airport", nearestCity: "glasgow" },
  { name: "East Renfrewshire", slug: "east-renfrewshire", county: "Renfrewshire", region: "Scotland", tier: "tier3", areas: ["Newton Mearns", "Barrhead", "Clarkston"], character: "an affluent Glasgow commuter council area", nearestCity: "glasgow" },
  { name: "Inverclyde", slug: "inverclyde", county: "Renfrewshire", region: "Scotland", tier: "tier3", areas: ["Greenock", "Port Glasgow", "Gourock"], character: "a Clydeside council area covering Greenock", nearestCity: "glasgow" },
  { name: "Orkney Islands", slug: "orkney-islands", county: "Orkney", region: "Scotland", tier: "tier3", areas: ["Kirkwall", "Stromness"], character: "a north Scotland island council area", nearestCity: "aberdeen" },
  { name: "Shetland Islands", slug: "shetland-islands", county: "Shetland", region: "Scotland", tier: "tier3", areas: ["Lerwick", "Scalloway"], character: "the UK's most northerly island council area", nearestCity: "aberdeen" },
  { name: "Western Isles", slug: "western-isles", county: "Western Isles", region: "Scotland", tier: "tier3", areas: ["Stornoway", "Lochmaddy", "Tarbert"], character: "the Outer Hebrides island council area", nearestCity: "aberdeen" },

  // WALES
  { name: "Blaenau Gwent", slug: "blaenau-gwent", county: "Gwent", region: "Wales", tier: "tier3", areas: ["Ebbw Vale", "Brynmawr", "Tredegar"], character: "a south Wales valleys district", nearestCity: "cardiff" },
  { name: "Bridgend", slug: "bridgend", county: "Bridgend", region: "Wales", tier: "tier3", areas: ["Bridgend", "Maesteg", "Porthcawl"], character: "a south Wales valleys and coastal district", nearestCity: "cardiff" },
  { name: "Caerphilly", slug: "caerphilly", county: "Caerphilly", region: "Wales", tier: "tier3", areas: ["Caerphilly", "Bargoed", "Blackwood"], character: "a south Wales valleys district", nearestCity: "cardiff" },
  { name: "Carmarthenshire", slug: "carmarthenshire", county: "Carmarthenshire", region: "Wales", tier: "tier3", areas: ["Carmarthen", "Llanelli", "Ammanford"], character: "a west Wales rural district", nearestCity: "swansea" },
  { name: "Ceredigion", slug: "ceredigion", county: "Ceredigion", region: "Wales", tier: "tier3", areas: ["Aberystwyth", "Cardigan", "Lampeter"], character: "a mid-Wales coastal and university district", nearestCity: "swansea" },
  { name: "Conwy", slug: "conwy", county: "Conwy", region: "Wales", tier: "tier3", areas: ["Llandudno", "Conwy", "Colwyn Bay", "Abergele"], character: "a North Wales coastal tourism district", nearestCity: "liverpool" },
  { name: "Denbighshire", slug: "denbighshire", county: "Denbighshire", region: "Wales", tier: "tier3", areas: ["Rhyl", "Prestatyn", "Ruthin", "Denbigh"], character: "a North Wales coastal and rural district", nearestCity: "liverpool" },
  { name: "Flintshire", slug: "flintshire", county: "Flintshire", region: "Wales", tier: "tier3", areas: ["Flint", "Mold", "Buckley", "Connah's Quay"], character: "a North Wales border district", nearestCity: "liverpool" },
  { name: "Gwynedd", slug: "gwynedd", county: "Gwynedd", region: "Wales", tier: "tier3", areas: ["Bangor", "Caernarfon", "Pwllheli"], character: "a North Wales rural district covering Snowdonia", nearestCity: "liverpool" },
  { name: "Isle of Anglesey", slug: "isle-of-anglesey", county: "Anglesey", region: "Wales", tier: "tier3", areas: ["Llangefni", "Holyhead", "Beaumaris"], character: "a North Wales island district with ferry port to Ireland", nearestCity: "liverpool" },
  { name: "Monmouthshire", slug: "monmouthshire", county: "Monmouthshire", region: "Wales", tier: "tier3", areas: ["Abergavenny", "Monmouth", "Chepstow"], character: "a south-east Wales rural and market town district", nearestCity: "cardiff" },
  { name: "Neath Port Talbot", slug: "neath-port-talbot", county: "Neath Port Talbot", region: "Wales", tier: "tier3", areas: ["Neath", "Port Talbot", "Pontardawe"], character: "a south Wales valleys and coastal district with steelworks heritage", nearestCity: "swansea" },
  { name: "Pembrokeshire", slug: "pembrokeshire", county: "Pembrokeshire", region: "Wales", tier: "tier3", areas: ["Haverfordwest", "Pembroke", "Tenby"], character: "a south-west Wales coastal tourism district", nearestCity: "swansea" },
  { name: "Powys", slug: "powys", county: "Powys", region: "Wales", tier: "tier3", areas: ["Newtown", "Welshpool", "Brecon"], character: "the largest Welsh district by area, covering rural mid-Wales", nearestCity: "birmingham" },
  { name: "Rhondda Cynon Taf", slug: "rhondda-cynon-taf", county: "Mid Glamorgan", region: "Wales", tier: "tier3", areas: ["Pontypridd", "Aberdare", "Tonypandy"], character: "a south Wales valleys district covering the Rhondda valleys", nearestCity: "cardiff" },
  { name: "Torfaen", slug: "torfaen", county: "Torfaen", region: "Wales", tier: "tier3", areas: ["Pontypool", "Cwmbran", "Blaenavon"], character: "a south Wales valleys district", nearestCity: "cardiff" },
  { name: "Vale of Glamorgan", slug: "vale-of-glamorgan", county: "Vale of Glamorgan", region: "Wales", tier: "tier3", areas: ["Barry", "Penarth", "Cowbridge"], character: "an affluent south Wales coastal district near Cardiff", nearestCity: "cardiff" },

  // NORTHERN IRELAND
  { name: "Antrim and Newtownabbey", slug: "antrim-and-newtownabbey", county: "County Antrim", region: "Northern Ireland", tier: "tier3", areas: ["Antrim", "Newtownabbey", "Ballyclare"], character: "a Northern Ireland district north of Belfast", nearestCity: "belfast" },
  { name: "Ards and North Down", slug: "ards-and-north-down", county: "County Down", region: "Northern Ireland", tier: "tier3", areas: ["Bangor", "Newtownards", "Donaghadee"], character: "a Northern Ireland district east of Belfast", nearestCity: "belfast" },
  { name: "Armagh Banbridge Craigavon", slug: "armagh-banbridge-craigavon", county: "County Armagh", region: "Northern Ireland", tier: "tier3", areas: ["Armagh", "Banbridge", "Craigavon", "Lurgan"], character: "a south Northern Ireland district covering Armagh", nearestCity: "belfast" },
  { name: "Causeway Coast and Glens", slug: "causeway-coast-and-glens", county: "County Antrim", region: "Northern Ireland", tier: "tier3", areas: ["Coleraine", "Ballymoney", "Ballycastle"], character: "a north Northern Ireland district covering the Giant's Causeway", nearestCity: "belfast" },
  { name: "Derry City and Strabane", slug: "derry-city-and-strabane", county: "County Londonderry", region: "Northern Ireland", tier: "tier3", areas: ["Derry", "Strabane"], character: "a north-west Northern Ireland district covering Derry city", nearestCity: "belfast" },
  { name: "Fermanagh and Omagh", slug: "fermanagh-and-omagh", county: "County Fermanagh", region: "Northern Ireland", tier: "tier3", areas: ["Enniskillen", "Omagh", "Lisnaskea"], character: "a west Northern Ireland district covering rural Fermanagh and Omagh", nearestCity: "belfast" },
  { name: "Lisburn and Castlereagh", slug: "lisburn-and-castlereagh", county: "County Antrim", region: "Northern Ireland", tier: "tier3", areas: ["Lisburn", "Castlereagh", "Carryduff"], character: "a Northern Ireland district south-west of Belfast", nearestCity: "belfast" },
  { name: "Mid and East Antrim", slug: "mid-and-east-antrim", county: "County Antrim", region: "Northern Ireland", tier: "tier3", areas: ["Ballymena", "Larne", "Carrickfergus"], character: "a Northern Ireland district covering Ballymena and Larne", nearestCity: "belfast" },
  { name: "Mid Ulster", slug: "mid-ulster", county: "County Tyrone", region: "Northern Ireland", tier: "tier3", areas: ["Cookstown", "Magherafelt", "Dungannon"], character: "a central Northern Ireland district", nearestCity: "belfast" },
  { name: "Newry Mourne and Down", slug: "newry-mourne-and-down", county: "County Down", region: "Northern Ireland", tier: "tier3", areas: ["Newry", "Downpatrick", "Newcastle"], character: "a south-east Northern Ireland district", nearestCity: "belfast" },
];

// ─────────────────────────────────────────────────────────────────
// HELPER FUNCTIONS
// ─────────────────────────────────────────────────────────────────
export const tier1Slugs = locations.filter((l) => l.tier === "tier1").map((l) => l.slug);
export const tier2Slugs = locations.filter((l) => l.tier === "tier2").map((l) => l.slug);
export const tier3Slugs = locations.filter((l) => l.tier === "tier3").map((l) => l.slug);
export const allLocationSlugs = locations.map((l) => l.slug);

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

export function getNearbyLocations(loc: Location, count = 4): Location[] {
  // Same county first, then same region
  const sameCounty = locations
    .filter((l) => l.county === loc.county && l.slug !== loc.slug)
    .slice(0, count);
  if (sameCounty.length >= count) return sameCounty;

  const sameRegion = locations
    .filter(
      (l) =>
        l.region === loc.region &&
        l.slug !== loc.slug &&
        !sameCounty.find((s) => s.slug === l.slug)
    )
    .slice(0, count - sameCounty.length);

  return [...sameCounty, ...sameRegion];
}

// Industry slugs for combo pages
export const comboIndustrySlugs = [
  "dental-marketing",
  "salon-marketing",
  "contractor-marketing",
  "estate-agent-marketing",
] as const;

export type ComboIndustrySlug = (typeof comboIndustrySlugs)[number];

export function getIndustryByComboSlug(comboSlug: ComboIndustrySlug): Industry {
  const map: Record<ComboIndustrySlug, string> = {
    "dental-marketing": "dental-practices",
    "salon-marketing": "hair-salons",
    "contractor-marketing": "contractors",
    "estate-agent-marketing": "estate-agents",
  };
  const slug = map[comboSlug];
  const industry = getIndustryBySlug(slug);
  if (!industry) throw new Error(`No industry for combo slug ${comboSlug}`);
  return industry;
}

export function fillIntroTemplate(template: string, loc: Location): string {
  return template
    .replace(/\{city\}/g, loc.name)
    .replace(/\{character\}/g, loc.character)
    .replace(/\{county\}/g, loc.county);
}

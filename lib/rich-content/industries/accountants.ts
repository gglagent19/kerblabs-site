import type { Industry } from "@/lib/seo-data";

export const industry: Industry = {
  slug: "accountants",
  name: "Accountants",
  industrySingular: "accountant",
  industryPlural: "accountants and accounting firms",
  emoji: "📊",
  pageTitle: "AI Marketing for UK Accountants & Accounting Firms | Kerblabs",
  metaDescription:
    "Kerblabs helps UK independent accountants win SME clients, defend against TaxAssist and Crunch, automate MTD ITSA campaigns, and qualify IR35/PSC leads. From £347/mo.",
  h1: "AI Growth Systems for",
  h1Highlight: "UK Accountants & Practices.",
  subhead:
    "Independent UK accountants are running into the toughest combination of pressures the profession has seen in a generation: TaxAssist Accountants now operates 400+ high-street offices and is bidding aggressively on every 'accountant near me' search; Crunch, Mazuma, QuickBooks Live and the Xero Advisor Directory are stripping the £40-£200/month bookkeeping market online; software vendors push your clients into self-serve features that erode advisory margin; and MTD for Income Tax Self Assessment hits self-employed and landlords above £50,000 in April 2026, creating a one-shot client acquisition window most practices aren't tooled for. Meanwhile your phones go to voicemail when you're in a tax review, your front desk can't qualify a contractor IR35 enquiry from a Self-Assessment one, and Google Ads CPCs of £8-£25 punish anyone running a generic city campaign. Kerblabs gives independent accounting practices the AI receptionist, MTD ITSA campaign engine, IR35/PSC lead qualification, review velocity and Xero/QuickBooks/Sage/FreeAgent integrations to grow inside the compliance constraints HMRC, the ICAEW Practice Assurance regime and AML supervision actually allow.",
  stats: [
    { value: "90,000+", label: "ICAEW chartered accountants in the UK and Ireland" },
    { value: "400+", label: "TaxAssist Accountants high-street offices across the UK" },
    { value: "April 2026", label: "MTD for Income Tax Self Assessment goes live (>£50k self-employed/landlords)" },
  ],
  problems: [
    {
      title: "TaxAssist, Crunch and Mazuma are eating the small-client end",
      body: "TaxAssist Accountants now runs 400+ UK offices on a franchise model with shared marketing infrastructure, central paid-search budget and standardised lead funnels. Crunch and Mazuma have built online-only brands that intercept Self-Assessment, contractor and small Ltd company searches before independents even appear. Without proactive review velocity, GBP optimisation and direct-acquisition funnels, independent practices lose the £40-£200/month client base year on year.",
    },
    {
      title: "Cloud accounting software vendors are commoditising bookkeeping",
      body: "Xero (around 50% UK market share), QuickBooks Online (around 30%), Sage Business Cloud, FreeAgent (free with NatWest business banking) and the Xero Advisor Directory have rewired client expectations: bookkeeping is increasingly a £29-£59/month software bill, and the practice that loses bookkeeping loses the relationship. The only durable pricing power is in advisory, tax planning, MTD compliance and named-partner trust — and that requires marketing, not just software.",
    },
    {
      title: "MTD ITSA April 2026 is a one-shot acquisition window most firms aren't tooled for",
      body: "Making Tax Digital for Income Tax Self Assessment goes mandatory for self-employed and landlords with income above £50,000 from April 2026, dropping to £30,000 from April 2027. Every affected client will either choose a new accountant in 2025-2026 or have their existing accountant drop them. Practices that run automated MTD ITSA assessment campaigns now will pick up 50-200 net new clients; practices that don't will quietly lose them to TaxAssist and Crunch.",
    },
    {
      title: "Missed calls during tax season are six-figure revenue losses",
      body: "Between mid-January Self-Assessment crunch, March year-end CT600 work, July payment-on-account and quarterly VAT cycles, your front desk runs in permanent firefighting mode. New-client enquiries for £1,500-£8,000 annual fees go to voicemail, and 76% of UK callers won't leave one. AI receptionist + missed-call text-back routinely recovers £30k-£120k of lost annual fees in a 5-15 partner practice.",
    },
    {
      title: "IR35, PSC and contractor work needs different qualification than Self-Assessment",
      body: "Off-payroll IR35 reform from April 2021 created a wave of contractor demand for status reviews, deemed-employment payroll and Ltd-to-PAYE transitions. But a contractor IR35 enquiry has wildly different fee dynamics (£300-£1,500 status review, £150-£300/month ongoing) than a sole-trader Self-Assessment. Without lead routing that surfaces IR35/PSC vs SA vs Ltd vs payroll vs VAT vs MTD ITSA at first contact, your partners burn hours on dead leads.",
    },
  ],
  recommendedPlan: "Autopilot",
  recommendedPrice: 347,
  roiNote:
    "An average UK SME client is worth £1,500-£4,000/year in recurring fees, a Ltd company with payroll and VAT runs £2,500-£8,000/year, and a property-portfolio MTD ITSA client lands at £1,200-£3,500/year on a sticky 5-10 year relationship. Recovering one new client a month covers Kerblabs fees four times over. Most practices recover 3-8 net new clients per month inside 90 days.",
  faqs: [
    {
      q: "How does Kerblabs handle inbound calls about tax advice without the AI giving regulated advice?",
      a: "The AI receptionist is explicitly configured never to give tax, accounting or financial advice — that's both an AML/HMRC supervision issue and an ICAEW Practice Assurance one. If a caller asks 'should I incorporate?', 'am I inside IR35?', 'what can I claim against my rental?' or any other regulated question, the AI's response is a structured deflection: 'a qualified accountant will need to look at that — let me get you booked in for a free initial consultation' followed by booking the call into the right partner's calendar based on enquiry type (Self-Assessment, Ltd company, IR35/PSC, MTD ITSA, payroll, VAT, property portfolio, R&D, EIS/SEIS). Every call is recorded, transcribed and dropped into your CRM with a structured intake summary so the partner walks into the meeting with full context. This keeps you compliant with the ICAEW Code of Ethics, the ACCA Rulebook, the AAT Code of Professional Ethics and the HMRC AML supervision regime — the AI is a routing and qualification layer, not an adviser.",
    },
    {
      q: "Does Kerblabs integrate with Xero, QuickBooks, Sage, FreeAgent, IRIS, CCH, TaxCalc and Capium?",
      a: "Yes — we integrate with every major UK practice software stack. Xero (we sync new client signups to your Xero Practice Manager and Xero HQ for client allocation), QuickBooks Online (Intuit ProAdvisor portal sync and Tax Pro Center workflows), Sage Business Cloud and Sage 50, FreeAgent (especially relevant for NatWest-funnel contractor clients), IRIS (the dominant compliance suite for mid-size UK practices), CCH Central / CCH OneClick (Wolters Kluwer), TaxCalc (single-partner and small-firm favourite), Capium, BTCSoftware and Digita. New-client enquiries from your Kerblabs funnel land in your existing client onboarding workflow, MTD VAT and forthcoming MTD ITSA campaigns pull from your client database to auto-segment by income band and source of income, and Self-Assessment season reminders fire from compliance-software deadline data rather than manual lists. We do not replace your compliance stack — we sit alongside it.",
    },
    {
      q: "Can independent practices realistically compete with TaxAssist Accountants, Crunch, Mazuma and the mid-tier (RSM, BDO, Grant Thornton, Mazars)?",
      a: "Yes, but only on the right battlegrounds. TaxAssist wins high-street footfall and brand-keyword paid search; Crunch and Mazuma win price-led contractor and Self-Assessment search at the £40-£100/month price point; mid-tier (RSM, BDO, Grant Thornton, Forvis Mazars, Crowe, Saffery, Haines Watts, MHA, Azets, AAB UK) wins owner-managed business above £2M turnover and audit-required clients. Independents win in the £100-£500k turnover SME segment, IR35/PSC contractors above the Crunch price point, property portfolios needing MTD ITSA from April 2026, and any client wanting a named accountant rather than a service desk. The three durable independent advantages are: review velocity in a single town or postcode (a 200-review independent dominates 'accountant near me' over a corporate office with 30 reviews); response speed (AI receptionist closes leads in 90 seconds while TaxAssist routes through a national call centre); and named-partner trust (which corporates structurally cannot manufacture). Kerblabs builds all three.",
    },
    {
      q: "How do you run MTD ITSA campaigns and qualify IR35/PSC leads without breaching AML or HMRC supervision rules?",
      a: "MTD ITSA campaigns are the single biggest acquisition opportunity in UK accounting between now and April 2027, and they need three layers. First, an MTD ITSA assessment funnel: a landing page with an income-band qualifier (under £30k / £30-50k / £50-150k / above £150k), source-of-income tags (self-employed / landlord / both), and a current-software question (Xero / QuickBooks / FreeAgent / spreadsheets / paper). Second, segmented email and SMS sequences educating each band on what changes April 2026 vs April 2027 vs April 2028, with a free 30-minute MTD readiness review as the call-to-action. Third, automated lead routing into your CRM with all data needed for AML client due-diligence to start cleanly — we do not collect or process anything that breaches your supervisor's record-keeping rules (whether that's ICAEW, ACCA, AAT, CIMA or HMRC direct supervision), and all marketing data flows are GDPR Article 6(1)(f) legitimate-interest with documented LIA. For IR35/PSC the same model applies, with status-review intake forms structured to your engagement letter requirements.",
    },
    {
      q: "Are your campaigns compliant with ICAEW, ACCA, AAT advertising rules and post-Carillion audit-reform marketing risk?",
      a: "Yes. Every piece of creative, landing page and ad copy is reviewed against the ICAEW Code of Ethics fundamental principles (especially professional behaviour and integrity), the ACCA Rulebook on advertising and solicitation, the AAT Code of Professional Ethics, the CIMA Code, and the CIOT/ATT Professional Rules and Practice Guidelines for tax-specific work. Post-Carillion and post-Patisserie Valerie audit reform has tightened scrutiny on any 'audit' or 'assurance' marketing language — we never use 'audit' unless the firm holds Audit Registration with a Recognised Supervisory Body, never use 'specialist' without a defensible basis, and never make outcome-guarantee claims on tax savings or HMRC enquiries. Reviews are sourced through compliant channels (Google, Trustpilot, VouchedFor for tax advisers) and never incentivised in a way that breaches your supervisor's testimonial guidance. AML-supervised firms get an additional review layer ensuring no marketing data flow conflicts with the firm's MLR 2017 policies.",
    },
  ],
  comboIntroTemplate:
    "Independent accountants in {city} face a market reshaped by TaxAssist's high-street rollout, online disruptors (Crunch, Mazuma, QuickBooks Live), the cloud-accounting transition into Xero/QuickBooks/Sage/FreeAgent, and the looming MTD for Income Tax Self Assessment cliff in April 2026. {city} is {character}, and that means independent practices here compete on a postcode-by-postcode basis for SME bookkeeping, year-end accounts, VAT, payroll, Self-Assessment and corporation tax work. Most {city} business owners and contractors now find their accountant through Google search rather than referral — 'accountant near me' attracts 110,000+ monthly UK searches, with CPCs running £8-£20 and the local pack dominated by whoever has highest review velocity in a single postcode. Practices that miss calls during tax season, can't qualify IR35 vs Self-Assessment vs MTD ITSA leads at first contact, and run no MTD ITSA acquisition funnel will quietly hand 30-100 clients to TaxAssist and Crunch over the next 24 months. Kerblabs gives {city} independent accountants the AI receptionist, MTD ITSA campaign engine, review velocity and Xero/QuickBooks/Sage/FreeAgent/IRIS integrations to defend their client base and grow.",
};

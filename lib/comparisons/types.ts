// Shared types for /vs/[slug] comparison pages.
// Each comparison is a typed object describing Kerblabs vs a competitor or
// alternative, used to render a single SEO-optimised buyer-stage page.

export interface CompetitorRef {
  /** Display name, e.g. "Treatwell" */
  name: string;
  /** Legal/Organization @id for JSON-LD (their canonical site URL + "#organization") */
  url: string;
  /** Short description used in JSON-LD and intro section */
  description: string;
  /** What the competitor primarily is (used in "what each does" section) */
  whatItIs: string;
  /** Pricing line as we KNOW it — vague when unknown; never fabricate */
  pricingNote: string;
  /** Optional sameAs identifier (parent company, Wikipedia, etc.) */
  sameAs?: string[];
}

export interface FeatureRow {
  /** Feature / capability being compared */
  feature: string;
  /** What Kerblabs offers for this row */
  kerblabs: string;
  /** What the competitor offers for this row */
  competitor: string;
}

export interface ComparisonFaq {
  q: string;
  a: string;
}

export interface Comparison {
  /** URL slug — final segment of /vs/<slug> */
  slug: string;
  /** Used in the H1 and SEO title — "Treatwell", "Checkatrade", "DIY GBP Management" */
  competitorLabel: string;
  /** Industry keyword phrase used in title, e.g. "salon", "trade", "dental practice" */
  industryKeyword: string;
  /** SEO <title> — under 65 chars where possible */
  seoTitle: string;
  /** Meta description — 150-160 chars */
  metaDescription: string;
  /** Eyebrow shown above the H1 */
  eyebrow: string;
  /** H1 plain text */
  h1: string;
  /** H1 highlight portion wrapped in grad-lime */
  h1Highlight: string;
  /** One-paragraph hero subhead */
  subhead: string;
  /** Index-page card teaser (1 short sentence) */
  indexTeaser: string;
  /** Schema.org Organization-like ref for the competitor (no Review/AggregateRating) */
  competitor: CompetitorRef;
  /** "What each does" — two short paragraphs */
  whatEachDoes: {
    kerblabs: string;
    competitor: string;
  };
  /** Pricing comparison — factual prose, NOT a fabricated table */
  pricingComparison: {
    kerblabs: string;
    competitor: string;
  };
  /** Feature matrix rows */
  featureMatrix: FeatureRow[];
  /** Who each is best for — two short paragraphs */
  bestFor: {
    kerblabs: string;
    competitor: string;
  };
  /** Reasons customers choose Kerblabs — bullet items */
  whyKerblabs: { title: string; body: string }[];
  /** FAQ items (used for FAQPage schema) */
  faqs: ComparisonFaq[];
  /** Final CTA block subtitle */
  ctaSubtitle: string;
}

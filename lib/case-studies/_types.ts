// Shared types for Kerblabs case studies.
//
// Honesty rule: every case study referencing real metrics must carry
// `anonymized: true` if the client's name has been changed. We never
// publish identifying details (real practice name, founder name,
// exact address) without explicit written consent.

export type Country = "GB" | "US";

export interface CaseStudyResult {
  /** Short label, e.g. "GBP discovery bookings" */
  metric: string;
  /** Value before engagement (string so we can include units) */
  before: string;
  /** Value after engagement */
  after: string;
  /** Time window over which the change was measured, e.g. "90 days" */
  period: string;
  /** Optional secondary explanation for the row */
  note?: string;
}

export interface CaseStudyQuote {
  text: string;
  attribution: string;
  /** Role of the person quoted, e.g. "Practice Manager" */
  role?: string;
}

export interface CaseStudy {
  /** URL slug, e.g. "dental-reading" */
  slug: string;

  /** Either the real client name, or a fabricated placeholder if anonymized. */
  clientName: string;

  /** If true, the page must show a visible "name changed" disclaimer. */
  anonymized?: boolean;

  /** Long-form disclaimer text shown on the page when anonymized. */
  anonymizedNotice?: string;

  /** Industry display name, e.g. "Dental practice" */
  industry: string;

  /** Emoji shown on the index card */
  industryEmoji: string;

  /** City where the client trades, e.g. "Reading" */
  city: string;

  /** ISO country code */
  country: Country;

  /** Short summary used on the index card (1-2 sentences). */
  summary: string;

  /** Up to two headline numbers shown on the index card. */
  headlineMetrics: { value: string; label: string }[];

  /** The problem the client came to us with. */
  problem: string;

  /** What Kerblabs actually did. Each bullet is one tactical step. */
  solution: {
    headline: string;
    body: string;
  }[];

  /** Before/after table data. */
  results: CaseStudyResult[];

  /** Optional client quote. */
  quote?: CaseStudyQuote;

  /** ISO date string, e.g. "2025-09-30" */
  dateCompleted: string;

  /** Plan the client ran (Spark, Momentum, Autopilot, Full Engine). */
  plan?: string;

  /** Services delivered. Used for cross-links and schema keywords. */
  servicesUsed: string[];

  /** SEO meta description (max 155 chars). */
  metaDescription: string;
}

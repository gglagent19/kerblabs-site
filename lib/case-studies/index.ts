import type { CaseStudy } from "./_types";
import { dentalReading } from "./dental-reading";
import { medSpaMiami } from "./med-spa-miami";
import { salonBristol } from "./salon-bristol";

export type { CaseStudy, CaseStudyResult, CaseStudyQuote, Country } from "./_types";

// Ordered by recency. Update when new case studies are added.
export const caseStudies: CaseStudy[] = [
  medSpaMiami,
  salonBristol,
  dentalReading,
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

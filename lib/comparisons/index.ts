// Registry of all /vs/[slug] comparison pages.
// One typed object per comparison — drives the dynamic route + index page.

import type { Comparison } from "./types";
import { comparison as treatwell } from "./treatwell";
import { comparison as checkatrade } from "./checkatrade";
import { comparison as diyGbpManagement } from "./diy-gbp-management";

export type { Comparison } from "./types";

export const comparisons: Comparison[] = [
  treatwell,
  checkatrade,
  diyGbpManagement,
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export const comparisonSlugs: string[] = comparisons.map((c) => c.slug);

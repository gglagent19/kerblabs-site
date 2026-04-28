// Types for rich, genuinely unique per-page content.
// Replaces the templated 88-92%-identical body text that triggered the
// Scaled Content Abuse risk in the SEO audit.

export interface RichCityContent {
  // SEO targeting
  primaryKeywords: string[]; // e.g. ["AI marketing agency Manchester", "marketing agency Manchester"]
  secondaryKeywords: string[];

  // Hero override
  heroEyebrow?: string;
  heroH1?: string;
  heroHighlight?: string;
  heroSubhead: string; // 80-120 words, city-specific

  // City profile (300-400 words across paragraphs)
  cityProfile: string[]; // Array of paragraphs

  // Real local stats with sources
  stats: { value: string; label: string; source?: string }[];

  // Named neighborhoods/areas with detailed character
  namedAreas: { name: string; character: string }[];

  // City-specific industry breakdown (one paragraph per industry)
  industries: {
    dental: string;
    salon: string;
    contractor: string;
    estateAgent: string;
  };

  // City-specific FAQs (4-5 unique to this city)
  faqs: { q: string; a: string }[];

  // Optional: local landmarks for E-E-A-T
  localContext?: string;
}

export interface RichComboContent {
  // SEO targeting
  primaryKeywords: string[];
  secondaryKeywords: string[];

  // Hero override
  heroSubhead: string; // 80-120 words combining city + industry context

  // The 250-400 word unique market context paragraph(s)
  marketContext: string[];

  // Industry-specific stats for THIS city
  stats: { value: string; label: string; source?: string }[];

  // Pain points (4) specific to this city's industry market
  painPoints: { title: string; body: string }[];

  // City × industry-specific FAQs (3-4 unique)
  faqs: { q: string; a: string }[];

  // Recommended local strategy / approach
  approach?: string;
}

// Lookup helpers (populated by index files)
export type CityContentMap = Record<string, RichCityContent | undefined>;
export type ComboContentMap = Record<string, RichComboContent | undefined>;
// Combo key format: `${industrySlug}:${citySlug}` e.g. "dental-marketing:manchester"

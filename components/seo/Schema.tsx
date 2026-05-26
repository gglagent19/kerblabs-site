// JSON-LD schema injector for SEO pages.
// Renders a strong Organization + BreadcrumbList by default, plus extra blocks if provided.

import type { Location } from "@/lib/seo-data";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SchemaProps {
  breadcrumbs?: BreadcrumbItem[];
  extra?: object[];
  includeWebsite?: boolean; // homepage only
}

// Build a GeoCoordinates block for a Location, if lat/lng are populated.
// Returns undefined when coords are missing so callers can spread/merge safely.
export function locationGeo(loc: Location):
  | { "@type": "GeoCoordinates"; latitude: number; longitude: number }
  | undefined {
  if (typeof loc.lat !== "number" || typeof loc.lng !== "number") return undefined;
  return {
    "@type": "GeoCoordinates",
    latitude: loc.lat,
    longitude: loc.lng,
  };
}

// Build the `areaServed` Place/City/AdministrativeArea entity for a Location,
// embedding GeoCoordinates when available. Used by combo Service schemas so
// every per-city Service block carries a strong local-intent geo signal.
export function locationAreaServed(loc: Location): {
  "@type": "City" | "AdministrativeArea";
  name: string;
  geo?: { "@type": "GeoCoordinates"; latitude: number; longitude: number };
} {
  const geo = locationGeo(loc);
  const base: {
    "@type": "City" | "AdministrativeArea";
    name: string;
    geo?: { "@type": "GeoCoordinates"; latitude: number; longitude: number };
  } = {
    "@type": loc.tier === "tier1" ? "City" : "AdministrativeArea",
    name: loc.name,
  };
  if (geo) base.geo = geo;
  return base;
}

// Compose the full Service schema block for a city + service combo page.
// Mirrors the existing inline shape in ComboPage but enriches the areaServed
// City entity with GeoCoordinates (and surfaces them as a sibling `geo` on
// the Service itself) for stronger local-intent SEO signals.
export function buildLocationServiceSchema(args: {
  loc: Location;
  serviceName: string;
  audienceType: string;
  description: string;
  price: number;
  priceCurrency: string;
}): Record<string, unknown> {
  const { loc, serviceName, audienceType, description, price, priceCurrency } = args;
  const geo = locationGeo(loc);
  const block: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    provider: { "@id": "https://kerblabs.com/#organization" },
    areaServed: locationAreaServed(loc),
    audience: { "@type": "BusinessAudience", audienceType },
    description,
    offers: {
      "@type": "Offer",
      price: price.toString(),
      priceCurrency,
    },
  };
  // Surface geo as a sibling of areaServed on the Service so engines that don't
  // dive into the nested City entity still pick up the local-intent signal.
  if (geo) block.geo = geo;
  return block;
}

const ORGANIZATION_BLOCK = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://kerblabs.com/#organization",
  name: "Kerblabs",
  legalName: "Kerblabs Ltd",
  url: "https://kerblabs.com",
  logo: {
    "@type": "ImageObject",
    url: "https://kerblabs.com/kerblabs-logo.png",
    width: 512,
    height: 512,
  },
  description:
    "AI-powered growth systems for Florida med spas and UK local businesses — local SEO, AI voice receptionist, automated review management, missed-call text-back, and CRM. Fully remote across the US and UK.",
  foundingDate: "2026",
  founder: {
    "@type": "Person",
    name: "Chandra Alladi",
    url: "https://kerblabs.com/about",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "GB",
    addressRegion: "England",
  },
  // US-first: Florida med-spa Sprint footprint, full US national reach for med-spa, plus UK.
  areaServed: [
    { "@type": "State", name: "Florida", containedInPlace: { "@type": "Country", name: "United States" } },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  priceRange: "$$",
  knowsAbout: [
    "Med spa marketing",
    "Florida medical-director-rule compliant marketing",
    "AI Voice Receptionist",
    "Local SEO",
    "Google Business Profile management",
    "Review automation",
    "Missed call text back",
    "Dental practice marketing",
    "Hair salon marketing",
    "Contractor marketing",
    "Estate agent marketing",
  ],
  // sameAs: external profile anchors. LinkedIn is the only confirmed live profile;
  // the remaining four point at the canonical /about page until real Clutch / G2 /
  // Crunchbase / Trustpilot profiles are claimed and verified. TODO (Chandu):
  // replace with the real profile URLs once claimed.
  sameAs: [
    "https://www.linkedin.com/company/kerblabs",
    "https://kerblabs.com/about",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    availableLanguage: ["English"],
    areaServed: ["US", "GB"],
    url: "https://calendly.com/hello-kerblabs/15-min-discovery-call",
  },
};

// ProfessionalService block — linked to Organization via provider @id. Surfaces the
// service mix and the US-first med-spa Sprint offer for AI Overviews / Perplexity
// citation and rich-results eligibility on the homepage.
const PROFESSIONAL_SERVICE_BLOCK = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://kerblabs.com/#professionalservice",
  name: "Kerblabs — AI Marketing for Med Spas & Local Businesses",
  url: "https://kerblabs.com",
  provider: { "@id": "https://kerblabs.com/#organization" },
  parentOrganization: { "@id": "https://kerblabs.com/#organization" },
  areaServed: [
    { "@type": "State", name: "Florida" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  serviceType: [
    "Local SEO",
    "Google Business Profile management",
    "AI voice receptionist",
    "Review management",
    "Missed-call text-back",
    "Med spa marketing",
  ],
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Kerblabs offers",
    itemListElement: [
      {
        "@type": "Offer",
        name: "The 5 Spa Sprint — Cohort 1 (Florida)",
        description:
          "60-day Google Business Profile rank race for Florida med spas. $0 upfront, $99 refundable hold, $1,200 success fee on 2-of-3 KPI hit.",
        priceCurrency: "USD",
        price: "1200",
        priceValidUntil: "2026-06-16",
        category: "Med spa marketing",
        url: "https://kerblabs.com/sprint",
        seller: { "@id": "https://kerblabs.com/#organization" },
      },
      {
        "@type": "Offer",
        name: "Kerblabs Spark (UK)",
        description:
          "AI marketing entry tier for UK local businesses — GBP optimization, review monitoring, booking + reminders.",
        priceCurrency: "GBP",
        price: "97",
        category: "Local marketing",
        url: "https://kerblabs.com/#pricing",
        seller: { "@id": "https://kerblabs.com/#organization" },
      },
    ],
  },
};

export default function Schema({
  breadcrumbs,
  extra = [],
  includeWebsite = false,
}: SchemaProps) {
  const blocks: object[] = [ORGANIZATION_BLOCK];

  if (includeWebsite) {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://kerblabs.com/#website",
      url: "https://kerblabs.com",
      name: "Kerblabs",
      publisher: { "@id": "https://kerblabs.com/#organization" },
      inLanguage: ["en-US", "en-GB"],
    });
    // Homepage-only ProfessionalService block, linked to Organization via provider @id.
    blocks.push(PROFESSIONAL_SERVICE_BLOCK);
  }

  if (breadcrumbs && breadcrumbs.length > 0) {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
        item: b.url,
      })),
    });
  }

  blocks.push(...extra);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(blocks) }}
    />
  );
}

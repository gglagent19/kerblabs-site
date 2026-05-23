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
    "AI-powered growth systems for local businesses — local SEO, AI voice receptionist, automated review management, missed-call text-back, and CRM. Fully remote, serving the UK and the US.",
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
  areaServed: [
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United States" },
  ],
  priceRange: "££",
  knowsAbout: [
    "AI Voice Receptionist",
    "Local SEO",
    "Google Business Profile management",
    "Review automation",
    "Missed call text back",
    "Dental practice marketing",
    "Hair salon marketing",
    "Contractor marketing",
    "Estate agent marketing",
    "Med spa marketing",
  ],
  sameAs: [
    "https://www.linkedin.com/company/kerblabs",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    availableLanguage: ["English"],
    areaServed: ["GB", "US"],
    url: "https://calendly.com/hello-kerblabs/15-min-discovery-call",
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
      inLanguage: ["en-GB", "en-US"],
    });
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

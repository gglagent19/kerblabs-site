// JSON-LD schema injector for SEO pages.
// Renders a strong Organization + BreadcrumbList by default, plus extra blocks if provided.

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SchemaProps {
  breadcrumbs?: BreadcrumbItem[];
  extra?: object[];
  includeWebsite?: boolean; // homepage only
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
    url: "https://calendly.com/chandraalladi07/30min",
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

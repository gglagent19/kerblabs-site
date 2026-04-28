// JSON-LD schema injector for SEO pages.
// Renders an Organization + BreadcrumbList by default, plus extra blocks if provided.

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SchemaProps {
  breadcrumbs: BreadcrumbItem[];
  extra?: object[];
}

export default function Schema({ breadcrumbs, extra = [] }: SchemaProps) {
  const blocks = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Kerblabs",
      url: "https://kerblabs.com",
      description: "AI-powered growth systems for UK local businesses",
      areaServed: { "@type": "Country", name: "United Kingdom" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
        item: b.url,
      })),
    },
    ...extra,
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(blocks) }}
    />
  );
}

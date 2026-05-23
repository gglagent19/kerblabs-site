// Visible HTML breadcrumb — server component.
//
// Renders a clean <nav aria-label="Breadcrumb"> with an <ol> of crumbs.
// The JSON-LD BreadcrumbList is emitted separately by components/seo/Schema.tsx;
// this component exists because Google sometimes ignores JSON-LD-only
// breadcrumbs when no visible counterpart is present on the page.
//
// Styling matches the existing SEO page tokens (--color-text-faint,
// --color-text-dim, --color-lime) and the top padding mirrors the previous
// inline breadcrumb so the layout offset under <SeoNav> stays consistent.

import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="pt-24 md:pt-32 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <ol className="flex flex-wrap items-center gap-2 text-xs text-[color:var(--color-text-faint)] tracking-wide">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={`${item.label}-${i}`} className="flex items-center gap-2 min-w-0">
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="block max-w-[12rem] md:max-w-[18rem] truncate hover:text-[color:var(--color-lime)] transition"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    {...(isLast ? { "aria-current": "page" } : {})}
                    className="block max-w-[14rem] md:max-w-[22rem] truncate text-[color:var(--color-text-dim)]"
                  >
                    {item.label}
                  </span>
                )}
                {!isLast && (
                  <span aria-hidden="true" className="text-[color:var(--color-text-faint)]">
                    ›
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

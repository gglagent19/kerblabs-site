// Shared building-block sections for SEO pages — all server components.
import Link from "next/link";
import type { ReactNode } from "react";

// ─── Breadcrumb ───────────────────────────────────────────────
export function Breadcrumb({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="pt-24 md:pt-32 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <ol className="flex flex-wrap items-center gap-2 text-xs text-[color:var(--color-text-faint)] tracking-wide">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              {item.href ? (
                <Link href={item.href} className="hover:text-[color:var(--color-lime)] transition">
                  {item.name}
                </Link>
              ) : (
                <span className="text-[color:var(--color-text-dim)]">{item.name}</span>
              )}
              {i < items.length - 1 && <span>›</span>}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────
interface HeroProps {
  eyebrow?: string;
  h1: ReactNode;
  highlight?: string;
  subhead: ReactNode;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  stats?: { value: string; label: string }[];
}

export function SeoHero({ eyebrow, h1, highlight, subhead, primaryCta, secondaryCta, stats }: HeroProps) {
  return (
    <section className="relative px-6 md:px-10 pt-12 md:pt-20 pb-16 md:pb-24 overflow-hidden">
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />

      <div className="relative max-w-[1200px] mx-auto">
        {eyebrow && <div className="label mb-5 text-[color:var(--color-lime)]">{eyebrow}</div>}

        <h1 className="font-display font-bold text-[10vw] sm:text-[7vw] md:text-[5vw] leading-[1.02] tracking-[-0.03em] mb-6 max-w-5xl">
          {h1}
          {highlight && (
            <>
              {" "}
              <span className="grad-lime">{highlight}</span>
            </>
          )}
        </h1>

        <p className="text-base md:text-lg text-[color:var(--color-text-dim)] leading-relaxed max-w-3xl mb-8">
          {subhead}
        </p>

        <div className="flex flex-wrap items-center gap-3">
          {primaryCta && (
            <a
              href={primaryCta.href}
              target={primaryCta.href.startsWith("http") ? "_blank" : undefined}
              rel={primaryCta.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="btn-primary"
            >
              {primaryCta.label}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          )}
          {secondaryCta && (
            <Link href={secondaryCta.href} className="btn-ghost">
              {secondaryCta.label}
            </Link>
          )}
        </div>

        {stats && stats.length > 0 && (
          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 max-w-3xl">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display font-bold text-3xl md:text-4xl grad-lime">{s.value}</div>
                <div className="text-xs md:text-sm text-[color:var(--color-text-dim)] mt-1.5 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ─── Section header (label + h2 with optional highlight) ──────
export function SectionHead({
  label,
  title,
  highlight,
  subtitle,
}: {
  label?: string;
  title: ReactNode;
  highlight?: string;
  subtitle?: ReactNode;
}) {
  return (
    <div className="mb-10 md:mb-14 max-w-3xl">
      {label && <div className="label mb-4">{label}</div>}
      <h2 className="font-display font-bold text-[7vw] md:text-[3.5vw] leading-[1.05] tracking-[-0.02em] mb-4">
        {title}
        {highlight && (
          <>
            {" "}
            <span className="grad-lime">{highlight}</span>
          </>
        )}
      </h2>
      {subtitle && <p className="text-[color:var(--color-text-dim)] leading-relaxed">{subtitle}</p>}
    </div>
  );
}

// ─── Problems Grid ────────────────────────────────────────────
export function ProblemsGrid({ problems }: { problems: { title: string; body: string }[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {problems.map((p) => (
        <div key={p.title} className="card p-6 flex gap-4">
          <span className="shrink-0 w-7 h-7 rounded-full bg-[color:var(--color-warm)]/15 border border-[color:var(--color-warm)]/30 flex items-center justify-center text-[color:var(--color-warm)] text-sm font-bold">
            ✗
          </span>
          <div>
            <h3 className="font-display font-bold text-base mb-1.5">{p.title}</h3>
            <p className="text-sm text-[color:var(--color-text-dim)] leading-relaxed">{p.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Service / Feature Cards Grid ─────────────────────────────
export interface FeatureCard {
  number?: string;
  category?: string;
  title: string;
  body: string;
  href?: string;
}

export function FeatureGrid({ items, columns = 3 }: { items: FeatureCard[]; columns?: 2 | 3 | 4 }) {
  const cols =
    columns === 4 ? "lg:grid-cols-4" : columns === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3";
  return (
    <div className={`grid sm:grid-cols-2 ${cols} gap-4`}>
      {items.map((it, i) => {
        const Card = (
          <div className="card p-6 h-full flex flex-col">
            {(it.number || it.category) && (
              <div className="flex items-center justify-between mb-5">
                <span className="label text-[color:var(--color-lime)]">
                  {it.number}
                  {it.number && it.category && " · "}
                  {it.category}
                </span>
              </div>
            )}
            <h3 className="font-display font-bold text-lg md:text-xl mb-2">{it.title}</h3>
            <p className="text-sm text-[color:var(--color-text-dim)] leading-relaxed flex-1">
              {it.body}
            </p>
            {it.href && (
              <span className="mt-5 text-xs text-[color:var(--color-lime)] tracking-wide group-hover:underline inline-flex items-center gap-1.5">
                Learn more →
              </span>
            )}
          </div>
        );
        return it.href ? (
          <Link key={i} href={it.href} className="group block">
            {Card}
          </Link>
        ) : (
          <div key={i}>{Card}</div>
        );
      })}
    </div>
  );
}

// ─── How It Works (numbered steps) ────────────────────────────
export function StepsList({ steps }: { steps: { step: string; title: string; body: string }[] }) {
  return (
    <div className="space-y-5">
      {steps.map((s) => (
        <div key={s.step} className="card p-6 grid grid-cols-[64px_1fr] gap-5 items-start">
          <div className="font-display font-bold text-4xl md:text-5xl grad-lime leading-none">
            {s.step}
          </div>
          <div>
            <h3 className="font-display font-bold text-lg mb-1.5">{s.title}</h3>
            <p className="text-sm text-[color:var(--color-text-dim)] leading-relaxed">{s.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Pricing Callout ──────────────────────────────────────────
export function PricingCallout({
  plan,
  price,
  description,
}: {
  plan: string;
  price: number;
  description: string;
}) {
  return (
    <div className="card p-8 md:p-12 max-w-2xl mx-auto text-center">
      <div className="label mb-3">{plan} plan recommended</div>
      <div className="font-display font-bold mb-3">
        <span className="text-2xl md:text-3xl align-top">£</span>
        <span className="text-6xl md:text-7xl">{price}</span>
        <span className="text-xl text-[color:var(--color-text-dim)]">/mo</span>
      </div>
      <p className="text-sm text-[color:var(--color-text-dim)] leading-relaxed max-w-md mx-auto mb-6">
        {description}
      </p>
      <a
        href="https://calendly.com/chandraalladi07/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
      >
        Book a free demo
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>
    </div>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="max-w-4xl mx-auto">
      {items.map((it, i) => (
        <details
          key={i}
          className="group border-b border-[color:var(--color-border)] py-5"
        >
          <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
            <h3 className="font-display font-bold text-base md:text-lg">{it.q}</h3>
            <span className="shrink-0 w-7 h-7 rounded-full border border-[color:var(--color-border)] flex items-center justify-center text-[color:var(--color-lime)] transition-transform group-open:rotate-45">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </summary>
          <p className="mt-3 text-sm md:text-base text-[color:var(--color-text-dim)] leading-relaxed pr-10">
            {it.a}
          </p>
        </details>
      ))}
    </div>
  );
}

// ─── Cross-link pills ─────────────────────────────────────────
export function PillLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className="px-4 py-2 rounded-full bg-[color:var(--color-surface)] border border-[color:var(--color-border)] text-xs md:text-sm text-[color:var(--color-text-dim)] hover:border-[color:var(--color-lime)]/40 hover:text-[color:var(--color-lime)] transition"
        >
          {l.label} →
        </Link>
      ))}
    </div>
  );
}

// ─── CTA Section (final call to action before footer) ─────────
export function CtaSection({
  title,
  highlight,
  subtitle,
}: {
  title: ReactNode;
  highlight?: string;
  subtitle?: string;
}) {
  return (
    <section className="px-6 md:px-10 py-24 md:py-32 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display font-bold text-[8vw] md:text-[3.5vw] leading-[1.05] tracking-[-0.02em] mb-5">
          {title}
          {highlight && (
            <>
              {" "}
              <span className="grad-lime">{highlight}</span>
            </>
          )}
        </h2>
        {subtitle && (
          <p className="text-[color:var(--color-text-dim)] text-base md:text-lg leading-relaxed mb-8">
            {subtitle}
          </p>
        )}
        <a
          href="https://calendly.com/chandraalladi07/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Book a free 30-min demo
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </section>
  );
}

// ─── Section wrapper ──────────────────────────────────────────
export function Section({
  children,
  background,
  className = "",
}: {
  children: ReactNode;
  background?: "default" | "surface";
  className?: string;
}) {
  const bg = background === "surface" ? "bg-[color:var(--color-surface)]" : "";
  return (
    <section className={`px-6 md:px-10 py-16 md:py-24 ${bg} ${className}`}>
      <div className="max-w-[1200px] mx-auto">{children}</div>
    </section>
  );
}

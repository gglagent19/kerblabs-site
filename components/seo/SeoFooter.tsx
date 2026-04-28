import Link from "next/link";

const services = [
  { slug: "ai-voice-receptionist", name: "AI Voice Receptionist" },
  { slug: "missed-call-text-back", name: "Missed Call Text Back" },
  { slug: "review-management", name: "Review Management" },
  { slug: "google-business-profile-management", name: "GBP Management" },
  { slug: "local-seo", name: "Local SEO" },
  { slug: "crm-pipeline-management", name: "CRM & Pipeline" },
  { slug: "booking-calendar-reminders", name: "Booking & Reminders" },
  { slug: "reputation-monitoring", name: "Reputation Monitoring" },
];

const industries = [
  { slug: "dental-practices", name: "Dental Practices" },
  { slug: "hair-salons", name: "Hair Salons" },
  { slug: "contractors", name: "Contractors" },
  { slug: "estate-agents", name: "Estate Agents" },
];

const featuredCities = [
  "london",
  "manchester",
  "birmingham",
  "bristol",
  "leeds",
  "glasgow",
  "edinburgh",
];

export default function SeoFooter() {
  return (
    <footer className="px-6 md:px-10 pt-16 pb-8 border-t border-[color:var(--color-border)]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 md:gap-8 mb-12">
          <div>
            <a href="/" className="font-display font-bold text-2xl tracking-tight">
              kerblabs<span className="text-[color:var(--color-lime)]">.</span>
            </a>
            <p className="text-[color:var(--color-text-dim)] text-sm mt-3 max-w-xs leading-relaxed">
              AI-powered growth systems for UK local businesses. Fully remote, serving the whole UK.
            </p>
            <a
              href="https://calendly.com/chandraalladi07/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-5 text-xs"
            >
              Book a demo
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>

          <div>
            <h4 className="font-display font-bold text-xs tracking-[0.2em] uppercase text-[color:var(--color-text-faint)] mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-[color:var(--color-text-dim)] hover:text-[color:var(--color-lime)] transition"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-xs tracking-[0.2em] uppercase text-[color:var(--color-text-faint)] mb-4">Industries</h4>
            <ul className="space-y-2.5">
              {industries.map((i) => (
                <li key={i.slug}>
                  <Link
                    href={`/industries/${i.slug}`}
                    className="text-sm text-[color:var(--color-text-dim)] hover:text-[color:var(--color-lime)] transition"
                  >
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-xs tracking-[0.2em] uppercase text-[color:var(--color-text-faint)] mb-4">Locations</h4>
            <ul className="space-y-2.5">
              {featuredCities.map((c) => (
                <li key={c}>
                  <Link
                    href={`/locations/${c}`}
                    className="text-sm text-[color:var(--color-text-dim)] hover:text-[color:var(--color-lime)] transition capitalize"
                  >
                    {c.replace(/-/g, " ")}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/locations"
                  className="text-sm text-[color:var(--color-lime)] hover:underline"
                >
                  All UK locations →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[color:var(--color-border)] flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="text-xs text-[color:var(--color-text-faint)] tracking-wide">
            &copy; {new Date().getFullYear()} Kerblabs Ltd. &middot; Serving the whole UK remotely
          </div>
          <div className="flex items-center gap-5 text-xs text-[color:var(--color-text-dim)]">
            <a
              href="https://calendly.com/chandraalladi07/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[color:var(--color-lime)] transition"
            >
              Book a Demo
            </a>
            <a href="/" className="text-[color:var(--color-lime)]">↑ Top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Server-component nav for SEO pages — links go to homepage anchors.
// No "use client" so the SEO pages stay statically rendered.
export default function SeoNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 md:pt-5 px-3">
      <div className="flex items-center gap-3 sm:gap-6 md:gap-10 bg-black/90 backdrop-blur-xl rounded-b-2xl md:rounded-b-3xl px-5 md:px-8 py-2.5 border border-[color:var(--color-border)] border-t-0">
        <a
          href="/"
          className="font-display font-bold text-lg tracking-tight mr-2 md:mr-6"
        >
          kerblabs<span className="text-[color:var(--color-lime)]">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          <a
            href="/#store"
            className="text-sm transition-colors duration-300 text-[color:var(--color-text-dim)] hover:text-[color:var(--color-text)]"
          >
            Services
          </a>
          <a
            href="/#work"
            className="text-sm transition-colors duration-300 text-[color:var(--color-text-dim)] hover:text-[color:var(--color-text)]"
          >
            Work
          </a>
          <a
            href="/#pricing"
            className="text-sm transition-colors duration-300 text-[color:var(--color-text-dim)] hover:text-[color:var(--color-text)]"
          >
            Pricing
          </a>
          <a
            href="/locations"
            className="text-sm transition-colors duration-300 text-[color:var(--color-text-dim)] hover:text-[color:var(--color-text)]"
          >
            Locations
          </a>
        </nav>

        <a
          href="https://calendly.com/chandraalladi07/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 bg-[color:var(--color-lime)] text-black font-bold pl-4 pr-1.5 py-1.5 rounded-full text-xs sm:text-sm transition-all hover:gap-2.5"
        >
          Book a demo
          <span className="flex items-center justify-center w-7 h-7 bg-black rounded-full transition-transform group-hover:scale-110">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#E1E0CC"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </a>
      </div>
    </header>
  );
}

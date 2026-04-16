"use client";
import { motion } from "framer-motion";

const links = [
  { href: "#store", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 nav-glass px-6 md:px-10 py-4"
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <a href="#top" className="font-display font-bold text-xl tracking-tight">
          kerblabs<span className="text-[color:var(--color-lime)]">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm text-[color:var(--color-text-dim)]">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="u-link hover:text-[color:var(--color-text)] transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="https://calendly.com/chandraalladi07/30min" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2 px-4 hidden sm:inline-flex">
          Book a demo
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </motion.header>
  );
}

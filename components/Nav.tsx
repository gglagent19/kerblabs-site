"use client";
import { motion } from "framer-motion";
import CalendlyButton from "./CalendlyButton";

const CALENDLY_URL = "https://calendly.com/chandraalladi07/30min";

const links = [
  { href: "#store", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#pricing", label: "Pricing" },
];

export default function Nav() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 md:pt-5 px-3"
    >
      <div className="flex items-center gap-3 sm:gap-6 md:gap-10 bg-black/90 backdrop-blur-xl rounded-b-2xl md:rounded-b-3xl px-5 md:px-8 py-2.5 border border-[color:var(--color-border)] border-t-0">
        {/* Logo */}
        <a href="#top" className="font-display font-bold text-lg tracking-tight mr-2 md:mr-6">
          kerblabs<span className="text-[color:var(--color-lime)]">.</span>
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm transition-colors duration-300"
              style={{ color: "rgba(225, 224, 204, 0.6)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#E1E0CC")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(225, 224, 204, 0.6)")}
            >
              {l.label}
            </a>
          ))}
          <CalendlyButton
            url={CALENDLY_URL}
            className="text-sm transition-colors duration-300 text-[color:rgba(225,224,204,0.6)] hover:text-[color:#E1E0CC] bg-transparent border-0 cursor-pointer p-0"
          >
            Book a Demo
          </CalendlyButton>
        </nav>

        {/* CTA */}
        <CalendlyButton
          url={CALENDLY_URL}
          className="group inline-flex items-center gap-1.5 bg-[color:var(--color-lime)] text-black font-bold pl-4 pr-1.5 py-1.5 rounded-full text-xs sm:text-sm transition-all hover:gap-2.5"
        >
          Book a demo
          <span className="flex items-center justify-center w-7 h-7 bg-black rounded-full transition-transform group-hover:scale-110">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#E1E0CC" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </CalendlyButton>
      </div>
    </motion.header>
  );
}

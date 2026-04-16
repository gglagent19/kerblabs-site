"use client";
import { motion } from "framer-motion";

const reasons = [
  { k: "We ship, not deck.", v: "Ten-day builds, not ten-week decks. If it isn't running in a fortnight, you don't pay the second invoice." },
  { k: "Main Street native.", v: "Every system is tuned for ≤10 staff, one location, no marketing team. No enterprise bloat." },
  { k: "Flat fees, no magic.", v: "One monthly number. Every pound in, every pound out, every lead counted." },
  { k: "The work is the pitch.", v: "This website is the system. If it didn't make you stop and look, we're not the right shop." },
];

export default function WhyKerblabs() {
  return (
    <section className="px-6 md:px-10 py-24 md:py-36 bg-[color:var(--color-surface)]">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20">
        <div className="md:sticky md:top-28 md:self-start">
          <div className="label mb-4">Why us</div>
          <h2 className="text-[8vw] md:text-[3.5vw] leading-[1.08]">
            A small shop for small <span className="grad-lime">shops.</span>
          </h2>
        </div>
        <div className="space-y-8">
          {reasons.map((r, i) => (
            <motion.div key={r.k} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.6, delay: i * 0.06 }} className="border-t border-[color:var(--color-border)] pt-6">
              <h3 className="font-display text-2xl font-bold mb-2">{r.k}</h3>
              <p className="text-[color:var(--color-text-dim)] leading-relaxed">{r.v}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

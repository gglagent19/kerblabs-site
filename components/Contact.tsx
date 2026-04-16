"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-10 py-24 md:py-36 bg-[color:var(--color-surface)]">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 md:gap-20">
        <div>
          <div className="label mb-4">Contact</div>
          <h2 className="text-[8vw] md:text-[4vw] leading-[1.05] mb-6">
            Tell us what&apos;s <span className="grad-lime">leaking.</span>
          </h2>
          <p className="text-[color:var(--color-text-dim)] leading-relaxed mb-10 max-w-sm">
            Free 30-minute audit. You leave with a plan, whether you hire us or not.
          </p>
          <div className="space-y-2 text-sm text-[color:var(--color-text-dim)]">
            <div><span className="label inline-block w-14">Studio</span> London, UK</div>
            <div><span className="label inline-block w-14">Hours</span> Mon – Fri · 09 – 18 GMT</div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="card p-6 md:p-8 flex flex-col items-center justify-center text-center space-y-6">
          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-semibold text-[color:var(--color-text)]">Book a free demo</h3>
            <p className="text-[color:var(--color-text-dim)] text-sm leading-relaxed max-w-xs mx-auto">
              Pick a 30-minute slot. We&apos;ll walk through your setup, show you the gaps, and hand you a plan — whether you hire us or not.
            </p>
          </div>
          <a href="https://calendly.com/chandraalladi07/30min" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-3">
            Book your 30-min demo
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
          <span className="text-xs text-[color:var(--color-text-faint)]">No commitment · No credit card</span>
        </motion.div>
      </div>
    </section>
  );
}

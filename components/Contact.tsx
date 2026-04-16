"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", business: "", note: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("[kerblabs contact]", form);
    setStatus("sent");
  };

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
            <div><span className="label inline-block w-14">Email</span> <a href="mailto:hello@kerblabs.com" className="hover:text-[color:var(--color-lime)] transition">hello@kerblabs.com</a></div>
            <div><span className="label inline-block w-14">Studio</span> London, UK</div>
            <div><span className="label inline-block w-14">Hours</span> Mon – Fri · 09 – 18 GMT</div>
          </div>
        </div>

        <motion.form onSubmit={onSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="card p-6 md:p-8 space-y-5">
          {(["name", "email", "business"] as const).map((k) => (
            <label key={k} className="block">
              <span className="label block mb-2">{k === "name" ? "Your name" : k === "email" ? "Email" : "Business name"}</span>
              <input required type={k === "email" ? "email" : "text"} value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })}
                className="w-full bg-transparent border-0 border-b border-[color:var(--color-border)] py-2.5 text-[color:var(--color-text)] focus:outline-none focus:border-[color:var(--color-lime)] transition" />
            </label>
          ))}
          <label className="block">
            <span className="label block mb-2">What&apos;s leaking</span>
            <textarea rows={2} value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })}
              className="w-full bg-transparent border-0 border-b border-[color:var(--color-border)] py-2.5 text-[color:var(--color-text)] focus:outline-none focus:border-[color:var(--color-lime)] transition resize-none"
              placeholder="Missed calls? Dead Google profile?" />
          </label>
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-[color:var(--color-text-faint)]">
              {status === "sent" ? "Got it — we'll reply within a day." : "We reply in under 24 hours."}
            </span>
            <button type="submit" className="btn-primary">
              {status === "sent" ? "Sent" : "Send it"}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

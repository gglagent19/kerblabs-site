"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  { n: "01", cat: "Search", title: "Local SEO", body: "Topic maps, technical audits, city + service pages, schema, citations." },
  { n: "02", cat: "Search", title: "Google Business Profile", body: "Full GBP rewrite, weekly posts, photo drops, Q&A seeding, review velocity." },
  { n: "03", cat: "Voice", title: "AI Voice Receptionist", body: "Human-sounding agent answers calls 24/7, books appointments." },
  { n: "04", cat: "Voice", title: "AI Chat & SMS", body: "Website chat + WhatsApp + SMS, trained on your business." },
  { n: "05", cat: "Web", title: "Lead-Gen Websites", body: "Seven-day builds. Three-second loads. Every visit tracked." },
  { n: "06", cat: "Web", title: "Landing Page Systems", body: "Campaign-specific pages with A/B variants baked in." },
  { n: "07", cat: "Automate", title: "Missed-Call Text-Back", body: "Every missed call fires an instant personalised SMS." },
  { n: "08", cat: "Automate", title: "Email & SMS Nurture", body: "Drip sequences, broadcast calendars, segment-aware flows." },
  { n: "09", cat: "Trust", title: "Review Engine", body: "Automatic review requests, monitoring, AI-drafted replies." },
  { n: "10", cat: "Trust", title: "Reputation Monitoring", body: "Cross-platform listening, brand-mention alerts." },
  { n: "11", cat: "CRM", title: "Pipeline & CRM", body: "Custom pipelines, tags, triggers and dashboards." },
  { n: "12", cat: "CRM", title: "Booking & Calendar", body: "Round-robin calendars, reminders, no-show rescue." },
];

function Card3D({ s, i }: { s: (typeof services)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [12, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const onMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const rx = ((e.clientY - r.top) / r.height - 0.5) * -6;
    const ry = ((e.clientX - r.left) / r.width - 0.5) * 6;
    el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
  };
  const onLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = "";
  };

  return (
    <div ref={ref} className="card-3d">
      <motion.div
        style={{ rotateX, scale, opacity }}
        className="card-3d-inner"
      >
        <div
          ref={cardRef}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className="card p-6 flex flex-col h-full"
          style={{ transition: "transform 0.4s cubic-bezier(.2,.7,.1,1)" }}
        >
          <div className="flex items-center justify-between mb-6">
            <span className="label text-[color:var(--color-lime)]">
              {s.n} · {s.cat}
            </span>
          </div>
          <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
          <p className="text-sm text-[color:var(--color-text-dim)] leading-relaxed flex-1">
            {s.body}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="store" className="px-6 md:px-10 py-24 md:py-36">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-14 md:mb-20 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="label mb-4"
          >
            The fix
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[8vw] md:text-[4vw] leading-[1.05] mb-5"
          >
            Twelve systems, <span className="grad-lime">one team.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-[color:var(--color-text-dim)] leading-relaxed"
          >
            Pick any one stand-alone, or bundle the full engine.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <Card3D key={s.n} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

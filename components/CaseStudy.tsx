"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / 2000);
      setVal(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {prefix}
      {val.toLocaleString("en-GB", {
        maximumFractionDigits: decimals,
        minimumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

const caseStudies = [
  {
    icon: "🦷",
    industry: "Dental Practice",
    location: "Reading, UK",
    desc: "Five-chair independent practice. GBP + AI voice receptionist + new-patient funnel. Shipped in fourteen days.",
    stats: [
      { k: "New revenue", v: 3200, prefix: "+£", suffix: "/mo" },
      { k: "New enquiries", v: 48, suffix: "/mo" },
      { k: "GBP traffic", v: 3.1, suffix: "×", decimals: 1 },
    ],
    breakdown:
      "GBP added £1,100/mo in discovery bookings. AI voice caught £1,400/mo in missed calls. Funnel + reviews closed £700/mo.",
  },
  {
    icon: "💇",
    industry: "Hair & Beauty Salon",
    location: "Bristol, UK",
    desc: "Solo-owner salon with two stylists. Review engine + missed-call text-back + booking calendar. Live in ten days.",
    stats: [
      { k: "Bookings up", v: 62, suffix: "%" },
      { k: "Google reviews", v: 94, suffix: " total" },
      { k: "No-shows down", v: 70, suffix: "%" },
    ],
    breakdown:
      "Review requests drove 74 new 5-star reviews in 90 days. Text-back caught 8 missed leads per week. Automated reminders cut no-shows from 18% to 5%.",
  },
  {
    icon: "🏠",
    industry: "Roofing Contractor",
    location: "Manchester, UK",
    desc: "Owner-operator roofer. Lead-gen website + local SEO + GBP + AI chat. Running within two weeks.",
    stats: [
      { k: "Monthly leads", v: 36, suffix: "/mo" },
      { k: "Cost per lead", v: 0, prefix: "£", suffix: " ads" },
      { k: "Revenue added", v: 5800, prefix: "+£", suffix: "/mo" },
    ],
    breakdown:
      "City + service landing pages ranked for 23 local keywords. GBP drove 140 direction requests/mo. AI chat qualified leads while the owner was on roofs.",
  },
  {
    icon: "🏡",
    industry: "Estate Agent",
    location: "Birmingham, UK",
    desc: "Independent two-person lettings agency. CRM pipeline + email nurture + reputation monitoring. Deployed in twelve days.",
    stats: [
      { k: "Valuation leads", v: 28, suffix: "/mo" },
      { k: "Response time", v: 2, suffix: " min" },
      { k: "Listings up", v: 40, suffix: "%" },
    ],
    breakdown:
      "AI SMS replied to every enquiry within 2 minutes. Nurture sequences converted cold leads into valuations. Review engine built trust that won instructions over competitors.",
  },
];

export default function CaseStudy() {
  const secRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      id="work"
      ref={secRef}
      className="px-6 md:px-10 py-24 md:py-36 relative overflow-hidden"
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -z-10 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[color:var(--color-lime)]/[0.03] blur-[120px]" />
      </motion.div>

      <div className="max-w-[1200px] mx-auto">
        <div className="mb-14 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="label mb-4"
          >
            Results
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[8vw] md:text-[4vw] leading-[1.05] mb-4"
          >
            Real shops. <span className="grad-lime">Real numbers.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[color:var(--color-text-dim)]"
          >
            Four industries. Same playbook. Every result measured in bookings
            and pounds — not impressions and clicks.
          </motion.p>
        </div>

        <div className="space-y-6">
          {caseStudies.map((cs, ci) => (
            <motion.div
              key={cs.industry}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: ci * 0.08 }}
              className="card p-6 md:p-8"
            >
              {/* Header row */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{cs.icon}</span>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold">
                      {cs.industry}
                    </h3>
                    <span className="text-sm text-[color:var(--color-text-faint)]">
                      {cs.location}
                    </span>
                  </div>
                </div>
                <p className="md:ml-auto text-sm text-[color:var(--color-text-dim)] max-w-md md:text-right">
                  {cs.desc}
                </p>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {cs.stats.map((m, i) => (
                  <div
                    key={m.k}
                    className="bg-[color:var(--color-surface-2)] rounded-xl p-4"
                  >
                    <div className="label text-[10px] mb-3">{m.k}</div>
                    <div className="text-2xl md:text-3xl font-display font-bold grad-lime">
                      <Counter
                        to={m.v}
                        prefix={m.prefix || ""}
                        suffix={m.suffix || ""}
                        decimals={m.decimals || 0}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Breakdown */}
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[color:var(--color-lime)]/[0.04] border border-[color:var(--color-lime)]/10">
                <span className="text-[color:var(--color-lime)] mt-0.5">↗</span>
                <span className="text-sm text-[color:var(--color-text-dim)] leading-relaxed">
                  {cs.breakdown}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <a href="#contact" className="btn-primary">
            Model my numbers
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

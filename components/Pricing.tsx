"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const tiers = [
  {
    name: "Spark",
    tag: "Get found on Google. The foundation every local shop needs before anything else.",
    monthly: "£97/mo",
    setup: "£297 setup",
    badge: null,
    features: [
      "Google Business Profile optimisation",
      "Weekly GBP posts & photo drops",
      "Q&A seeding + category tuning",
      "Monthly ranking report",
      "No lock-in — cancel anytime",
    ],
    highlight: false,
  },
  {
    name: "Momentum",
    tag: "Get found, get trusted. GBP growth plus a review engine that builds your reputation on autopilot.",
    monthly: "£197/mo",
    setup: "£497 setup",
    badge: "Popular",
    features: [
      "Everything in Spark",
      "Automated review requests (SMS + email)",
      "AI-drafted review replies",
      "Negative-feedback interception",
      "Missed-call text-back",
      "Reputation dashboard",
    ],
    highlight: true,
  },
  {
    name: "Autopilot",
    tag: "Your front desk runs itself. AI answers calls, books appointments, and follows up — 24/7.",
    monthly: "£347/mo",
    setup: "£797 setup",
    badge: null,
    features: [
      "Everything in Momentum",
      "AI voice receptionist (24/7)",
      "AI chat + SMS responder",
      "Email & SMS nurture sequences",
      "Booking calendar + reminders",
      "No-show rescue flows",
    ],
    highlight: false,
  },
  {
    name: "Full Engine",
    tag: "Every system, one team, one fee. SEO, voice, web, CRM, reputation — the complete growth machine.",
    monthly: "£497/mo",
    setup: "£1,200 setup",
    badge: "Best value",
    features: [
      "Everything in Autopilot",
      "Local SEO + city landing pages",
      "Lead-gen website (7-day build)",
      "Landing page A/B systems",
      "Full CRM + pipeline setup",
      "Weekly content, monthly strategy",
      "One direct line — no juniors",
    ],
    highlight: false,
  },
];

function PricingCard3D({
  t,
  i,
  total,
}: {
  t: (typeof tiers)[number];
  i: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const angles = [-8, -3, 3, 8];
  const rotateY = useTransform(scrollYProgress, [0, 1], [angles[i] || 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <div ref={ref} className="card-3d">
      <motion.div style={{ rotateY, scale, opacity }} className="card-3d-inner">
        <div
          className={`card p-6 md:p-8 relative flex flex-col h-full ${
            t.highlight ? "border-[color:var(--color-lime)]/30" : ""
          }`}
        >
          {t.badge && (
            <span className="absolute -top-2.5 left-6 text-[10px] tracking-[0.2em] uppercase bg-[color:var(--color-lime)] text-[color:var(--color-void)] px-3 py-1 rounded-full font-bold">
              {t.badge}
            </span>
          )}

          <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
            {t.name}
          </h3>
          <p className="text-sm text-[color:var(--color-text-dim)] mb-6 leading-relaxed">
            {t.tag}
          </p>

          <div className="mb-6">
            <span className="font-display text-3xl md:text-4xl font-bold">
              {t.monthly}
            </span>
            <span className="text-sm text-[color:var(--color-text-dim)] ml-2">
              + {t.setup}
            </span>
          </div>

          <ul className="space-y-2.5 mb-8 text-sm flex-1">
            {t.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5">
                <span className="mt-[7px] h-px w-3 shrink-0 bg-[color:var(--color-lime)]" />
                <span className="text-[color:var(--color-text-dim)]">{f}</span>
              </li>
            ))}
          </ul>

          <a
            href="https://calendly.com/chandraalladi07/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={t.highlight ? "btn-primary w-full justify-center" : "btn-ghost w-full justify-center"}
          >
            Get started
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
        </div>
      </motion.div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 md:px-10 py-24 md:py-36">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-14 md:mb-20 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="label mb-4"
          >
            Pricing
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[8vw] md:text-[4vw] leading-[1.05] mb-4"
          >
            Start small. <span className="grad-lime">Scale when ready.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[color:var(--color-text-dim)] leading-relaxed"
          >
            Every plan stacks on the one before it. No lock-in on any tier — upgrade, downgrade or cancel anytime.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tiers.map((t, i) => (
            <PricingCard3D key={t.name} t={t} i={i} total={tiers.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

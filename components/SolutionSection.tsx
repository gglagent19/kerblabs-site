"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const solutions = [
  {
    problem: "Missed calls",
    headline: "Every call answered. Every lead caught.",
    body: "Our AI receptionist picks up in two rings — 24/7, weekends, bank holidays. It sounds human, knows your services, books appointments into your calendar, and texts you the summary. You wake up to a full diary instead of voicemails nobody checks.",
    result: "Clients typically recover £1,400/mo in previously lost calls.",
    icon: "🤖",
    tag: "AI Voice Agent",
    color: "#B8FF00",
  },
  {
    problem: "Invisible on Google",
    headline: "Page one. Map pack. Every single week.",
    body: "We rewrite your Google Business Profile from scratch — photos, categories, Q&A, weekly posts that Google's algorithm rewards. Then we build city + service landing pages that capture every search your customers type. Your competitors wonder what happened.",
    result: "Average client sees 3× more profile views within 60 days.",
    icon: "📍",
    tag: "GBP + Local SEO",
    color: "#B8FF00",
  },
  {
    problem: "Silent churn",
    headline: "5-star reviews on autopilot. Bad ones caught before they land.",
    body: "After every appointment, your customer gets a friendly SMS asking for a review. Happy? One tap to Google. Unhappy? It routes to you privately first — so you fix it before it goes public. We draft every reply with AI so your profile stays alive and trusted.",
    result: "Shops go from 12 reviews to 80+ in the first 90 days.",
    icon: "⭐",
    tag: "Review Engine",
    color: "#B8FF00",
  },
];

function ProgressDots({
  scrollYProgress,
}: {
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const d0 = useTransform(scrollYProgress, [0.05, 0.15], [0.2, 1]);
  const d1 = useTransform(scrollYProgress, [0.35, 0.45], [0.2, 1]);
  const d2 = useTransform(scrollYProgress, [0.65, 0.75], [0.2, 1]);
  const dots = [d0, d1, d2];

  return (
    <div className="flex gap-2 mt-8">
      {dots.map((op, i) => (
        <motion.div
          key={i}
          style={{ opacity: op }}
          className="h-1 w-8 rounded-full bg-[color:var(--color-lime)]"
        />
      ))}
    </div>
  );
}

export default function SolutionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const op0 = useTransform(scrollYProgress, [0.04, 0.12, 0.28, 0.33], [0, 1, 1, 0]);
  const y0 = useTransform(scrollYProgress, [0.04, 0.12, 0.28, 0.33], [60, 0, 0, -60]);
  const scale0 = useTransform(scrollYProgress, [0.04, 0.12, 0.28, 0.33], [0.94, 1, 1, 0.96]);

  const op1 = useTransform(scrollYProgress, [0.35, 0.43, 0.58, 0.63], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0.35, 0.43, 0.58, 0.63], [60, 0, 0, -60]);
  const scale1 = useTransform(scrollYProgress, [0.35, 0.43, 0.58, 0.63], [0.94, 1, 1, 0.96]);

  const op2 = useTransform(scrollYProgress, [0.65, 0.73, 0.88, 0.95], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.65, 0.73, 0.88, 0.95], [60, 0, 0, -60]);
  const scale2 = useTransform(scrollYProgress, [0.65, 0.73, 0.88, 0.95], [0.94, 1, 1, 0.96]);

  const opArr = [op0, op1, op2];
  const yArr = [y0, y1, y2];
  const scaleArr = [scale0, scale1, scale2];

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-[color:var(--color-surface)]">
      <div className="sticky top-0 h-screen flex items-center px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto w-full grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-center">
          {/* ── Left: scroll-driven solution cards ── */}
          <div className="relative min-h-[480px] md:min-h-[460px] order-2 md:order-1">
            {solutions.map((s, i) => (
              <motion.div
                key={i}
                style={{
                  opacity: opArr[i],
                  y: yArr[i],
                  scale: scaleArr[i],
                }}
                className="absolute inset-0"
              >
                <div className="card p-6 md:p-8 h-full relative overflow-hidden">
                  {/* Glow */}
                  <div className="absolute -top-16 -left-16 w-[180px] h-[180px] rounded-full blur-[100px] opacity-[0.06] bg-[color:var(--color-lime)]" />

                  {/* Icon + Tag row */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{s.icon}</span>
                    <span className="inline-block text-[10px] tracking-[0.2em] uppercase font-bold px-3 py-1 rounded-full bg-[color:var(--color-lime)]/10 text-[color:var(--color-lime)] border border-[color:var(--color-lime)]/20">
                      {s.tag}
                    </span>
                    <span className="text-[color:var(--color-text-faint)] text-xs">
                      solves: {s.problem}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="font-display text-xl md:text-2xl font-bold leading-[1.2] mb-3">
                    {s.headline}
                  </h3>

                  {/* Body */}
                  <p className="text-[color:var(--color-text-dim)] leading-relaxed text-sm mb-4">
                    {s.body}
                  </p>

                  {/* Result highlight */}
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[color:var(--color-lime)]/[0.06] border border-[color:var(--color-lime)]/10">
                    <span className="text-[color:var(--color-lime)] text-base mt-0.5">↗</span>
                    <span className="text-sm text-[color:var(--color-lime)] font-medium leading-snug">
                      {s.result}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Right: sticky heading ── */}
          <div className="order-1 md:order-2">
            <div className="label mb-5">The fix</div>
            <h2 className="text-[9vw] md:text-[3.8vw] leading-[1.08] font-display font-bold mb-6">
              We plug{" "}
              <span className="grad-lime">every leak.</span>
            </h2>
            <p className="text-[color:var(--color-text-dim)] leading-relaxed mb-4 max-w-sm">
              For every problem, we built a system that runs itself. No
              extra staff. No learning curve. You get results — not more
              work.
            </p>
            <p className="text-sm text-[color:var(--color-text-faint)] mb-6 max-w-sm">
              Each solution connects to the next. Missed calls feed the CRM.
              Reviews boost your Google. Google drives more calls. It
              compounds.
            </p>

            <ProgressDots scrollYProgress={scrollYProgress} />

            <div className="mt-10">
              <a href="#pricing" className="btn-primary">
                See pricing
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
          </div>
        </div>
      </div>
    </div>
  );
}

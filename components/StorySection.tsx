"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const problems = [
  {
    headline: "Your phone rings. Nobody picks up.",
    body: "Almost half of all calls to small businesses go unanswered. Every missed call is a customer who booked with your competitor instead. That's not a phone problem — it's a revenue problem.",
    tag: "Missed calls",
    icon: "📞",
    color: "#FF6B35",
  },
  {
    headline: "Customers are searching. They can't find you.",
    body: "Three out of four people check Google before visiting a local shop. If your profile has no posts, no photos, and two-year-old reviews — you don't exist to them. Your competitor shows up first.",
    tag: "Invisible online",
    icon: "🔍",
    color: "#B8FF00",
  },
  {
    headline: "One bad experience. Gone forever.",
    body: "No follow-up after a visit. No review request. A slow website. An unanswered enquiry. It only takes one friction point and nine out of ten won't give you a second chance.",
    tag: "Silent churn",
    icon: "⭐",
    color: "#FF6B35",
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

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Card 1
  const op0 = useTransform(scrollYProgress, [0.04, 0.12, 0.28, 0.33], [0, 1, 1, 0]);
  const y0 = useTransform(scrollYProgress, [0.04, 0.12, 0.28, 0.33], [80, 0, 0, -80]);
  const scale0 = useTransform(scrollYProgress, [0.04, 0.12, 0.28, 0.33], [0.92, 1, 1, 0.95]);
  const rotate0 = useTransform(scrollYProgress, [0.04, 0.12, 0.28, 0.33], [3, 0, 0, -2]);

  // Card 2
  const op1 = useTransform(scrollYProgress, [0.35, 0.43, 0.58, 0.63], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0.35, 0.43, 0.58, 0.63], [80, 0, 0, -80]);
  const scale1 = useTransform(scrollYProgress, [0.35, 0.43, 0.58, 0.63], [0.92, 1, 1, 0.95]);
  const rotate1 = useTransform(scrollYProgress, [0.35, 0.43, 0.58, 0.63], [3, 0, 0, -2]);

  // Card 3
  const op2 = useTransform(scrollYProgress, [0.65, 0.73, 0.88, 0.95], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.65, 0.73, 0.88, 0.95], [80, 0, 0, -80]);
  const scale2 = useTransform(scrollYProgress, [0.65, 0.73, 0.88, 0.95], [0.92, 1, 1, 0.95]);
  const rotate2 = useTransform(scrollYProgress, [0.65, 0.73, 0.88, 0.95], [3, 0, 0, -2]);

  const opArr = [op0, op1, op2];
  const yArr = [y0, y1, y2];
  const scaleArr = [scale0, scale1, scale2];
  const rotateArr = [rotate0, rotate1, rotate2];

  // Counter on left side
  const counter = useTransform(scrollYProgress, [0, 0.33, 0.34, 0.63, 0.64, 1], [1, 1, 2, 2, 3, 3]);

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto w-full grid md:grid-cols-[1fr_1.2fr] gap-10 md:gap-16 items-center">
          {/* ── Left: sticky heading ── */}
          <div>
            <div className="label mb-5">The problem</div>
            <h2 className="text-[9vw] md:text-[3.8vw] leading-[1.08] font-display font-bold mb-6">
              Your shop is{" "}
              <span className="grad-lime">leaking money.</span>
            </h2>
            <p className="text-[color:var(--color-text-dim)] leading-relaxed mb-6 max-w-sm">
              Most local businesses lose customers they never knew they had.
              Here are the three silent killers.
            </p>

            {/* Step counter */}
            <div className="flex items-center gap-3 mb-2">
              <motion.span className="font-display text-4xl font-bold grad-lime">
                {/* Static display — the scroll drives which card shows */}
                <motion.span>{counter}</motion.span>
              </motion.span>
              <span className="text-[color:var(--color-text-faint)] text-lg">/3</span>
            </div>

            <ProgressDots scrollYProgress={scrollYProgress} />
          </div>

          {/* ── Right: scroll-driven cards ── */}
          <div className="relative min-h-[420px] md:min-h-[380px]">
            {problems.map((p, i) => (
              <motion.div
                key={i}
                style={{
                  opacity: opArr[i],
                  y: yArr[i],
                  scale: scaleArr[i],
                  rotateZ: rotateArr[i],
                }}
                className="absolute inset-0"
              >
                <div className="card p-6 md:p-8 h-full relative overflow-hidden">
                  {/* Background glow */}
                  <div
                    className="absolute -top-20 -right-20 w-[200px] h-[200px] rounded-full blur-[100px] opacity-[0.07]"
                    style={{ background: p.color }}
                  />

                  {/* Icon + Tag row */}
                  <div className="flex items-center gap-4 mb-5">
                    <span className="text-4xl">{p.icon}</span>
                    <span
                      className="inline-block text-[10px] tracking-[0.2em] uppercase font-bold px-3 py-1 rounded-full"
                      style={{
                        color: p.color,
                        border: `1px solid ${p.color}33`,
                        background: `${p.color}0A`,
                      }}
                    >
                      {p.tag}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="font-display text-xl md:text-2xl font-bold leading-[1.2] mb-3">
                    {p.headline}
                  </h3>

                  {/* Body */}
                  <p className="text-[color:var(--color-text-dim)] leading-relaxed text-[15px]">
                    {p.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

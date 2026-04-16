"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { n: "01", title: "Diagnose", body: "30-minute call + free audit. We map every leak in your Google, website, phone and reviews.", meta: "Day 0" },
  { n: "02", title: "Design", body: "Scripts, wireframes, funnels — you approve every word before a line of code ships.", meta: "Day 1–3" },
  { n: "03", title: "Deploy", body: "Built, connected, tested end-to-end. Phones answer themselves. Profiles pull traffic.", meta: "Day 4–12" },
  { n: "04", title: "Defend", body: "Monthly reporting, weekly content, constant tuning. You see every booking and every pound.", meta: "Ongoing" },
];

function Step({ s, i }: { s: (typeof steps)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [i % 2 === 0 ? -60 : 60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [i % 2 === 0 ? -3 : 3, 0]);

  return (
    <div ref={ref}>
      <motion.div style={{ x, opacity, rotateZ }}>
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--color-lime)] text-[color:var(--color-void)] text-xs font-bold">
            {s.n}
          </span>
          <span className="label">{s.meta}</span>
        </div>
        <h3 className="font-display text-3xl md:text-4xl font-bold mb-3">{s.title}</h3>
        <p className="text-sm text-[color:var(--color-text-dim)] leading-relaxed max-w-xs">{s.body}</p>
      </motion.div>
    </div>
  );
}

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 30%"] });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="px-6 md:px-10 py-24 md:py-36 bg-[color:var(--color-surface)]">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-14 md:mb-20 max-w-2xl">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="label mb-4">Process</motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-[8vw] md:text-[4vw] leading-[1.05]">
            Twelve days. Then it <span className="grad-lime">runs itself.</span>
          </motion.h2>
        </div>

        <div ref={ref} className="relative">
          <div className="absolute left-0 right-0 top-10 h-px bg-[color:var(--color-border)] hidden md:block" />
          <motion.div style={{ width: lineWidth }} className="absolute left-0 top-10 h-px bg-[color:var(--color-lime)] hidden md:block" />
          <div className="grid md:grid-cols-4 gap-10 md:gap-5">
            {steps.map((s, i) => (
              <Step key={s.n} s={s} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

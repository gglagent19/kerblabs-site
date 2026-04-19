"use client";
import { motion } from "framer-motion";

const timeline = [
  { time: "0 sec", label: "Customer walks out", icon: "🚶", desc: "They just finished their appointment." },
  { time: "10 sec", label: "SMS lands", icon: "💬", desc: "\"How was your visit?\" — friendly, instant, personal." },
  { time: "15 sec", label: "Happy? → Google review", icon: "⭐", desc: "One tap. 5 stars. Posted before they reach their car." },
  { time: "15 sec", label: "Unhappy? → AI calls them", icon: "📞", desc: "System detects negative sentiment. AI calls within seconds." },
  { time: "30 sec", label: "Problem solved", icon: "✅", desc: "Customer feels heard. Issue fixed. No bad review. No churn." },
];

export default function ReviewRescue() {
  return (
    <section className="relative px-6 md:px-10 py-24 md:py-36 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[color:var(--color-warm)] opacity-[0.03] blur-[150px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[color:var(--color-warm)]/30 bg-[color:var(--color-warm)]/[0.06] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-warm)] animate-pulse" />
            <span className="text-[color:var(--color-warm)] text-xs font-medium tracking-[0.2em] uppercase">Game changer</span>
          </div>
          <h2 className="font-display text-[8vw] md:text-[3.5vw] leading-[1.08] mb-6">
            Catch the bad review<br />
            <span className="grad-lime">before they reach their car.</span>
          </h2>
          <p className="text-[color:var(--color-text-dim)] text-lg max-w-2xl mx-auto leading-relaxed">
            Most businesses find out about unhappy customers when the 1-star review is already public.
            Our system catches it in <strong className="text-[color:var(--color-text)]">real time</strong> — and fixes it <strong className="text-[color:var(--color-text)]">before it ever hits Google</strong>.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[color:var(--color-lime)]/40 via-[color:var(--color-warm)]/40 to-[color:var(--color-lime)]/40 md:-translate-x-px" />

          {timeline.map((step, i) => {
            const isRight = i % 2 === 0;
            const isAlert = i === 3;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isRight ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex items-center gap-4 mb-8 md:mb-10 ${
                  isRight ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Dot on the line */}
                <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full z-10 ${
                  isAlert
                    ? "bg-[color:var(--color-warm)] shadow-[0_0_20px_rgba(255,107,53,0.5)]"
                    : "bg-[color:var(--color-lime)] shadow-[0_0_12px_rgba(184,255,0,0.3)]"
                }`} />

                {/* Time label */}
                <div className={`hidden md:block w-[calc(50%-2rem)] ${isRight ? "text-right pr-8" : "text-left pl-8"}`}>
                  <span className="text-[color:var(--color-text-faint)] text-sm font-mono">{step.time}</span>
                </div>

                {/* Card */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isRight ? "md:pl-8" : "md:pr-8"}`}>
                  <div className={`card p-5 ${
                    isAlert
                      ? "border-[color:var(--color-warm)]/30 bg-[color:var(--color-warm)]/[0.04]"
                      : ""
                  }`}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{step.icon}</span>
                      <h3 className={`font-display font-bold text-base ${
                        isAlert ? "text-[color:var(--color-warm)]" : ""
                      }`}>
                        {step.label}
                      </h3>
                    </div>
                    <p className="text-[color:var(--color-text-dim)] text-sm leading-relaxed">{step.desc}</p>
                    <span className="md:hidden text-[color:var(--color-text-faint)] text-xs font-mono mt-2 block">{step.time}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="card p-6 md:p-8 border-[color:var(--color-lime)]/20 bg-[color:var(--color-lime)]/[0.02] text-center">
            <h3 className="font-display text-xl md:text-2xl font-bold mb-3">
              The result? <span className="grad-lime">Zero bad reviews go public.</span>
            </h3>
            <p className="text-[color:var(--color-text-dim)] leading-relaxed max-w-xl mx-auto mb-6">
              Your happy customers leave 5-star reviews on autopilot. Your unhappy customers get a phone call within 30 seconds — and a solution before they even think about Google. Every single time.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-[color:var(--color-lime)] text-lg">↗</span>
                <span className="text-[color:var(--color-text-dim)]"><strong className="text-[color:var(--color-text)]">80+</strong> reviews in 90 days</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[color:var(--color-warm)] text-lg">⚡</span>
                <span className="text-[color:var(--color-text-dim)]"><strong className="text-[color:var(--color-text)]">30 sec</strong> response to unhappy customer</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[color:var(--color-lime)] text-lg">🛡</span>
                <span className="text-[color:var(--color-text-dim)]"><strong className="text-[color:var(--color-text)]">Zero</strong> negative reviews go public</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

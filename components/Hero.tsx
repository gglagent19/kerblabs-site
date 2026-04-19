"use client";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const ease = [0.16, 1, 0.3, 1];

function WordsPullUp({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <span className={className}>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: delay + i * 0.08, ease }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/* ── Live Activity Toasts ── */
const toasts = [
  { icon: "📅", text: "New appointment booked", sub: "Sarah M. — Haircut & Beard · 2:30 PM", color: "#B8FF00" },
  { icon: "⭐", text: "New 5-star review", sub: "\"Best barber in town! Absolutely love it.\"", color: "#FACC15" },
  { icon: "📈", text: "Customers up 34% this week", sub: "12 more bookings vs last week", color: "#B8FF00" },
  { icon: "📞", text: "Missed call rescued", sub: "AI texted back in 8 seconds — lead saved", color: "#FF6B35" },
  { icon: "⭐", text: "New 5-star review", sub: "\"Finally a place that answers the phone!\"", color: "#FACC15" },
  { icon: "🔍", text: "Found on Google Maps", sub: "+47 profile views today", color: "#B8FF00" },
  { icon: "📅", text: "New appointment booked", sub: "James K. — Full Service · 11:00 AM", color: "#B8FF00" },
  { icon: "💬", text: "AI chat converted a lead", sub: "Website visitor → booked appointment in 42s", color: "#FF6B35" },
  { icon: "⭐", text: "New 5-star review", sub: "\"Brilliant service, will definitely be back\"", color: "#FACC15" },
  { icon: "📈", text: "Revenue up £1,200 this month", sub: "AI voice + GBP driving new customers", color: "#B8FF00" },
  { icon: "🛡", text: "Negative review intercepted", sub: "AI called customer — issue resolved in 28 sec", color: "#FF6B35" },
  { icon: "📅", text: "New appointment booked", sub: "Emma R. — Colour & Style · 4:00 PM", color: "#B8FF00" },
];

const positions: React.CSSProperties[] = [
  { top: "12%", left: "3%" },
  { top: "25%", right: "2%" },
  { bottom: "30%", left: "4%" },
  { bottom: "18%", right: "3%" },
  { top: "40%", left: "2%" },
  { top: "15%", right: "4%" },
];

function LiveToast({ toast, position, onDone }: { toast: typeof toasts[0]; position: React.CSSProperties; onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 4000);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ duration: 0.5, ease }}
      className="absolute z-[5] pointer-events-none hidden md:block"
      style={position}
    >
      <div className="flex items-center gap-3 bg-black/70 backdrop-blur-xl border border-white/[0.08] rounded-2xl px-4 py-3 shadow-2xl max-w-[280px]">
        <span className="text-xl shrink-0">{toast.icon}</span>
        <div className="min-w-0">
          <div className="text-[11px] font-bold truncate" style={{ color: toast.color }}>{toast.text}</div>
          <div className="text-[10px] text-[color:var(--color-text-dim)] truncate leading-tight mt-0.5">{toast.sub}</div>
        </div>
        <span className="text-[8px] text-[color:var(--color-text-faint)] shrink-0">now</span>
      </div>
    </motion.div>
  );
}

function LiveActivityFeed() {
  const [active, setActive] = useState<{ id: number; toast: typeof toasts[0]; pos: React.CSSProperties }[]>([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCounter((c) => {
          const idx = c % toasts.length;
          const posIdx = c % positions.length;
          const id = Date.now();
          setActive((prev) => {
            const next = [...prev.slice(-2), { id, toast: toasts[idx], pos: positions[posIdx] }];
            return next;
          });
          return c + 1;
        });
      }, 3000);
      return () => clearInterval(interval);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {active.map((item) => (
        <LiveToast
          key={item.id}
          toast={item.toast}
          position={item.pos}
          onDone={() => setActive((prev) => prev.filter((a) => a.id !== item.id))}
        />
      ))}
    </AnimatePresence>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 600], [0, -120]);
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const blobScale = useTransform(scrollY, [0, 600], [1, 1.6]);
  const blobOpacity = useTransform(scrollY, [0, 500], [0.07, 0.15]);

  return (
    <section id="top" className="relative h-[100svh] p-3 md:p-5">
      <div className="hero-inset h-full flex items-center justify-center bg-[color:var(--color-void)]">
        {/* Gradient blobs */}
        <motion.div className="hero-blob hero-blob-1" style={{ scale: blobScale, opacity: blobOpacity }} aria-hidden />
        <motion.div className="hero-blob hero-blob-2" style={{ scale: blobScale }} aria-hidden />
        <motion.div className="hero-blob hero-blob-3" aria-hidden />

        {/* Grid lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(225,224,204,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(225,224,204,.08) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="absolute inset-0 bg-noise opacity-[0.12] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50 pointer-events-none" />

        {/* ── Live Activity Toasts ── */}
        <LiveActivityFeed />

        {/* Content */}
        <motion.div
          className="relative z-10 max-w-[1000px] mx-auto px-6 text-center"
          style={{ y: textY, opacity: textOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[color:var(--color-lime)]/20 bg-[color:var(--color-lime)]/[0.04] mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-lime)] animate-pulse" />
            <span className="text-[color:var(--color-lime)] text-xs tracking-[0.2em] uppercase">Full-stack AI marketing atelier</span>
          </motion.div>

          <h1 className="text-[11vw] md:text-[7vw] lg:text-[6vw] leading-[0.9] tracking-[-0.04em] mb-4">
            <WordsPullUp text="We make local" delay={0.3} />
            <br />
            <WordsPullUp text="shops" delay={0.5} />
            {" "}
            <motion.span
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease }}
              className="serif-italic grad-lime inline-block"
            >
              impossible
            </motion.span>
            <br />
            <WordsPullUp text="to ignore." delay={0.7} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease }}
            className="max-w-[520px] mx-auto text-sm md:text-base text-[color:var(--color-text-dim)] leading-[1.4] mb-10"
          >
            SEO, Google Business, AI voice &amp; chat, lead-gen sites, CRM
            — designed, built and operated under one roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease }}
            className="flex flex-wrap justify-center gap-3"
          >
            <a href="#store" className="group inline-flex items-center gap-2 bg-[color:var(--color-lime)] text-black font-bold pl-6 pr-2 py-2 rounded-full text-sm transition-all hover:gap-3">
              Browse the atelier
              <span className="flex items-center justify-center w-9 h-9 bg-black rounded-full transition-transform group-hover:scale-110">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E1E0CC" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </span>
            </a>
            <a href="https://calendly.com/chandraalladi07/30min" target="_blank" rel="noopener noreferrer" className="btn-ghost text-sm">Request an audit</a>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="label text-[9px]">Scroll</span>
          <div className="scroll-indicator w-px h-7 bg-gradient-to-b from-[color:var(--color-lime)] to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

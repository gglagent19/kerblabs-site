"use client";
import { motion, useScroll, useTransform } from "framer-motion";

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

export default function Hero() {
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 600], [0, -120]);
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const blobScale = useTransform(scrollY, [0, 600], [1, 1.6]);
  const blobOpacity = useTransform(scrollY, [0, 500], [0.07, 0.15]);
  const insetRadius = useTransform(scrollY, [0, 300], [32, 0]);

  return (
    <section id="top" className="relative h-[100svh] p-3 md:p-5">
      {/* Inset container with rounded corners */}
      <div className="hero-inset h-full flex items-center justify-center bg-[color:var(--color-void)]">
        {/* Gradient blobs */}
        <motion.div
          className="hero-blob hero-blob-1"
          style={{ scale: blobScale, opacity: blobOpacity }}
          aria-hidden
        />
        <motion.div className="hero-blob hero-blob-2" style={{ scale: blobScale }} aria-hidden />
        <motion.div className="hero-blob hero-blob-3" aria-hidden />

        {/* Subtle grid lines (Prisma-style) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(225,224,204,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(225,224,204,.08) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Noise on hero */}
        <div className="absolute inset-0 bg-noise opacity-[0.12] mix-blend-overlay pointer-events-none" />

        {/* Gradient overlay bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50 pointer-events-none" />

        {/* Content — parallax + fade on scroll */}
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

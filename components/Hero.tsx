"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 600], [0, -120]);
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const blobScale = useTransform(scrollY, [0, 600], [1, 1.6]);
  const blobOpacity = useTransform(scrollY, [0, 500], [0.07, 0.15]);

  return (
    <section id="top" className="relative h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Gradient blobs with scroll parallax */}
      <motion.div
        className="hero-blob hero-blob-1"
        style={{ scale: blobScale, opacity: blobOpacity }}
        aria-hidden
      />
      <motion.div className="hero-blob hero-blob-2" style={{ scale: blobScale }} aria-hidden />
      <motion.div className="hero-blob hero-blob-3" aria-hidden />

      {/* Content — parallax + fade on scroll */}
      <motion.div
        className="relative z-10 max-w-[900px] mx-auto px-6 text-center"
        style={{ y: textY, opacity: textOpacity }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="label mb-6"
        >
          Full-stack AI marketing atelier
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-[11vw] md:text-[6.5vw] lg:text-[5.5vw] leading-[1.08] tracking-[-0.025em] mb-8"
        >
          We make local shops{" "}
          <span className="grad-lime">impossible to ignore.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-[520px] mx-auto text-base md:text-lg text-[color:var(--color-text-dim)] leading-relaxed mb-10"
        >
          SEO, Google Business, AI voice &amp; chat, lead-gen sites, CRM
          — designed, built and operated under one roof.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <a href="#store" className="btn-primary">
            Browse the atelier
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a href="#contact" className="btn-ghost">Request an audit</a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="label text-[9px]">Scroll</span>
        <div className="scroll-indicator w-px h-7 bg-gradient-to-b from-[color:var(--color-lime)] to-transparent" />
      </motion.div>
    </section>
  );
}

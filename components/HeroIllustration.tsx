"use client";
import { motion } from "framer-motion";

/* ── Notification card that slides in ── */
function NotifCard({
  icon,
  text,
  color,
  delay,
  x,
  y,
}: {
  icon: string;
  text: string;
  color: string;
  delay: number;
  x: number;
  y: number;
}) {
  return (
    <motion.div
      className="absolute flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-medium whitespace-nowrap"
      style={{
        left: x,
        top: y,
        background: "rgba(13,13,20,0.7)",
        backdropFilter: "blur(12px)",
        border: `1px solid ${color}33`,
        boxShadow: `0 0 30px ${color}15`,
        color: "#E8E4DC",
      }}
      initial={{ opacity: 0, scale: 0.8, x: 20 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.1, 1] }}
    >
      <span style={{ fontSize: "16px" }}>{icon}</span>
      <span>{text}</span>
      <span
        className="ml-1 h-1.5 w-1.5 rounded-full"
        style={{ background: color, boxShadow: `0 0 8px ${color}` }}
      />
    </motion.div>
  );
}

/* ── Floating £ coin ── */
function FloatingCoin({ delay, x }: { delay: number; x: number }) {
  return (
    <motion.div
      className="absolute text-lg font-bold"
      style={{ left: x, bottom: 80, color: "#00E5FF" }}
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: -160, opacity: [0, 0.9, 0.9, 0] }}
      transition={{
        duration: 3.5,
        delay,
        repeat: Infinity,
        repeatDelay: 1.5,
        ease: "easeOut",
      }}
    >
      £
    </motion.div>
  );
}

export default function HeroIllustration() {
  const bars = [38, 55, 42, 72, 62, 88, 78, 100];

  return (
    <div className="relative w-full h-[500px] md:h-[560px]">
      {/* ── Bar chart (behind person) ── */}
      <div className="absolute bottom-[90px] left-[50%] -translate-x-1/2 flex items-end gap-[6px]">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="w-[18px] md:w-[22px] rounded-t-[4px]"
            style={{
              background: `linear-gradient(to top, #00E5FF, #8B5CF6)`,
              opacity: 0.5 + (i / bars.length) * 0.4,
            }}
            initial={{ height: 0 }}
            animate={{ height: h * 1.6 }}
            transition={{
              duration: 0.8,
              delay: 1.2 + i * 0.1,
              ease: [0.2, 0.7, 0.1, 1],
            }}
          />
        ))}
      </div>

      {/* ── Growth line ── */}
      <motion.svg
        className="absolute bottom-[85px] left-[50%] -translate-x-1/2"
        width="220"
        height="170"
        viewBox="0 0 220 170"
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2.2 }}
      >
        <motion.path
          d="M10 150 Q40 140 60 120 T100 90 T140 50 T180 30 L210 10"
          stroke="#00E5FF"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 2.2, ease: "easeOut" }}
        />
        {/* Arrow tip */}
        <motion.path
          d="M205 18 L210 10 L202 12"
          stroke="#00E5FF"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
        />
      </motion.svg>

      {/* ── Person relaxing in chair (SVG) ── */}
      <motion.svg
        className="absolute bottom-[40px] left-[50%] -translate-x-[50%]"
        width="200"
        height="220"
        viewBox="0 0 200 220"
        fill="none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.2, 0.7, 0.1, 1] }}
      >
        {/* Chair back */}
        <rect
          x="40"
          y="80"
          width="120"
          height="100"
          rx="16"
          fill="#16161F"
          stroke="#00E5FF"
          strokeWidth="1"
          opacity="0.35"
        />
        {/* Chair seat */}
        <rect
          x="30"
          y="172"
          width="140"
          height="14"
          rx="7"
          fill="#16161F"
          stroke="#00E5FF"
          strokeWidth="1"
          opacity="0.35"
        />
        {/* Chair legs */}
        <line x1="55" y1="186" x2="45" y2="216" stroke="#00E5FF" strokeWidth="1.5" opacity="0.25" />
        <line x1="145" y1="186" x2="155" y2="216" stroke="#00E5FF" strokeWidth="1.5" opacity="0.25" />
        <line x1="100" y1="186" x2="100" y2="216" stroke="#00E5FF" strokeWidth="1.5" opacity="0.25" />

        {/* Person — body */}
        <ellipse cx="100" cy="142" rx="36" ry="38" fill="#8B5CF6" opacity="0.55" />
        {/* Head */}
        <circle cx="100" cy="85" r="22" fill="#8B5CF6" opacity="0.7" />
        {/* Arms behind head (relaxed) */}
        <path
          d="M78 105 Q55 75 78 65"
          stroke="#8B5CF6"
          strokeWidth="7"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M122 105 Q145 75 122 65"
          stroke="#8B5CF6"
          strokeWidth="7"
          strokeLinecap="round"
          opacity="0.6"
        />
        {/* Legs crossed (relaxed) */}
        <path
          d="M75 172 Q100 195 140 180"
          stroke="#8B5CF6"
          strokeWidth="7"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M125 172 Q105 200 70 188"
          stroke="#8B5CF6"
          strokeWidth="7"
          strokeLinecap="round"
          opacity="0.5"
        />
        {/* Smile */}
        <path
          d="M90 90 Q100 98 110 90"
          stroke="#E8E4DC"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
        />
      </motion.svg>

      {/* ── 5-star rating ── */}
      <motion.div
        className="absolute top-[30px] left-[50%] -translate-x-1/2 flex gap-1"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.span
            key={i}
            className="text-xl"
            style={{ color: "#FBBF24", textShadow: "0 0 10px #FBBF2466" }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.8 + i * 0.12,
              type: "spring",
              stiffness: 300,
            }}
          >
            ★
          </motion.span>
        ))}
      </motion.div>

      {/* ── Floating £ coins ── */}
      <FloatingCoin delay={2} x={30} />
      <FloatingCoin delay={2.6} x={80} />
      <FloatingCoin delay={3.2} x={290} />
      <FloatingCoin delay={3.8} x={340} />
      <FloatingCoin delay={2.3} x={180} />

      {/* ── Notification cards ── */}
      <NotifCard
        icon="📞"
        text="Missed call caught"
        color="#00E5FF"
        delay={2.0}
        x={-20}
        y={60}
      />
      <NotifCard
        icon="📅"
        text="New booking confirmed"
        color="#8B5CF6"
        delay={2.4}
        x={240}
        y={120}
      />
      <NotifCard
        icon="⭐"
        text="5-star review posted"
        color="#FBBF24"
        delay={2.8}
        x={-10}
        y={200}
      />
      <NotifCard
        icon="💷"
        text="+£320 revenue today"
        color="#00E5FF"
        delay={3.2}
        x={230}
        y={280}
      />
    </div>
  );
}

const items = [
  "Local SEO", "Google Business Profile", "AI Voice Receptionist", "AI Chat & SMS",
  "Lead-Gen Websites", "Landing Pages", "Missed-Call Text-Back", "Email & SMS Nurture",
  "Review Engine", "Reputation Monitoring", "CRM & Pipeline", "Booking & Calendar",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <section aria-hidden className="border-y border-[color:var(--color-border)] bg-[color:var(--color-surface)] py-5 overflow-hidden">
      <div className="flex whitespace-nowrap marquee gap-10 text-[4vw] md:text-[2.4vw] font-display font-bold leading-none text-[color:var(--color-text)]/80">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            <span>{t}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-lime)]" />
          </span>
        ))}
      </div>
    </section>
  );
}

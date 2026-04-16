import { notFound } from "next/navigation";
import { readFileSync, existsSync } from "fs";
import { join } from "path";
import type { Metadata } from "next";

interface DemoData {
  slug: string;
  businessName: string;
  category: string;
  address: string;
  phone: string;
  rating: number;
  reviewCount: number;
  hours: string | null;
  photos: string[];
  description: string;
  services: string[];
}

async function getDemoData(slug: string): Promise<DemoData | null> {
  const filePath = join(process.cwd(), "public", "demo-data", `${slug}.json`);
  if (!existsSync(filePath)) return null;
  return JSON.parse(readFileSync(filePath, "utf-8"));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = await getDemoData(slug);
  if (!data) return {};
  return {
    title: `${data.businessName} — ${data.category}`,
    description: data.description,
  };
}

function Stars({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <svg key={i} width="20" height="20" viewBox="0 0 20 20" className={i <= Math.round(rating) ? "text-[#FACC15]" : "text-[#333]"}>
            <path fill="currentColor" d="M10 1.12l2.47 5.01 5.53.8-4 3.9.94 5.5L10 13.77l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.12z" />
          </svg>
        ))}
      </div>
      <span className="text-[color:var(--color-text)] font-display font-bold text-lg">{rating}</span>
      <span className="text-[color:var(--color-text-dim)] text-sm">({count} reviews)</span>
    </div>
  );
}

function parseHours(hoursJson: string | null): { day: string; time: string }[] {
  if (!hoursJson) return [];
  try {
    const obj = JSON.parse(hoursJson);
    const order = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    return order.map((d) => ({
      day: d.charAt(0).toUpperCase() + d.slice(1, 3),
      time: obj[d] ?? "—",
    }));
  } catch {
    return [];
  }
}

export default async function DemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getDemoData(slug);
  if (!data) notFound();

  const tel = data.phone?.replace(/[^\d+]/g, "");
  const hours = parseHours(data.hours);
  const mapQuery = encodeURIComponent(data.address);

  return (
    <main className="min-h-screen bg-[color:var(--color-void)] text-[color:var(--color-text)] overflow-hidden">

      {/* ━━━ HERO ━━━ */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-24">
        {/* Ambient blobs */}
        <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-[color:var(--color-lime)] opacity-[0.04] blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[color:var(--color-warm)] opacity-[0.03] blur-[120px] pointer-events-none" />

        {/* Decorative grid lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Category pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[color:var(--color-lime)]/20 bg-[color:var(--color-lime)]/[0.06] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-lime)] animate-pulse" />
            <span className="text-[color:var(--color-lime)] text-xs font-medium tracking-[0.2em] uppercase">{data.category}</span>
          </div>

          {/* Business name */}
          <h1 className="font-display font-bold text-[12vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] leading-[0.95] tracking-[-0.03em] mb-6">
            {data.businessName.split(" ").map((word, i) => (
              <span key={i}>
                {i === Math.floor(data.businessName.split(" ").length / 2) ? (
                  <span className="grad-lime">{word}</span>
                ) : (
                  word
                )}{" "}
              </span>
            ))}
          </h1>

          {/* Address */}
          <p className="text-[color:var(--color-text-dim)] text-base md:text-lg mb-6 flex items-center justify-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[color:var(--color-lime)]">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
            {data.address}
          </p>

          {/* Rating */}
          {data.rating > 0 && (
            <div className="flex justify-center mb-10">
              <div className="inline-flex items-center gap-4 px-5 py-3 rounded-2xl bg-[color:var(--color-surface)] border border-[color:var(--color-border)]">
                <svg width="20" height="20" viewBox="0 0 24 24" className="text-[color:var(--color-text-dim)]">
                  <path fill="currentColor" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
                <Stars rating={data.rating} count={data.reviewCount} />
              </div>
            </div>
          )}

          {/* CTA */}
          {tel && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${tel}`}
                className="group relative inline-flex items-center gap-3 bg-[color:var(--color-lime)] text-[color:var(--color-void)] font-display font-bold px-10 py-5 rounded-full text-lg transition-all duration-500 hover:shadow-[0_0_60px_rgba(184,255,0,0.4)] hover:-translate-y-1"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:animate-bounce">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                Call Now
                <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[color:var(--color-warm)] animate-ping" />
              </a>
              <span className="text-[color:var(--color-text-faint)] text-sm">{data.phone}</span>
            </div>
          )}
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="label text-[9px]">Explore</span>
          <div className="w-px h-7 bg-gradient-to-b from-[color:var(--color-lime)] to-transparent scroll-indicator" />
        </div>
      </section>

      {/* ━━━ ABOUT ━━━ */}
      <section className="relative px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20 items-start">
          <div>
            <div className="label mb-4">About</div>
            <h2 className="font-display text-[8vw] md:text-[3vw] leading-[1.05] mb-6">
              Welcome to<br /><span className="grad-lime">{data.businessName}</span>
            </h2>
          </div>
          <div className="pt-2">
            <p className="text-[color:var(--color-text-dim)] text-lg leading-relaxed mb-8">{data.description}</p>
            {hours.length > 0 && (
              <div className="card p-5">
                <div className="label mb-3">Opening hours</div>
                <div className="grid grid-cols-7 gap-1">
                  {hours.map((h) => {
                    const isOpen = h.time !== "Closed" && h.time !== "—";
                    return (
                      <div key={h.day} className={`text-center py-2 px-1 rounded-lg ${isOpen ? "bg-[color:var(--color-lime)]/[0.06]" : "bg-white/[0.02]"}`}>
                        <div className={`text-[10px] font-bold tracking-wider uppercase mb-1 ${isOpen ? "text-[color:var(--color-lime)]" : "text-[color:var(--color-text-faint)]"}`}>{h.day}</div>
                        <div className="text-[10px] text-[color:var(--color-text-dim)] leading-tight">{h.time.replace("AM", "am").replace("PM", "pm").replace("–", "\u2009–\u2009")}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ━━━ SERVICES ━━━ */}
      <section className="relative px-6 py-20 md:py-28 bg-[color:var(--color-surface)]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[color:var(--color-lime)]/20 to-transparent" />
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="label mb-4">What we do</div>
            <h2 className="font-display text-[8vw] md:text-[3.5vw] leading-[1.05]">
              Our <span className="grad-lime">Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.services.map((service, i) => (
              <div
                key={service}
                className="group card p-6 flex items-start gap-4 hover:border-[color:var(--color-lime)]/30 transition-all duration-500"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-[color:var(--color-lime)]/10 border border-[color:var(--color-lime)]/20 flex items-center justify-center text-[color:var(--color-lime)] font-display font-bold text-sm group-hover:bg-[color:var(--color-lime)]/20 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-base mb-1 group-hover:text-[color:var(--color-lime)] transition-colors">{service}</h3>
                  <div className="w-8 h-px bg-[color:var(--color-lime)]/30 group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ TRUST / SOCIAL PROOF ━━━ */}
      {data.rating > 0 && (
        <section className="px-6 py-20 md:py-28">
          <div className="max-w-5xl mx-auto">
            <div className="card p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[color:var(--color-lime)] opacity-[0.03] blur-[80px] pointer-events-none" />
              <div className="relative grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="font-display font-bold text-5xl md:text-6xl grad-lime mb-2">{data.rating}</div>
                  <div className="flex justify-center mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} width="18" height="18" viewBox="0 0 20 20" className={i <= Math.round(data.rating) ? "text-[#FACC15]" : "text-[#333]"}>
                        <path fill="currentColor" d="M10 1.12l2.47 5.01 5.53.8-4 3.9.94 5.5L10 13.77l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.12z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-[color:var(--color-text-dim)] text-sm">Google Rating</div>
                </div>
                <div>
                  <div className="font-display font-bold text-5xl md:text-6xl text-[color:var(--color-text)] mb-2">{data.reviewCount}+</div>
                  <div className="text-[color:var(--color-text-dim)] text-sm">Verified Reviews</div>
                </div>
                <div>
                  <div className="font-display font-bold text-5xl md:text-6xl text-[color:var(--color-text)] mb-2">{data.services.length}</div>
                  <div className="text-[color:var(--color-text-dim)] text-sm">Professional Services</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ━━━ MAP + CONTACT ━━━ */}
      <section className="relative px-6 py-20 md:py-28 bg-[color:var(--color-surface)]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[color:var(--color-lime)]/20 to-transparent" />
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="label mb-4">Find us</div>
            <h2 className="font-display text-[8vw] md:text-[3.5vw] leading-[1.05]">
              Visit <span className="grad-lime">{data.businessName.split(" ")[0]}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-[1fr_1fr] gap-6">
            {/* Map */}
            <div className="card overflow-hidden aspect-[4/3] md:aspect-auto">
              <iframe
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="w-full h-full min-h-[300px] border-0 grayscale contrast-125 opacity-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location map"
              />
            </div>

            {/* Contact card */}
            <div className="card p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-2xl mb-6">Get in touch</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[color:var(--color-lime)]/10 flex items-center justify-center shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[color:var(--color-lime)]">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-[color:var(--color-text-faint)] uppercase tracking-wider mb-1">Address</div>
                      <div className="text-[color:var(--color-text-dim)]">{data.address}</div>
                    </div>
                  </div>
                  {data.phone && (
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[color:var(--color-lime)]/10 flex items-center justify-center shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[color:var(--color-lime)]">
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-[color:var(--color-text-faint)] uppercase tracking-wider mb-1">Phone</div>
                        <a href={`tel:${tel}`} className="text-[color:var(--color-lime)] hover:underline font-medium">{data.phone}</a>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {tel && (
                <a
                  href={`tel:${tel}`}
                  className="group relative w-full inline-flex items-center justify-center gap-3 bg-[color:var(--color-lime)] text-[color:var(--color-void)] font-display font-bold px-8 py-5 rounded-2xl text-lg transition-all duration-500 hover:shadow-[0_0_60px_rgba(184,255,0,0.35)] hover:-translate-y-1"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  Call {data.businessName}
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[color:var(--color-warm)] animate-ping" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ STICKY MOBILE CTA ━━━ */}
      {tel && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-3 md:hidden bg-gradient-to-t from-[color:var(--color-void)] via-[color:var(--color-void)]/95 to-transparent pt-8">
          <a
            href={`tel:${tel}`}
            className="flex items-center justify-center gap-3 w-full bg-[color:var(--color-lime)] text-[color:var(--color-void)] font-display font-bold py-4 rounded-2xl text-lg shadow-[0_0_40px_rgba(184,255,0,0.3)]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            Call Now &mdash; {data.phone}
          </a>
        </div>
      )}

      {/* ━━━ FOOTER ━━━ */}
      <footer className="relative px-6 pt-16 pb-24 md:pb-10 text-center">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[color:var(--color-border)] to-transparent" />

        <div className="max-w-md mx-auto">
          <p className="text-[color:var(--color-text-faint)] text-sm mb-3">
            This website preview was built by
          </p>
          <a href="https://kerblabs.com" className="inline-flex items-center gap-1 font-display font-bold text-xl text-[color:var(--color-text)] hover:text-[color:var(--color-lime)] transition-colors">
            kerblabs<span className="text-[color:var(--color-lime)]">.</span>
          </a>
          <p className="text-[color:var(--color-text-faint)] text-xs mt-2 mb-6">Full-stack AI marketing for local shops</p>
          <a
            href="https://calendly.com/chandraalladi07/30min"
            className="btn-primary text-sm"
          >
            Want a site like this? Book a free demo
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
        </div>
      </footer>
    </main>
  );
}

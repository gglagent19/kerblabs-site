import { notFound } from "next/navigation";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

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

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return (
    <span className="text-yellow-400 text-lg">
      {"★".repeat(full)}
      {half ? "½" : ""}
      {"☆".repeat(empty)}
    </span>
  );
}

async function getDemoData(slug: string): Promise<DemoData | null> {
  const filePath = join(process.cwd(), "public", "demo-data", `${slug}.json`);
  if (!existsSync(filePath)) return null;
  return JSON.parse(readFileSync(filePath, "utf-8"));
}

export default async function DemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getDemoData(slug);
  if (!data) notFound();

  const tel = data.phone?.replace(/[^\d+]/g, "");

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="relative px-6 py-20 md:py-32 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#c8ff00]/5 to-transparent" />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-[#c8ff00] text-sm font-mono tracking-widest uppercase mb-4">{data.category}</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{data.businessName}</h1>
          <p className="text-gray-400 text-lg mb-4">{data.address}</p>
          {data.rating > 0 && (
            <div className="flex items-center justify-center gap-2 mb-8">
              <StarRating rating={data.rating} />
              <span className="text-gray-400">({data.reviewCount} reviews)</span>
            </div>
          )}
          {tel && (
            <a
              href={`tel:${tel}`}
              className="inline-flex items-center gap-2 bg-[#c8ff00] text-black font-bold px-8 py-4 rounded-full text-lg hover:bg-[#b8ef00] transition"
            >
              📞 Call Now
            </a>
          )}
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-16 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-gray-400 leading-relaxed">{data.description}</p>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-16 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.services.map((s) => (
              <div key={s} className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                <span className="text-[#c8ff00]">✓</span>
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-16 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 mb-2">{data.address}</p>
          {tel && <p className="text-gray-400 mb-6">📞 <a href={`tel:${tel}`} className="text-[#c8ff00] hover:underline">{data.phone}</a></p>}
          {tel && (
            <a
              href={`tel:${tel}`}
              className="inline-flex items-center gap-2 bg-[#c8ff00] text-black font-bold px-8 py-4 rounded-full text-lg hover:bg-[#b8ef00] transition"
            >
              Call {data.businessName}
            </a>
          )}
        </div>
      </section>

      {/* Powered by */}
      <footer className="px-6 py-8 border-t border-white/10 text-center">
        <p className="text-gray-600 text-sm">
          This preview was built by{" "}
          <a href="https://kerblabs.com" className="text-[#c8ff00] hover:underline">
            Kerblabs
          </a>{" "}
          — Full-stack AI marketing for local shops
        </p>
        <p className="text-gray-700 text-xs mt-2">
          Want a site like this? <a href="https://calendly.com/chandraalladi07/30min" className="text-[#c8ff00] hover:underline">Book a free demo</a>
        </p>
      </footer>
    </main>
  );
}

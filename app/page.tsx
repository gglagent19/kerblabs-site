import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import SolutionSection from "@/components/SolutionSection";
import Link from "next/link";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import CaseStudy from "@/components/CaseStudy";
import ReviewRescue from "@/components/ReviewRescue";
import WhyKerblabs from "@/components/WhyKerblabs";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import Schema from "@/components/seo/Schema";
import { getAlternates } from "@/lib/hreflang";

// Homepage is UK-primary today. A US-localised homepage does not yet exist,
// so we emit self-referential en-GB + x-default only. When a US homepage
// lands, swap to `getAlternatesWithRegions` and add the en-US URL.
export const metadata: Metadata = {
  alternates: getAlternates("/", "GB"),
};

export default function Page() {
  return (
    <main className="relative">
      <Schema includeWebsite />
      <Nav />
      <Hero />
      <StorySection />
      <SolutionSection />
      <Marquee />

      {/* Sprint CTA — body anchor for /sprint so the flagship offer isn't orphaned */}
      <section className="px-6 md:px-10 py-12 md:py-16 border-y border-[color:var(--color-border)]">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="label mb-3 text-[color:var(--color-lime)]">NEW · COHORT 1 · FLORIDA MED SPAS</div>
            <h2 className="font-display font-bold text-2xl md:text-3xl leading-tight mb-2">
              The 5 Spa Sprint — five Florida med spas, sixty days, <span className="grad-lime">one public leaderboard.</span>
            </h2>
            <p className="text-sm text-[color:var(--color-text-dim)] leading-relaxed">
              $0 upfront. $99 refundable hold. $1,200 only if we hit 2 of 3 Google Business Profile KPIs at Day 60.
              If we miss, you get the hold back and a $500 check on camera. Applications close June 12.
            </p>
          </div>
          <Link
            href="/sprint"
            className="inline-flex items-center gap-2 bg-[color:var(--color-lime)] text-black font-bold pl-5 pr-2 py-2 rounded-full text-sm transition-all hover:gap-3 shrink-0"
          >
            See The 5 Spa Sprint
            <span className="flex items-center justify-center w-8 h-8 bg-black rounded-full">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E1E0CC" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </span>
          </Link>
        </div>
      </section>

      <Services />
      <HowItWorks />
      <CaseStudy />
      <ReviewRescue />
      <WhyKerblabs />
      <Pricing />
      <Footer />
    </main>
  );
}

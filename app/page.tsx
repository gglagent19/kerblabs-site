import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import SolutionSection from "@/components/SolutionSection";
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

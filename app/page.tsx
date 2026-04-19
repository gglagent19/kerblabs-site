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

export default function Page() {
  return (
    <main className="relative">
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

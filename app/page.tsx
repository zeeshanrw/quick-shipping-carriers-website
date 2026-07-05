import Hero from "@/components/Hero";
import TrustPillars from "@/components/TrustPillars";
import ServicesOverview from "@/components/ServicesOverview";
import Stats from "@/components/Stats";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <TrustPillars />
      <ServicesOverview />
      <Stats />
      <CTASection />
    </div>
  );
}
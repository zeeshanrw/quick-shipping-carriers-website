import Hero from "@/components/Hero";
import TrustPillars from "@/components/TrustPillars";
import ServicesOverview from "@/components/ServicesOverview";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <TrustPillars />
      <ServicesOverview />
    </div>
  );
}
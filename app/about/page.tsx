import { MISSION, VISION, COMPANY } from "@/lib/constants";
import { ShieldCheck, Heart, Award, Lightbulb } from "lucide-react";

export const metadata = {
  title: "About Us | Quick Shipping Carriers",
  description:
    "Quick Shipping Carriers is a leading Canadian asset-based logistics company based in the GTA, dedicated to moving your business forward.",
};

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Safety",
    description: "A culture of safety in every mile we drive.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Transparent communication and honest partnerships.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Setting the industry standard in operational quality.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Modern fleet and technology-driven solutions.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero — centered */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
          About {COMPANY.name}
        </h1>
        <p className="text-xl text-gray-medium">
          Delivering excellence, one shipment at a time.
        </p>
      </section>

      {/* Story + Highlight panel side by side */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6 text-lg text-gray-dark leading-relaxed">
            <p>
              Strategically based in the heart of the Greater Toronto Area
              (GTA), {COMPANY.name} is a leading Canadian asset-based
              logistics company dedicated to moving your business forward. We
              are a vital link in the Canadian supply chain, delivering
              reliable and efficient transportation solutions throughout the
              country.
            </p>
            <p>
              At the core of our service is our people and their machines.
              Owning and operating our own equipment — from versatile
              straight trucks for urban deliveries to robust tractor-trailers
              for long-haul freight — gives us unparalleled control over
              quality, timing, and security.
            </p>
            <p>
              Our team of experienced drivers, dispatchers, and logistics
              professionals are the backbone of our operation. At{" "}
              {COMPANY.name}, we don't just move freight; we build lasting
              partnerships founded on trust and exceptional service.
            </p>
          </div>

          {/* Highlight panel */}
          <div className="bg-navy text-white rounded-2xl p-8 flex flex-col justify-center space-y-6">
            <div>
              <p className="text-3xl font-bold">100%</p>
              <p className="text-white/70 text-sm">Asset-Based Fleet</p>
            </div>
            <div className="h-px bg-white/20" />
            <div>
              <p className="text-3xl font-bold">GTA</p>
              <p className="text-white/70 text-sm">Headquarters</p>
            </div>
            <div className="h-px bg-white/20" />
            <div>
              <p className="text-3xl font-bold">Coast-to-Coast</p>
              <p className="text-white/70 text-sm">Canadian Coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision — centered cards */}
      <section className="bg-gray-light py-20">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
            <h2 className="text-2xl font-bold text-navy mb-4">Our Mission</h2>
            <p className="text-gray-dark leading-relaxed">{MISSION}</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
            <h2 className="text-2xl font-bold text-navy mb-4">Our Vision</h2>
            <p className="text-gray-dark leading-relaxed">{VISION}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-navy mb-12">What Drives Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <Icon className="w-8 h-8 text-navy mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold text-navy mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-medium text-sm">{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white py-16 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Ready to put our fleet to work for you?
          </h2>
          
           <a href="/quote"
            className="inline-block bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-accent-dark transition-colors"
          >
            Get a Quote
          </a>
        </div>
      </section>
    </div>
  );
}
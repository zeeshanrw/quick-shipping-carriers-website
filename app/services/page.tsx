import { SERVICES } from "@/lib/constants";
import { Truck, Package, Container, Snowflake, Zap, Warehouse } from "lucide-react";

const ICONS = {
  truck: Truck,
  package: Package,
  flatbed: Container,
  snowflake: Snowflake,
  zap: Zap,
  warehouse: Warehouse,
} as const;

export const metadata = {
  title: "Our Services | Quick Shipping Carriers",
  description:
    "Comprehensive logistics solutions: FTL, LTL, Flatbed, Temperature Controlled, Expedited, and Warehousing.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
          Our Services
        </h1>
        <p className="text-xl text-gray-medium max-w-2xl">
          Comprehensive logistics solutions tailored to your unique shipping
          needs. Whether you're moving a full truckload or a single package,
          we've got you covered.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="space-y-10">
          {SERVICES.map((service, index) => {
            const Icon = ICONS[service.icon as keyof typeof ICONS];
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                className="bg-gray-light rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Content (Left on even, Right on odd) */}
                <div className={isEven ? "md:order-1" : "md:order-2"}>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-8 h-8 text-navy" strokeWidth={1.5} />
                    <h2 className="text-3xl font-bold text-navy">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-medium mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div>
                    <h3 className="font-semibold text-navy mb-3">
                      Key Benefits:
                    </h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-accent font-bold mt-1">✓</span>
                          <span className="text-gray-dark">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Image Placeholder (Right on even, Left on odd) */}
                <div className={isEven ? "md:order-2" : "md:order-1"}>
                  <div className="bg-white rounded-lg h-80 flex items-center justify-center">
                    <p className="text-gray-medium text-center">
                      [{service.title} image placeholder]
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          
           <a href="/quote"
            className="inline-block bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-accent-dark transition-colors"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </div>
  );
}
import { FLEET } from "@/lib/constants";
import { Truck, Container } from "lucide-react";

export const metadata = {
  title: "Our Fleet | Quick Shipping Carriers",
  description:
    "A diverse, modern fleet of straight trucks, tractor-trailers, flatbeds, and reefers serving your unique shipping needs.",
};

export default function FleetPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
          Our Fleet
        </h1>
        <p className="text-xl text-gray-medium">
          Diverse equipment for every shipping need. Owned and operated by our
          own team, giving you full control over quality and timing.
        </p>
      </section>

      {/* Fleet Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FLEET.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-gray-light rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-white h-56 flex items-center justify-center">
                <Truck className="w-16 h-16 text-navy/30" strokeWidth={1} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2">
                  {vehicle.type}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-navy text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {vehicle.count}+ vehicles
                  </span>
                  <span className="bg-white border border-gray-300 text-gray-dark text-xs font-semibold px-3 py-1 rounded-full">
                    {vehicle.capacity}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white py-16 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            See which vehicle fits your shipment
          </h2>
          
          <a  href="/services"
            className="inline-block bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-accent-dark transition-colors"
          >
            View Our Services
          </a>
        </div>
      </section>
    </div>
  );
}
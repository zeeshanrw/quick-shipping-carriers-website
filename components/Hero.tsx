import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left: Text */}
      <div>
        <h1 className="text-5xl md:text-6xl font-bold text-navy mb-4 leading-tight">
          Your Logistics Experts: Safe, Reliable, And Fast.
        </h1>
        <p className="text-xl text-gray-medium mb-8 leading-relaxed">
          Enterprise-grade shipping solutions for companies that demand excellence. Serving North America from the GTA.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/quote"
            className="bg-navy text-white px-8 py-3 rounded-full font-semibold hover:bg-navy-light transition-colors text-center"
          >
            Get a Quote
          </Link>
          <Link
            href="#services"
            className="border-2 border-navy text-navy px-8 py-3 rounded-full font-semibold hover:bg-navy hover:text-white transition-colors text-center"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Right: Image placeholder */}
      <div className="bg-gray-light rounded-lg h-96 flex items-center justify-center">
        <p className="text-gray-medium text-center">
          [Hero truck image will go here]
        </p>
      </div>
    </section>
  );
}
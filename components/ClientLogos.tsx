"use client";

const PLACEHOLDER_COUNT = 8;

export default function ClientLogos() {
  const logos = Array.from({ length: PLACEHOLDER_COUNT });

  return (
    <section className="py-16 bg-gray-light overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-semibold text-gray-medium uppercase tracking-wide">
          Trusted by companies across North America
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="flex animate-scroll gap-12 pr-12">
          {[...logos, ...logos].map((_, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-40 h-20 bg-white border border-gray-200 rounded-lg flex items-center justify-center"
            >
              <span className="text-gray-medium text-xs">Client Logo</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
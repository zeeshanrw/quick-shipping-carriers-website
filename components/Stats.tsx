import { STATS } from "@/lib/constants";

export default function Stats() {
  return (
    <section className="bg-navy py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <p className="text-4xl md:text-5xl font-bold text-white mb-2">
              {stat.value}
            </p>
            <p className="text-white/70">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
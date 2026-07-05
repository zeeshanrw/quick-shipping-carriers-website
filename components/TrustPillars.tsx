import { ShieldCheck, BadgeCheck, Zap } from "lucide-react";
import { TRUST_PILLARS } from "@/lib/constants";

const ICONS = {
  ShieldCheck,
  BadgeCheck,
  Zap,
} as const;

export default function TrustPillars() {
  return (
    <section className="bg-gray-light py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl text-center mb-12">
          Why Choose QS Carriers?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRUST_PILLARS.map((pillar) => {
            const Icon = ICONS[pillar.icon as keyof typeof ICONS];
            return (
              <div
                key={pillar.title}
                className="bg-white rounded-lg p-8 text-center shadow-sm"
              >
                <Icon className="w-10 h-10 text-navy mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="text-xl mb-2">{pillar.title}</h3>
                <p className="text-gray-medium">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import { Truck, Package, Container, Snowflake, Zap, Warehouse } from "lucide-react";
import type { Service } from "@/lib/types";

const ICONS = {
  truck: Truck,
  package: Package,
  flatbed: Container,
  snowflake: Snowflake,
  zap: Zap,
  warehouse: Warehouse,
} as const;

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = ICONS[service.icon as keyof typeof ICONS] ?? Truck;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md hover:-translate-y-1 transition-all">
      <Icon className="w-8 h-8 text-navy mb-4" strokeWidth={1.5} />
      <h3 className="text-lg font-semibold text-navy mb-2">{service.title}</h3>
      <p className="text-gray-medium text-sm leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}
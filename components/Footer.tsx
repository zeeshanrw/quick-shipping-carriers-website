import Link from "next/link";
import { COMPANY, NAVIGATION } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-2">{COMPANY.name}</h3>
          <p className="text-white/70">{COMPANY.tagline}</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {NAVIGATION.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/70 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-white/70">
            <a href={`tel:${COMPANY.phone}`} className="hover:text-white">
              {COMPANY.phone}
            </a>
          </p>
          <p className="text-white/70">
            <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
              {COMPANY.email}
            </a>
          </p>
          <p className="text-white/70 mt-2">{COMPANY.address}</p>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} {COMPANY.name}. All Rights Reserved.
      </div>
    </footer>
  );
}
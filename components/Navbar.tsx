"use client";

import Link from "next/link";
import { useState } from "react";
import { NAVIGATION, COMPANY } from "@/lib/constants";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-navy">
          {COMPANY.name}
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAVIGATION.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-gray-dark hover:text-navy transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/quote"
          className="hidden md:inline-block bg-navy text-white px-5 py-2.5 rounded-full font-medium hover:bg-navy-light transition-colors"
        >
          Request Quote
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-navy mb-1.5"></span>
          <span className="block w-6 h-0.5 bg-navy mb-1.5"></span>
          <span className="block w-6 h-0.5 bg-navy"></span>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6">
          {NAVIGATION.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block text-gray-dark hover:text-navy"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/quote"
              className="block bg-navy text-white px-5 py-2.5 rounded-full text-center font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Request Quote
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
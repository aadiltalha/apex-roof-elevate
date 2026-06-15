import { Phone, Calendar } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { BRAND } from "@/data/site";

export function FloatingActions() {
  return (
    <>
      {/* Mobile sticky call bar */}
      <a
        href={BRAND.phoneHref}
        className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-gradient-to-r from-[var(--roof-red)] to-[var(--roof-red-dark)] text-white font-semibold flex items-center justify-center gap-2 py-3.5 shadow-[0_-8px_24px_-8px_rgba(0,0,0,0.25)]"
      >
        <Phone className="w-4 h-4" /> Call Now · {BRAND.phone}
      </a>

      {/* Desktop floating CTA */}
      <Link
        to="/contact"
        className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2 px-5 py-3.5 rounded-full bg-gradient-to-br from-[var(--roof-red)] to-[var(--roof-red-dark)] text-white font-semibold shadow-red-glow hover:scale-105 transition-transform animate-pulse-ring"
      >
        <Calendar className="w-4 h-4" /> Get Free Inspection
      </Link>
    </>
  );
}

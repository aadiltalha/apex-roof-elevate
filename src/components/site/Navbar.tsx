import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Star } from "lucide-react";
import { BRAND } from "@/data/site";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/reviews", label: "Reviews" },
  { to: "/financing", label: "Financing" },
  { to: "/insurance", label: "Insurance" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-[var(--navy-deep)] text-white/80 text-xs">
        <div className="container mx-auto max-w-7xl px-6 flex items-center justify-between h-9">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 fill-[var(--gold)] text-[var(--gold)]" />
              <strong className="text-white">{BRAND.rating}</strong> · {BRAND.reviews.toLocaleString()} Google reviews
            </span>
            <span className="text-white/40">|</span>
            <span>Licensed · Insured · GAF Master Elite®</span>
          </div>
          <a href={BRAND.phoneHref} className="hover:text-white transition-colors">
            24/7 Emergency: <strong className="text-white">{BRAND.phone}</strong>
          </a>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-white/85 backdrop-blur-xl border-b border-black/5 shadow-card"
            : "bg-white/0 border-b border-transparent",
        )}
      >
        <div className="container mx-auto max-w-7xl px-6 flex items-center justify-between h-18 py-3">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--roof-red)] to-[var(--roof-red-dark)] grid place-items-center shadow-red-glow group-hover:scale-105 transition-transform">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                  <path d="M12 2L2 11h3v9h6v-6h2v6h6v-9h3L12 2z" />
                </svg>
              </div>
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg font-bold text-[var(--navy-deep)]">APEX</div>
              <div className="text-[10px] tracking-[0.18em] font-semibold text-[var(--roof-red)] -mt-0.5">
                ROOFING & RESTORATION
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-3 py-2 text-sm font-medium text-[var(--navy)] hover:text-[var(--roof-red)] transition-colors rounded-md"
                activeProps={{ className: "text-[var(--roof-red)]" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={BRAND.phoneHref}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-br from-[var(--roof-red)] to-[var(--roof-red-dark)] text-white font-semibold text-sm shadow-red-glow hover:scale-[1.03] transition-transform"
            >
              <Phone className="w-4 h-4" />
              {BRAND.phone}
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden p-2 text-[var(--navy)]"
              aria-label="Menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden bg-white border-t border-black/5 animate-fade-in">
            <nav className="container mx-auto max-w-7xl px-6 py-4 flex flex-col">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base font-medium text-[var(--navy)] border-b border-black/5 last:border-0"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={BRAND.phoneHref}
                className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-br from-[var(--roof-red)] to-[var(--roof-red-dark)] text-white font-semibold shadow-red-glow"
              >
                <Phone className="w-4 h-4" />
                Call {BRAND.phone}
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

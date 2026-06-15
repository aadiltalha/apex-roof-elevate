import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Star } from "lucide-react";
import { BRAND, SERVICE_AREAS, SERVICES } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[var(--navy-deep)] text-white/70 pt-20 pb-8">
      <div className="container mx-auto max-w-7xl px-6 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--roof-red)] to-[var(--roof-red-dark)] grid place-items-center shadow-red-glow">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                <path d="M12 2L2 11h3v9h6v-6h2v6h6v-9h3L12 2z" />
              </svg>
            </div>
            <div className="leading-tight">
              <div className="font-display text-xl font-bold text-white">APEX</div>
              <div className="text-[10px] tracking-[0.18em] font-semibold text-[var(--gold)] -mt-0.5">
                ROOFING & RESTORATION
              </div>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-5">
            Texas's most trusted roofing contractor. 5,000+ roofs replaced. Lifetime warranty.
            GAF Master Elite® certified.
          </p>
          <div className="flex items-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" />
            ))}
            <span className="text-sm text-white/90 ml-1">
              {BRAND.rating} · {BRAND.reviews.toLocaleString()} reviews
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a aria-label="Facebook" href="#" className="w-9 h-9 rounded-full grid place-items-center bg-white/5 hover:bg-[var(--roof-red)] transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a aria-label="Instagram" href="#" className="w-9 h-9 rounded-full grid place-items-center bg-white/5 hover:bg-[var(--roof-red)] transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a aria-label="YouTube" href="#" className="w-9 h-9 rounded-full grid place-items-center bg-white/5 hover:bg-[var(--roof-red)] transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">Services</h4>
          <ul className="space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to="/services" className="hover:text-[var(--gold)] transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">Service Areas</h4>
          <ul className="grid grid-cols-2 gap-y-2 text-sm">
            {SERVICE_AREAS.slice(0, 12).map((c) => (
              <li key={c}>{c}, TX</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">Get in Touch</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <a href={BRAND.phoneHref} className="flex items-start gap-3 hover:text-white">
                <Phone className="w-4 h-4 mt-0.5 text-[var(--roof-red)] shrink-0" />
                <span>
                  <span className="block text-white font-semibold">{BRAND.phone}</span>
                  <span className="text-xs">24/7 Emergency Line</span>
                </span>
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 mt-0.5 text-[var(--roof-red)] shrink-0" />
              <span>{BRAND.email}</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-[var(--roof-red)] shrink-0" />
              <span>{BRAND.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 mt-14 pt-6 border-t border-white/10 text-xs flex flex-col md:flex-row gap-3 justify-between items-center">
        <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved. License #TX-RC-218445.</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}

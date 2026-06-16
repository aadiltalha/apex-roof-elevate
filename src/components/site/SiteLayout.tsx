import { useEffect, useState, type ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";
import { EmergencyBanner } from "./EmergencyBanner";

export function SiteLayout({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 450);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div
        aria-hidden={!loading}
        className={`fixed inset-0 z-[100] grid place-items-center bg-[var(--navy-deep)] transition-opacity duration-500 ${loading ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div className="flex flex-col items-center gap-5">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-white/10" />
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[var(--roof-red)] border-r-[var(--gold)] animate-spin" />
          </div>
          <div className="font-display text-white text-lg tracking-wide">
            Apex <span className="text-[var(--gold)]">Roofing</span>
          </div>
        </div>
      </div>
      <EmergencyBanner />
      <Navbar />
      <main className="flex-1 pb-14 md:pb-0">{children}</main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

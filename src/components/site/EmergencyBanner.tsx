import { CloudLightning, Phone } from "lucide-react";
import { BRAND } from "@/data/site";

export function EmergencyBanner() {
  return (
    <div className="bg-gradient-to-r from-[var(--roof-red-dark)] via-[var(--roof-red)] to-[var(--roof-red-dark)] text-white">
      <div className="container mx-auto max-w-7xl px-6 py-2.5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm">
        <span className="flex items-center gap-2 font-semibold">
          <CloudLightning className="w-4 h-4 animate-pulse" />
          STORM DAMAGE? 24/7 emergency tarping available
        </span>
        <a href={BRAND.phoneHref} className="inline-flex items-center gap-1.5 font-bold underline-offset-4 hover:underline">
          <Phone className="w-3.5 h-3.5" /> {BRAND.phone}
        </a>
      </div>
    </div>
  );
}

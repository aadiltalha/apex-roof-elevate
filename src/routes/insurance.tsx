import { createFileRoute, Link } from "@tanstack/react-router";
import { ClipboardCheck, Camera, Handshake, FileCheck, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import storm from "@/assets/storm-damage.jpg";
import { BRAND } from "@/data/site";

export const Route = createFileRoute("/insurance")({
  head: () => ({
    meta: [
      { title: "Insurance Claim Assistance | Storm & Hail Damage | Apex Roofing" },
      { name: "description", content: "Storm or hail damage? Our certified claim specialists meet your insurance adjuster on-site and maximize your approved claim — you pay only your deductible." },
      { property: "og:title", content: "Insurance Claim Assistance · Apex Roofing" },
      { property: "og:description", content: "We meet your adjuster on the roof and maximize your approved claim." },
    ],
  }),
  component: InsurancePage,
});

const STEPS = [
  { icon: ClipboardCheck, title: "1. Free Damage Assessment", text: "We climb every slope and document every dent, dimple, and missing granule with 4K drone and ground photography." },
  { icon: FileCheck, title: "2. Claim Filing Support", text: "We help you file with State Farm, Allstate, USAA, Farmers, Liberty Mutual, Travelers — every major carrier — and prepare every document." },
  { icon: Handshake, title: "3. Adjuster Meeting On-Site", text: "Our HAAG-certified claim specialist meets your adjuster on the roof to make sure no damage is missed or under-scoped." },
  { icon: Camera, title: "4. Supplement & Approval", text: "If the adjuster's scope is incomplete, we file a supplement with photographic evidence to get the full replacement approved." },
];

function InsurancePage() {
  return (
    <>
      <PageHero
        eyebrow="Insurance Claim Help"
        title={<>Storm damage? You only pay your <span className="gradient-text-gold">deductible</span>.</>}
        subtitle="Filing a roof claim is intimidating. We've handled over 3,200 successful claims and our specialists know every carrier's playbook by heart."
      />

      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <img src={storm} alt="Hail-damaged roof" width={1280} height={800} loading="lazy" className="rounded-2xl shadow-elegant w-full h-auto" />
          <div>
            <span className="text-xs font-bold tracking-[0.22em] uppercase text-[var(--roof-red)]">How it works</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[var(--navy-deep)]">
              The Apex claim process.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              From the first inspection to the final shingle, we handle the entire process so
              you don't have to fight your insurance company alone.
            </p>
            <ol className="mt-8 space-y-5">
              {STEPS.map((s) => (
                <li key={s.title} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--roof-red)] to-[var(--roof-red-dark)] grid place-items-center shrink-0 shadow-red-glow">
                    <s.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--navy-deep)]">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--navy-deep)] text-white">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Don't let damage become a denial.</h2>
          <p className="mt-5 text-white/80 max-w-2xl mx-auto leading-relaxed">
            Most carriers will deny a roof claim after 12 months. If your last big storm was
            recent, we'll inspect for free and tell you honestly if you have a claim — even if
            we don't end up doing the work.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-br from-[var(--roof-red)] to-[var(--roof-red-dark)] text-white font-semibold shadow-red-glow hover:scale-[1.03] transition-transform">
              Free claim consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={BRAND.phoneHref} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass-card font-semibold">
              Call {BRAND.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

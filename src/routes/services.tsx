import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Home as HomeIcon, Shield, Layers, Square, CloudLightning, Wind } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SERVICES } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Roofing Services | Shingle, Metal, Tile & Storm Repair | Apex" },
      { name: "description", content: "Complete residential roofing services in Texas: architectural shingles, standing seam metal, clay tile, storm restoration, gutters & more." },
      { property: "og:title", content: "Roofing Services · Apex Roofing & Restoration" },
      { property: "og:description", content: "Premium shingle, metal, tile, and storm restoration services across the DFW metroplex." },
    ],
  }),
  component: ServicesPage,
});

const iconMap = { Home: HomeIcon, Shield, Layers, Square, CloudLightning, Wind } as const;

const FEATURES = [
  "Free in-home inspection with drone imagery",
  "Written, line-item quotes — never an estimate",
  "Lifetime manufacturer + 25-year workmanship",
  "Same-day or next-day scheduling available",
  "Magnetic nail sweep & full cleanup guarantee",
  "Direct insurance billing on covered claims",
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={<>Premium roofing for every <span className="gradient-text-gold">Texas home</span>.</>}
        subtitle="From a single missing shingle to a full architectural metal install, our crews are GAF Master Elite® certified and backed by the strongest warranty in the industry."
      />

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group rounded-2xl p-7 bg-white border border-black/5 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--navy)] to-[var(--navy-deep)] grid place-items-center mb-5">
                  <Icon className="w-6 h-6 text-[var(--gold)]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[var(--navy-deep)]">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.blurb}</p>
                <div className="mt-5 flex items-center justify-between pt-5 border-t border-black/5">
                  <span className="text-sm font-bold text-[var(--roof-red)]">{s.price}</span>
                  <Link to="/contact" className="text-sm font-semibold text-[var(--navy)] flex items-center gap-1 hover:text-[var(--roof-red)] transition-colors">
                    Get quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="py-20 bg-[var(--navy-deep)] text-white">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Every job, every time.</h2>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-5">
            {FEATURES.map((f) => (
              <div key={f} className="flex items-start gap-3 p-4 rounded-xl glass-card">
                <CheckCircle2 className="w-5 h-5 text-[var(--gold)] mt-0.5 shrink-0" />
                <span className="text-white/90">{f}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-br from-[var(--roof-red)] to-[var(--roof-red-dark)] text-white font-semibold shadow-red-glow hover:scale-[1.03] transition-transform">
              Get my free inspection <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

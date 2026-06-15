import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Users, Wrench, Heart, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { BRAND, STATS } from "@/data/site";
import team from "@/assets/team-1.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Apex Roofing | 27 Years, 5,000+ Roofs, One Family" },
      { name: "description", content: "Founded in 1998, Apex Roofing is a family-owned, GAF Master Elite® contractor that has replaced over 5,000 roofs across Texas." },
      { property: "og:title", content: "About Apex Roofing & Restoration" },
      { property: "og:description", content: "27 years. 5,000+ roofs. A family-owned Texas roofing contractor you can trust." },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Award, title: "Master Elite Craftsmanship", text: "Less than 3% of US roofers earn the GAF Master Elite® designation. We hold ours through annual training and warranty performance." },
  { icon: Users, title: "Family-Owned & Operated", text: "Founded by the Reyes family in 1998 — still answering the phones, still walking every job site, still standing behind every nail." },
  { icon: Wrench, title: "In-House Crews Only", text: "Every roofer wearing an Apex shirt is on our payroll. No subcontractors, no excuses, no quality compromises." },
  { icon: Heart, title: "Community First", text: "Through Roofs For Heroes, we donate a full roof replacement to a Texas veteran or first responder family every quarter." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={<>Three generations. <span className="gradient-text-gold">One promise.</span></>}
        subtitle="What started in 1998 as a single pickup truck and a ladder has grown into Texas's most-trusted residential roofing company — without losing the handshake."
      />

      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <img src={team} alt="Apex Roofing inspector" width={1024} height={1024} loading="lazy" className="rounded-2xl shadow-elegant w-full h-auto" />
          <div>
            <span className="text-xs font-bold tracking-[0.22em] uppercase text-[var(--roof-red)]">Built on trust</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[var(--navy-deep)]">
              The roof over your head is the most important investment in your home.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              {BRAND.name} was founded by Marco Reyes after he installed a roof for his neighbor
              in 1998 — and watched it leak six months later because the contractor cut corners.
              He vowed his company would do the opposite: tear-off every old layer, use only
              premium synthetic underlayment, and stand behind every job with a written
              lifetime warranty. Twenty-seven years and 5,000+ roofs later, we've never had a
              warranty claim denied. That's the Apex standard.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-bold text-[var(--roof-red)]">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[var(--navy-deep)] mb-14">What we stand for.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl p-7 bg-white border border-black/5 shadow-card">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--roof-red)] to-[var(--roof-red-dark)] grid place-items-center mb-5 shadow-red-glow">
                  <v.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display text-lg font-bold text-[var(--navy-deep)]">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-br from-[var(--roof-red)] to-[var(--roof-red-dark)] text-white font-semibold shadow-red-glow hover:scale-[1.03] transition-transform">
              Meet our team on-site <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

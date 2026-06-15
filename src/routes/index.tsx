import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Phone, Star, Shield, Award, ThumbsUp, CheckCircle2, ChevronRight,
  Home, Layers, Square, CloudLightning, Wind, ArrowRight, Quote,
  DollarSign, FileCheck, Clock, MapPin,
} from "lucide-react";
import heroImg from "@/assets/hero-roof.jpg";
import beforeImg from "@/assets/before-1.jpg";
import afterImg from "@/assets/after-1.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import stormImg from "@/assets/storm-damage.jpg";
import { BRAND, SERVICES, TESTIMONIALS, STATS, TRUST_BADGES, FAQS, SERVICE_AREAS } from "@/data/site";
import { QuoteForm } from "@/components/site/QuoteForm";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apex Roofing & Restoration | Free Roof Inspection in 30 Minutes" },
      { name: "description", content: "Texas's #1 roofing contractor. 5,000+ roofs replaced, lifetime warranty, 0% financing & insurance claim experts. Get your free inspection today." },
      { property: "og:title", content: "Apex Roofing & Restoration | Free Inspection" },
      { property: "og:description", content: "5,000+ roofs replaced across Dallas–Fort Worth. Lifetime warranty. Insurance claim specialists." },
    ],
  }),
  component: Home,
});

const iconMap = { Home, Shield, Layers, Square, CloudLightning, Wind } as const;

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`py-20 md:py-28 ${className}`}>{children}</section>;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] uppercase text-[var(--roof-red)]">
      <span className="w-8 h-px bg-[var(--roof-red)]" />
      {children}
    </span>
  );
}

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden text-white">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Apex roofing crew installing premium architectural shingles at sunset"
            className="w-full h-full object-cover animate-slow-zoom"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>

        <div className="container mx-auto max-w-7xl px-6 pt-16 pb-24 grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Now booking inspections this week
            </span>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
              Texas's most trusted{" "}
              <span className="gradient-text-gold">roofers</span>
              <br />
              since 1998.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/85 max-w-xl leading-relaxed">
              5,000+ roofs replaced. Lifetime warranty. Insurance claim specialists. Get a
              free, no-obligation inspection — typically scheduled within 24 hours.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-br from-[var(--roof-red)] to-[var(--roof-red-dark)] text-white font-semibold shadow-red-glow hover:scale-[1.03] transition-transform"
              >
                Get Free Inspection <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={BRAND.phoneHref}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl glass-card font-semibold hover:bg-white/15 transition-colors"
              >
                <Phone className="w-4 h-4" /> {BRAND.phone}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" />
                  ))}
                </div>
                <span className="text-sm text-white/80">
                  {BRAND.rating} ({BRAND.reviews.toLocaleString()} reviews)
                </span>
              </div>
              <span className="text-sm text-white/70 flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[var(--gold)]" /> Lifetime Warranty
              </span>
              <span className="text-sm text-white/70 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[var(--gold)]" /> GAF Master Elite®
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl bg-white text-foreground p-7 shadow-elegant border border-white/40">
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="font-display text-2xl font-bold text-[var(--navy-deep)]">Free Roof Inspection</h3>
                <span className="text-xs font-bold text-[var(--roof-red)]">100% FREE</span>
              </div>
              <p className="text-sm text-muted-foreground mb-5">
                30-second form · We call within 30 minutes
              </p>
              <QuoteForm compact />
            </div>
          </motion.div>
        </div>

        {/* trust strip */}
        <div className="absolute bottom-0 inset-x-0 bg-[var(--navy-deep)]/70 backdrop-blur-md border-t border-white/10">
          <div className="container mx-auto max-w-7xl px-6 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-semibold tracking-wider uppercase text-white/70">
            {TRUST_BADGES.map((b) => (
              <span key={b} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--gold)]" /> {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <Section className="bg-[var(--navy-deep)] text-white !py-14">
        <div className="container mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-4xl md:text-5xl font-bold gradient-text-gold">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-white/70">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section>
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Eyebrow>What We Do</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[var(--navy-deep)]">
              Premium roofing, done right the first time.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Whether it's a quick repair or a full architectural metal install, every job is
              backed by our 25-year workmanship guarantee.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="group relative rounded-2xl p-7 bg-white border border-black/5 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--navy)] to-[var(--navy-deep)] grid place-items-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-[var(--gold)]" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[var(--navy-deep)]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.blurb}</p>
                  <div className="mt-5 flex items-center justify-between pt-5 border-t border-black/5">
                    <span className="text-sm font-semibold text-[var(--roof-red)]">{s.price}</span>
                    <Link to="/services" className="text-sm font-semibold text-[var(--navy)] flex items-center gap-1 hover:text-[var(--roof-red)] transition-colors">
                      Learn more <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* BEFORE / AFTER */}
      <Section className="bg-[var(--navy-deep)] text-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Eyebrow>Real Transformations</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              From storm-battered to <span className="gradient-text-gold">showroom new</span>.
            </h2>
          </div>
          <BeforeAfterSlider />

          <div className="mt-10 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 font-semibold transition-colors"
            >
              View full project gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section>
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <Eyebrow>Recent Projects</Eyebrow>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[var(--navy-deep)]">
                Craftsmanship you can see from the street.
              </h2>
            </div>
            <Link to="/projects" className="text-[var(--roof-red)] font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
              See all projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: project1, title: "Plano Craftsman", tag: "Shingle · 32 sq" },
              { img: project2, title: "Southlake Estate", tag: "Standing Seam Metal" },
              { img: project3, title: "Galveston Coastal", tag: "Spanish Clay Tile" },
            ].map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-elegant transition-shadow"
              >
                <img
                  src={p.img}
                  loading="lazy"
                  width={1280}
                  height={896}
                  alt={p.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)] via-[var(--navy-deep)]/30 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <p className="text-xs font-semibold tracking-wider uppercase text-[var(--gold)]">
                    {p.tag}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-bold">{p.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* COMPARISON */}
      <Section className="bg-secondary/40">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Eyebrow>Why Apex</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[var(--navy-deep)]">
              See how we stack up.
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-black/5 shadow-card bg-white">
            <table className="w-full text-left">
              <thead className="bg-[var(--navy-deep)] text-white text-sm">
                <tr>
                  <th className="p-5 font-semibold">Feature</th>
                  <th className="p-5 font-bold text-[var(--gold)]">Apex Roofing</th>
                  <th className="p-5 font-semibold text-white/80">Typical Roofer</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["GAF Master Elite® certified", true, false],
                  ["Lifetime material + 25yr workmanship", true, false],
                  ["Free in-home inspection", true, true],
                  ["Insurance claim specialists on staff", true, false],
                  ["0% financing for 18 months", true, false],
                  ["Same-day storm response", true, false],
                  ["Drone & 4K photo damage report", true, false],
                  ["Magnetic nail sweep + cleanup guarantee", true, false],
                ].map(([feat, us, them], i) => (
                  <tr key={String(feat)} className={i % 2 ? "bg-secondary/30" : ""}>
                    <td className="p-5 font-medium text-[var(--navy-deep)]">{feat}</td>
                    <td className="p-5">
                      {us ? <CheckCircle2 className="w-5 h-5 text-emerald-600" /> : <span className="text-muted-foreground">—</span>}
                    </td>
                    <td className="p-5">
                      {them ? <CheckCircle2 className="w-5 h-5 text-muted-foreground" /> : <span className="text-muted-foreground">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Eyebrow>What Homeowners Say</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[var(--navy-deep)]">
              {BRAND.reviews.toLocaleString()} families. One {BRAND.rating}★ rating.
            </h2>
            <div className="mt-5 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-secondary/60 text-sm font-medium">
              <svg className="w-5 h-5" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.8-2 13.4-5.2l-6.2-5.2c-2 1.4-4.5 2.4-7.2 2.4-5.2 0-9.6-3.3-11.2-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.2 5.6l6.2 5.2C41.3 35.5 44 30.1 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>
              Verified on Google
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 6).map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl p-7 bg-white border border-black/5 shadow-card relative"
              >
                <Quote className="absolute top-5 right-5 w-8 h-8 text-[var(--gold-soft)]" />
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" />
                  ))}
                </div>
                <blockquote className="text-sm text-foreground/80 leading-relaxed">"{t.text}"</blockquote>
                <figcaption className="mt-5 pt-5 border-t border-black/5">
                  <div className="font-semibold text-[var(--navy-deep)]">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.city} · {t.project}</div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </Section>

      {/* FINANCING & INSURANCE */}
      <Section className="bg-secondary/40">
        <div className="container mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-6">
          <Link to="/financing" className="group relative overflow-hidden rounded-2xl p-10 bg-gradient-to-br from-[var(--navy)] to-[var(--navy-deep)] text-white shadow-elegant hover:scale-[1.01] transition-transform">
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[var(--gold)]/15 blur-3xl" />
            <DollarSign className="w-10 h-10 text-[var(--gold)]" />
            <h3 className="mt-5 font-display text-3xl font-bold">0% Financing for 18 Months</h3>
            <p className="mt-3 text-white/80 max-w-md">
              New roof from $89/month. Approval in under 60 seconds with a soft credit pull.
              Plans up to 15 years through GreenSky® & SFC.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 font-semibold text-[var(--gold)] group-hover:gap-3 transition-all">
              See financing options <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

          <Link to="/insurance" className="group relative overflow-hidden rounded-2xl p-10 text-white shadow-elegant hover:scale-[1.01] transition-transform">
            <img src={stormImg} alt="Storm damage" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1280} height={800} />
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--roof-red-dark)]/90 to-[var(--navy-deep)]/90" />
            <div className="relative">
              <FileCheck className="w-10 h-10 text-[var(--gold)]" />
              <h3 className="mt-5 font-display text-3xl font-bold">Storm or Hail Damage?</h3>
              <p className="mt-3 text-white/85 max-w-md">
                Our claim specialists meet your adjuster on-site, document every dent with drone
                imagery, and maximize your approved RCV — typically you only pay your deductible.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-[var(--gold)] group-hover:gap-3 transition-all">
                Start your claim <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </div>
      </Section>

      {/* SERVICE AREAS */}
      <Section>
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Eyebrow>Service Areas</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[var(--navy-deep)]">
              Proudly serving the DFW metroplex.
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {SERVICE_AREAS.map((c) => (
              <span key={c} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-secondary/60 text-sm font-medium text-[var(--navy-deep)] hover:bg-[var(--navy-deep)] hover:text-white transition-colors">
                <MapPin className="w-3.5 h-3.5" /> {c}, TX
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-secondary/40">
        <div className="container mx-auto max-w-3xl px-6">
          <div className="text-center mb-12">
            <Eyebrow>Common Questions</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[var(--navy-deep)]">
              Everything you'd ask a contractor.
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-black/5 bg-white rounded-xl px-5 shadow-card data-[state=open]:shadow-elegant">
                <AccordionTrigger className="text-left font-semibold text-[var(--navy-deep)] hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section className="!py-24 relative overflow-hidden bg-[var(--navy-deep)] text-white">
        <div className="absolute inset-0 opacity-25">
          <img src={heroImg} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, var(--navy-deep) 30%, transparent)" }} />
        <div className="container relative mx-auto max-w-4xl px-6 text-center">
          <Eyebrow>Ready When You Are</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
            Your new roof starts with a <span className="gradient-text-gold">free inspection</span>.
          </h2>
          <p className="mt-5 text-white/80 max-w-xl mx-auto text-lg">
            We'll be on your property within 24 hours with a written, line-item quote — no
            pressure, no obligation, no games.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-br from-[var(--roof-red)] to-[var(--roof-red-dark)] text-white font-semibold shadow-red-glow hover:scale-[1.03] transition-transform">
              Schedule My Inspection <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={BRAND.phoneHref} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass-card font-semibold">
              <Phone className="w-4 h-4" /> {BRAND.phone}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs uppercase tracking-wider text-white/60">
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[var(--gold)]" /> 30-min response</span>
            <span className="flex items-center gap-1.5"><ThumbsUp className="w-3.5 h-3.5 text-[var(--gold)]" /> No obligation</span>
            <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-[var(--gold)]" /> Licensed & insured</span>
          </div>
        </div>
      </Section>
    </>
  );
}

function BeforeAfterSlider() {
  const [pos, setPos] = useState(50);
  return (
    <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-elegant select-none">
      <img src={afterImg} alt="After roof replacement" width={1024} height={768} loading="lazy" className="block w-full h-auto" />
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={beforeImg} alt="Before roof replacement" width={1024} height={768} loading="lazy" className="block w-full h-full object-cover" />
      </div>
      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[var(--roof-red)] text-white text-xs font-bold tracking-wider">BEFORE</div>
      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold tracking-wider">AFTER</div>
      <div className="absolute inset-y-0 pointer-events-none" style={{ left: `${pos}%` }}>
        <div className="w-1 h-full bg-white shadow-lg -translate-x-1/2" />
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white grid place-items-center shadow-elegant">
          <ChevronRight className="w-4 h-4 text-[var(--navy)] -rotate-180" />
          <ChevronRight className="w-4 h-4 text-[var(--navy)] absolute" />
        </div>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Before/after slider"
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
      />
    </div>
  );
}

const Home = HomePage;

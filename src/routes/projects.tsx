import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Calendar, DollarSign, Layers, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { PROJECTS } from "@/data/site";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Project Portfolio | Apex Roofing & Restoration" },
      { name: "description", content: "Real Apex Roofing projects across Texas — from craftsman shingle restorations to luxury standing seam metal installs." },
      { property: "og:title", content: "Recent Roofing Projects · Apex Roofing" },
      { property: "og:description", content: "See real before/after roofing projects across the DFW metroplex." },
    ],
  }),
  component: ProjectsPage,
});

const imgMap = { project1: p1, project2: p2, project3: p3 };

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Project Portfolio"
        title={<>Real homes. Real <span className="gradient-text-gold">results</span>.</>}
        subtitle="A small selection of recent Apex projects across the DFW metroplex. Every photo is an actual customer, every number is verified."
      />

      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6 space-y-16">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div>
                <img
                  src={imgMap[p.image as keyof typeof imgMap]}
                  alt={p.title}
                  width={1280}
                  height={896}
                  loading="lazy"
                  className="rounded-2xl shadow-elegant w-full h-auto"
                />
              </div>
              <div>
                <span className="text-xs font-bold tracking-[0.22em] uppercase text-[var(--roof-red)]">Case Study {String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[var(--navy-deep)]">{p.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{p.story}</p>
                <dl className="mt-6 grid grid-cols-2 gap-5">
                  <Stat icon={MapPin} label="Location" value={p.location} />
                  <Stat icon={Layers} label="Material" value={p.material} />
                  <Stat icon={Calendar} label="Timeline" value={`${p.days} days · ${p.squares} squares`} />
                  <Stat icon={DollarSign} label="Project Value" value={p.value} />
                </dl>
              </div>
            </motion.article>
          ))}

          <div className="text-center pt-8">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-br from-[var(--roof-red)] to-[var(--roof-red-dark)] text-white font-semibold shadow-red-glow hover:scale-[1.03] transition-transform">
              Start your project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-9 h-9 rounded-lg bg-secondary grid place-items-center shrink-0">
        <Icon className="w-4 h-4 text-[var(--navy)]" />
      </div>
      <div>
        <dt className="text-xs uppercase tracking-wider text-muted-foreground">{label}</dt>
        <dd className="text-sm font-semibold text-[var(--navy-deep)]">{value}</dd>
      </div>
    </div>
  );
}

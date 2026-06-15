import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Quote, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { BRAND, TESTIMONIALS } from "@/data/site";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews | 4.9★ Across 2,800+ Google Ratings | Apex Roofing" },
      { name: "description", content: "Read real, verified Google reviews from Apex Roofing customers across Texas. 4.9★ average across 2,800+ ratings." },
      { property: "og:title", content: "Customer Reviews · Apex Roofing" },
      { property: "og:description", content: "4.9★ verified Google rating across 2,800+ Texas homeowners." },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Verified Reviews"
        title={<>{BRAND.rating}★ across <span className="gradient-text-gold">{BRAND.reviews.toLocaleString()}</span> Google reviews.</>}
        subtitle="Every review below is a verified Apex customer. We never edit, never delete, and never pay for placement."
      >
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-card text-sm font-medium">
          <svg className="w-5 h-5" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.8-2 13.4-5.2l-6.2-5.2c-2 1.4-4.5 2.4-7.2 2.4-5.2 0-9.6-3.3-11.2-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.2 5.6l6.2 5.2C41.3 35.5 44 30.1 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>
          Verified on Google Business
        </div>
      </PageHero>

      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="relative rounded-2xl p-7 bg-white border border-black/5 shadow-card">
              <Quote className="absolute top-5 right-5 w-10 h-10 text-[var(--gold-soft)]" />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" />
                ))}
              </div>
              <blockquote className="text-foreground/80 leading-relaxed">"{t.text}"</blockquote>
              <figcaption className="mt-6 pt-5 border-t border-black/5 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[var(--navy)] to-[var(--navy-deep)] text-white font-bold grid place-items-center">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="font-semibold text-[var(--navy-deep)]">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.city} · {t.project}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-br from-[var(--roof-red)] to-[var(--roof-red-dark)] text-white font-semibold shadow-red-glow hover:scale-[1.03] transition-transform">
            Join 5,000+ happy homeowners <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

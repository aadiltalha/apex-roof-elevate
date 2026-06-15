import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { QuoteForm } from "@/components/site/QuoteForm";
import { BRAND } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Apex Roofing | Free Inspection · 30-Minute Response" },
      { name: "description", content: "Call (888) 555-7663 or request a free roof inspection online. We respond within 30 minutes, 7 days a week." },
      { property: "og:title", content: "Contact Apex Roofing & Restoration" },
      { property: "og:description", content: "Free inspection. 30-minute response. Call or schedule online." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title={<>Free inspection in <span className="gradient-text-gold">24 hours</span>.</>}
        subtitle="Call us, text us, or fill out the form. A real person responds within 30 minutes — no call centers, no overseas operators, no pressure."
      />

      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-3xl font-bold text-[var(--navy-deep)]">Request your free inspection</h2>
            <p className="mt-2 text-muted-foreground">Tell us about your roof and we'll be in touch shortly.</p>
            <div className="mt-7 rounded-2xl p-7 bg-white border border-black/5 shadow-card">
              <QuoteForm />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-3xl font-bold text-[var(--navy-deep)]">Or reach us directly</h2>
            <p className="text-muted-foreground">Available 24/7 for storm and emergency calls.</p>

            <a href={BRAND.phoneHref} className="mt-6 flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-[var(--navy)] to-[var(--navy-deep)] text-white shadow-elegant hover:scale-[1.01] transition-transform">
              <div className="w-12 h-12 rounded-xl bg-[var(--roof-red)] grid place-items-center shrink-0 shadow-red-glow">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-[var(--gold)]">Call or text</div>
                <div className="font-display text-2xl font-bold mt-0.5">{BRAND.phone}</div>
                <div className="text-sm text-white/70 mt-1">24/7 emergency line</div>
              </div>
            </a>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-black/5 shadow-card">
              <div className="w-12 h-12 rounded-xl bg-secondary grid place-items-center shrink-0">
                <Mail className="w-5 h-5 text-[var(--navy-deep)]" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                <div className="font-semibold text-[var(--navy-deep)] mt-0.5">{BRAND.email}</div>
                <div className="text-sm text-muted-foreground mt-1">Replies within 1 business hour</div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-black/5 shadow-card">
              <div className="w-12 h-12 rounded-xl bg-secondary grid place-items-center shrink-0">
                <MapPin className="w-5 h-5 text-[var(--navy-deep)]" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Office</div>
                <div className="font-semibold text-[var(--navy-deep)] mt-0.5">{BRAND.address}</div>
                <div className="text-sm text-muted-foreground mt-1">Showroom by appointment</div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-black/5 shadow-card">
              <div className="w-12 h-12 rounded-xl bg-secondary grid place-items-center shrink-0">
                <Clock className="w-5 h-5 text-[var(--navy-deep)]" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Hours</div>
                <div className="font-semibold text-[var(--navy-deep)] mt-0.5">Mon–Sat · 7am – 8pm</div>
                <div className="text-sm text-muted-foreground mt-1">Emergency response 24/7/365</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

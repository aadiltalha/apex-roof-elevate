import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, DollarSign, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/financing")({
  head: () => ({
    meta: [
      { title: "Roof Financing | 0% APR for 18 Months | Apex Roofing" },
      { name: "description", content: "Finance your new roof from $89/month. 0% APR for 18 months, plans up to 15 years. Soft credit pull, approval in 60 seconds." },
      { property: "og:title", content: "Roof Financing · 0% for 18 Months · Apex" },
      { property: "og:description", content: "Soft credit pull, instant approval, no prepayment penalty. New roofs from $89/month." },
    ],
  }),
  component: FinancingPage,
});

const PLANS = [
  { title: "Same-As-Cash", rate: "0% APR", term: "18 months", payment: "from $0", note: "Pay zero interest if balance is cleared within promo period.", featured: false },
  { title: "Low Monthly", rate: "9.99% APR", term: "Up to 15 years", payment: "from $89/mo", note: "Lowest monthly payment for budget-conscious homeowners.", featured: true },
  { title: "Hybrid Plan", rate: "From 6.99% APR", term: "Up to 10 years", payment: "from $145/mo", note: "Balanced rate-and-term plan with no prepayment penalty.", featured: false },
];

const BENEFITS = [
  { icon: Clock, title: "60-Second Approval", text: "Pre-qualify online with a soft credit pull — your FICO score is never affected." },
  { icon: ShieldCheck, title: "No Prepayment Penalty", text: "Pay your loan off early at any time, with zero fees and zero hassle." },
  { icon: DollarSign, title: "$0 Down Available", text: "Most approved homeowners pay nothing out of pocket on the day of install." },
];

function FinancingPage() {
  return (
    <>
      <PageHero
        eyebrow="Affordable Financing"
        title={<>Your new roof from <span className="gradient-text-gold">$89/month</span>.</>}
        subtitle="We partner with GreenSky® and Service Finance Company to offer industry-leading rates and terms. Most homeowners are approved in under 60 seconds."
      />

      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-6">
          {PLANS.map((p) => (
            <div key={p.title} className={`relative rounded-2xl p-8 border shadow-card ${p.featured ? "bg-gradient-to-br from-[var(--navy)] to-[var(--navy-deep)] text-white border-transparent shadow-elegant" : "bg-white border-black/5"}`}>
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[var(--roof-red)] text-white text-xs font-bold tracking-wider uppercase shadow-red-glow">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl font-bold">{p.title}</h3>
              <div className={`mt-1 text-sm ${p.featured ? "text-white/70" : "text-muted-foreground"}`}>{p.term}</div>
              <div className="mt-6 font-display text-5xl font-bold">{p.payment}</div>
              <div className={`mt-1 text-sm ${p.featured ? "text-[var(--gold)]" : "text-[var(--roof-red)]"} font-semibold`}>{p.rate}</div>
              <p className={`mt-5 text-sm leading-relaxed ${p.featured ? "text-white/80" : "text-muted-foreground"}`}>{p.note}</p>
              <Link to="/contact" className={`mt-7 inline-flex w-full items-center justify-center gap-2 px-5 py-3 rounded-lg font-semibold transition-transform hover:scale-[1.02] ${p.featured ? "bg-[var(--roof-red)] text-white shadow-red-glow" : "bg-[var(--navy-deep)] text-white"}`}>
                Pre-qualify now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[var(--navy-deep)] mb-14">No-stress financing.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {BENEFITS.map((b) => (
              <div key={b.title} className="rounded-2xl p-7 bg-white border border-black/5 shadow-card">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--gold)] to-[var(--gold-soft)] grid place-items-center mb-5">
                  <b.icon className="w-5 h-5 text-[var(--navy-deep)]" />
                </div>
                <h3 className="font-display text-xl font-bold text-[var(--navy-deep)]">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <div className="container mx-auto max-w-3xl px-6">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Financing offered through GreenSky® LLC and Service Finance Company, LLC. Subject to credit approval. Loans for the GreenSky® consumer loan program are provided by federally insured, federal and state chartered financial institutions without regard to age, race, color, religion, national origin, gender, or familial status. APRs range from 6.99% to 28.99%. Terms range from 12 to 180 months.
          </p>
        </div>
      </section>
    </>
  );
}

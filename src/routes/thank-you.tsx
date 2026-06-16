import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Phone, ArrowLeft, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { BRAND } from "@/data/site";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You | Apex Roofing & Restoration" },
      { name: "description", content: "Your free roof inspection request has been received. A specialist will call you within 30 minutes." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--navy-deep)] via-[var(--navy)] to-[var(--navy-deep)] text-white py-20">
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, var(--gold) 0%, transparent 40%), radial-gradient(circle at 80% 80%, var(--roof-red) 0%, transparent 40%)" }} />
      <div className="container mx-auto max-w-2xl px-6 text-center relative">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", damping: 12, stiffness: 120 }}
          className="mx-auto w-24 h-24 rounded-full bg-emerald-500/20 border border-emerald-400/30 grid place-items-center mb-8"
        >
          <CheckCircle2 className="w-12 h-12 text-emerald-400" strokeWidth={2.5} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-5xl md:text-6xl font-bold leading-tight"
        >
          Thank you! <span className="gradient-text-gold">We've got it.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-5 text-lg text-white/80 max-w-xl mx-auto"
        >
          Your free inspection request has been received. A senior roofing specialist will call you within <span className="text-[var(--gold)] font-semibold">30 minutes</span> to confirm your appointment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 grid sm:grid-cols-3 gap-4"
        >
          {[
            { icon: Clock, label: "30-min response", value: "Avg. callback time" },
            { icon: Shield, label: "100% free", value: "No obligation" },
            { icon: CheckCircle2, label: "Licensed & insured", value: "GAF Master Elite®" },
          ].map((it) => (
            <div key={it.label} className="rounded-2xl p-5 bg-white/5 border border-white/10 backdrop-blur-sm">
              <it.icon className="w-5 h-5 text-[var(--gold)] mx-auto" />
              <div className="mt-2 font-semibold">{it.label}</div>
              <div className="text-xs text-white/60">{it.value}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={BRAND.phoneHref}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-br from-[var(--roof-red)] to-[var(--roof-red-dark)] text-white font-semibold shadow-red-glow hover:scale-[1.03] transition-transform"
          >
            <Phone className="w-4 h-4" /> Call now {BRAND.phone}
          </a>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl glass-card font-semibold hover:bg-white/15 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
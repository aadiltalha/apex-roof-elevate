import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Name required").max(80),
  phone: z.string().trim().min(7, "Phone required").max(20),
  email: z.string().trim().email("Valid email required").max(120),
  address: z.string().trim().min(4, "Address required").max(200),
  service: z.string().min(1, "Choose a service"),
  message: z.string().trim().max(800).optional(),
});

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse(Object.fromEntries(fd));
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    toast.success("Quote request received! We'll call you within 30 minutes.");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-3">
      <div className="grid sm:grid-cols-2 gap-3">
        <input name="name" placeholder="Full name" maxLength={80} className="h-11 px-4 rounded-lg border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--roof-red)]" />
        <input name="phone" type="tel" placeholder="Phone number" maxLength={20} className="h-11 px-4 rounded-lg border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--roof-red)]" />
      </div>
      <input name="email" type="email" placeholder="Email address" maxLength={120} className="h-11 px-4 rounded-lg border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--roof-red)]" />
      <input name="address" placeholder="Property address" maxLength={200} className="h-11 px-4 rounded-lg border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--roof-red)]" />
      <select name="service" defaultValue="" className="h-11 px-4 rounded-lg border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--roof-red)] text-sm">
        <option value="" disabled>What do you need?</option>
        <option>Full roof replacement</option>
        <option>Storm / hail damage inspection</option>
        <option>Leak repair</option>
        <option>Metal roofing quote</option>
        <option>Tile / slate quote</option>
        <option>Gutters & accessories</option>
        <option>Insurance claim assistance</option>
      </select>
      {!compact && (
        <textarea name="message" placeholder="Tell us about your roof (optional)" maxLength={800} rows={3} className="px-4 py-3 rounded-lg border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--roof-red)]" />
      )}
      <button
        type="submit"
        disabled={submitting}
        className="mt-1 h-12 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-[var(--roof-red)] to-[var(--roof-red-dark)] text-white font-semibold shadow-red-glow hover:scale-[1.01] transition-transform disabled:opacity-70"
      >
        {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        Get My Free Inspection
      </button>
      <p className="text-xs text-muted-foreground text-center">
        100% free · No obligation · 30-minute response
      </p>
    </form>
  );
}

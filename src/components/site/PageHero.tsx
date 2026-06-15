import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-[var(--navy-deep)] text-white pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[var(--roof-red)]/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[var(--gold)]/10 blur-3xl" />
      <div className="container relative mx-auto max-w-5xl px-6 text-center">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] uppercase text-[var(--gold)]">
            <span className="w-8 h-px bg-[var(--gold)]" />
            {eyebrow}
            <span className="w-8 h-px bg-[var(--gold)]" />
          </span>
        )}
        <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-tight tracking-tight">{title}</h1>
        {subtitle && (
          <p className="mt-5 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

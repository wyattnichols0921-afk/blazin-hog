import Link from "next/link";

type CTASectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
};

export function CTASection({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CTASectionProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:px-8 md:py-16">
      <div className="overflow-hidden rounded-[2rem] border border-[color:rgba(255,243,223,0.14)] bg-[radial-gradient(circle_at_top_left,rgba(246,193,91,0.24),transparent_22%),radial-gradient(circle_at_30%_0%,rgba(240,118,45,0.3),transparent_30%),linear-gradient(135deg,rgba(214,58,36,0.34),rgba(24,18,17,0.96))] p-6 shadow-2xl shadow-black/20 sm:p-8 md:p-10 lg:p-12">
        <div className="max-w-3xl space-y-5">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-cream)]">
            {eyebrow}
          </p>
          <h2 className="text-2xl font-black uppercase leading-tight text-[var(--color-cream)] sm:text-3xl md:text-4xl">
            {title}
          </h2>
          <p className="text-sm leading-8 text-[color:rgba(248,239,224,0.82)] sm:text-base">
            {description}
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={primaryHref}
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-[var(--color-cream)] px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-ink)] shadow-lg shadow-[rgba(255,243,223,0.14)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white sm:w-auto"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full border border-[color:rgba(255,243,223,0.28)] bg-[color:rgba(255,243,223,0.1)] px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-cream)] transition-all duration-200 hover:border-[var(--color-gold)] hover:bg-[color:rgba(255,243,223,0.14)] sm:w-auto"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

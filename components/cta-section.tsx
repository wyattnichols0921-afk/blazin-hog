import { SiteButton } from "@/components/site-button";

type CTASectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
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
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-16">
      <div className="relative overflow-hidden rounded-[2.15rem] border border-[color:rgba(255,243,223,0.14)] bg-[radial-gradient(circle_at_top_left,rgba(246,193,91,0.24),transparent_22%),radial-gradient(circle_at_30%_0%,rgba(240,118,45,0.3),transparent_30%),linear-gradient(135deg,rgba(214,58,36,0.34),rgba(24,18,17,0.96))] p-5 shadow-2xl shadow-black/20 sm:p-8 md:p-10 lg:p-12">
        <div className="absolute right-[-3rem] top-[-2rem] h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(255,243,223,0.14),transparent_68%)] blur-3xl" />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-cream)]">
              {eyebrow}
            </p>
            <h2 className="text-2xl font-black uppercase leading-tight text-[var(--color-cream)] sm:text-3xl md:text-4xl">
              {title}
            </h2>
            <p className="text-sm leading-8 text-[color:rgba(255,243,223,0.84)] sm:text-base">
              {description}
            </p>
          </div>
          <div className="relative flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
            <SiteButton
              href={primaryHref}
              className="w-full sm:w-auto"
              variant="primary"
            >
              {primaryLabel}
            </SiteButton>
            {secondaryHref && secondaryLabel ? (
              <SiteButton
                href={secondaryHref}
                className="w-full sm:w-auto"
                variant="secondary"
              >
                {secondaryLabel}
              </SiteButton>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

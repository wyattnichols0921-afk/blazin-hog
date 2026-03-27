import Link from "next/link";

type SiteButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function SiteButton({
  href,
  children,
  variant = "primary",
  className = "",
}: SiteButtonProps) {
  const baseClassName =
    "inline-flex min-h-[38px] items-center justify-center rounded-full px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] transition-all duration-200 sm:min-h-[40px] sm:px-4";

  const variantClassName =
    variant === "primary"
      ? "border border-[color:rgba(255,147,80,0.56)] bg-[linear-gradient(180deg,var(--color-orange-soft),var(--color-orange))] text-[var(--color-cream)] shadow-[0_10px_24px_rgba(240,118,45,0.24)] hover:-translate-y-0.5 hover:brightness-110"
      : "border border-[color:rgba(255,243,223,0.16)] bg-[linear-gradient(180deg,rgba(255,243,223,0.1),rgba(255,243,223,0.04))] text-[var(--color-cream)] hover:-translate-y-0.5 hover:border-[var(--color-gold)] hover:bg-[linear-gradient(180deg,rgba(255,243,223,0.16),rgba(255,243,223,0.07))]";

  return (
    <Link href={href} className={`${baseClassName} ${variantClassName} ${className}`}>
      {children}
    </Link>
  );
}

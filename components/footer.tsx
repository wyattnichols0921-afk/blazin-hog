import Link from "next/link";

import { navItems, siteDetails } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-[color:rgba(255,243,223,0.08)] bg-[linear-gradient(180deg,rgba(12,10,9,0.94),rgba(8,6,6,0.98))]">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16">
        <div className="mb-8 h-px bg-[linear-gradient(90deg,transparent,rgba(255,243,223,0.18),transparent)]" />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="space-y-3 rounded-[1.7rem] border border-[color:rgba(255,243,223,0.1)] bg-[linear-gradient(180deg,rgba(255,243,223,0.08),rgba(255,243,223,0.03))] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.18)] sm:rounded-[2rem] sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-[var(--color-gold)]">
              Blazin Hog
            </p>
            <h2 className="max-w-sm text-lg font-black uppercase leading-tight text-[var(--color-cream)] sm:text-2xl">
              Smoke-forward barbecue built for lines, lunches, and late nights.
            </h2>
            <p className="max-w-md text-[13px] leading-6 text-[color:rgba(255,243,223,0.72)] sm:text-sm sm:leading-7">
              {siteDetails.address}
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-cream)]">
              Explore
            </p>
            <ul className="space-y-2 text-sm text-[color:rgba(255,243,223,0.74)]">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-[44px] items-center rounded-full px-2 transition-all duration-200 hover:bg-[color:rgba(255,243,223,0.06)] hover:text-[var(--color-orange)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 md:col-span-2 xl:col-span-1">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-cream)]">
              Contact
            </p>
            <div className="grid gap-2 text-sm text-[color:rgba(255,243,223,0.74)] sm:grid-cols-2 xl:grid-cols-1">
              <a
                href={`tel:${siteDetails.phone.replace(/[^\d]/g, "")}`}
                className="inline-flex min-h-[44px] items-center rounded-full px-2 transition-all duration-200 hover:bg-[color:rgba(255,243,223,0.06)] hover:text-[var(--color-orange)]"
              >
                {siteDetails.phone}
              </a>
              <a
                href={`mailto:${siteDetails.email}`}
                className="inline-flex min-h-[44px] items-center rounded-full px-2 transition-all duration-200 hover:bg-[color:rgba(255,243,223,0.06)] hover:text-[var(--color-orange)]"
              >
                {siteDetails.email}
              </a>
              <a
                href={siteDetails.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[44px] items-center rounded-full px-2 transition-all duration-200 hover:bg-[color:rgba(255,243,223,0.06)] hover:text-[var(--color-orange)]"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

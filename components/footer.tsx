import Link from "next/link";

import { navItems, siteDetails } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[color:rgba(12,10,9,0.94)]">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 md:px-8 md:py-16 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-[var(--color-orange)]">
            Blazin Hog
          </p>
          <h2 className="max-w-sm text-xl font-black uppercase leading-tight text-[var(--color-cream)] sm:text-2xl">
            Smoke-forward barbecue built for lines, lunches, and late nights.
          </h2>
          <p className="max-w-md text-sm leading-7 text-[color:rgba(248,239,224,0.7)]">
            {siteDetails.address}
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-cream)]">
            Explore
          </p>
          <ul className="space-y-2 text-sm text-[color:rgba(248,239,224,0.74)]">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-[44px] items-center transition-all duration-200 hover:text-[var(--color-orange)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-cream)]">
            Contact
          </p>
          <div className="space-y-2 text-sm text-[color:rgba(248,239,224,0.74)]">
            <p>{siteDetails.phone}</p>
            <p>{siteDetails.email}</p>
            <a
              href={siteDetails.facebook}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center transition-all duration-200 hover:text-[var(--color-orange)]"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navItems } from "@/data/site";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:rgba(16,12,11,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 md:px-8">
        <Link
          href="/"
          className="shrink-0 text-lg font-black uppercase tracking-[0.18em] text-[var(--color-cream)] transition-all duration-200 hover:text-[var(--color-orange)] sm:text-xl sm:tracking-[0.22em]"
        >
          Blazin Hog
        </Link>

        <button
          type="button"
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/12 bg-white/5 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-cream)] transition-all duration-200 hover:border-[var(--color-orange)] hover:text-[var(--color-orange)] md:hidden"
          aria-expanded={isOpen}
          aria-controls="site-nav"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>

        <nav
          id="site-nav"
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute inset-x-4 top-[calc(100%-0.25rem)] flex-col gap-2 rounded-3xl border border-white/10 bg-[var(--color-panel)] p-3 shadow-2xl md:static md:flex md:flex-row md:items-center md:gap-2 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`min-h-[44px] rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  active
                    ? "bg-[var(--color-orange)] text-[var(--color-cream)] shadow-lg shadow-[color:rgba(212,98,45,0.3)]"
                    : "text-[color:rgba(248,239,224,0.8)] hover:bg-white/6 hover:text-[var(--color-cream)]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

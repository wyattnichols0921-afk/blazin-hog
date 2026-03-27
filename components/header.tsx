"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { useCart } from "@/components/cart-provider";
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
  const { itemCount } = useCart();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[color:rgba(255,243,223,0.08)] bg-[color:rgba(11,9,8,0.72)] backdrop-blur-2xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 md:px-8">
        <Link
          href="/"
          className="group shrink-0"
          aria-label="Blazin Hog home"
        >
          <div className="rounded-[1.35rem] border border-[color:rgba(255,243,223,0.14)] bg-[linear-gradient(180deg,rgba(255,243,223,0.08),rgba(255,243,223,0.03))] px-4 py-2.5 shadow-[0_12px_32px_rgba(0,0,0,0.24)] transition-all duration-200 group-hover:border-[color:rgba(255,147,80,0.32)]">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[var(--color-gold)]">
              Pit Fired
            </p>
            <p className="mt-1 text-lg font-black uppercase tracking-[0.18em] text-[var(--color-cream)] sm:text-xl sm:tracking-[0.22em]">
              Blazin Hog
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/cart"
            className="inline-flex min-h-[42px] items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-cream)] transition-all duration-200 hover:border-[var(--color-orange)] hover:text-[var(--color-orange)]"
          >
            <span>Cart</span>
            <span className="rounded-full bg-[color:rgba(240,118,45,0.16)] px-2 py-0.5 text-[10px] font-bold text-[var(--color-gold)]">
              {itemCount}
            </span>
          </Link>

          <button
            type="button"
            className="inline-flex min-h-[42px] min-w-[42px] items-center justify-center gap-2.5 rounded-full border border-white/12 bg-white/5 px-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-cream)] transition-all duration-200 hover:border-[var(--color-orange)] hover:text-[var(--color-orange)]"
            aria-expanded={isOpen}
            aria-controls="site-nav"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span>{isOpen ? "Close" : "Menu"}</span>
            <span className="relative h-3.5 w-4">
              <span
                className={`absolute left-0 top-0 h-0.5 w-4 rounded-full bg-current transition-all duration-200 ${
                  isOpen ? "top-[0.4rem] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[0.4rem] h-0.5 w-4 rounded-full bg-current transition-all duration-200 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[0.8rem] h-0.5 w-4 rounded-full bg-current transition-all duration-200 ${
                  isOpen ? "top-[0.4rem] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`min-h-[38px] rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] transition-all duration-200 ${
                  active
                    ? "bg-[linear-gradient(180deg,var(--color-orange-soft),var(--color-orange))] text-[var(--color-cream)] shadow-[0_10px_24px_rgba(240,118,45,0.28)]"
                    : "text-[color:rgba(255,243,223,0.8)] hover:bg-[color:rgba(255,243,223,0.08)] hover:text-[var(--color-cream)]"
                }`}
              >
                {item.href === "/contact" ? "Book/Contact" : item.label}
              </Link>
            );
          })}
          <Link
            href="/cart"
            className="inline-flex min-h-[38px] items-center justify-center rounded-full border border-[color:rgba(255,243,223,0.16)] bg-[linear-gradient(180deg,rgba(255,243,223,0.1),rgba(255,243,223,0.04))] px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-[var(--color-cream)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-gold)] hover:bg-[linear-gradient(180deg,rgba(255,243,223,0.16),rgba(255,243,223,0.07))]"
          >
            Cart ({itemCount})
          </Link>
        </nav>

        <div
          className={`absolute inset-x-4 top-[calc(100%+0.5rem)] overflow-hidden rounded-[1.75rem] border border-[color:rgba(255,243,223,0.12)] bg-[linear-gradient(180deg,rgba(32,23,21,0.98),rgba(20,15,14,0.98))] shadow-[0_24px_50px_rgba(0,0,0,0.35)] transition-all duration-300 ease-out lg:hidden ${
            isOpen
              ? "pointer-events-auto max-h-[min(calc(100vh-5.5rem),30rem)] translate-y-0 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
          }`}
        >
          <nav
            id="site-nav"
            className="flex max-h-[min(calc(100vh-5.5rem),30rem)] flex-col gap-2 overflow-y-auto p-3"
          >
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex min-h-[42px] items-center rounded-[1rem] px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-200 ${
                    active
                      ? "bg-[linear-gradient(180deg,var(--color-orange-soft),var(--color-orange))] text-[var(--color-cream)] shadow-[0_10px_24px_rgba(240,118,45,0.28)]"
                      : "text-[color:rgba(255,243,223,0.82)] hover:bg-[color:rgba(255,243,223,0.08)] hover:text-[var(--color-cream)]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.href === "/contact" ? "Book/Contact" : item.label}
                </Link>
              );
            })}
            <Link
              href="/cart"
              className="inline-flex min-h-[38px] w-full items-center justify-center rounded-full border border-[color:rgba(255,243,223,0.16)] bg-[linear-gradient(180deg,rgba(255,243,223,0.1),rgba(255,243,223,0.04))] px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-[var(--color-cream)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-gold)] hover:bg-[linear-gradient(180deg,rgba(255,243,223,0.16),rgba(255,243,223,0.07))]"
              onClick={() => setIsOpen(false)}
            >
              Cart ({itemCount})
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

"use client";

import { useState } from "react";

import { CartSummary } from "@/components/cart-summary";
import { MenuCategory } from "@/components/menu-category";
import { useCart } from "@/components/cart-provider";
import { type MenuCategoryData } from "@/data/site";

type MenuCartShellProps = {
  categories: MenuCategoryData[];
};

export function MenuCartShell({ categories }: MenuCartShellProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { itemCount, total } = useCart();

  return (
    <div className="relative">
      <button
        type="button"
        className="fixed bottom-5 right-4 z-40 inline-flex min-h-[42px] items-center gap-2.5 rounded-full border border-[color:rgba(255,147,80,0.5)] bg-[linear-gradient(180deg,var(--color-orange-soft),var(--color-orange))] px-3.5 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[var(--color-cream)] shadow-[0_12px_24px_rgba(240,118,45,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 md:bottom-6 md:right-6"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>Cart</span>
        <span className="rounded-full bg-[color:rgba(11,9,8,0.18)] px-2.5 py-1 text-[11px]">
          {itemCount}
        </span>
        <span className="text-[11px] text-[color:rgba(255,243,223,0.9)]">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
          }).format(total)}
        </span>
      </button>

      <div className="mt-8 space-y-6 md:mt-12 md:space-y-8">
        {categories.map((category) => (
          <MenuCategory key={category.title} category={category} />
        ))}
      </div>

      <button
        type="button"
        aria-label="Close cart"
        className={`fixed inset-0 z-30 bg-black/20 transition-opacity duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <aside
        className={`fixed bottom-18 right-3 z-40 w-[calc(100vw-1.5rem)] max-w-[19rem] overflow-hidden rounded-[1.6rem] border border-[color:rgba(255,243,223,0.12)] bg-[linear-gradient(180deg,rgba(20,15,14,0.97),rgba(10,8,8,0.97))] shadow-[0_24px_48px_rgba(0,0,0,0.34)] transition-all duration-300 sm:bottom-20 sm:right-4 sm:w-[calc(100vw-2rem)] sm:max-w-sm sm:rounded-[2rem] sm:shadow-[0_28px_60px_rgba(0,0,0,0.38)] md:bottom-24 md:right-6 ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <CartSummary compact showCloseButton onClose={() => setIsOpen(false)} />
      </aside>
    </div>
  );
}

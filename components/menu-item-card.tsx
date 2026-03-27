"use client";

import { useCart } from "@/components/cart-provider";
import type { MenuItem } from "@/data/site";

type MenuItemCardProps = {
  item: MenuItem;
  categoryTitle: string;
};

export function MenuItemCard({ item, categoryTitle }: MenuItemCardProps) {
  const { addItem } = useCart();

  return (
    <article className="rounded-[1.35rem] border border-[color:rgba(255,243,223,0.1)] bg-[linear-gradient(180deg,rgba(255,243,223,0.08),rgba(255,243,223,0.03))] p-3.5 shadow-lg shadow-black/15 transition-all duration-200 hover:-translate-y-0.5 hover:border-[color:rgba(240,118,45,0.45)] hover:shadow-[0_18px_34px_rgba(0,0,0,0.18)] sm:rounded-[1.6rem] sm:p-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <h3 className="min-w-0 text-[15px] font-black uppercase leading-tight text-[var(--color-cream)] sm:text-lg">
          {item.name}
        </h3>
        <p className="shrink-0 text-[15px] font-black text-[var(--color-orange)] sm:text-lg">
          {item.price}
        </p>
      </div>
      <p className="mt-2.5 text-[13px] leading-6 text-[color:rgba(255,243,223,0.74)] sm:mt-3 sm:text-sm sm:leading-7">
        {item.description}
      </p>
      <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-3.5 sm:mt-5 sm:pt-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[color:rgba(255,243,223,0.52)]">
          {categoryTitle}
        </p>
        <button
          type="button"
          className="inline-flex min-h-[36px] items-center justify-center rounded-full border border-[color:rgba(255,147,80,0.45)] bg-[linear-gradient(180deg,var(--color-orange-soft),var(--color-orange))] px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-[var(--color-cream)] shadow-[0_8px_18px_rgba(240,118,45,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
          onClick={() =>
            addItem({
              id: `${categoryTitle}-${item.name}`.toLowerCase().replace(/\s+/g, "-"),
              name: item.name,
              price: item.price,
            })
          }
        >
          Add
        </button>
      </div>
    </article>
  );
}

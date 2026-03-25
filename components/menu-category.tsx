import type { MenuCategoryData } from "@/data/site";

import { MenuItemCard } from "@/components/menu-item-card";

type MenuCategoryProps = {
  category: MenuCategoryData;
};

export function MenuCategory({ category }: MenuCategoryProps) {
  return (
    <section className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(248,239,224,0.05),rgba(248,239,224,0.03))] p-5 shadow-2xl shadow-black/15 sm:p-6 md:p-8">
      <div className="max-w-2xl space-y-3">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-orange)]">
          {category.title}
        </p>
        <p className="text-sm leading-7 text-[color:rgba(248,239,224,0.72)]">
          {category.description}
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 lg:mt-8 lg:grid-cols-2">
        {category.items.map((item) => (
          <MenuItemCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}

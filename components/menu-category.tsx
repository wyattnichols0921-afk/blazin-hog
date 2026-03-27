import type { MenuCategoryData } from "@/data/site";

import { MenuItemCard } from "@/components/menu-item-card";

type MenuCategoryProps = {
  category: MenuCategoryData;
};

export function MenuCategory({ category }: MenuCategoryProps) {
  return (
    <section className="rounded-[1.6rem] border border-[color:rgba(255,243,223,0.1)] bg-[linear-gradient(180deg,rgba(255,243,223,0.08),rgba(255,243,223,0.03))] p-4 shadow-2xl shadow-black/15 sm:rounded-[2rem] sm:p-6 md:p-8">
      <div className="max-w-2xl space-y-3">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-orange)]">
          {category.title}
        </p>
        <p className="text-[13px] leading-6 text-[color:rgba(255,243,223,0.74)] sm:text-sm sm:leading-7">
          {category.description}
        </p>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-3 lg:mt-8 lg:grid-cols-2">
        {category.items.map((item) => (
          <MenuItemCard key={item.name} item={item} categoryTitle={category.title} />
        ))}
      </div>
    </section>
  );
}

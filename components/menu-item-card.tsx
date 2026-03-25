import type { MenuItem } from "@/data/site";

type MenuItemCardProps = {
  item: MenuItem;
};

export function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <article className="rounded-[1.5rem] border border-white/10 bg-[color:rgba(248,239,224,0.05)] p-4 shadow-lg shadow-black/15 transition-all duration-200 hover:border-[color:rgba(212,98,45,0.35)] hover:bg-[color:rgba(248,239,224,0.07)] sm:p-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <h3 className="text-base font-black uppercase leading-tight text-[var(--color-cream)] sm:text-lg">
          {item.name}
        </h3>
        <p className="shrink-0 text-base font-black text-[var(--color-orange)] sm:text-lg">
          {item.price}
        </p>
      </div>
      <p className="mt-3 text-sm leading-7 text-[color:rgba(248,239,224,0.72)]">
        {item.description}
      </p>
    </article>
  );
}

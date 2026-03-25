import { featuredItems } from "@/data/site";

export function FeaturedItems() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:px-8 md:py-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-[var(--color-orange)]">
            Featured Plates
          </p>
          <h2 className="text-2xl font-black uppercase leading-tight text-[var(--color-cream)] sm:text-3xl md:text-4xl">
            Built to stop people in line.
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-[color:rgba(255,243,223,0.76)] md:text-right">
          A tight menu with real range: bark-heavy meats, stacked sandwiches,
          comfort sides, and cold drinks that keep the smoke in balance.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mt-10">
        {featuredItems.map((item, index) => (
          <article
            key={item.name}
            className="group rounded-[1.75rem] border border-[color:rgba(255,243,223,0.12)] bg-[linear-gradient(180deg,rgba(255,243,223,0.1),rgba(255,243,223,0.04))] p-5 shadow-xl shadow-black/20 transition-all duration-200 hover:-translate-y-1 hover:border-[color:rgba(240,118,45,0.55)] hover:shadow-[0_18px_40px_rgba(240,118,45,0.12)] sm:p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="rounded-full bg-[color:rgba(240,118,45,0.16)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-gold)]">
                {item.tag}
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[color:rgba(248,239,224,0.4)]">
                0{index + 1}
              </span>
            </div>
            <h3 className="mt-5 text-xl font-black uppercase text-[var(--color-cream)] sm:text-2xl">
              {item.name}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[color:rgba(248,239,224,0.72)]">
              {item.description}
            </p>
            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:rgba(248,239,224,0.56)]">
                Truck Price
              </span>
              <span className="text-2xl font-black text-[var(--color-orange)]">
                {item.price}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

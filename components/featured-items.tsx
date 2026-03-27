import { featuredItems } from "@/data/site";

export function FeaturedItems() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16">
      <div className="rounded-[1.9rem] border border-[color:rgba(255,243,223,0.1)] bg-[linear-gradient(180deg,rgba(255,243,223,0.06),rgba(255,243,223,0.02))] p-4 shadow-[0_20px_40px_rgba(0,0,0,0.18)] sm:rounded-[2.25rem] sm:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-[var(--color-orange)]">
              Featured Plates
            </p>
            <h2 className="text-xl font-black uppercase leading-tight text-[var(--color-cream)] sm:text-3xl md:text-4xl">
              Built to stop people in line.
            </h2>
          </div>
          <p className="max-w-xl text-[13px] leading-6 text-[color:rgba(255,243,223,0.76)] sm:text-sm sm:leading-7 lg:text-right">
            A tight menu with real range: bark-heavy meats, stacked sandwiches,
            comfort sides, and cold drinks that keep the smoke in balance.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 md:mt-10 md:grid-cols-2 xl:grid-cols-4">
          {featuredItems.map((item, index) => (
            <article
              key={item.name}
              className="group relative flex h-full flex-col overflow-hidden rounded-[1.45rem] border border-[color:rgba(255,243,223,0.12)] bg-[linear-gradient(180deg,rgba(255,243,223,0.1),rgba(255,243,223,0.04))] p-4 shadow-xl shadow-black/20 transition-all duration-200 hover:-translate-y-1 hover:border-[color:rgba(240,118,45,0.55)] hover:shadow-[0_18px_40px_rgba(240,118,45,0.12)] sm:rounded-[1.75rem] sm:p-6"
            >
              <div className="absolute right-0 top-0 h-28 w-28 bg-[radial-gradient(circle,rgba(240,118,45,0.2),transparent_68%)] blur-2xl" />
              <div className="relative flex items-start justify-between gap-4">
                <span className="rounded-full bg-[color:rgba(240,118,45,0.16)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-gold)]">
                  {item.tag}
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[color:rgba(255,243,223,0.4)]">
                  0{index + 1}
                </span>
              </div>

              <div className="relative mt-4 min-h-24 rounded-[1.15rem] border border-[color:rgba(255,243,223,0.1)] bg-[linear-gradient(135deg,rgba(214,58,36,0.18),rgba(240,118,45,0.08),rgba(11,9,8,0.04))] p-3.5 sm:mt-6 sm:min-h-28 sm:rounded-[1.4rem] sm:p-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--color-gold)]">
                  Pit Favorite
                </p>
                <h3 className="mt-2.5 max-w-[10rem] text-lg font-black uppercase text-[var(--color-cream)] sm:mt-3 sm:text-2xl">
                  {item.name}
                </h3>
              </div>

              <p className="mt-4 flex-1 text-[13px] leading-6 text-[color:rgba(255,243,223,0.76)] sm:mt-5 sm:text-sm sm:leading-7">
                {item.description}
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 sm:mt-8 sm:pt-5">
                <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:rgba(255,243,223,0.56)] sm:text-sm sm:tracking-[0.18em]">
                  Truck Price
                </span>
                <span className="text-xl font-black text-[var(--color-orange)] sm:text-2xl">
                  {item.price}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

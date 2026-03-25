import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,58,36,0.4),transparent_34%),radial-gradient(circle_at_75%_18%,rgba(240,118,45,0.42),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(246,193,91,0.16),transparent_28%),linear-gradient(135deg,rgba(18,13,12,0.9),rgba(44,28,22,0.8))]" />
      <div className="absolute inset-y-0 right-[-10%] hidden w-[45%] rounded-full bg-[radial-gradient(circle,rgba(255,243,223,0.16),transparent_62%)] blur-3xl lg:block" />
      <div className="absolute left-[8%] top-[10%] h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(246,193,91,0.18),transparent_70%)] blur-2xl" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:py-24">
        <div className="space-y-6 text-center lg:space-y-8 lg:text-left">
          <div className="inline-flex items-center self-center rounded-full border border-[color:rgba(255,243,223,0.18)] bg-[color:rgba(255,243,223,0.08)] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--color-gold)] lg:self-start">
            Charleston BBQ Truck
          </div>
          <div className="space-y-5">
            <h1 className="mx-auto max-w-3xl text-3xl font-black uppercase leading-[0.98] text-[var(--color-cream)] sm:text-4xl md:text-5xl lg:mx-0 lg:text-6xl">
              Slow Smoked. Fire Finished. Full Flavor.
            </h1>
            <p className="mx-auto max-w-2xl text-sm leading-7 text-[color:rgba(255,243,223,0.88)] sm:text-base sm:leading-8 lg:mx-0">
              Blazin Hog brings heavy bark, rich smoke, and scratch-made sides
              straight to the curb. From weekday lunch stops to weekend events,
              the truck serves bold barbecue with zero shortcuts.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-start">
            <Link
              href="/menu"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-[var(--color-orange)] px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-cream)] shadow-xl shadow-[color:rgba(240,118,45,0.38)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-orange-soft)] sm:w-auto"
            >
              View Menu
            </Link>
            <Link
              href="/locations"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full border border-[color:rgba(255,243,223,0.18)] bg-[color:rgba(255,243,223,0.08)] px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-cream)] transition-all duration-200 hover:border-[var(--color-gold)] hover:bg-[color:rgba(255,243,223,0.12)] sm:w-auto"
            >
              Find the Truck
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:mt-6">
          {[
            ["14hr", "Oak-smoked brisket"],
            ["4 days", "Weekly public stops"],
            ["Scratch", "Sides and sauces made in-house"],
            ["On-site", "Catering and private events"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-[1.75rem] border border-[color:rgba(255,243,223,0.14)] bg-[linear-gradient(180deg,rgba(255,243,223,0.12),rgba(255,243,223,0.05))] p-5 shadow-2xl shadow-black/20 sm:p-6"
            >
              <p className="text-3xl font-black uppercase text-[var(--color-cream)] sm:text-4xl">
                {value}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.16em] text-[color:rgba(255,243,223,0.72)] sm:text-sm sm:tracking-[0.18em]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

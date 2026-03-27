import { SiteButton } from "@/components/site-button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,58,36,0.44),transparent_34%),radial-gradient(circle_at_75%_18%,rgba(240,118,45,0.48),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(246,193,91,0.18),transparent_28%),linear-gradient(135deg,rgba(15,11,10,0.96),rgba(40,27,22,0.86))]" />
      <div className="absolute inset-y-0 right-[-10%] hidden w-[45%] rounded-full bg-[radial-gradient(circle,rgba(255,243,223,0.16),transparent_62%)] blur-3xl lg:block" />
      <div className="absolute left-[8%] top-[10%] h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(246,193,91,0.18),transparent_70%)] blur-2xl" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,transparent,rgba(8,6,6,0.72))]" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-12 lg:py-24">
        <div className="space-y-6 text-center lg:space-y-8 lg:text-left">
          <div className="inline-flex items-center self-center rounded-full border border-[color:rgba(255,243,223,0.18)] bg-[linear-gradient(180deg,rgba(255,243,223,0.12),rgba(255,243,223,0.05))] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--color-gold)] shadow-[0_12px_24px_rgba(0,0,0,0.18)] lg:self-start">
            Smoke. Steel. Fire.
          </div>
          <div className="space-y-5">
            <h1 className="mx-auto max-w-3xl text-3xl font-black uppercase leading-[0.96] text-[var(--color-cream)] sm:text-4xl md:text-5xl lg:mx-0 lg:max-w-4xl lg:text-[4.35rem]">
              Slow Smoked. Fire Finished. Full Flavor.
            </h1>
            <p className="mx-auto max-w-2xl text-sm leading-7 text-[color:rgba(255,243,223,0.88)] sm:text-base sm:leading-8 lg:mx-0 lg:max-w-xl">
              Blazin Hog brings heavy bark, rich smoke, and scratch-made sides
              straight to the curb. From weekday lunch stops to weekend events,
              the truck serves bold barbecue with zero shortcuts.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <SiteButton href="/menu" className="w-full sm:w-auto">
              View Menu
            </SiteButton>
            <SiteButton
              href="/locations"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Find the Truck
            </SiteButton>
          </div>

          <div className="grid grid-cols-1 gap-3 rounded-[2rem] border border-[color:rgba(255,243,223,0.12)] bg-[linear-gradient(180deg,rgba(255,243,223,0.08),rgba(255,243,223,0.03))] p-4 text-left shadow-[0_18px_40px_rgba(0,0,0,0.24)] sm:grid-cols-3 sm:p-5">
            {[
              ["Oak + fire", "Cooked low, finished hot"],
              ["Crowd ready", "Built for lunch lines and events"],
              ["House sides", "No filler, no forgettable extras"],
            ].map(([title, detail]) => (
              <div key={title} className="space-y-1 rounded-[1.25rem] border border-transparent p-2">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-gold)]">
                  {title}
                </p>
                <p className="text-sm leading-6 text-[color:rgba(255,243,223,0.78)]">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[2.3rem] border border-[color:rgba(255,243,223,0.14)] bg-[linear-gradient(180deg,rgba(255,243,223,0.12),rgba(255,243,223,0.04))] p-5 shadow-[0_24px_55px_rgba(0,0,0,0.3)] sm:p-6 lg:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-gold)]">
                  Pit Board
                </p>
                <h2 className="mt-3 text-2xl font-black uppercase text-[var(--color-cream)] sm:text-3xl">
                  Truck-built barbecue with real edge.
                </h2>
              </div>
              <span className="rounded-full border border-[color:rgba(255,243,223,0.16)] bg-[color:rgba(11,9,8,0.24)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-cream)]">
                Est. 2026
              </span>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                ["14hr", "Oak-smoked brisket"],
                ["4 days", "Weekly public stops"],
                ["Scratch", "Sides and sauces made in-house"],
                ["On-site", "Catering and private events"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-[1.65rem] border border-[color:rgba(255,243,223,0.12)] bg-[linear-gradient(180deg,rgba(11,9,8,0.1),rgba(11,9,8,0.02))] p-5"
                >
                  <p className="text-3xl font-black uppercase text-[var(--color-cream)] sm:text-4xl">
                    {value}
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[color:rgba(255,243,223,0.72)] sm:text-sm">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-[color:rgba(255,147,80,0.18)] bg-[linear-gradient(180deg,rgba(240,118,45,0.12),rgba(214,58,36,0.08))] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-gold)]">
                Signature Move
              </p>
              <p className="mt-3 text-sm leading-7 text-[color:rgba(255,243,223,0.84)]">
                Deep smoke for tenderness, then a fast fire finish for bark,
                char, and that last hit of heat the truck is known for.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

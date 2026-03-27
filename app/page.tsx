import { CTASection } from "@/components/cta-section";
import { FeaturedItems } from "@/components/featured-items";
import { HeroSection } from "@/components/hero-section";
import { LocationCard } from "@/components/location-card";
import { weeklyLocations } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <FeaturedItems />

      <section className="smoke-divider mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16">
        <div className="grid gap-4 rounded-[1.8rem] border border-[color:rgba(255,243,223,0.1)] bg-[linear-gradient(180deg,rgba(255,243,223,0.06),rgba(255,243,223,0.02))] p-4 shadow-[0_20px_40px_rgba(0,0,0,0.18)] sm:gap-6 sm:rounded-[2.2rem] sm:p-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:p-8">
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-[var(--color-orange)]">
              About The Truck
            </p>
            <h2 className="text-xl font-black uppercase leading-tight text-[var(--color-cream)] sm:text-3xl md:text-4xl">
              Built around patient smoke and fast service.
            </h2>
            <div className="rounded-[1.5rem] border border-[color:rgba(255,243,223,0.1)] bg-[linear-gradient(180deg,rgba(240,118,45,0.12),rgba(214,58,36,0.06))] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-gold)]">
                Brand Promise
              </p>
              <p className="mt-2 text-[13px] leading-6 text-[color:rgba(255,243,223,0.8)] sm:mt-3 sm:text-sm sm:leading-7">
                Serious smoke, fast curbside service, and a truck presence that
                feels as sharp as the food.
              </p>
            </div>
          </div>
          <div className="space-y-4 text-[13px] leading-6 text-[color:rgba(255,243,223,0.74)] sm:space-y-5 sm:text-base sm:leading-8">
            <p>
              Blazin Hog started with a simple idea: bring competition-level smoke
              and neighborhood hospitality to the curb. The truck turns out
              deeply smoked meats, homemade sides, and sauces with real depth,
              then finishes each service with the speed a busy lunch crowd needs.
            </p>
            <p>
              Every stop is designed to feel local. Office parks, breweries,
              community markets, and private events all get the same attention to
              bark, balance, and consistency.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16">
        <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-[var(--color-orange)]">
              This Week
            </p>
            <h2 className="text-xl font-black uppercase leading-tight text-[var(--color-cream)] sm:text-3xl md:text-4xl">
              Find the truck before the brisket runs out.
            </h2>
          </div>
          <p className="max-w-xl text-[13px] leading-6 text-[color:rgba(255,243,223,0.72)] sm:text-sm sm:leading-7 lg:text-right">
            Regular weekly stops, weekend events, and a catering-friendly
            schedule that makes the truck easy to track.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="grid grid-cols-1 gap-4">
            {weeklyLocations.slice(0, 3).map((stop) => (
              <LocationCard key={`${stop.day}-${stop.venue}`} stop={stop} />
            ))}
          </div>
          <div className="rounded-[1.6rem] border border-[color:rgba(255,243,223,0.1)] bg-[linear-gradient(180deg,rgba(255,243,223,0.08),rgba(255,243,223,0.03))] p-4 shadow-[0_20px_40px_rgba(0,0,0,0.18)] sm:rounded-[2rem] sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-gold)]">
              Weekend Heat
            </p>
            <h3 className="mt-2.5 text-xl font-black uppercase text-[var(--color-cream)] sm:mt-3 sm:text-2xl">
              Saturday is the signature stop.
            </h3>
            <p className="mt-3 text-[13px] leading-6 text-[color:rgba(255,243,223,0.76)] sm:mt-4 sm:text-sm sm:leading-7">
              Battery Point Food Truck Park gets the full Blazin Hog treatment:
              biggest crowd, strongest menu, and the best chance to catch the
              truck in full brand mode.
            </p>
            <div className="mt-4 rounded-[1.25rem] border border-[color:rgba(255,147,80,0.18)] bg-[linear-gradient(180deg,rgba(240,118,45,0.12),rgba(214,58,36,0.08))] p-4 sm:mt-6 sm:rounded-[1.5rem] sm:p-5">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-gold)]">
                Best Arrival Window
              </p>
              <p className="mt-2 text-[13px] leading-6 text-[color:rgba(255,243,223,0.82)] sm:mt-3 sm:text-sm sm:leading-7">
                Get there early afternoon for the broadest menu and shortest
                wait before the late-day rush hits.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4">
          {weeklyLocations
            .filter((stop) => stop.day === "Saturday")
            .map((stop) => (
              <LocationCard key={`${stop.day}-${stop.venue}`} stop={stop} />
            ))}
        </div>
      </section>

      <CTASection
        eyebrow="Book The Truck"
        title="Planning a lunch drop, brewery night, or private event?"
        description="Blazin Hog handles office catering, neighborhood pop-ups, and event service with a menu built for high-volume quality. Reach out for availability, custom packages, and pickup options."
        primaryHref="/contact"
        primaryLabel="Start Booking"
        secondaryHref="/locations"
        secondaryLabel="View Schedule"
      />
    </>
  );
}

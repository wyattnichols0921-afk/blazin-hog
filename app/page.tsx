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

      <section className="smoke-divider mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 md:px-8 md:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-[var(--color-orange)]">
            About The Truck
          </p>
          <h2 className="text-2xl font-black uppercase leading-tight text-[var(--color-cream)] sm:text-3xl md:text-4xl">
            Built around patient smoke and fast service.
          </h2>
        </div>
        <div className="space-y-5 text-sm leading-8 text-[color:rgba(248,239,224,0.72)] sm:text-base">
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
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:px-8 md:py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-[var(--color-orange)]">
              This Week
            </p>
            <h2 className="text-2xl font-black uppercase leading-tight text-[var(--color-cream)] sm:text-3xl md:text-4xl">
              Find the truck before the brisket runs out.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[color:rgba(248,239,224,0.7)] md:text-right">
            Regular weekly stops, weekend events, and a catering-friendly
            schedule that makes the truck easy to track.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:mt-10 lg:grid-cols-2">
          {weeklyLocations.slice(0, 4).map((stop) => (
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

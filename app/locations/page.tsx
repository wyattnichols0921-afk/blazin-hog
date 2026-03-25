import type { Metadata } from "next";

import { CTASection } from "@/components/cta-section";
import { LocationCard } from "@/components/location-card";
import { weeklyLocations } from "@/data/site";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "See this week's Blazin Hog food truck schedule, locations, and hours.",
};

export default function LocationsPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:px-8 md:py-16">
        <div className="max-w-3xl space-y-5">
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-[var(--color-orange)]">
            Locations
          </p>
          <h1 className="text-3xl font-black uppercase leading-tight text-[var(--color-cream)] sm:text-4xl md:text-5xl">
            Weekly stops, built for regulars and first-timers alike.
          </h1>
          <p className="text-sm leading-8 text-[color:rgba(248,239,224,0.74)] sm:text-base">
            The truck rotates through lunch-heavy office parks, evening brewery
            crowds, and weekend community events. Hours can shift for private
            bookings, so reach out if you need a confirmed stop.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:mt-12 lg:grid-cols-2">
          {weeklyLocations.map((stop) => (
            <LocationCard key={`${stop.day}-${stop.venue}`} stop={stop} />
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Need A Special Stop?"
        title="Book the truck for an office lunch, brewery pop-up, or private party."
        description="Custom stops, event service windows, and catering pickups are available depending on the week. Reach out early for the best availability."
        primaryHref="/contact"
        primaryLabel="Contact The Team"
        secondaryHref="/menu"
        secondaryLabel="See The Menu"
      />
    </>
  );
}

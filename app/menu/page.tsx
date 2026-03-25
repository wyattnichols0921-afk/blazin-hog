import type { Metadata } from "next";

import { CTASection } from "@/components/cta-section";
import { MenuCategory } from "@/components/menu-category";
import { menuCategories } from "@/data/site";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore BBQ plates, sandwiches, sides, and drinks from the Blazin Hog food truck menu.",
};

export default function MenuPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:px-8 md:py-16">
        <div className="max-w-3xl space-y-5">
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-[var(--color-orange)]">
            Menu
          </p>
          <h1 className="text-3xl font-black uppercase leading-tight text-[var(--color-cream)] sm:text-4xl md:text-5xl">
            Smoked meats, stacked sandwiches, and sides worth protecting.
          </h1>
          <p className="text-sm leading-8 text-[color:rgba(248,239,224,0.74)] sm:text-base">
            The menu is designed to stay tight, fast, and consistent. Every
            item is built for service on the move without losing the smoke,
            crunch, or texture that makes barbecue worth the wait.
          </p>
        </div>

        <div className="mt-8 space-y-6 md:mt-12 md:space-y-8">
          {menuCategories.map((category) => (
            <MenuCategory key={category.title} category={category} />
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Need A Crowd Menu?"
        title="Ask about family packs, office drops, and event catering."
        description="For larger groups, Blazin Hog can build service packages with pan sides, meat trays, sandwich setups, and timing that works around your event."
        primaryHref="/contact"
        primaryLabel="Request Catering"
        secondaryHref="/locations"
        secondaryLabel="Catch A Public Stop"
      />
    </>
  );
}

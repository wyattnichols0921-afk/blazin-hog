import type { Metadata } from "next";

import { CTASection } from "@/components/cta-section";
import { MenuCartShell } from "@/components/menu-cart-shell";
import { menuCategories } from "@/data/site";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore the current Blazin Hog BBQ menu with festival specials, combos, dinners, ribs, sides, and prices.",
};

export default function MenuPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-[var(--color-orange)]">
            Menu
          </p>
          <h1 className="text-2xl font-black uppercase leading-tight text-[var(--color-cream)] sm:text-4xl md:text-5xl">
            Current menu, combos, dinners, and festival specials.
          </h1>
          <p className="text-[13px] leading-6 text-[color:rgba(248,239,224,0.74)] sm:text-base sm:leading-8">
            This page now follows your printed flyer so customers can see the
            current menu sections, listed prices, and the blueberry festival
            special in one place.
          </p>
        </div>

        <MenuCartShell categories={menuCategories} />
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

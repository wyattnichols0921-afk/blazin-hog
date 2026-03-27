import type { Metadata } from "next";

import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn the story behind Blazin Hog and what makes this BBQ food truck different.",
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-[var(--color-orange)]">
              About
            </p>
            <h1 className="text-3xl font-black uppercase leading-tight text-[var(--color-cream)] sm:text-4xl md:text-5xl">
              A food truck built on smoke discipline and neighborhood energy.
            </h1>
          </div>

          <div className="space-y-5 text-sm leading-8 text-[color:rgba(248,239,224,0.74)] sm:text-base">
            <p>
              Blazin Hog began with backyard offsets, late-night fire
              management, and an obsession with getting bark, tenderness, and
              timing exactly right. What started as weekend cooks for friends
              grew into a full food truck focused on high-quality barbecue that
              still feels personal.
            </p>
            <p>
              The truck runs on classic BBQ fundamentals: meats smoked low and
              slow, homemade sides that taste like someone actually cared, and
              service that moves fast without feeling rushed. Every stop is a
              chance to feed regulars, meet new neighborhoods, and put serious
              smoke into everyday lunch plans.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              title: "Real Smoke",
              description:
                "Brisket, ribs, and pork are cooked with patience for a deep smoke profile and clean finish.",
            },
            {
              title: "Homemade Sides",
              description:
                "Mac, beans, slaw, and cornbread are made to stand beside the meat, not disappear behind it.",
            },
            {
              title: "Community First",
              description:
                "Weekly stops, local events, and direct customer relationships keep the truck rooted in the neighborhoods it serves.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-white/10 bg-[color:rgba(248,239,224,0.05)] p-5 shadow-xl shadow-black/15 sm:p-6"
            >
              <h2 className="text-xl font-black uppercase text-[var(--color-cream)] sm:text-2xl">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[color:rgba(248,239,224,0.72)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <section className="mt-8 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(248,239,224,0.06),rgba(248,239,224,0.03))] p-5 shadow-2xl shadow-black/15 sm:mt-12 sm:p-8 md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-[var(--color-orange)]">
            What Makes Blazin Hog Different
          </p>
          <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div>
              <h3 className="text-lg font-black uppercase text-[var(--color-cream)]">
                Fire-Finished Flavor
              </h3>
              <p className="mt-3 text-sm leading-7 text-[color:rgba(248,239,224,0.72)]">
                Select items get a final kiss of flame before service for extra
                edge, char, and aroma.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-black uppercase text-[var(--color-cream)]">
                Tight Menu, Better Execution
              </h3>
              <p className="mt-3 text-sm leading-7 text-[color:rgba(248,239,224,0.72)]">
                The truck stays focused so every plate can land hot, balanced,
                and consistent from first order to sellout.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-black uppercase text-[var(--color-cream)]">
                Event-Ready Service
              </h3>
              <p className="mt-3 text-sm leading-7 text-[color:rgba(248,239,224,0.72)]">
                Public stops and private bookings use the same polished,
                customer-facing setup, built to feel like a real brand on-site.
              </p>
            </div>
          </div>
        </section>
      </section>

      <CTASection
        eyebrow="See It In Motion"
        title="Catch the truck at a weekly stop or bring it to your event."
        description="Whether you want a quick lunch line or a full-service private setup, Blazin Hog is built to show up sharp and serve fast."
        primaryHref="/locations"
        primaryLabel="View Locations"
        secondaryHref="/contact"
        secondaryLabel="Book Catering"
      />
    </>
  );
}

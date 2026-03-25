import type { Metadata } from "next";

import { BookingInquiryForm } from "@/components/booking-inquiry-form";
import { siteDetails } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Blazin Hog for catering, booking inquiries, or to follow the truck online.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:px-8 md:py-16">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
        <div className="space-y-5">
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-[var(--color-orange)]">
            Contact
          </p>
          <h1 className="text-3xl font-black uppercase leading-tight text-[var(--color-cream)] sm:text-4xl md:text-5xl">
            Booking, catering, and truck updates.
          </h1>
          <p className="text-sm leading-8 text-[color:rgba(248,239,224,0.74)] sm:text-base">
            Reach out for office lunches, private events, market appearances, or
            larger catering requests. The fastest way to lock in a date is by
            email with your headcount, event type, and preferred service window.
          </p>
        </div>

        <div className="grid gap-5">
          <BookingInquiryForm />

          <section className="rounded-[1.75rem] border border-white/10 bg-[color:rgba(248,239,224,0.05)] p-5 shadow-xl shadow-black/20 sm:p-6 md:p-8">
            <h2 className="text-xl font-black uppercase text-[var(--color-cream)] sm:text-2xl">
              Direct Contact
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <a
                href={`tel:${siteDetails.phone.replace(/[^\d]/g, "")}`}
                className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5 transition-all duration-200 hover:border-[var(--color-orange)]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-orange)]">
                  Phone
                </p>
                <p className="mt-3 text-lg font-bold text-[var(--color-cream)]">
                  {siteDetails.phone}
                </p>
              </a>
              <a
                href={`mailto:${siteDetails.email}`}
                className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5 transition-all duration-200 hover:border-[var(--color-orange)]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-orange)]">
                  Email
                </p>
                <p className="mt-3 text-lg font-bold text-[var(--color-cream)]">
                  {siteDetails.email}
                </p>
              </a>
            </div>
          </section>

          <section className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(248,239,224,0.05),rgba(248,239,224,0.03))] p-5 shadow-xl shadow-black/20 sm:p-6 md:p-8">
            <h2 className="text-xl font-black uppercase text-[var(--color-cream)] sm:text-2xl">
              Booking & Catering
            </h2>
            <p className="mt-4 text-sm leading-7 text-[color:rgba(248,239,224,0.72)]">
              For private inquiries, include your event date, estimated guest
              count, service style, and location. Blazin Hog can support lunch
              service, drop catering, late-night event feeds, and custom pickup
              packages depending on availability.
            </p>
            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-[color:rgba(185,45,29,0.12)] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-orange)]">
                Best Inquiry Format
              </p>
              <p className="mt-3 text-sm leading-7 text-[color:rgba(248,239,224,0.82)]">
                Event type, guest count, address, target service time, and
                whether you need on-site service or pickup.
              </p>
            </div>
          </section>

          <section className="rounded-[1.75rem] border border-white/10 bg-[color:rgba(248,239,224,0.05)] p-5 shadow-xl shadow-black/20 sm:p-6 md:p-8">
            <h2 className="text-xl font-black uppercase text-[var(--color-cream)] sm:text-2xl">
              Follow The Truck
            </h2>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteDetails.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-[var(--color-orange)] px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-cream)] shadow-lg shadow-[color:rgba(212,98,45,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-orange-soft)] sm:w-auto"
              >
                Facebook
              </a>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

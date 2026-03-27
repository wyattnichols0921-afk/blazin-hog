"use client";

import { useState } from "react";

import { siteDetails } from "@/data/site";

export function BookingInquiryForm() {
  const [eventType, setEventType] = useState("");

  const fieldClassName =
    "w-full rounded-[1rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,243,223,0.08),rgba(255,243,223,0.04))] px-3.5 py-2.5 text-[13px] text-[var(--color-cream)] outline-none placeholder:text-[color:rgba(248,239,224,0.38)] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-200 focus:border-[var(--color-orange)] focus:bg-[linear-gradient(180deg,rgba(255,243,223,0.1),rgba(255,243,223,0.05))] focus:shadow-[0_0_0_4px_rgba(240,118,45,0.12)] sm:rounded-[1.1rem] sm:px-4 sm:py-3 sm:text-sm";

  return (
    <section className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(248,239,224,0.06),rgba(248,239,224,0.03))] p-4 shadow-[0_28px_70px_rgba(0,0,0,0.28)] sm:rounded-[1.9rem] sm:p-6 md:p-8">
      <div className="max-w-2xl space-y-4">
        <p className="inline-flex rounded-full border border-[color:rgba(240,118,45,0.24)] bg-[color:rgba(240,118,45,0.1)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--color-orange)]">
          Booking Inquiry
        </p>
        <h2 className="text-lg font-black uppercase text-[var(--color-cream)] sm:text-2xl">
          Tell the team about your event.
        </h2>
        <p className="max-w-xl text-[13px] leading-6 text-[color:rgba(248,239,224,0.72)] sm:text-sm sm:leading-7">
          This intake form helps collect the details needed for catering,
          private service, and special truck bookings. Submit by email or phone
          after gathering the basics below.
        </p>
      </div>

      <form className="mt-5 grid gap-3.5 sm:mt-8 sm:grid-cols-2 sm:gap-4">
        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-[color:rgba(248,239,224,0.72)]">
            Full Name
          </span>
          <input
            type="text"
            name="fullName"
            placeholder="Your name"
            className={fieldClassName}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-[color:rgba(248,239,224,0.72)]">
            Contact Email
          </span>
          <input
            type="email"
            name="email"
            placeholder="name@email.com"
            className={fieldClassName}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-[color:rgba(248,239,224,0.72)]">
            Phone Number
          </span>
          <input
            type="tel"
            name="phone"
            placeholder="Best callback number"
            className={fieldClassName}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-[color:rgba(248,239,224,0.72)]">
            Event Type
          </span>
          <select
            name="eventType"
            value={eventType}
            onChange={(event) => setEventType(event.target.value)}
            className={`${fieldClassName} bg-black`}
          >
            <option value="" disabled className="bg-black text-[var(--color-cream)]">
              Select one
            </option>
            <option value="Private Party" className="bg-black text-[var(--color-cream)]">
              Private Party
            </option>
            <option value="Office Lunch" className="bg-black text-[var(--color-cream)]">
              Office Lunch
            </option>
            <option value="Wedding / Reception" className="bg-black text-[var(--color-cream)]">
              Wedding / Reception
            </option>
            <option
              value="Festival / Community Event"
              className="bg-black text-[var(--color-cream)]"
            >
              Festival / Community Event
            </option>
            <option value="Drop Catering" className="bg-black text-[var(--color-cream)]">
              Drop Catering
            </option>
            <option value="Custom Request" className="bg-black text-[var(--color-cream)]">
              Custom Request
            </option>
          </select>
        </label>

        {eventType === "Custom Request" ? (
          <label className="block sm:col-span-2">
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-[color:rgba(248,239,224,0.72)]">
              Custom Catering Request
            </span>
            <input
              type="text"
              name="customEventType"
              placeholder="Describe the exact catering request"
              className={fieldClassName}
            />
          </label>
        ) : null}

        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-[color:rgba(248,239,224,0.72)]">
            Event Date
          </span>
          <input
            type="date"
            name="eventDate"
            className={fieldClassName}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-[color:rgba(248,239,224,0.72)]">
            Estimated Guests
          </span>
          <input
            type="number"
            name="guestCount"
            min="1"
            placeholder="Approximate headcount"
            className={fieldClassName}
          />
        </label>

        <label className="block sm:col-span-2">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-[color:rgba(248,239,224,0.72)]">
            Venue Address
          </span>
          <input
            type="text"
            name="venue"
            placeholder="Event location"
            className={fieldClassName}
          />
        </label>

        <label className="block sm:col-span-2">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-[color:rgba(248,239,224,0.72)]">
            Event Details
          </span>
          <textarea
            name="details"
            rows={5}
            placeholder="Tell Blazin Hog about service time, menu needs, setup details, and any special requests."
            className={fieldClassName}
          />
        </label>

        <div className="sm:col-span-2 rounded-[1.35rem] border border-[color:rgba(255,255,255,0.1)] bg-[linear-gradient(135deg,rgba(185,45,29,0.12),rgba(240,118,45,0.07))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:rounded-[1.6rem] sm:p-6">
          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-orange)]">
                Next Step
              </p>
              <h3 className="text-lg font-black uppercase text-[var(--color-cream)] sm:text-xl">
                Send your request directly to the booking team.
              </h3>
              <p className="max-w-xl text-sm leading-7 text-[color:rgba(248,239,224,0.82)]">
                Once you have the event basics filled out, email the details for
                availability and pricing. If you need a quick answer, call the
                truck directly.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-[1.2rem] border border-white/10 bg-black/10 p-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[color:rgba(248,239,224,0.64)]">
                  Email
                </p>
                <p className="mt-2 text-sm font-semibold text-[var(--color-cream)]">
                  {siteDetails.email}
                </p>
              </div>
              <div className="rounded-[1.2rem] border border-white/10 bg-black/10 p-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[color:rgba(248,239,224,0.64)]">
                  Call
                </p>
                <p className="mt-2 text-sm font-semibold text-[var(--color-cream)]">
                  {siteDetails.phone}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <a
              href={`mailto:${siteDetails.email}`}
              className="inline-flex min-h-[40px] w-full items-center justify-center rounded-full border border-[color:rgba(255,147,80,0.6)] bg-[linear-gradient(180deg,var(--color-orange-soft),var(--color-orange))] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-cream)] shadow-[0_12px_24px_rgba(212,98,45,0.24)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 sm:w-auto"
            >
              Email Booking Request
            </a>
            <a
              href={`tel:${siteDetails.phone.replace(/[^\d]/g, "")}`}
              className="inline-flex min-h-[40px] w-full items-center justify-center rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[color:rgba(248,239,224,0.8)] transition hover:-translate-y-0.5 hover:border-[var(--color-orange)] hover:text-[var(--color-cream)] sm:w-auto"
            >
              Call {siteDetails.phone}
            </a>
          </div>
        </div>
      </form>
    </section>
  );
}

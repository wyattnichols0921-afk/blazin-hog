export function BookingInquiryForm() {
  return (
    <section className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(248,239,224,0.05),rgba(248,239,224,0.03))] p-5 shadow-xl shadow-black/20 sm:p-6 md:p-8">
      <div className="max-w-2xl space-y-3">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-orange)]">
          Booking Inquiry
        </p>
        <h2 className="text-xl font-black uppercase text-[var(--color-cream)] sm:text-2xl">
          Tell the team about your event.
        </h2>
        <p className="text-sm leading-7 text-[color:rgba(248,239,224,0.72)]">
          This intake form helps collect the details needed for catering,
          private service, and special truck bookings. Submit by email or phone
          after gathering the basics below.
        </p>
      </div>

      <form className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-[color:rgba(248,239,224,0.72)]">
            Full Name
          </span>
          <input
            type="text"
            name="fullName"
            placeholder="Your name"
            className="w-full rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-[var(--color-cream)] outline-none placeholder:text-[color:rgba(248,239,224,0.38)] transition-all duration-200 focus:border-[var(--color-orange)] focus:bg-white/7"
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
            className="w-full rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-[var(--color-cream)] outline-none placeholder:text-[color:rgba(248,239,224,0.38)] transition-all duration-200 focus:border-[var(--color-orange)] focus:bg-white/7"
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
            className="w-full rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-[var(--color-cream)] outline-none placeholder:text-[color:rgba(248,239,224,0.38)] transition-all duration-200 focus:border-[var(--color-orange)] focus:bg-white/7"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-[color:rgba(248,239,224,0.72)]">
            Event Type
          </span>
          <select
            name="eventType"
            defaultValue=""
            className="w-full rounded-[1.25rem] border border-white/10 bg-[var(--color-char)] px-4 py-3 text-sm text-[var(--color-cream)] outline-none transition-all duration-200 focus:border-[var(--color-orange)]"
          >
            <option value="" disabled>
              Select one
            </option>
            <option>Private Party</option>
            <option>Office Lunch</option>
            <option>Wedding / Reception</option>
            <option>Festival / Community Event</option>
            <option>Drop Catering</option>
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-[color:rgba(248,239,224,0.72)]">
            Event Date
          </span>
          <input
            type="date"
            name="eventDate"
            className="w-full rounded-[1.25rem] border border-white/10 bg-[var(--color-char)] px-4 py-3 text-sm text-[var(--color-cream)] outline-none transition-all duration-200 focus:border-[var(--color-orange)]"
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
            className="w-full rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-[var(--color-cream)] outline-none placeholder:text-[color:rgba(248,239,224,0.38)] transition-all duration-200 focus:border-[var(--color-orange)] focus:bg-white/7"
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
            className="w-full rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-[var(--color-cream)] outline-none placeholder:text-[color:rgba(248,239,224,0.38)] transition-all duration-200 focus:border-[var(--color-orange)] focus:bg-white/7"
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
            className="w-full rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-[var(--color-cream)] outline-none placeholder:text-[color:rgba(248,239,224,0.38)] transition-all duration-200 focus:border-[var(--color-orange)] focus:bg-white/7"
          />
        </label>

        <div className="sm:col-span-2 flex flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-[color:rgba(185,45,29,0.1)] p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-7 text-[color:rgba(248,239,224,0.82)]">
            This form is a polished intake UI for customer inquiries. To submit
            right now, send these details to the contact email or call the
            truck directly.
          </p>
          <div className="flex flex-col gap-3 sm:items-end">
            <a
              href="mailto:kierra_belzes@yahoo.com"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-[var(--color-orange)] px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-cream)] shadow-lg shadow-[color:rgba(212,98,45,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-orange-soft)] sm:w-auto"
            >
              Email Booking Info
            </a>
            <a
              href="tel:2295310742"
              className="text-xs font-bold uppercase tracking-[0.18em] text-[color:rgba(248,239,224,0.72)] transition hover:text-[var(--color-orange)]"
            >
              Or call (229) 531-0742
            </a>
          </div>
        </div>
      </form>
    </section>
  );
}

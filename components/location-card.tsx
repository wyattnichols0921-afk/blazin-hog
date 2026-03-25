import type { LocationStop } from "@/data/site";

type LocationCardProps = {
  stop: LocationStop;
};

export function LocationCard({ stop }: LocationCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-white/10 bg-[color:rgba(248,239,224,0.05)] p-5 shadow-xl shadow-black/20 transition-all duration-200 hover:-translate-y-1 hover:border-[color:rgba(185,45,29,0.38)] sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-orange)]">
            {stop.day}
          </p>
          <h3 className="mt-3 text-xl font-black uppercase text-[var(--color-cream)] sm:text-2xl">
            {stop.venue}
          </h3>
        </div>
        <span className="w-fit rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[color:rgba(248,239,224,0.66)]">
          {stop.hours}
        </span>
      </div>
      <p className="mt-4 text-sm leading-7 text-[color:rgba(248,239,224,0.74)]">
        {stop.address}
      </p>
      <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-7 text-[color:rgba(248,239,224,0.62)]">
        {stop.note}
      </p>
    </article>
  );
}

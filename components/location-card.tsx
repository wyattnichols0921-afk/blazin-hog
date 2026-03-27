import type { LocationStop } from "@/data/site";

type LocationCardProps = {
  stop: LocationStop;
};

export function LocationCard({ stop }: LocationCardProps) {
  return (
    <article className="rounded-[1.6rem] border border-[color:rgba(255,243,223,0.1)] bg-[linear-gradient(180deg,rgba(255,243,223,0.08),rgba(255,243,223,0.03))] p-4 shadow-xl shadow-black/20 transition-all duration-200 hover:-translate-y-1 hover:border-[color:rgba(240,118,45,0.42)] hover:shadow-[0_20px_38px_rgba(0,0,0,0.2)] sm:rounded-[2rem] sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-orange)]">
            {stop.day}
          </p>
          <h3 className="mt-2 text-lg font-black uppercase text-[var(--color-cream)] sm:mt-3 sm:text-2xl">
            {stop.venue}
          </h3>
        </div>
        <span className="w-fit shrink-0 rounded-full border border-[color:rgba(255,243,223,0.14)] bg-[color:rgba(11,9,8,0.12)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[color:rgba(255,243,223,0.72)]">
          {stop.hours}
        </span>
      </div>
      <p className="mt-3 text-[13px] leading-6 text-[color:rgba(255,243,223,0.76)] sm:mt-4 sm:text-sm sm:leading-7">
        {stop.address}
      </p>
      <p className="mt-3 border-t border-white/10 pt-3 text-[13px] leading-6 text-[color:rgba(255,243,223,0.64)] sm:mt-4 sm:pt-4 sm:text-sm sm:leading-7">
        {stop.note}
      </p>
    </article>
  );
}

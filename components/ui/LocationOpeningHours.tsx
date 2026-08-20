import type { LocationOpeningHours as OpeningHours } from "@/types";

interface LocationOpeningHoursProps {
  openingHours: OpeningHours[];
  title?: string;
  className?: string;
}

export function LocationOpeningHours({
  openingHours,
  title = "Horario de atención",
  className = "",
}: LocationOpeningHoursProps) {
  return (
    <div className={className}>
      <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-900">
        {title}
      </h3>

      <div className="mt-4 space-y-4">
        {openingHours.map((schedule) => (
          <div
            key={schedule.days.join("-")}
            className="rounded-2xl bg-[var(--brand-cream)] p-4"
          >
            <div className="flex flex-wrap gap-2">
              {schedule.days.map((day) => (
                <span
                  key={day}
                  className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-[var(--brand-border)]"
                >
                  {day}
                </span>
              ))}
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {schedule.hours.map((period) => (
                <span
                  key={`${period.start}-${period.end}`}
                  className="text-sm font-semibold text-[var(--brand-primary)]"
                >
                  {period.start} – {period.end}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
import type { Schedule } from "@/types";

interface ScheduleDetailsProps {
  schedules: Schedule[];
}

export function ScheduleDetails({
  schedules,
}: ScheduleDetailsProps) {
  return (
    <div className="space-y-4">
      {schedules.map((schedule) => {
        const scheduleKey = `${schedule.professionalId}-${schedule.locationId}-${schedule.days.join("-")}`;

        if (schedule.appointmentOnly) {
          return (
            <div key={scheduleKey}>
              <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-[var(--brand-primary)] ring-1 ring-[var(--brand-border)]">
                Cirugías programadas
              </span>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Atención mediante coordinación previa.
              </p>
            </div>
          );
        }

        return (
          <div
            key={scheduleKey}
            className="border-t border-[var(--brand-border)] pt-4 first:border-t-0 first:pt-0"
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
                  className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-[var(--brand-primary)] ring-1 ring-[var(--brand-border)]"
                >
                  {period.start} – {period.end}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
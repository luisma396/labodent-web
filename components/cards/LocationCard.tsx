import type {
  Location,
  Professional,
  Schedule,
} from "@/types";

interface LocationCardProps {
  location: Location;
  schedules: Schedule[];
  professionals: Professional[];
}

export function LocationCard({
  location,
  schedules,
  professionals,
}: LocationCardProps) {
  return (
    <article className="rounded-3xl border border-[var(--brand-border)] bg-white p-8 shadow-sm transition-all duration-300 hover:border-[var(--brand-gold)] hover:shadow-lg">
      <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand-primary)]">
        {location.name}
      </span>

      <h3 className="mt-2 text-2xl font-semibold text-slate-900">
        {location.city}
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        {location.neighborhood}
      </p>

      {location.description && (
        <p className="mt-5 text-sm leading-6 text-slate-600">
          {location.description}
        </p>
      )}

      <div className="mt-8 border-t border-[var(--brand-border)] pt-6">
        <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-900">
          Horarios de atención
        </h4>

        <div className="mt-5 space-y-4">
          {schedules.map((schedule) => {
            const professional = professionals.find(
              (item) => item.id === schedule.professionalId,
            );

            return (
              <div
                key={`${schedule.professionalId}-${schedule.locationId}`}
                className="rounded-2xl bg-[var(--brand-cream)] p-5"
              >
                <p className="font-semibold text-slate-900">
                  {professional?.name}
                </p>

                {schedule.appointmentOnly ? (
                  <div className="mt-3">
                    <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-[var(--brand-primary)] ring-1 ring-[var(--brand-border)]">
                      Cirugías programadas
                    </span>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      Atención mediante coordinación previa.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="mt-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                        Días de atención
                      </p>

                      <div className="mt-2 flex flex-wrap gap-2">
                        {schedule.days.map((day) => (
                          <span
                            key={day}
                            className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-[var(--brand-border)]"
                          >
                            {day}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                        Horario
                      </p>

                      <div className="mt-2 flex flex-wrap gap-2">
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
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}
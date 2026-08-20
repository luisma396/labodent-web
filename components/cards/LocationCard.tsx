import { MapPin } from "lucide-react";

import { WhatsAppButton } from "@/components/ui";

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
  const professionalSchedules = schedules.reduce<
    Record<string, Schedule[]>
  >((groups, schedule) => {
    if (!groups[schedule.professionalId]) {
      groups[schedule.professionalId] = [];
    }

    groups[schedule.professionalId].push(schedule);

    return groups;
  }, {});

  return (
    <article className="rounded-3xl border border-[var(--brand-border)] bg-white p-6 shadow-sm transition-all duration-300 hover:border-[var(--brand-gold)] hover:shadow-lg sm:p-8">
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

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {location.whatsapp && (
          <WhatsAppButton
            phone={location.whatsapp}
            label="Contactar por WhatsApp"
            message={`Hola, quisiera solicitar una consulta en LABODENT ${location.city}.`}
            className="px-5 py-2.5"
          />
        )}

        {location.mapUrl && (
          <a
            href={location.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center gap-2
              rounded-full
              border border-[var(--brand-primary)]
              bg-white
              px-5 py-2.5
              text-sm font-semibold
              text-[var(--brand-primary)]
              transition-all duration-200
              hover:bg-[var(--brand-primary)]
              hover:text-white
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[var(--brand-primary)]
              focus-visible:ring-offset-2
            "
          >
            <MapPin
              size={18}
              strokeWidth={1.8}
              aria-hidden="true"
            />

            Cómo llegar
          </a>
        )}
      </div>

      <div className="mt-8 border-t border-[var(--brand-border)] pt-6">
        <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-900">
          Horarios de atención
        </h4>

        <div className="mt-5 space-y-4">
          {Object.entries(professionalSchedules).map(
            ([professionalId, groupedSchedules]) => {
              const professional = professionals.find(
                (item) => item.id === professionalId,
              );

              if (!professional) {
                return null;
              }

              return (
                <div
                  key={professionalId}
                  className="rounded-2xl bg-[var(--brand-cream)] p-5"
                >
                  <p className="font-semibold text-slate-900">
                    {professional.name}
                  </p>

                  <div className="mt-4 space-y-4">
                    {groupedSchedules.map((schedule) => {
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
                          
                          <div>
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
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            },
          )}
        </div>
      </div>
    </article>
  );
}
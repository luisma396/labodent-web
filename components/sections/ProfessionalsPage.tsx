import Image from "next/image";
import Link from "next/link";

import {
  LOCATIONS,
  PROFESSIONALS,
  SCHEDULES,
} from "@/constants";

import {
  Section,
  SectionHeader,
} from "@/components/ui";

import type { Schedule } from "@/types";

export function ProfessionalsPage() {
  return (
    <>
      <Section className="bg-white py-16 sm:py-20 lg:py-24">
        <SectionHeader
          eyebrow="Nuestro equipo"
          title="Profesionales comprometidos con tu sonrisa"
          description="Conoce a los profesionales que forman parte de LABODENT, sus principales áreas de especialización y horarios de atención."
          align="center"
        />

        <div className="mx-auto mt-12 max-w-5xl space-y-10">
          {PROFESSIONALS.map((professional) => {
            const schedules = SCHEDULES.filter(
              (schedule) =>
                schedule.professionalId === professional.id,
            );

            const schedulesByLocation = schedules.reduce<
              Record<string, Schedule[]>
            >((groups, schedule) => {
              if (!groups[schedule.locationId]) {
                groups[schedule.locationId] = [];
              }

              groups[schedule.locationId].push(schedule);

              return groups;
            }, {});

            return (
              <article
                key={professional.id}
                className="overflow-hidden rounded-3xl border border-[var(--brand-border)] bg-white shadow-sm"
              >
                <div className="grid lg:grid-cols-[360px_1fr]">
                  {/* Fotografía */}
                  <div className="relative aspect-square bg-slate-100 lg:aspect-auto lg:min-h-[420px]">
                    {professional.image ? (
                      <Image
                        src={professional.image}
                        alt={`Fotografía de ${professional.name}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 360px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full min-h-[320px] items-center justify-center">
                        <span className="text-4xl font-semibold text-[var(--brand-primary)]">
                          {professional.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Información */}
                  <div className="p-6 sm:p-8">
                    <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand-primary)]">
                      {professional.title}
                    </span>

                    <h2 className="mt-2 text-3xl font-semibold text-slate-900">
                      {professional.name}
                    </h2>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {professional.specialties.map(
                        (specialty) => (
                          <span
                            key={specialty}
                            className="rounded-full bg-[var(--brand-cream)] px-3 py-1 text-xs font-medium text-[var(--brand-primary)]"
                          >
                            {specialty}
                          </span>
                        ),
                      )}
                    </div>

                    {professional.experience && (
                      <p className="mt-6 text-sm text-slate-600">
                        <span className="font-semibold text-slate-900">
                          {professional.experience} años
                        </span>{" "}
                        de experiencia profesional.
                      </p>
                    )}

                    <div className="mt-6">
                      <Link
                        href={`/profesionales/${professional.id}`}
                        className="inline-flex items-center text-sm font-semibold text-[var(--brand-primary)] transition-colors hover:text-[var(--brand-primary-dark)]"
                      >
                        Ver perfil →
                      </Link>
                    </div>

                    {/* Horarios */}
                    <div className="mt-8 border-t border-[var(--brand-border)] pt-7">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-900">
                        Horarios de atención
                      </h3>

                      <div className="mt-5 grid gap-4 md:grid-cols-2">
                        {Object.entries(
                          schedulesByLocation,
                        ).map(
                          ([
                            locationId,
                            locationSchedules,
                          ]) => {
                            const location =
                              LOCATIONS.find(
                                (item) =>
                                  item.id === locationId,
                              );

                            if (!location) {
                              return null;
                            }

                            return (
                              <div
                                key={locationId}
                                className="rounded-2xl bg-[var(--brand-cream)] p-5"
                              >
                                <h4 className="text-lg font-semibold text-slate-900">
                                  {location.city}
                                </h4>

                                <p className="mt-1 text-sm text-slate-500">
                                  {location.neighborhood}
                                </p>

                                <div className="mt-5 space-y-4">
                                  {locationSchedules.map(
                                    (schedule) => {
                                      const scheduleKey = `${schedule.professionalId}-${schedule.locationId}-${schedule.days.join("-")}`;

                                      if (
                                        schedule.appointmentOnly
                                      ) {
                                        return (
                                          <div
                                            key={
                                              scheduleKey
                                            }
                                          >
                                            <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-[var(--brand-primary)] ring-1 ring-[var(--brand-border)]">
                                              Cirugías
                                              programadas
                                            </span>

                                            <p className="mt-3 text-sm leading-6 text-slate-600">
                                              Atención
                                              mediante
                                              coordinación
                                              previa.
                                            </p>
                                          </div>
                                        );
                                      }

                                      return (
                                        <div
                                          key={
                                            scheduleKey
                                          }
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
                                    },
                                  )}
                                </div>
                              </div>
                            );
                          },
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Section>
    </>
  );
}
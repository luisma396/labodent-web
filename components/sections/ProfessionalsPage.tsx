import {
    PROFESSIONALS,
    SCHEDULES,
    LOCATIONS,
  } from "@/constants";
  
  import {
    Section,
    SectionHeader,
  } from "@/components/ui";
  
  export function ProfessionalsPage() {
    return (
      <>
        <Section className="bg-[var(--brand-cream)] py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Profesionales"
            title="Experiencia y especialización al servicio de tu sonrisa"
            description="Conoce a los profesionales de LABODENT, sus áreas de especialización y los horarios de atención disponibles en cada sede."
            align="center"
          />
        </Section>
  
        <Section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-5xl space-y-12">
            {PROFESSIONALS.map((professional) => {
              const professionalSchedules = SCHEDULES.filter(
                (schedule) =>
                  schedule.professionalId === professional.id,
              );
  
              return (
                <article
                  key={professional.id}
                  className="rounded-3xl border border-[var(--brand-border)] bg-white p-6 shadow-sm sm:p-8"
                >
                  <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand-primary)]">
                    {professional.title}
                  </span>
  
                  <h2 className="mt-2 text-3xl font-semibold text-slate-900">
                    {professional.name}
                  </h2>
  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {professional.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="rounded-full bg-[var(--brand-cream)] px-3 py-1 text-sm font-medium text-[var(--brand-primary)]"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
  
                  <p className="mt-5 text-sm text-slate-600">
                    <span className="font-semibold text-slate-900">
                      {professional.experience} años
                    </span>{" "}
                    de experiencia profesional
                  </p>
  
                  <div className="mt-8 border-t border-[var(--brand-border)] pt-6">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-900">
                      Horarios de atención
                    </h3>
  
                    <div className="mt-5 grid gap-4 md:grid-cols-2">
                      {professionalSchedules.map((schedule) => {
                        const location = LOCATIONS.find(
                          (item) => item.id === schedule.locationId,
                        );
  
                        return (
                          <div
                            key={`${schedule.professionalId}-${schedule.locationId}`}
                            className="rounded-2xl bg-[var(--brand-cream)] p-5"
                          >
                            <p className="font-semibold text-slate-900">
                              {location?.city}
                            </p>
  
                            <p className="mt-1 text-sm text-slate-500">
                              {location?.neighborhood}
                            </p>
  
                            {schedule.appointmentOnly ? (
                              <p className="mt-4 text-sm font-medium text-[var(--brand-primary)]">
                                Atención para cirugías programadas
                              </p>
                            ) : (
                              <>
                                <div className="mt-4 flex flex-wrap gap-2">
                                  {schedule.days.map((day) => (
                                    <span
                                      key={day}
                                      className="rounded-full bg-white px-3 py-1 text-xs text-slate-600 ring-1 ring-[var(--brand-border)]"
                                    >
                                      {day}
                                    </span>
                                  ))}
                                </div>
  
                                <div className="mt-4 flex flex-wrap gap-2">
                                  {schedule.hours.map((period) => (
                                    <span
                                      key={`${period.start}-${period.end}`}
                                      className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-[var(--brand-primary)] ring-1 ring-[var(--brand-border)]"
                                    >
                                      {period.start} – {period.end}
                                    </span>
                                  ))}
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
            })}
          </div>
        </Section>
      </>
    );
  }
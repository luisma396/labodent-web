import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  LOCATIONS,
  PROFESSIONALS,
  SCHEDULES,
} from "@/constants";

import {
  Section,
  WhatsAppButton,
} from "@/components/ui";

interface ProfessionalDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return PROFESSIONALS.map((professional) => ({
    slug: professional.id,
  }));
}

export async function generateMetadata({
  params,
}: ProfessionalDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  const professional = PROFESSIONALS.find(
    (item) => item.id === slug,
  );

  if (!professional) {
    return {};
  }

  return {
    title: professional.name,

    description: `${professional.name}, profesional de LABODENT especializado en ${professional.specialties.join(
      " y ",
    )}.`,

    alternates: {
      canonical: `/profesionales/${professional.id}`,
    },

    openGraph: {
      title: `${professional.name} | LABODENT`,
      description: `${professional.name}, profesional de LABODENT especializado en ${professional.specialties.join(
        " y ",
      )}.`,
      url: `/profesionales/${professional.id}`,
    },
  };
}

export default async function ProfessionalDetailPage({
  params,
}: ProfessionalDetailPageProps) {
  const { slug } = await params;

  const professional = PROFESSIONALS.find(
    (item) => item.id === slug,
  );

  if (!professional) {
    notFound();
  }

  const professionalSchedules = SCHEDULES.filter(
    (schedule) =>
      schedule.professionalId === professional.id,
  );

  return (
    <>
      {/* Presentación */}
      <Section className="bg-[var(--brand-cream)] py-12 sm:py-14 lg:py-16">
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[360px_1fr]">
        <div className="relative mx-auto aspect-square w-full max-w-[340px] overflow-hidden rounded-3xl bg-white shadow-sm lg:max-w-none">
            {professional.image ? (
              <Image
                src={professional.image}
                alt={`Fotografía de ${professional.name}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 360px"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <span className="text-4xl font-semibold text-[var(--brand-primary)]">
                  {professional.name.charAt(0)}
                </span>
              </div>
            )}
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-primary)]">
              {professional.title}
            </span>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              {professional.name}
            </h1>

            <div className="mt-5 flex flex-wrap gap-2">
              {professional.specialties.map(
                (specialty) => (
                  <span
                    key={specialty}
                    className="rounded-full bg-white px-3 py-1 text-sm font-medium text-[var(--brand-primary)] ring-1 ring-[var(--brand-border)]"
                  >
                    {specialty}
                  </span>
                ),
              )}
            </div>

            <p className="mt-6 text-base text-slate-600">
              <span className="font-semibold text-slate-900">
                {professional.experience} años
              </span>{" "}
              de experiencia profesional.
            </p>
          </div>
        </div>
      </Section>

      {/* Horarios */}
      <Section className="border-t border-[var(--brand-border)] bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Horarios de atención
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Consulta los días y horarios de atención de{" "}
              {professional.name} en cada sede de LABODENT.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {professionalSchedules.map((schedule) => {
                const location = LOCATIONS.find(
                  (item) =>
                    item.id === schedule.locationId,
                );

                return (
                  <article
                    key={`${schedule.professionalId}-${schedule.locationId}`}
                    className="rounded-3xl border border-[var(--brand-border)] bg-[var(--brand-cream)] p-6"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-primary)]">
                      {location?.name}
                    </span>

                    <h3 className="mt-2 text-xl font-semibold text-slate-900">
                      {location?.city}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {location?.neighborhood}
                    </p>

                    {schedule.appointmentOnly ? (
                      <div className="mt-5">
                        <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-[var(--brand-primary)] ring-1 ring-[var(--brand-border)]">
                          Cirugías programadas
                        </span>

                        <p className="mt-3 text-sm leading-6 text-slate-600">
                          Atención mediante coordinación previa.
                        </p>
                      </div>
                    ) : (
                      <>
                        <div className="mt-5">
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

                        <div className="mt-5">
                          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                            Horario
                          </p>

                          <div className="mt-2 flex flex-wrap gap-2">
                            {schedule.hours.map(
                              (period) => (
                                <span
                                  key={`${period.start}-${period.end}`}
                                  className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-[var(--brand-primary)] ring-1 ring-[var(--brand-border)]"
                                >
                                  {period.start} – {period.end}
                                </span>
                              ),
                            )}
                          </div>
                        </div>
                      </>
                    )}
                  </article>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <aside className="h-fit rounded-3xl border border-[var(--brand-border)] bg-[var(--brand-cream)] p-6 lg:sticky lg:top-32">
            <h2 className="text-xl font-semibold text-slate-900">
              Solicita una consulta
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Contacta con LABODENT para coordinar una
              consulta con {professional.name}.
            </p>

            <div className="mt-6">
              <WhatsAppButton
                label="Consultar por WhatsApp"
                message={`Hola, quisiera solicitar una consulta con ${professional.name} en LABODENT.`}
              />
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
import { MapPin } from "lucide-react";

import { LocationCard } from "@/components/cards";
import {
  Section,
  SectionHeader,
  WhatsAppButton,
} from "@/components/ui";

import {
  LABORATORY_LOCATION,
  LOCATIONS,
  PROFESSIONALS,
  SCHEDULES,
} from "@/constants";

export function LocationsPage() {
  return (
    <>
      <Section className="bg-[var(--brand-cream)] py-16 sm:py-20 lg:py-24">
        <SectionHeader
          eyebrow="Ubicaciones"
          title="Encuentra la sede de LABODENT más conveniente para ti"
          description="Contamos con atención clínica en Ciudad del Este y Tembiapora, además de nuestro Laboratorio Digital para profesionales y clínicas."
          align="center"
        />
      </Section>

      {/* Sedes clínicas */}
      <Section className="bg-white py-16 sm:py-20 lg:py-24">
        <SectionHeader
          eyebrow="Atención clínica"
          title="Consultorios y horarios de atención"
          description="Consulta los días y horarios de nuestros profesionales en cada sede de LABODENT."
          align="center"
        />

        <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-2">
          {LOCATIONS.map((location) => {
            const schedules = SCHEDULES.filter(
              (schedule) =>
                schedule.locationId === location.id,
            );

            return (
              <LocationCard
                key={location.id}
                location={location}
                schedules={schedules}
                professionals={PROFESSIONALS}
              />
            );
          })}
        </div>
      </Section>

      {/* Laboratorio Digital */}
      <Section className="bg-[var(--brand-cream)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-[var(--brand-border)] bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand-primary)]">
                  {LABORATORY_LOCATION.name}
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                  {LABORATORY_LOCATION.city}
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  {LABORATORY_LOCATION.neighborhood}
                </p>

                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
                  Nuestro Laboratorio Digital recibe casos de profesionales y
                  clínicas para escaneo, diseño y fabricación personalizada de
                  prótesis, aparatos y piezas dentales.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <WhatsAppButton
                    label="Coordinar un caso"
                    message="Hola, quisiera coordinar un caso con el Laboratorio Digital LABODENT."
                  />

                  {LABORATORY_LOCATION.mapUrl && (
                    <a
                      href={LABORATORY_LOCATION.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center justify-center gap-2
                        rounded-full
                        border border-[var(--brand-primary)]
                        bg-white
                        px-6 py-3
                        text-sm font-semibold
                        text-[var(--brand-primary)]
                        transition-colors duration-200
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
              </div>

              <div className="hidden h-24 w-24 items-center justify-center rounded-3xl bg-[var(--brand-cream)] text-[var(--brand-primary)] lg:flex">
                <MapPin
                  size={42}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
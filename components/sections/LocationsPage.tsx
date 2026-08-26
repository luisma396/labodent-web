import {
  LaboratoryLocationCard,
  LocationCard,
} from "@/components/cards";

import {
  Section,
  SectionHeader,
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
        <div className="mx-auto max-w-4xl">
          <LaboratoryLocationCard
            location={LABORATORY_LOCATION}
          />
        </div>
      </Section>
    </>
  );
}
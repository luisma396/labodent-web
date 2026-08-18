import { LocationCard } from "@/components/cards";
import { Section, SectionHeader } from "@/components/ui";
import {
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
          description="Contamos con atención en Ciudad del Este y Tembiapora, con horarios organizados según cada profesional y sede."
          align="center"
        />
      </Section>

      <Section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          {LOCATIONS.map((location) => {
            const schedules = SCHEDULES.filter(
              (schedule) => schedule.locationId === location.id,
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
    </>
  );
}
import { LocationCard } from "@/components/cards";
import { Section, SectionHeader } from "@/components/ui";
import {
  LOCATIONS,
  PROFESSIONALS,
  SCHEDULES,
} from "@/constants";

export function Locations() {
  return (
    <Section
      id="ubicaciones"
      className="bg-slate-50 py-16 sm:py-20 lg:py-24"
    >
      <SectionHeader
        eyebrow="Dónde encontrarnos"
        title="Atención odontológica cerca de ti"
        description="Contamos con una matriz en Ciudad del Este y una sucursal en Tembiapora."
        align="center"
      />

      <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-2">
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
  );
}
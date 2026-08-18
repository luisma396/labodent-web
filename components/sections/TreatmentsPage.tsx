import { ServiceCard } from "@/components/cards";
import { Section, SectionHeader } from "@/components/ui";
import { SERVICES } from "@/constants";

export function TreatmentsPage() {
  return (
    <>
      <Section className="bg-[var(--brand-cream)] py-16 sm:py-20 lg:py-24">
        <SectionHeader
          eyebrow="Tratamientos"
          title="Atención odontológica integral para cada necesidad"
          description="Conoce los tratamientos y especialidades disponibles en LABODENT para cuidar la salud, función y estética de tu sonrisa."
          align="center"
        />
      </Section>

      <Section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
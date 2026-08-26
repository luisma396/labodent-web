import { LaboratoryServiceCard } from "@/components/cards";
import { Section, SectionHeader } from "@/components/ui";
import { LABORATORY_SERVICES } from "@/constants";

export function LaboratoryServicesSection() {
  const remainder = LABORATORY_SERVICES.length % 3;

  const lastRowStartIndex =
    remainder === 0
      ? LABORATORY_SERVICES.length
      : LABORATORY_SERVICES.length - remainder;

  return (
    <Section className="relative overflow-hidden bg-[var(--lab-surface)] py-16 text-white sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute left-1/2 top-0
          h-px w-2/3
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-[var(--lab-gold)]/40
          to-transparent
        "
      />

      <SectionHeader
        eyebrow="Servicios"
        title="Servicios de laboratorio digital"
        description="Soluciones digitales para odontólogos y clínicas, desde la recepción del registro hasta el diseño y fabricación del trabajo solicitado."
        align="center"
        variant="dark"
      />

      <div
        className="
          mx-auto mt-10
          grid max-w-6xl gap-5
          sm:mt-12 sm:grid-cols-2
          lg:grid-cols-12 lg:gap-6
        "
      >
        {LABORATORY_SERVICES.map((service, index) => {
          const isFirstItemLastRow =
            index === lastRowStartIndex;

          const desktopPosition =
            isFirstItemLastRow && remainder === 2
              ? "lg:col-start-3"
              : isFirstItemLastRow && remainder === 1
                ? "lg:col-start-5"
                : "";

          return (
            <div
              key={service.id}
              className={`
                h-full
                lg:col-span-4
                ${desktopPosition}
              `}
            >
              <LaboratoryServiceCard
                service={service}
              />
            </div>
          );
        })}
      </div>
    </Section>
  );
}
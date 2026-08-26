import {
  LABORATORY_RECEPTION_OPTIONS,
} from "@/constants";

import {
  Section,
  SectionHeader,
} from "@/components/ui";

import {
  LaboratoryReceptionCard,
} from "@/components/cards";

import { LaboratoryCapabilities } from "./LaboratoryCapabilities";
import { LaboratoryCTA } from "./LaboratoryCTA";
import { LaboratoryHero } from "./LaboratoryHero";
import { LaboratoryProcessSection } from "./LaboratoryProcessSection";
import { LaboratoryServicesSection } from "./LaboratoryServicesSection";

export function LaboratoryPage() {
  return (
    <>
      <LaboratoryHero />

      <LaboratoryServicesSection />

      <LaboratoryProcessSection />

      <LaboratoryCapabilities />

      {/* Recepción de trabajos */}
      <Section className="bg-[var(--lab-surface)] py-16 text-white sm:py-20 lg:py-24">
        <SectionHeader
          eyebrow="Recepción de trabajos"
          title="Elige cómo iniciar tu trabajo"
          description="Recibimos registros digitales propios o coordinamos el escaneo en el consultorio o directamente en LABODENT Digital."
          align="center"
          variant="dark"
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {LABORATORY_RECEPTION_OPTIONS.map((option) => (
            <LaboratoryReceptionCard
              key={option.id}
              option={option}
            />
          ))}
        </div>
      </Section>

      {/* CTA final */}
      <LaboratoryCTA />
    </>
  );
}
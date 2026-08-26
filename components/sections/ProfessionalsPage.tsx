import { ProfessionalCard } from "@/components/cards";
import {
  Section,
  SectionHeader,
} from "@/components/ui";
import { PROFESSIONALS } from "@/constants";

export function ProfessionalsPage() {
  return (
    <Section className="bg-white py-16 sm:py-20 lg:py-24">
      <SectionHeader
        eyebrow="Nuestro equipo"
        title="Profesionales comprometidos con tu sonrisa"
        description="Conoce a los profesionales que forman parte de LABODENT y sus principales áreas de especialización."
        align="center"
      />

      <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2 lg:gap-10">
        {PROFESSIONALS.map((professional) => (
          <ProfessionalCard
            key={professional.id}
            professional={professional}
          />
        ))}
      </div>
    </Section>
  );
}
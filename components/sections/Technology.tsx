import { TechnologyCard } from "@/components/cards";
import { Section, SectionHeader } from "@/components/ui";
import { TECHNOLOGIES } from "@/constants";

export function Technology() {
  return (
    <Section
      id="tecnologia"
      className="bg-slate-950 py-16 text-white sm:py-20 lg:py-24"
    >
      
      <SectionHeader
        eyebrow="Tecnología"
        title="Tecnología aplicada a tratamientos modernos"
        description="Incorporamos herramientas digitales que nos permiten mejorar el diagnóstico, la planificación y la atención de nuestros pacientes."
        align="center"
        variant="dark"
      />

      <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3 lg:gap-8">
        {TECHNOLOGIES.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
          />
        ))}
      </div>
    </Section>
  );
}
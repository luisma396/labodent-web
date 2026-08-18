import { TechnologyCard } from "@/components/cards";
import { Section, SectionHeader } from "@/components/ui";
import { TECHNOLOGIES } from "@/constants";

export function TechnologyPage() {
  return (
    <>
      <Section className="bg-slate-950 py-16 text-white sm:py-20 lg:py-24">
        <SectionHeader
          eyebrow="Tecnología"
          title="Tecnología para una odontología más precisa"
          description="En LABODENT incorporamos herramientas digitales que mejoran el diagnóstico, la planificación y la ejecución de los tratamientos."
          align="center"
          variant="dark"
        />
      </Section>

      <Section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TECHNOLOGIES.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
            />
          ))}
        </div>
      </Section>

      <Section className="bg-[var(--brand-cream)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900">
            Tecnología al servicio de cada tratamiento
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            La incorporación de herramientas digitales nos permite trabajar
            con mayor precisión, mejorar la planificación clínica y ofrecer
            una experiencia más moderna a nuestros pacientes.
          </p>
        </div>
      </Section>
    </>
  );
}
import Link from "next/link";

import { TechnologyCard } from "@/components/cards";
import { Section, SectionHeader } from "@/components/ui";
import { TECHNOLOGIES } from "@/constants";

export function TechnologyPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-slate-950 py-16 text-white sm:py-20 lg:py-24">
        <SectionHeader
          eyebrow="Tecnología"
          title="Tecnología para una odontología más precisa"
          description="En LABODENT incorporamos herramientas digitales que mejoran el diagnóstico, la planificación y la experiencia de atención de nuestros pacientes."
          align="center"
          variant="dark"
        />
      </Section>

      {/* Tecnologías clínicas */}
      <Section className="bg-white py-16 sm:py-20 lg:py-24">
        <SectionHeader
          eyebrow="Tecnología clínica"
          title="Herramientas digitales aplicadas a tu tratamiento"
          description="Utilizamos tecnología moderna como apoyo al diagnóstico, la planificación y el desarrollo de tratamientos odontológicos."
          align="center"
        />

        <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TECHNOLOGIES.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              variant="light"
            />
          ))}
        </div>

      </Section>

      {/* Beneficios */}
      <Section className="bg-[var(--brand-cream)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-primary)]">
            Flujo digital
          </span>

          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Tecnología al servicio de cada tratamiento
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            La incorporación de herramientas digitales nos permite trabajar
            con mayor precisión, mejorar la planificación clínica y ofrecer
            una experiencia más moderna a nuestros pacientes.
          </p>
        </div>
      </Section>

      {/* Laboratorio Digital */}
      <Section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-[var(--brand-border)] bg-white p-8 text-center shadow-sm sm:p-10 lg:p-12">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-primary)]">
            Laboratorio Digital
          </span>

          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Tecnología también disponible para profesionales y clínicas
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            LABODENT cuenta con un laboratorio digital propio para escaneo,
            diseño y fabricación personalizada de prótesis, aparatos y piezas
            dentales prescritas por profesionales.
          </p>

          <div className="mt-8">
            <Link
              href="/laboratorio-digital"
              className="inline-flex items-center justify-center rounded-full bg-[var(--brand-primary)] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--brand-primary-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2"
            >
              Conocer el Laboratorio Digital
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
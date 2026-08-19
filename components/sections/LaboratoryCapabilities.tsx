import Image from "next/image";

import { IMAGES } from "@/constants";
import {
  Section,
  SectionHeader,
} from "@/components/ui";

const CAPABILITIES = [
  {
    id: "scanning",
    title: "Escaneo intraoral 3D",
    description:
      "Obtención de registros digitales precisos para iniciar procesos de diseño, planificación y fabricación odontológica.",
    image: IMAGES.laboratory.scanning,
  },
  {
    id: "design",
    title: "Diseño digital",
    description:
      "Diseño CAD personalizado de prótesis, aparatos y piezas dentales según la prescripción y requerimientos del profesional.",
    image: IMAGES.laboratory.design,
  },
  {
    id: "manufacturing",
    title: "Fabricación personalizada",
    description:
      "Producción a medida de soluciones odontológicas desarrolladas a partir de registros digitales y planificación técnica.",
    image: IMAGES.laboratory.manufacturing,
  },
] as const;

export function LaboratoryCapabilities() {
  return (
    <Section className="bg-slate-950 py-16 text-white sm:py-20 lg:py-24">
      <SectionHeader
        eyebrow="Capacidades"
        title="Tecnología aplicada al flujo digital"
        description="Integramos captura digital, diseño y fabricación para desarrollar soluciones odontológicas personalizadas para profesionales y clínicas."
        align="center"
        variant="dark"
      />

      <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-3">
        {CAPABILITIES.map((capability) => (
          <article
            key={capability.id}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-gold)]/60 hover:bg-white/[0.07] hover:shadow-xl"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
              <Image
                src={capability.image}
                alt={capability.title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
            </div>

            <div className="p-6">
              <div className="mb-4 h-1 w-10 rounded-full bg-[var(--brand-gold)] transition-all duration-300 group-hover:w-16" />

              <h3 className="text-xl font-semibold text-white">
                {capability.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                {capability.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
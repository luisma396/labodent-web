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
    <Section className="bg-[var(--lab-background)] py-16 text-white sm:py-20 lg:py-24">
      <SectionHeader
        eyebrow="Capacidades"
        title="Tecnología aplicada al flujo digital"
        description="Integramos captura digital, diseño y fabricación para desarrollar soluciones odontológicas personalizadas para profesionales y clínicas."
        align="center"
        variant="dark"
      />

      <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-3">
        {CAPABILITIES.map((capability, index) => (
          <article
            key={capability.id}
            className="
              group
              flex h-full flex-col
              overflow-hidden
              rounded-3xl
              border border-[var(--lab-border)]
              bg-[var(--lab-surface)]
              transition-all duration-300
              hover:-translate-y-1
              hover:border-[var(--lab-gold)]
              hover:shadow-[0_18px_45px_rgba(0,0,0,0.35)]
            "
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-black">
              <Image
                src={capability.image}
                alt={capability.title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <span
                className="
                  absolute left-4 top-4
                  inline-flex h-9 min-w-9 items-center justify-center
                  rounded-xl
                  border border-[var(--lab-gold)]
                  bg-black/70
                  px-2
                  text-xs font-semibold
                  text-[var(--lab-gold)]
                  backdrop-blur-sm
                "
              >
                0{index + 1}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="mb-4 h-1 w-10 rounded-full bg-[var(--lab-gold)] transition-all duration-300 group-hover:w-16" />

              <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[var(--lab-gold-light)]">
                {capability.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--lab-muted)]">
                {capability.description}
              </p>

              <div className="mt-auto pt-6">
                <div className="h-px w-full bg-gradient-to-r from-[var(--lab-gold)]/30 via-[var(--lab-gold)]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
import Image from "next/image";

import {
  IMAGES,
  LABORATORY_LOCATION,
} from "@/constants";

import {
  Section,
} from "@/components/ui";

import { createWhatsAppUrl } from "@/utils/whatsapp";

export function LaboratoryHero() {
  const laboratoryWhatsAppUrl = createWhatsAppUrl(
    LABORATORY_LOCATION.whatsapp ?? "",
    "Hola, quisiera consultar sobre los servicios del Laboratorio Digital LABODENT.",
  );

  return (
    <Section className="relative overflow-hidden bg-[var(--lab-background)] py-0 text-white">
      <div className="relative mx-auto max-w-7xl overflow-hidden">
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[var(--lab-gold)]/10 blur-3xl" />

        <div className="grid lg:min-h-[520px] lg:grid-cols-[1.05fr_0.95fr]">
          {/* Contenido */}
          <div
            className="
              relative z-10
              flex min-h-[calc(100svh-4.25rem)] items-center
              px-6 py-10
              sm:min-h-0 sm:px-10 sm:py-12
              lg:px-16 lg:py-10
            "
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--lab-gold)]">
                  LABODENT Digital
                </span>

                <div className="hidden h-px w-28 bg-gradient-to-r from-[var(--lab-gold)] to-transparent sm:block" />
              </div>

              <h1 className="mt-5 text-[2.35rem] font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.15rem] xl:text-[3.35rem]">
                Soluciones digitales y fabricación odontológica{" "}
                <span className="text-[var(--lab-gold)]">
                  para profesionales
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-[var(--lab-muted)] sm:text-lg">
                Integramos escaneo, diseño y fabricación digital para
                desarrollar soluciones odontológicas personalizadas a partir
                de registros clínicos y prescripciones profesionales.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-[var(--lab-border)] bg-[var(--lab-surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--lab-gold-light)]">
                  Escaneo 3D
                </span>

                <span className="rounded-full border border-[var(--lab-border)] bg-[var(--lab-surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--lab-gold-light)]">
                  Diseño CAD
                </span>

                <span className="rounded-full border border-[var(--lab-border)] bg-[var(--lab-surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--lab-gold-light)]">
                  Fabricación
                </span>
              </div>

              <div className="mt-7">
                <a
                  href={laboratoryWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center
                    rounded-full
                    border border-[var(--lab-gold)]
                    bg-transparent
                    px-6 py-3
                    text-sm font-semibold
                    text-[var(--lab-gold)]
                    transition-all duration-300
                    hover:bg-[var(--lab-gold)]
                    hover:text-black
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[var(--lab-gold)]
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-black
                  "
                >
                  Contactar al Laboratorio
                </a>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="relative h-[320px] overflow-hidden sm:h-[380px] lg:h-auto lg:min-h-full">
            <Image
              src={IMAGES.laboratory.manufacturing}
              alt="Fabricación odontológica digital en LABODENT"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[var(--lab-background)] via-black/30 to-transparent lg:from-[var(--lab-background)] lg:via-black/10" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

            <div
              className="
                absolute
                bottom-5 left-5 right-5
                rounded-2xl
                border border-[var(--lab-border)]
                bg-black/80
                p-4
                shadow-xl
                backdrop-blur-md
                sm:bottom-6 sm:left-8 sm:right-8
                lg:bottom-6
              "
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--lab-gold)]">
                Flujo digital
              </span>

              <p className="mt-2 text-sm leading-6 text-white/90">
                Precisión desde el registro hasta la fabricación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
import Image from "next/image";
import {
  Building2,
  ScanLine,
  Upload,
} from "lucide-react";

import {
  IMAGES,
  LABORATORY_LOCATION,
  LABORATORY_PROCESS,
  LABORATORY_SERVICES,
} from "@/constants";

import {
  LocationOpeningHours,
  Section,
  SectionHeader,
  WhatsAppButton,
} from "@/components/ui";

import {
  LaboratoryProcessCard,
  LaboratoryServiceCard,
} from "@/components/cards";

import { createWhatsAppUrl } from "@/utils/whatsapp";

import { LaboratoryCapabilities } from "./LaboratoryCapabilities";

export function LaboratoryPage() {
  const laboratoryWhatsAppUrl = createWhatsAppUrl(
    LABORATORY_LOCATION.whatsapp ?? "",
    "Hola, quisiera consultar sobre los servicios del Laboratorio Digital LABODENT.",
  );

  return (
    <>
      {/* Hero Laboratorio Digital */}
      <Section className="relative overflow-hidden bg-[var(--lab-background)] py-0 text-white">
        <div className="relative mx-auto max-w-7xl overflow-hidden">
          {/* Decoración */}
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
            <div className=" relative h-[320px] overflow-hidden sm:h-[380px] lg:h-auto lg:min-h-full">
            <Image
              src={IMAGES.laboratory.manufacturing}
              alt="Fabricación odontológica digital en LABODENT"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="
                object-cover
                object-center
                lg:object-center
              "
            />
              {/* Oscurecimiento lateral */}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--lab-background)] via-black/30 to-transparent lg:from-[var(--lab-background)] lg:via-black/10" />

              {/* Oscurecimiento vertical */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              {/* Marco inferior */}
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

      {/* Servicios */}
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
            lg:grid-cols-6 lg:gap-6
          "
        >
          {LABORATORY_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`
                lg:col-span-2
                ${index === 3 ? "lg:col-start-2" : ""}
              `}
            >
              <LaboratoryServiceCard service={service} />
            </div>
          ))}
        </div>
      </Section>

      {/* Proceso */}
      <Section className="bg-[var(--lab-background)] py-16 text-white sm:py-20 lg:py-24">
        <SectionHeader
          eyebrow="Proceso"
          title="Cómo trabajamos"
          description="Nuestro flujo digital integra la recepción de registros, validación, diseño, fabricación y entrega del trabajo finalizado."
          align="center"
          variant="dark"
        />

        <div
          className="
            mx-auto mt-12
            grid max-w-7xl gap-5
            md:grid-cols-2
            lg:grid-cols-5
            lg:gap-4
          "
        >
          {LABORATORY_PROCESS.map((process) => (
            <div
              key={process.id}
              className="
                relative
                lg:after:pointer-events-none
                lg:after:absolute
                lg:after:left-full
                lg:after:top-10
                lg:after:z-10
                lg:after:h-px
                lg:after:w-4
                lg:after:bg-[var(--lab-gold)]/40
                last:lg:after:hidden
              "
            >
              <LaboratoryProcessCard process={process} />
            </div>
          ))}
        </div>
      </Section>

      {/* Capacidades */}
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
          {/* Envío digital */}
          <article
            className="
              group
              flex h-full flex-col
              rounded-3xl
              border border-[var(--lab-border)]
              bg-[var(--lab-surface-soft)]
              p-6
              transition-all duration-300
              hover:-translate-y-1
              hover:border-[var(--lab-gold)]
              hover:bg-[var(--lab-surface)]
              hover:shadow-[0_18px_45px_rgba(0,0,0,0.35)]
            "
          >
            <div
              className="
                flex h-12 w-12 items-center justify-center
                rounded-xl
                border border-transparent
                bg-[var(--lab-gold)]
                text-black
                transition-all duration-300
                group-hover:border-[var(--lab-gold)]
                group-hover:bg-black
                group-hover:text-[var(--lab-gold)]
              "
            >
              <Upload
                size={24}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </div>

            <span className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--lab-gold)]">
              Registro digital
            </span>

            <h3 className="mt-3 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[var(--lab-gold-light)]">
              Envío de escaneo propio
            </h3>

            <p className="mt-3 text-sm leading-6 text-[var(--lab-muted)]">
              El profesional puede proporcionar sus propios registros digitales
              para iniciar el diseño y fabricación del trabajo solicitado.
            </p>

            <div className="mt-auto pt-6">
              <div className="h-px w-10 bg-[var(--lab-gold)]/40 transition-all duration-300 group-hover:w-20 group-hover:bg-[var(--lab-gold)]" />
            </div>
          </article>

          {/* Escaneo en consultorio */}
          <article
            className="
              group
              flex h-full flex-col
              rounded-3xl
              border border-[var(--lab-border)]
              bg-[var(--lab-surface-soft)]
              p-6
              transition-all duration-300
              hover:-translate-y-1
              hover:border-[var(--lab-gold)]
              hover:bg-[var(--lab-surface)]
              hover:shadow-[0_18px_45px_rgba(0,0,0,0.35)]
            "
          >
            <div
              className="
                flex h-12 w-12 items-center justify-center
                rounded-xl
                border border-transparent
                bg-[var(--lab-gold)]
                text-black
                transition-all duration-300
                group-hover:border-[var(--lab-gold)]
                group-hover:bg-black
                group-hover:text-[var(--lab-gold)]
              "
            >
              <ScanLine
                size={24}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </div>

            <span className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--lab-gold)]">
              Escaneo programado
            </span>

            <h3 className="mt-3 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[var(--lab-gold-light)]">
              Escaneo en el consultorio
            </h3>

            <p className="mt-3 text-sm leading-6 text-[var(--lab-muted)]">
              Podemos coordinar una cita programada para realizar el escaneo
              directamente en el consultorio del profesional.
            </p>

            <div className="mt-auto pt-6">
              <div className="h-px w-10 bg-[var(--lab-gold)]/40 transition-all duration-300 group-hover:w-20 group-hover:bg-[var(--lab-gold)]" />
            </div>
          </article>

          {/* Escaneo en LABODENT */}
          <article
            className="
              group
              flex h-full flex-col
              rounded-3xl
              border border-[var(--lab-border)]
              bg-[var(--lab-surface-soft)]
              p-6
              transition-all duration-300
              hover:-translate-y-1
              hover:border-[var(--lab-gold)]
              hover:bg-[var(--lab-surface)]
              hover:shadow-[0_18px_45px_rgba(0,0,0,0.35)]
            "
          >
            <div
              className="
                flex h-12 w-12 items-center justify-center
                rounded-xl
                border border-transparent
                bg-[var(--lab-gold)]
                text-black
                transition-all duration-300
                group-hover:border-[var(--lab-gold)]
                group-hover:bg-black
                group-hover:text-[var(--lab-gold)]
              "
            >
              <Building2
                size={24}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </div>

            <span className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--lab-gold)]">
              En LABODENT Digital
            </span>

            <h3 className="mt-3 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[var(--lab-gold-light)]">
              Escaneo en LABODENT
            </h3>

            <p className="mt-3 text-sm leading-6 text-[var(--lab-muted)]">
              El paciente también puede acudir directamente a LABODENT para
              realizar el registro digital necesario.
            </p>

            <div className="mt-auto pt-6">
              <div className="h-px w-10 bg-[var(--lab-gold)]/40 transition-all duration-300 group-hover:w-20 group-hover:bg-[var(--lab-gold)]" />
            </div>
          </article>
        </div>
      </Section>

      {/* CTA final */}
      <Section className="bg-[var(--lab-background)] py-12 text-white sm:py-16 lg:py-20">
        <div
          className="
            relative mx-auto max-w-6xl overflow-hidden
            rounded-[2rem]
            border border-[var(--lab-gold)]/40
            bg-[var(--lab-surface-soft)]
            px-6 py-8
            sm:px-8 sm:py-10
            lg:px-12 lg:py-12
          "
        >
          {/* Detalles decorativos */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute -bottom-24 -left-20
              h-64 w-64 rounded-full
              border border-[var(--lab-gold)]/10
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute -bottom-16 left-16
              h-48 w-48 rounded-full
              border border-[var(--lab-gold)]/10
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute right-0 top-0
              h-px w-1/3
              bg-gradient-to-l
              from-[var(--lab-gold)]
              to-transparent
              opacity-40
            "
          />

          <div
            className="
              relative z-10
              grid items-center gap-10
              lg:grid-cols-[1fr_0.95fr]
              lg:gap-14
            "
          >
            {/* Contenido */}
            <div>
              <span
                className="
                  text-xs font-semibold uppercase
                  tracking-[0.2em]
                  text-[var(--lab-gold)]
                "
              >
                Profesionales y clínicas
              </span>

              <h2
                className="
                  mt-4 max-w-xl
                  text-3xl font-semibold leading-tight
                  text-white
                  sm:text-4xl
                "
              >
                Coordina tu próximo trabajo con{" "}
                <span className="text-[var(--lab-gold)]">
                  LABODENT Digital
                </span>
              </h2>

              <p
                className="
                  mt-5 max-w-xl
                  text-sm leading-6
                  text-[var(--lab-muted)]
                  sm:text-base sm:leading-7
                "
              >
                Contacta con nuestro equipo para coordinar escaneos,
                enviar registros digitales o consultar sobre diseño
                y fabricación odontológica.
              </p>

              <div className="mt-7">
                <WhatsAppButton
                  phone={LABORATORY_LOCATION.whatsapp}
                  label="Contactar al Laboratorio"
                  message="Hola, quisiera consultar sobre los servicios de LABODENT Digital."
                  variant="labline"

                />
              </div>
            </div>

            {/* Horario */}
            {LABORATORY_LOCATION.openingHours && (
              <div
                className="
                  rounded-3xl
                  border border-[var(--lab-gold)]/30
                  bg-black/30
                  p-5
                  sm:p-6
                  lg:p-7
                "
              >
                <LocationOpeningHours
                  openingHours={LABORATORY_LOCATION.openingHours}
                  title="Horario del Laboratorio Digital"
                  variant="laboratory"
                />
              </div>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
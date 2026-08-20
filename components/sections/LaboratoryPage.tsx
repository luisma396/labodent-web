import {
  LABORATORY_LOCATION,
  LABORATORY_PROCESS,
  LABORATORY_SERVICES,
} from "@/constants";

import {
  Section,
  SectionHeader,
  WhatsAppButton,
  LocationOpeningHours,
} from "@/components/ui";

import {
  LaboratoryProcessCard,
  LaboratoryServiceCard,
} from "@/components/cards";

import { LaboratoryCapabilities } from "./LaboratoryCapabilities";

export function LaboratoryPage() {
  return (
    <>
      <Section className="bg-slate-950 py-16 text-white sm:py-20 lg:py-24">
        <SectionHeader
          eyebrow="Laboratorio Digital"
          title="Soluciones digitales y fabricación odontológica para profesionales"
          description="LABODENT ofrece servicios de laboratorio digital para odontólogos y clínicas, desde la recepción de registros digitales y escaneo intraoral hasta el diseño y fabricación personalizada."
          align="center"
          variant="dark"
        />

        <div className="mt-10 flex justify-center">
          <WhatsAppButton
            label="Coordinar un caso"
            message="Hola, quisiera consultar sobre los servicios del Laboratorio Digital LABODENT."
            variant="light"
          />
        </div>
      </Section>

      {/* Servicios */}
      <Section className="bg-white py-16 sm:py-20 lg:py-24">
        <SectionHeader
          eyebrow="Servicios"
          title="Servicios de laboratorio digital"
          description="Trabajamos con profesionales y clínicas para desarrollar soluciones odontológicas personalizadas a partir de registros digitales y prescripciones clínicas."
          align="center"
        />

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LABORATORY_SERVICES.map((service) => (
            <LaboratoryServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </Section>

      {/* Proceso */}
      <Section className="bg-[var(--brand-cream)] py-16 sm:py-20 lg:py-24">
        <SectionHeader
          eyebrow="Proceso"
          title="Cómo trabajamos"
          description="El flujo de trabajo puede comenzar con registros enviados por el profesional, un escaneo programado en su consultorio o la atención del paciente directamente en LABODENT."
          align="center"
        />

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {LABORATORY_PROCESS.map((process) => (
            <LaboratoryProcessCard
              key={process.id}
              process={process}
            />
          ))}
        </div>
      </Section>

      <LaboratoryCapabilities />

      {/* Recepción de casos */}
      <Section className="bg-white py-16 sm:py-20 lg:py-24">
        <SectionHeader
          eyebrow="Recepción de casos"
          title="Tres formas de iniciar un trabajo"
          description="Adaptamos la recepción del caso al flujo de trabajo del profesional y a las necesidades del paciente."
          align="center"
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-[var(--brand-border)] p-6">
            <h3 className="text-lg font-semibold text-slate-900">
              Envío de escaneo propio
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              El profesional puede proporcionar sus propios registros digitales
              para iniciar el diseño y fabricación del caso.
            </p>
          </article>

          <article className="rounded-3xl border border-[var(--brand-border)] p-6">
            <h3 className="text-lg font-semibold text-slate-900">
              Escaneo en el consultorio
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Podemos coordinar una cita programada para realizar el escaneo
              directamente en el consultorio del profesional.
            </p>
          </article>

          <article className="rounded-3xl border border-[var(--brand-border)] p-6">
            <h3 className="text-lg font-semibold text-slate-900">
              Escaneo en LABODENT
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              El paciente también puede acudir directamente a LABODENT para
              realizar el registro digital necesario.
            </p>
          </article>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-[var(--brand-primary)] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-gold-light)]">
            Profesionales y clínicas
          </span>

          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Coordina tu próximo caso con el Laboratorio Digital LABODENT
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/80">
            Contacta con nuestro equipo para coordinar escaneos, enviar registros
            digitales o consultar sobre diseño y fabricación odontológica.
          </p>

          {LABORATORY_LOCATION.openingHours && (
            <div className="mx-auto mt-8 max-w-xl rounded-3xl bg-white p-6 text-left text-slate-900">
              <LocationOpeningHours
                openingHours={LABORATORY_LOCATION.openingHours}
                title="Horario del Laboratorio Digital"
              />
            </div>
          )}

          <div className="mt-8 flex justify-center">
            <WhatsAppButton
              phone={LABORATORY_LOCATION.whatsapp}
              label="Coordinar un caso"
              message="Hola, quisiera coordinar un caso con el Laboratorio Digital LABODENT."
              variant="light"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
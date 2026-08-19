import { MapPin } from "lucide-react";

import {
  COMPANY,
  LABORATORY_LOCATION,
  LOCATIONS,
} from "@/constants";

import {
  Section,
  SectionHeader,
  WhatsAppButton,
} from "@/components/ui";

export function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-[var(--brand-cream)] py-16 sm:py-20 lg:py-24">
        <SectionHeader
          eyebrow="Contacto"
          title="Estamos para ayudarte a cuidar tu sonrisa"
          description="Contacta con LABODENT para solicitar una consulta, conocer nuestras sedes o coordinar un caso con nuestro Laboratorio Digital."
          align="center"
        />
      </Section>

      {/* Atención clínica y sedes */}
      <Section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          {/* Atención general */}
          <div className="rounded-3xl border border-[var(--brand-border)] bg-white p-6 shadow-sm sm:p-8">
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand-primary)]">
              Atención general
            </span>

            <h2 className="mt-3 text-3xl font-semibold text-slate-900">
              ¿No sabes qué sede elegir?
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Escríbenos y te ayudamos a coordinar tu consulta en la sede y
              horario más conveniente para ti.
            </p>

            <div className="mt-8">
              <WhatsAppButton
                label="Consultar por WhatsApp"
                message="Hola, quisiera solicitar una consulta en LABODENT y necesito ayuda para elegir la sede más conveniente."
              />
            </div>

            <div className="mt-8 border-t border-[var(--brand-border)] pt-6">
              <p className="text-sm font-semibold text-slate-900">
                Teléfono
              </p>

              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                className="mt-1 inline-block text-sm text-[var(--brand-primary)] transition-colors hover:text-[var(--brand-primary-dark)]"
              >
                {COMPANY.phone}
              </a>
            </div>
          </div>

          {/* Sedes clínicas */}
          <div className="rounded-3xl border border-[var(--brand-border)] bg-[var(--brand-cream)] p-6 sm:p-8">
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand-primary)]">
              Nuestras sedes
            </span>

            <div className="mt-6 space-y-5">
              {LOCATIONS.map((location) => (
                <div
                  key={location.id}
                  className="rounded-2xl bg-white p-5 ring-1 ring-[var(--brand-border)]"
                >
                  <p className="font-semibold text-slate-900">
                    {location.name}
                  </p>

                  <p className="mt-1 text-lg font-semibold text-[var(--brand-primary)]">
                    {location.city}
                  </p>

                  <p className="mt-1 text-sm text-slate-600">
                    {location.neighborhood}
                  </p>

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    {location.whatsapp && (
                      <WhatsAppButton
                        phone={location.whatsapp}
                        label="Contactar por WhatsApp"
                        message={`Hola, quisiera solicitar una consulta en LABODENT ${location.city}.`}
                        className="px-5 py-2.5"
                      />
                    )}

                    {location.mapUrl && (
                      <a
                        href={location.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex items-center justify-center gap-2
                          rounded-full
                          border border-[var(--brand-primary)]
                          bg-white
                          px-5 py-2.5
                          text-sm font-semibold
                          text-[var(--brand-primary)]
                          transition-colors duration-200
                          hover:bg-[var(--brand-primary)]
                          hover:text-white
                          focus-visible:outline-none
                          focus-visible:ring-2
                          focus-visible:ring-[var(--brand-primary)]
                          focus-visible:ring-offset-2
                        "
                      >
                        <MapPin
                          size={16}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />

                        Cómo llegar
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Laboratorio Digital */}
      <Section className="bg-[var(--brand-cream)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-[var(--brand-border)] bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand-primary)]">
                Laboratorio Digital
              </span>

              <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                Coordina un caso con LABODENT
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Profesionales y clínicas pueden coordinar escaneos, enviar
                registros digitales o consultar sobre diseño y fabricación
                personalizada.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton
                  phone={LABORATORY_LOCATION.whatsapp}
                  label="Coordinar un caso"
                  message="Hola, quisiera coordinar un caso con el Laboratorio Digital LABODENT."
                />

                {LABORATORY_LOCATION.mapUrl && (
                  <a
                    href={LABORATORY_LOCATION.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center justify-center gap-2
                      rounded-full
                      border border-[var(--brand-primary)]
                      bg-white
                      px-6 py-3
                      text-sm font-semibold
                      text-[var(--brand-primary)]
                      transition-colors duration-200
                      hover:bg-[var(--brand-primary)]
                      hover:text-white
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[var(--brand-primary)]
                      focus-visible:ring-offset-2
                    "
                  >
                    <MapPin
                      size={18}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />

                    Cómo llegar
                  </a>
                )}
              </div>
            </div>

            <div className="hidden h-24 w-24 items-center justify-center rounded-3xl bg-[var(--brand-cream)] text-[var(--brand-primary)] lg:flex">
              <MapPin
                size={42}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* CTA final */}
      <Section className="bg-[var(--brand-primary)] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Da el primer paso hacia una sonrisa más saludable
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/80">
            Nuestro equipo está disponible para ayudarte a coordinar tu
            atención en la sede más conveniente para ti.
          </p>

          <div className="mt-8 flex justify-center">
            <WhatsAppButton
              label="Solicitar una consulta"
              message="Hola, quisiera solicitar una consulta en LABODENT."
              variant="light"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
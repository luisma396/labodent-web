import {
    COMPANY,
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
        <Section className="bg-[var(--brand-cream)] py-16 sm:py-20 lg:py-24">
          <SectionHeader
            eyebrow="Contacto"
            title="Estamos para ayudarte a cuidar tu sonrisa"
            description="Contacta con LABODENT para solicitar una consulta o conocer más sobre nuestros tratamientos y horarios de atención."
            align="center"
          />
        </Section>
  
        <Section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-[var(--brand-border)] bg-white p-6 shadow-sm sm:p-8">
              <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand-primary)]">
                Atención directa
              </span>
  
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                Solicita una consulta
              </h2>
  
              <p className="mt-4 text-base leading-7 text-slate-600">
                Puedes comunicarte directamente con nuestro equipo por WhatsApp
                para coordinar tu consulta y recibir información sobre nuestros
                tratamientos.
              </p>
  
              <div className="mt-8">
                <WhatsAppButton
                  label="Contactar por WhatsApp"
                  message="Hola, quisiera solicitar una consulta en LABODENT."
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
  
            <div className="rounded-3xl border border-[var(--brand-border)] bg-[var(--brand-cream)] p-6 sm:p-8">
              <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand-primary)]">
                Nuestras sedes
              </span>
  
              <div className="mt-6 space-y-6">
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
  
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
import {
    LABORATORY_LOCATION,
  } from "@/constants";
  
  import {
    LocationOpeningHours,
    Section,
    WhatsAppButton,
  } from "@/components/ui";
  
  export function LaboratoryCTA() {
    return (
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
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--lab-gold)]">
                Profesionales y clínicas
              </span>
  
              <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Coordina tu próximo trabajo con{" "}
                <span className="text-[var(--lab-gold)]">
                  LABODENT Digital
                </span>
              </h2>
  
              <p className="mt-5 max-w-xl text-sm leading-6 text-[var(--lab-muted)] sm:text-base sm:leading-7">
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
    );
  }
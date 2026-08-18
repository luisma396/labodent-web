import {
  Section,
  WhatsAppButton,
} from "@/components/ui";

export function CTA() {
  return (
    <Section
      id="contacto"
      className="bg-[var(--brand-primary)] py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-gold-light)]">
          Estamos para ayudarte
        </span>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          Tu sonrisa merece una atención profesional
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
          Contacta con LABODENT y coordina una consulta con nuestro equipo.
          Estamos listos para ayudarte a encontrar el tratamiento adecuado
          para ti.
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
  );
}
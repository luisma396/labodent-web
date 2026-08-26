import { ServiceCard } from "@/components/cards";
import {
  Section,
  SectionHeader,
  WhatsAppButton,
} from "@/components/ui";
import { SERVICES } from "@/constants";

export function TreatmentsPage() {
  return (
    <>
      {/* Cabecera */}
      <Section className="bg-[var(--brand-cream)] py-16 sm:py-20 lg:py-24">
        <SectionHeader
          eyebrow="Tratamientos"
          title="Atención odontológica integral para cada necesidad"
          description="Conoce los tratamientos y especialidades disponibles en LABODENT para cuidar la salud, función y estética de tu sonrisa."
          align="center"
        />
      </Section>

      {/* Tratamientos */}
      <Section className="bg-white py-12 sm:py-16 lg:py-20">
        <div
          className="
            grid gap-6
            sm:grid-cols-2
            lg:grid-cols-6
          "
        >
          {SERVICES.map((service, index) => {
            const isLast =
              index === SERVICES.length - 1;

            const hasSingleLastItem =
              SERVICES.length % 3 === 1;

            return (
              <div
                key={service.id}
                className={`
                  sm:col-span-1
                  lg:col-span-2
                  ${
                    isLast && hasSingleLastItem
                      ? "lg:col-start-3"
                      : ""
                  }
                `}
              >
                <ServiceCard service={service} />
              </div>
            );
          })}
        </div>
      </Section>

      {/* Orientación */}
      <Section className="bg-[var(--brand-cream)] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-primary)]">
            Atención personalizada
          </span>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            ¿No sabes qué tratamiento necesitas?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Cuéntanos qué necesitas y nuestro equipo podrá orientarte para
            coordinar una evaluación y encontrar la alternativa de atención más
            adecuada.
          </p>

          <div className="mt-8 flex justify-center">
            <WhatsAppButton
              label="Solicitar orientación"
              message="Hola, quisiera recibir orientación para saber qué tratamiento podría necesitar en LABODENT."
            />
          </div>
        </div>
      </Section>
    </>
  );
}
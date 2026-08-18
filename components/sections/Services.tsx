import { ServiceCard } from "@/components/cards";
import { Section, SectionHeader } from "@/components/ui";
import { SERVICES } from "@/constants";

export function Services() {
  const featuredServices = SERVICES.filter(
    (service) => service.featured,
  );

  return (
    <Section
      id="tratamientos"
      className="bg-[var(--brand-cream)] py-16 sm:py-20 lg:py-24"
    >
      <SectionHeader
        eyebrow="Tratamientos"
        title="Soluciones dentales para cada necesidad"
        description="En LABODENT ofrecemos atención odontológica integral y tratamientos especializados para cuidar la salud, función y estética de tu sonrisa."
        align="center"
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredServices.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
          />
        ))}
      </div>
    </Section>
  );
}

/*import { ServiceCard } from "@/components/cards";
import { Section, SectionHeader } from "@/components/ui";
import { SERVICES } from "@/constants";

export function Services() {
  return (
    <Section
      id="tratamientos"
      className="bg-slate-50 py-20 sm:py-24"
    >
      <SectionHeader
        eyebrow="Nuestros tratamientos"
        title="Soluciones para cuidar tu salud y estética dental"
        description="Contamos con atención odontológica integral y tratamientos especializados para acompañarte en cada etapa del cuidado de tu sonrisa."
        align="center"
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
          />
        ))}
      </div>
    </Section>
  );
}
*/
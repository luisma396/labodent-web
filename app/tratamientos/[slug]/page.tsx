import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceCard } from "@/components/cards";
import {
  Section,
  WhatsAppButton,
} from "@/components/ui";
import { SERVICES } from "@/constants";

interface TreatmentPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({
  params,
}: TreatmentPageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = SERVICES.find(
    (item) => item.id === slug,
  );

  if (!service) {
    return {};
  }

  return {
    title: service.name,

    description: service.description,

    alternates: {
      canonical: `/tratamientos/${service.id}`,
    },

    openGraph: {
      title: `${service.name} | LABODENT`,
      description: service.description,
      url: `/tratamientos/${service.id}`,
    },
  };
}

export default async function TreatmentDetailPage({
  params,
}: TreatmentPageProps) {
  const { slug } = await params;

  const service = SERVICES.find(
    (item) => item.id === slug,
  );

  if (!service) {
    notFound();
  }

  const relatedServices = [
    ...SERVICES.filter(
      (item) =>
        item.id !== service.id &&
        item.category === service.category,
    ),
    ...SERVICES.filter(
      (item) =>
        item.id !== service.id &&
        item.category !== service.category,
    ),
  ].slice(0, 3);

  return (
    <>
      {/* Cabecera del tratamiento */}
      <Section className="bg-[var(--brand-cream)] py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-5xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-primary)]">
            Tratamiento
          </span>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            {service.name}
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            {service.description}
          </p>
        </div>
      </Section>

      {/* Información principal */}
      <Section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Sobre este tratamiento
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              {service.longDescription ?? service.description}
            </p>

            {service.benefits &&
              service.benefits.length > 0 && (
                <div className="mt-10">
                  <h2 className="text-2xl font-semibold text-slate-900">
                    Beneficios
                  </h2>

                  <ul className="mt-5 space-y-3">
                    {service.benefits.map(
                      (benefit) => (
                        <li
                          key={benefit}
                          className="flex gap-3 text-sm leading-6 text-slate-600"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--brand-gold)]" />

                          <span>
                            {benefit}
                          </span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              )}

            {service.idealFor &&
              service.idealFor.length > 0 && (
                <div className="mt-10">
                  <h2 className="text-2xl font-semibold text-slate-900">
                    ¿Para quién puede estar indicado?
                  </h2>

                  <ul className="mt-5 space-y-3">
                    {service.idealFor.map(
                      (item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-6 text-slate-600"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--brand-primary)]" />

                          <span>
                            {item}
                          </span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              )}
          </div>

          {/* CTA lateral */}
          <aside className="h-fit rounded-3xl border border-[var(--brand-border)] bg-[var(--brand-cream)] p-6 lg:sticky lg:top-32">
            <h2 className="text-xl font-semibold text-slate-900">
              Solicita una consulta
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Contacta con nuestro equipo para conocer
              más sobre este tratamiento y coordinar una
              evaluación.
            </p>

            <div className="mt-6">
              <WhatsAppButton
                label="Consultar por WhatsApp"
                message={`Hola, quisiera consultar sobre ${service.name} en LABODENT.`}
              />
            </div>
          </aside>
        </div>
      </Section>

      {/* Tratamientos relacionados */}
      <Section className="bg-[var(--brand-cream)] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-primary)]">
              Otros tratamientos
            </span>

            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Conoce otras opciones de atención
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Explora otros tratamientos disponibles en
              LABODENT y encuentra más información sobre
              las alternativas de atención odontológica.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map(
              (relatedService) => (
                <ServiceCard
                  key={relatedService.id}
                  service={relatedService}
                />
              ),
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
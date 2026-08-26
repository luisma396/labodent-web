import { MapPin } from "lucide-react";

import {
  LocationOpeningHours,
  WhatsAppButton,
} from "@/components/ui";

import type { Location } from "@/types";

interface LaboratoryLocationCardProps {
  location: Location;
}

export function LaboratoryLocationCard({
  location,
}: LaboratoryLocationCardProps) {
  return (
    <article className="rounded-3xl border border-[var(--brand-border)] bg-white p-6 shadow-sm sm:p-8 lg:p-10">
      <div className="grid gap-8 lg:grid-cols-[1fr_180px] lg:items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand-primary)]">
            {location.name}
          </span>

          <h2 className="mt-3 text-3xl font-semibold text-slate-900">
            {location.city}
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            {location.neighborhood}
          </p>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Nuestro Laboratorio Digital trabaja con profesionales y clínicas
            en servicios de escaneo, diseño y fabricación personalizada de
            prótesis, aparatos y piezas dentales.
          </p>

          {location.openingHours && (
            <LocationOpeningHours
              openingHours={location.openingHours}
              className="mt-8 max-w-2xl border-t border-[var(--brand-border)] pt-6"
            />
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {location.whatsapp && (
              <WhatsAppButton
                phone={location.whatsapp}
                label="Contactar al Laboratorio"
                message="Hola, quisiera consultar sobre los servicios de LABODENT Digital."
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
            <div
              className="
                hidden
                rounded-3xl
                border border-[var(--brand-gold)]/40
                bg-[var(--brand-cream)]
                p-6
                text-center
                lg:block
              "
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[var(--brand-primary)] shadow-sm">
                <MapPin
                  size={34}
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
              </div>

              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-primary)]">
                LABODENT Digital
              </p>

              <p className="mt-2 text-sm leading-5 text-slate-600">
                Ciudad del Este
              </p>
            </div>
      </div>
    </article>
  );
}
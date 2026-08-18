import Image from "next/image";
import Link from "next/link";

import type { Professional } from "@/types";

interface ProfessionalCardProps {
  professional: Professional;
}

export function ProfessionalCard({
  professional,
}: ProfessionalCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-[var(--brand-border)] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-gold)] hover:shadow-xl">
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        {professional.image ? (
          <Image
            src={professional.image}
            alt={`Fotografía de ${professional.name}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
            loading="lazy"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[var(--brand-cream)] text-2xl font-bold text-[var(--brand-primary)]">
                {professional.name.charAt(0)}
              </div>

              <p className="mt-3 text-sm text-slate-500">
                Fotografía ilustrativa
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="p-7">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand-primary)]">
          {professional.title}
        </p>

        <h3 className="mt-2 text-2xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-[var(--brand-primary)]">
          {professional.name}
        </h3>

        <div className="mt-4 flex flex-wrap gap-2">
          {professional.specialties.map((specialty) => (
            <span
              key={specialty}
              className="rounded-full bg-[var(--brand-cream)] px-3 py-1 text-xs font-medium text-[var(--brand-primary)]"
            >
              {specialty}
            </span>
          ))}
        </div>

        {professional.experience && (
          <div className="mt-6 border-t border-[var(--brand-border)] pt-5">
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-slate-900">
                {professional.experience} años
              </span>{" "}
              de experiencia profesional
            </p>
          </div>
        )}

        <div className="mt-6">
          <Link
            href={`/profesionales/${professional.id}`}
            className="inline-flex items-center text-sm font-semibold text-[var(--brand-primary)] transition-colors hover:text-[var(--brand-primary-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2"
          >
            Ver perfil →
          </Link>
        </div>
      </div>
    </article>
  );
}
import { LABORATORY_ICONS } from "@/components/icons";
import type { LaboratoryService } from "@/types";

interface LaboratoryServiceCardProps {
  service: LaboratoryService;
}

export function LaboratoryServiceCard({
  service,
}: LaboratoryServiceCardProps) {
  const Icon = LABORATORY_ICONS[service.icon];

  return (
    <article className="group rounded-3xl border border-[var(--brand-border)] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-gold)] hover:shadow-lg">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand-cream)] text-[var(--brand-primary)] transition-colors duration-300 group-hover:bg-[var(--brand-primary)] group-hover:text-white">
        <Icon
          size={30}
          strokeWidth={1.7}
          aria-hidden="true"
        />
      </div>

      <span className="mt-6 block text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand-primary)]">
        Laboratorio
      </span>

      <h3 className="mt-3 text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-[var(--brand-primary)]">
        {service.name}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        {service.description}
      </p>
    </article>
  );
}
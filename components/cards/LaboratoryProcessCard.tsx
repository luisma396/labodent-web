import type { LaboratoryProcess } from "@/types";

interface LaboratoryProcessCardProps {
  process: LaboratoryProcess;
}

export function LaboratoryProcessCard({
  process,
}: LaboratoryProcessCardProps) {
  return (
    <article className="rounded-3xl border border-[var(--brand-border)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-gold)] hover:shadow-lg">
      <span className="text-sm font-semibold text-[var(--brand-gold-dark)]">
        {process.step}
      </span>

      <h3 className="mt-3 text-xl font-semibold text-slate-900">
        {process.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        {process.description}
      </p>
    </article>
  );
}
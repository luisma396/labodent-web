import { ScheduleDetails } from "@/components/ui";

import type {
  Location,
  Schedule,
} from "@/types";

interface ProfessionalScheduleCardProps {
  location: Location;
  schedules: Schedule[];
}

export function ProfessionalScheduleCard({
  location,
  schedules,
}: ProfessionalScheduleCardProps) {
  return (
    <article className="rounded-3xl border border-[var(--brand-border)] bg-[var(--brand-cream)] p-6">
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-primary)]">
        {location.name}
      </span>

      <h3 className="mt-2 text-xl font-semibold text-slate-900">
        {location.city}
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        {location.neighborhood}
      </p>

      <div className="mt-6">
        <ScheduleDetails schedules={schedules} />
      </div>
    </article>
  );
}
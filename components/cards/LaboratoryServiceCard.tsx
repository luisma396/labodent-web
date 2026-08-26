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
    <article
      className="
        group
        flex h-full flex-col
        rounded-3xl
        border border-[var(--lab-border)]
        bg-[var(--lab-surface-soft)]
        p-6
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[var(--lab-gold)]
        hover:shadow-xl
      "
    >
      {/* Brillo decorativo */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-16 -top-16
          h-36 w-36
          rounded-full
          bg-[var(--lab-gold)]/0
          blur-3xl
          transition-all duration-500
          group-hover:bg-[var(--lab-gold)]/10
        "
      />

      <div
        className="
          relative
          flex h-14 w-14
          items-center justify-center
          rounded-2xl
          border border-[var(--lab-gold)]/40
          bg-[var(--lab-gold)]
          text-black
          transition-all duration-300
          group-hover:bg-black
          group-hover:text-[var(--lab-gold)]
          group-hover:ring-1
          group-hover:ring-[var(--lab-gold)]
        "
      >
        <Icon
          size={28}
          strokeWidth={1.7}
          aria-hidden="true"
        />
      </div>

      <span
        className="
          relative mt-6 block
          text-xs font-semibold
          uppercase tracking-[0.18em]
          text-[var(--lab-gold)]
        "
      >
        LABODENT Digital
      </span>

      <h3
        className="
          relative mt-3
          text-xl font-semibold
          leading-snug text-white
          transition-colors duration-300
          group-hover:text-[var(--lab-gold-light)]
        "
      >
        {service.name}
      </h3>

      <p
        className="
          relative mt-3
          text-sm leading-6
          text-[var(--lab-muted)]
        "
      >
        {service.description}
      </p>

      <div
        aria-hidden="true"
        className="
          relative mt-6
          h-px w-10
          bg-[var(--lab-gold)]/60
          transition-all duration-300
          group-hover:w-20
          group-hover:bg-[var(--lab-gold)]
        "
      />
    </article>
  );
}
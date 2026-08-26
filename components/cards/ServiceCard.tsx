import Link from "next/link";

import { SERVICE_ICONS } from "@/components/icons";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({
  service,
}: ServiceCardProps) {
  const Icon = service.icon
    ? SERVICE_ICONS[service.icon]
    : null;

  return (
    <article
      className="
        group
        flex h-full flex-col
        rounded-3xl
        border border-[var(--brand-border)]
        bg-white
        p-5
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[var(--brand-gold)]
        hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]
        sm:p-6
        lg:p-7
      "
    >
      {Icon && (
        <div
          className="
            flex h-14 w-14 items-center justify-center
            rounded-2xl
            bg-[var(--brand-cream)]
            text-[var(--brand-primary)]
            transition-all duration-300
            group-hover:bg-[var(--brand-primary)]
            group-hover:text-white
            group-hover:shadow-sm
          "
        >
          <Icon
            size={30}
            strokeWidth={1.7}
            aria-hidden="true"
          />
        </div>
      )}

      <h3 className="mt-5 text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-[var(--brand-primary)]">
        {service.name}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        {service.description}
      </p>

      <div className="mt-5">
        <span className="inline-flex rounded-full bg-[var(--brand-cream)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand-primary)]">
          {service.category}
        </span>
      </div>

      <div className="mt-auto pt-6">
        <Link
          href={`/tratamientos/${service.id}`}
          className="
            inline-flex items-center gap-2
            text-sm font-semibold
            text-[var(--brand-primary)]
            transition-colors
            hover:text-[var(--brand-primary-dark)]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[var(--brand-primary)]
            focus-visible:ring-offset-2
          "
        >
          <span>Ver tratamiento</span>

          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>

        <div
          aria-hidden="true"
          className="
            mt-5 h-px w-10
            bg-[var(--brand-gold)]/40
            transition-all duration-300
            group-hover:w-20
            group-hover:bg-[var(--brand-gold)]
          "
        />
      </div>
    </article>
  );
}
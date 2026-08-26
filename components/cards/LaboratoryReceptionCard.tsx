import {
    Building2,
    ScanLine,
    Upload,
    type LucideIcon,
  } from "lucide-react";
  
  import type {
    LaboratoryReceptionIcon,
    LaboratoryReceptionOption,
  } from "@/types";
  
  interface LaboratoryReceptionCardProps {
    option: LaboratoryReceptionOption;
  }
  
  const RECEPTION_ICONS: Record<
    LaboratoryReceptionIcon,
    LucideIcon
  > = {
    upload: Upload,
    scan: ScanLine,
    building: Building2,
  };
  
  export function LaboratoryReceptionCard({
    option,
  }: LaboratoryReceptionCardProps) {
    const Icon = RECEPTION_ICONS[option.icon];
  
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
          hover:bg-[var(--lab-surface)]
          hover:shadow-[0_18px_45px_rgba(0,0,0,0.35)]
        "
      >
        <div
          className="
            flex h-12 w-12 items-center justify-center
            rounded-xl
            border border-transparent
            bg-[var(--lab-gold)]
            text-black
            transition-all duration-300
            group-hover:border-[var(--lab-gold)]
            group-hover:bg-black
            group-hover:text-[var(--lab-gold)]
          "
        >
          <Icon
            size={24}
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </div>
  
        <span className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--lab-gold)]">
          {option.eyebrow}
        </span>
  
        <h3 className="mt-3 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[var(--lab-gold-light)]">
          {option.title}
        </h3>
  
        <p className="mt-3 text-sm leading-6 text-[var(--lab-muted)]">
          {option.description}
        </p>
  
        <div className="mt-auto pt-6">
          <div
            aria-hidden="true"
            className="
              h-px w-10
              bg-[var(--lab-gold)]/40
              transition-all duration-300
              group-hover:w-20
              group-hover:bg-[var(--lab-gold)]
            "
          />
        </div>
      </article>
    );
  }
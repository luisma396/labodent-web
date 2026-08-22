import type { LaboratoryProcess } from "@/types";

interface LaboratoryProcessCardProps {
  process: LaboratoryProcess;
}

export function LaboratoryProcessCard({
  process,
}: LaboratoryProcessCardProps) {
  return (
    <article
      className="
        group
        flex h-full flex-col
        rounded-3xl
        border border-[var(--lab-border)]
        bg-[var(--lab-surface-soft)]
        p-5
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[var(--lab-gold)]
        hover:bg-[var(--lab-surface)]
        hover:shadow-[0_18px_45px_rgba(0,0,0,0.35)]
        sm:p-6
        lg:p-5
      "
    >
      <div className="flex items-center gap-3">
        <span
          className="
            inline-flex h-10 min-w-10 items-center justify-center
            rounded-xl
            border border-[var(--lab-gold)]
            bg-[var(--lab-gold)]
            px-2
            text-sm font-semibold text-black
            transition-all duration-300
            group-hover:bg-black
            group-hover:text-[var(--lab-gold)]
            group-hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]
          "
        >
          {process.step}
        </span>

        <div className="h-px flex-1 bg-gradient-to-r from-[var(--lab-gold)]/60 to-transparent" />
      </div>

      <h3
        className="
          mt-5
          text-lg font-semibold leading-snug text-white
          transition-colors duration-300
          group-hover:text-[var(--lab-gold-light)]
          xl:text-xl
        "
      >
        {process.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-[var(--lab-muted)]">
        {process.description}
      </p>

      <div className="mt-auto pt-5">
        <div
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
/*
import type { LaboratoryProcess } from "@/types";

interface LaboratoryProcessCardProps {
  process: LaboratoryProcess;
}

export function LaboratoryProcessCard({
  process,
}: LaboratoryProcessCardProps) {
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
      <div className="flex items-center gap-3">
        <span
          className="
            inline-flex h-10 min-w-10 items-center justify-center
            rounded-xl
            border border-[var(--lab-gold)]
            bg-[var(--lab-gold)]
            px-2
            text-sm font-semibold
            text-black
            transition-all duration-300
            group-hover:bg-black
            group-hover:text-[var(--lab-gold)]
            group-hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]
          "
        >
          {process.step}
        </span>

        <div className="h-px flex-1 bg-gradient-to-r from-[var(--lab-gold)]/50 to-transparent" />
      </div>

      <h3 className="mt-5 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[var(--lab-gold-light)]">
        {process.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-[var(--lab-muted)]">
        {process.description}
      </p>

      <div className="mt-auto pt-6">
        <div className="h-px w-full bg-gradient-to-r from-[var(--lab-gold)]/30 via-[var(--lab-gold)]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    </article>
  );
}
*/
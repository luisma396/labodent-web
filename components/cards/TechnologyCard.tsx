import Image from "next/image";

import type { Technology } from "@/types";

interface TechnologyCardProps {
  technology: Technology;
  variant?: "light" | "dark";
}

export function TechnologyCard({
  technology,
  variant = "dark",
}: TechnologyCardProps) {
  const styles = {
    dark: {
      card: `
        border-white/10
        bg-white/5
        hover:border-[var(--brand-gold)]/60
        hover:bg-white/[0.07]
      `,
      imageBackground: "bg-slate-900",
      title: "text-white",
      description: "text-slate-300",
    },

    light: {
      card: `
        border-[var(--brand-border)]
        bg-white
        shadow-sm
        hover:border-[var(--brand-gold)]
        hover:shadow-xl
      `,
      imageBackground: "bg-slate-100",
      title: "text-slate-900",
      description: "text-slate-600",
    },
  };

  const currentStyles = styles[variant];

  return (
    <article
      className={`
        group overflow-hidden rounded-3xl border
        transition-all duration-300
        hover:-translate-y-1
        ${currentStyles.card}
      `}
    >
      <div
        className={`
          relative aspect-[4/3] overflow-hidden
          ${currentStyles.imageBackground}
        `}
      >
        {technology.image && (
          <Image
            src={technology.image}
            alt={technology.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />
      </div>

      <div className="p-7">
        <div className="mb-4 h-1 w-10 rounded-full bg-[var(--brand-gold)] transition-all duration-300 group-hover:w-16" />

        <h3
          className={`text-xl font-semibold ${currentStyles.title}`}
        >
          {technology.name}
        </h3>

        <p
          className={`mt-3 text-sm leading-6 ${currentStyles.description}`}
        >
          {technology.description}
        </p>
      </div>
    </article>
  );
}
import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  variant?: "default" | "dark";
  children?: ReactNode;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  variant = "default",
  children,
}: SectionHeaderProps) {
  const alignment =
    align === "center"
      ? "mx-auto text-center"
      : "text-left";

  const styles = {
    default: {
      eyebrow: "text-[var(--brand-primary)]",
      title: "text-slate-900",
      description: "text-slate-600",
    },

    dark: {
      eyebrow: "text-[var(--brand-gold)]",
      title: "text-white",
      description: "text-slate-300",
    },
  };

  const currentStyles = styles[variant];

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <span
          className={`mb-3 block text-sm font-semibold uppercase tracking-[0.2em] ${currentStyles.eyebrow}`}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${currentStyles.title}`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base leading-7 sm:text-lg ${currentStyles.description}`}
        >
          {description}
        </p>
      )}

      {children}
    </div>
  );
}
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "labline"
  | "light";

export const buttonBaseStyles = `
  inline-flex items-center justify-center gap-2
  rounded-full
  px-6 py-3
  text-sm font-semibold
  transition-all duration-200
  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-offset-2
  disabled:pointer-events-none
  disabled:opacity-50
`;

export const buttonVariants: Record<ButtonVariant, string> = {
  primary: `
    border border-[var(--brand-primary)]
    bg-[var(--brand-primary)]
    text-white
    shadow-sm
    hover:border-[var(--brand-primary-dark)]
    hover:bg-[var(--brand-primary-dark)]
    hover:shadow-md
    focus-visible:ring-[var(--brand-primary)]
  `,

  secondary: `
    border border-[var(--brand-gold)]
    bg-[var(--brand-gold)]
    text-white
    shadow-sm
    hover:border-[var(--brand-gold-dark)]
    hover:bg-[var(--brand-gold-dark)]
    hover:shadow-md
    focus-visible:ring-[var(--brand-gold)]
  `,

  outline: `
    border border-[var(--brand-primary)]
    bg-white
    text-[var(--brand-primary)]
    hover:bg-[var(--brand-primary)]
    hover:text-white
    focus-visible:ring-[var(--brand-primary)]
  `,

  labline: `
    border border-[var(--lab-gold)]
    bg-black
    text-[var(--lab-gold)]
    shadow-sm
    hover:border-[var(--lab-gold)]
    hover:bg-[var(--lab-gold)]
    hover:text-black
    hover:shadow-md
    focus-visible:ring-[var(--lab-gold)]
    focus-visible:ring-offset-black
  `,

  light: `
    border border-white
    bg-white
    text-[var(--brand-primary)]
    shadow-sm
    hover:border-[var(--brand-gold)]
    hover:bg-[var(--brand-gold)]
    hover:text-white
    hover:shadow-md
    focus-visible:ring-[var(--brand-primary)]
  `,
};
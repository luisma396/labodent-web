export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "light";

export const buttonBaseStyles = `
  inline-flex items-center justify-center gap-2
  rounded-full
  px-6 py-3
  text-sm font-semibold
  transition-all duration-200
  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-[var(--brand-primary)]
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
  `,
  
  secondary: `
  border border-[var(--brand-gold)]
  bg-[var(--brand-gold)]
  text-white
  shadow-sm
  hover:border-[var(--brand-gold-dark)]
  hover:bg-[var(--brand-gold-dark)]
  hover:shadow-md
`,

  outline: `
    border border-[var(--brand-primary)]
    bg-white
    text-[var(--brand-primary)]
    hover:bg-[var(--brand-primary)]
    hover:text-white
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
  `,
};
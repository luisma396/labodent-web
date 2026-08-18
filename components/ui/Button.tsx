import type { ButtonHTMLAttributes } from "react";

import {
  buttonBaseStyles,
  buttonVariants,
  type ButtonVariant,
} from "./buttonStyles";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        ${buttonBaseStyles}
        ${buttonVariants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
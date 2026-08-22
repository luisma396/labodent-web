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
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
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
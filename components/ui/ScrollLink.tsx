"use client";

import type { ReactNode } from "react";

import {
  buttonBaseStyles,
  buttonVariants,
  type ButtonVariant,
} from "./buttonStyles";

interface ScrollLinkProps {
  targetId: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

export function ScrollLink({
  targetId,
  children,
  variant = "outline",
  className = "",
}: ScrollLinkProps) {
  const handleClick = () => {
    document
      .getElementById(targetId)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`
        ${buttonBaseStyles}
        ${buttonVariants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
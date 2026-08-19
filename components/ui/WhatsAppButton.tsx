import { COMPANY } from "@/constants";

import {
  buttonBaseStyles,
  buttonVariants,
  type ButtonVariant,
} from "./buttonStyles";

interface WhatsAppButtonProps {
  label?: string;
  message?: string;
  phone?: string;
  variant?: ButtonVariant;
  className?: string;
}

export function WhatsAppButton({
  label = "Solicitar consulta",
  message = "Hola, quisiera solicitar una consulta en LABODENT.",
  phone,
  variant = "primary",
  className = "",
}: WhatsAppButtonProps) {
  const whatsappNumber = phone ?? COMPANY.whatsapp;

  const whatsappUrl =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        ${buttonBaseStyles}
        ${buttonVariants[variant]}
        ${className}
      `}
    >
      <span aria-hidden="true">◉</span>
      <span>{label}</span>
    </a>
  );
}
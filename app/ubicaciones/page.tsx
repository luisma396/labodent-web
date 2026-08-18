import type { Metadata } from "next";

import { ContactPage } from "@/components/sections";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con LABODENT para solicitar una consulta, conocer nuestras ubicaciones y coordinar tu atención odontológica.",

  alternates: {
    canonical: "/contacto",
  },

  openGraph: {
    title: "Contacto | LABODENT",
    description:
      "Solicita una consulta en LABODENT y coordina tu atención odontológica por WhatsApp.",
    url: "/contacto",
  },
};

export default function ContactoPage() {
  return <ContactPage />;
}
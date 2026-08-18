import type { Metadata } from "next";

import { ContactPage } from "@/components/sections";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con LABODENT para solicitar una consulta, conocer nuestras ubicaciones y coordinar tu atención odontológica.",
};

export default function ContactoPage() {
  return <ContactPage />;
}
import type { Metadata } from "next";

import { ProfessionalsPage } from "@/components/sections";

export const metadata: Metadata = {
  title: "Profesionales",
  description:
    "Conoce al equipo profesional de LABODENT, sus especialidades, experiencia y horarios de atención en Ciudad del Este y Tembiapora.",

  alternates: {
    canonical: "/profesionales",
  },

  openGraph: {
    title: "Profesionales | LABODENT",
    description:
      "Conoce a los profesionales de LABODENT, sus especialidades, experiencia y horarios de atención.",
    url: "/profesionales",
  },
};

export default function ProfesionalesPage() {
  return <ProfessionalsPage />;
}
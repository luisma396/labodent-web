import type { Metadata } from "next";

import { LaboratoryPage } from "@/components/sections";

export const metadata: Metadata = {
  title: "Laboratorio Digital",
  description:
    "Servicios de laboratorio digital odontológico de LABODENT para profesionales y clínicas: escaneo intraoral 3D, diseño digital y fabricación personalizada.",

  alternates: {
    canonical: "/laboratorio-digital",
  },

  openGraph: {
    title: "Laboratorio Digital | LABODENT",
    description:
      "Soluciones digitales, escaneo 3D, diseño y fabricación odontológica para profesionales y clínicas.",
    url: "/laboratorio-digital",
  },
};

export default function LaboratorioDigitalPage() {
  return <LaboratoryPage />;
}
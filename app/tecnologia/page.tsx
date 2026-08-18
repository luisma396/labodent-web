import type { Metadata } from "next";

import { TechnologyPage } from "@/components/sections";

export const metadata: Metadata = {
  title: "Tecnología",
  description:
    "Conoce la tecnología odontológica utilizada en LABODENT para diagnóstico, planificación y tratamientos modernos.",

  alternates: {
    canonical: "/tecnologia",
  },

  openGraph: {
    title: "Tecnología | LABODENT",
    description:
      "Tecnología odontológica aplicada al diagnóstico, planificación y tratamientos modernos en LABODENT.",
    url: "/tecnologia",
  },
};

export default function TecnologiaPage() {
  return <TechnologyPage />;
}
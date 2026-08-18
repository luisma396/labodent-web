import type { Metadata } from "next";

import { TreatmentsPage } from "@/components/sections";

export const metadata: Metadata = {
  title: "Tratamientos",
  description:
    "Conoce los tratamientos odontológicos disponibles en LABODENT, incluyendo odontología general, ortodoncia, implantología, endodoncia, estética dental y más.",

  alternates: {
    canonical: "/tratamientos",
  },

  openGraph: {
    title: "Tratamientos | LABODENT",
    description:
      "Conoce los tratamientos odontológicos disponibles en LABODENT para cuidar la salud, función y estética de tu sonrisa.",
    url: "/tratamientos",
  },
};

export default function TratamientosPage() {
  return <TreatmentsPage />;
}
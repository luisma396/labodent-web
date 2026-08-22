import type { Metadata } from "next";

import { LocationsPage } from "@/components/sections";

export const metadata: Metadata = {
  title: "Ubicaciones",
  description:
    "Conoce las sedes de LABODENT en Ciudad del Este y Tembiapora, junto con los horarios de atención de nuestros profesionales.",

  alternates: {
    canonical: "/ubicaciones",
  },

  openGraph: {
    title: "Ubicaciones | LABODENT",
    description:
      "Consulta las sedes y horarios de atención de LABODENT en Ciudad del Este y Tembiaporã.",
    url: "/ubicaciones",
  },
};

export default function UbicacionesPage() {
  return <LocationsPage />;
}
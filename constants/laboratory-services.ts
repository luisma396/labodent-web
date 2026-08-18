import type { LaboratoryService } from "@/types";

export const LABORATORY_SERVICES: LaboratoryService[] = [
  {
    id: "escaneo-intraoral-3d",
    name: "Escaneo intraoral 3D",
    description:
      "Obtención de registros digitales de la boca mediante escáner 3D para planificación, diseño y fabricación odontológica.",
    featured: true,
    icon: "scan",
  },
  {
    id: "diseno-digital",
    name: "Diseño digital personalizado",
    description:
      "Diseño digital de prótesis, aparatos y piezas dentales desarrollado según la prescripción y los requerimientos del profesional odontólogo.",
    featured: true,
    icon: "design",
  },
  {
    id: "protesis-dentales",
    name: "Prótesis dentales",
    description:
      "Fabricación a medida de soluciones protésicas a partir de registros digitales e indicaciones clínicas.",
    featured: true,
    icon: "prosthesis",
  },
  {
    id: "aparatos-odontologicos",
    name: "Aparatos odontológicos",
    description:
      "Diseño y fabricación personalizada de aparatos odontológicos prescritos por profesionales.",
    icon: "appliance",
  },
  {
    id: "piezas-dentales",
    name: "Piezas dentales personalizadas",
    description:
      "Fabricación de piezas dentales a medida conforme a los requerimientos técnicos y clínicos indicados por el odontólogo.",
    icon: "custom-piece",
  },
];
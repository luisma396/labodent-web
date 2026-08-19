import type { Technology } from "@/types";

import { IMAGES } from "./images";

export const TECHNOLOGIES: Technology[] = [
  {
    id: "scanner-bucal",
    name: "Escáner intraoral 3D",
    description:
      "Permite obtener registros digitales precisos de la boca para apoyar el diagnóstico, la planificación y el seguimiento de tratamientos.",
    image: IMAGES.technology.scanner,
  },
  {
    id: "rayos-x-digital",
    name: "Rayos X portátil digital",
    description:
      "Sistema de radiografía digital utilizado como apoyo al diagnóstico odontológico y a la planificación clínica.",
    image: IMAGES.technology.xray,
  },
  {
    id: "flujo-digital",
    name: "Flujo digital odontológico",
    description:
      "Integramos registros digitales, planificación y herramientas tecnológicas para mejorar la precisión y eficiencia de los tratamientos.",
    image: IMAGES.technology.printing3d,
  },
];
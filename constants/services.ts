import type { Service } from "@/types";
import { IMAGES } from "./images";

export const SERVICES: Service[] = [
  {
    id: "odontologia-general",
    name: "Odontología General",
    description:
      "Atención odontológica integral para el cuidado y mantenimiento de la salud bucal.",
    category: "Odontología General",
    featured: true,
    icon: "general" //IMAGES.services.general,
  },
  {
    id: "ortodoncia",
    name: "Ortodoncia",
    description:
      "Tratamientos orientados a mejorar la posición dental y la armonía de la sonrisa.",
    category: "Especialidades",
    featured: true,
    icon: "orthodontics",
  },
  {
    id: "endodoncia",
    name: "Endodoncia",
    description:
      "Tratamientos especializados destinados a conservar las piezas dentales.",
    category: "Especialidades",
    featured: true,
    icon: "endodontics" //IMAGES.services.endodontics,
  },
  {
    id: "implantes",
    name: "Implantología",
    description:
      "Tratamientos de implantes dentales para recuperar función y estética.",
    category: "Especialidades",
    featured: true,
    icon: "implants",
  },
  {
    id: "estetica-dental",
    name: "Estética Dental",
    description:
      "Tratamientos orientados a mejorar la estética y armonía de la sonrisa.",
    category: "Estética Dental",
    featured: true,
    icon: "aesthetics"
  },
  {
    id: "rehabilitacion-oral",
    name: "Rehabilitación Oral",
    description:
      "Tratamientos destinados a recuperar la función y estética de la boca.",
    category: "Rehabilitación",
  },
  {
    id: "prostodoncia",
    name: "Prostodoncia",
    description:
      "Tratamientos para la rehabilitación y recuperación de estructuras dentales.",
    category: "Rehabilitación",
  },
  {
    id: "periodoncia",
    name: "Periodoncia",
    description:
      "Atención especializada de los tejidos que sostienen los dientes.",
    category: "Especialidades",
  },
  {
    id: "odontopediatria",
    name: "Odontopediatría",
    description:
      "Atención odontológica orientada a niños y adolescentes.",
    category: "Odontología General",
    featured: true,
    icon: "pediatric",
  },
  {
    id: "patologia-bucal",
    name: "Patología Bucal",
    description:
      "Evaluación especializada de alteraciones y patologías de la cavidad bucal.",
    category: "Especialidades",
  },
];
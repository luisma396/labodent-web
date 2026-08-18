/*
import type { Technology } from "@/types";

  export const TECHNOLOGIES: Technology[] = [
    {
      id: "scanner-bucal",
      name: "Escáner Bucal",
      description:
        "Tecnología digital para obtener información precisa de la cavidad bucal.",
    },
    {
      id: "rayos-x-digital",
      name: "Rayos X Portátil Digital",
      description:
        "Tecnología de diagnóstico mediante radiografía digital.",
    },
    {
      id: "diseno-3d",
      name: "Diseño 3D",
      description:
        "Herramientas digitales para planificación y diseño de tratamientos.",
    },
    {
      id: "impresion-3d",
      name: "Impresión 3D",
      description:
        "Tecnología de fabricación mediante impresión tridimensional.",
    },
  ];
  */

  import type { Technology } from "@/types";
  import { IMAGES } from "./images";
  
  export const TECHNOLOGIES: Technology[] = [
    {
      id: "scanner-bucal",
      name: "Escáner bucal",
      description:
        "Tecnología digital para obtener información precisa de la boca y facilitar el diagnóstico y la planificación de tratamientos.",
      image: IMAGES.technology.scanner,
    },
    {
      id: "rayos-x-digital",
      name: "Rayos X portátil digital",
      description:
        "Sistema de radiografía digital como apoyo al diagnóstico odontológico.",
      image: IMAGES.technology.xray,
    },
    {
      id: "diseno-impresion-3d",
      name: "Diseño e impresión 3D",
      description:
        "Tecnología de diseño y fabricación digital aplicada a tratamientos odontológicos.",
      image: IMAGES.technology.printing3d,
    },
  ];
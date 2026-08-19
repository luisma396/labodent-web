import type { LaboratoryProcess } from "@/types";

export const LABORATORY_PROCESS: LaboratoryProcess[] = [
  {
    id: "recepcion",
    step: "01",
    title: "Recepción del caso",
    description:
      "El profesional puede enviar sus propios registros digitales o coordinar la toma de un escaneo con LABODENT.",
  },
  {
    id: "validacion",
    step: "02",
    title: "Validación del registro digital",
    description:
      "Trabajamos con registros digitales enviados por el profesional o realizamos el escaneo en LABODENT o en el consultorio mediante cita programada.",
  },
  {
    id: "diseno",
    step: "03",
    title: "Diseño digital",
    description:
    "Fabricación a medida de prótesis, aparatos y piezas dentales a partir del diseño digital y las indicaciones del profesional.",
  },
  {
    id: "fabricacion",
    step: "04",
    title: "Fabricación personalizada",
    description:
      "Se fabrican las prótesis, aparatos o piezas dentales a medida según la planificación digital del caso.",
  },
  {
    id: "entrega",
    step: "05",
    title: "Entrega al profesional",
    description:
      "El trabajo finalizado se prepara para su entrega al profesional solicitante.",
  },
];
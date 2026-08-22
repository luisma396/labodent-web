import type { LaboratoryProcess } from "@/types";

export const LABORATORY_PROCESS: LaboratoryProcess[] = [
  {
    id: "recepcion",
    step: "01",
    title: "Recepción del trabajo",
    description:
      "El profesional puede enviar sus propios registros digitales o coordinar la toma de un escaneo con LABODENT.",
  },
  {
    id: "validacion",
    step: "02",
    title: "Validación del registro digital",
    description:
      "Revisamos los registros recibidos y verificamos que la información digital sea adecuada para continuar con la planificación.",
  },
  {
    id: "diseno",
    step: "03",
    title: "Diseño digital",
    description:
      "Desarrollamos el diseño CAD de la solución odontológica de acuerdo con los registros y las indicaciones del profesional.",
  },
  {
    id: "fabricacion",
    step: "04",
    title: "Fabricación personalizada",
    description:
      "Fabricamos prótesis, aparatos y piezas dentales a medida a partir del diseño digital previamente validado.",
  },
  {
    id: "entrega",
    step: "05",
    title: "Entrega al profesional",
    description:
      "El trabajo finalizado se prepara para su entrega al profesional solicitante según la coordinación establecida.",
  },
];
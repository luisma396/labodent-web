import type {
    LaboratoryReceptionOption,
  } from "@/types";
  
  export const LABORATORY_RECEPTION_OPTIONS:
    LaboratoryReceptionOption[] = [
      {
        id: "digital-upload",
        eyebrow: "Registro digital",
        title: "Envío de escaneo propio",
        description:
          "El profesional puede proporcionar sus propios registros digitales para iniciar el diseño y fabricación del trabajo solicitado.",
        icon: "upload",
      },
      {
        id: "consultorio-scan",
        eyebrow: "Escaneo programado",
        title: "Escaneo en el consultorio",
        description:
          "Podemos coordinar una cita programada para realizar el escaneo directamente en el consultorio del profesional.",
        icon: "scan",
      },
      {
        id: "labodent-scan",
        eyebrow: "En LABODENT Digital",
        title: "Escaneo en LABODENT",
        description:
          "El paciente también puede acudir directamente a LABODENT para realizar el registro digital necesario.",
        icon: "building",
      },
    ];
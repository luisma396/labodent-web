import type { Schedule } from "@/types";

export const SCHEDULES: Schedule[] = [
  {
    professionalId: "alice-garcete",
    locationId: "tembiapora",
    days: ["Lunes"],
    hours: [
      {
        start: "09:00",
        end: "19:00",
      },
    ],
  },
  {
    professionalId: "alice-garcete",
    locationId: "tembiapora",
    days: ["Martes"],
    hours: [
      {
        start: "07:00",
        end: "16:00",
      },
    ],
  },
  {
    professionalId: "alice-garcete",
    locationId: "ciudad-del-este",
    days: [
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ],
    hours: [
      {
        start: "09:00",
        end: "17:00",
      },
    ],
  },
  {
    professionalId: "victor-melgarejo",
    locationId: "ciudad-del-este",
    days: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
    hours: [
      {
        start: "07:00",
        end: "11:00",
      },
      {
        start: "13:00",
        end: "17:00",
      },
    ],
  },
  {
    professionalId: "victor-melgarejo",
    locationId: "tembiapora",
    days: [],
    hours: [],
    appointmentOnly: true,
  },
];
import type { Location } from "@/types";

export const LOCATIONS: Location[] = [
  {
    id: "ciudad-del-este",
    name: "Matriz",
    city: "Ciudad del Este",
    neighborhood: "Barrio Santa Ana",
    whatsapp: "+595973547280",
    type: "clinic",

    coordinates: {
      latitude: -25.535876,
      longitude: -54.636741,
    },

    mapUrl:
      "https://www.google.com/maps?q=-25.535876,-54.636741",
  },

  {
    id: "tembiapora",
    name: "Sucursal 1",
    city: "Tembiaporã",
    neighborhood: "Barrio Ycuapytã",
    whatsapp: "+595973553003",
    type: "branch",

    coordinates: {
      latitude: -25.340910,
      longitude: -55.413943,
    },

    mapUrl:
      "https://www.google.com/maps?q=-25.340910,-55.413943",
  },
];

export const LABORATORY_LOCATION: Location = {
  id: "laboratorio-ciudad-del-este",
  name: "Laboratorio Digital",
  city: "Ciudad del Este",
  neighborhood: "Barrio Santa Ana",
  whatsapp: "+595981644393",
  type: "laboratory",

  coordinates: {
    latitude: -25.536855,
    longitude: -54.636246,
  },

  mapUrl:
    "https://www.google.com/maps?q=-25.536855,-54.636246",

  openingHours: [
    {
      days: [
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
      ],
      hours: [
        {
          start: "07:00",
          end: "17:00",
        },
      ],
    },
    {
      days: ["Sábado"],
      hours: [
        {
          start: "07:00",
          end: "12:00",
        },
      ],
    },
  ],
};
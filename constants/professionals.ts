import type { Professional } from "@/types";
import { IMAGES } from "./images";

export const PROFESSIONALS: Professional[] = [
  {
    id: "victor-melgarejo",
    name: "Dr. Victor Melgarejo",
    title: "Odontólogo",
    specialties: [
      "Implantología",
      "Ortodoncia",
    ],
    experience: 17,
    image: IMAGES.professionals.victor,
  },
  {
    id: "alice-garcete",
    name: "Dra. Alice Garcete",
    title: "Odontóloga",
    specialties: [
      "Endodoncia",
      "Estética Dental",
    ],
    experience: 12,
    image: IMAGES.professionals.alice,
  },
];
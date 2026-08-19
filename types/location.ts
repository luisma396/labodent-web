export interface Location {
  id: string;
  name: string;
  city: string;
  neighborhood: string;
  description?: string;

  phone?: string;
  whatsapp?: string;
  mapUrl?: string;

  type?: "clinic" | "laboratory" | "branch";

  coordinates?: {
    latitude: number;
    longitude: number;
  };
}
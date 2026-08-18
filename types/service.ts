export type ServiceIconName =
  | "general"
  | "orthodontics"
  | "endodontics"
  | "implants"
  | "aesthetics"
  | "pediatric";

export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  icon?: ServiceIconName;
  image?: string;
  featured?: boolean;
}
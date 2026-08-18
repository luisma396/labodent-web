export type LaboratoryIconName =
  | "scan"
  | "design"
  | "prosthesis"
  | "appliance"
  | "custom-piece";

export interface LaboratoryService {
  id: string;
  name: string;
  description: string;
  featured?: boolean;
  icon: LaboratoryIconName;
}
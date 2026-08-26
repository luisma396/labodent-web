export type LaboratoryReceptionIcon =
  | "upload"
  | "scan"
  | "building";

export interface LaboratoryReceptionOption {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: LaboratoryReceptionIcon;
}
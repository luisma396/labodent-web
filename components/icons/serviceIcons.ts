import {
    Activity,
    AlignHorizontalSpaceAround,
    Baby,
    CircleDot,
    Sparkles,
    Stethoscope,
    type LucideIcon,
  } from "lucide-react";
  
  import type { ServiceIconName } from "@/types";
  
  export const SERVICE_ICONS: Record<ServiceIconName, LucideIcon> = {
    general: Stethoscope,
    orthodontics: AlignHorizontalSpaceAround,
    endodontics: Activity,
    implants: CircleDot,
    aesthetics: Sparkles,
    pediatric: Baby,
  };
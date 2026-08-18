import {
    Box,
    Cpu,
    ScanLine,
    Settings,
    Shapes,
    type LucideIcon,
  } from "lucide-react";
  
  import type { LaboratoryIconName } from "@/types";
  
  export const LABORATORY_ICONS: Record<
    LaboratoryIconName,
    LucideIcon
  > = {
    scan: ScanLine,
    design: Cpu,
    prosthesis: Shapes,
    appliance: Settings,
    "custom-piece": Box,
  };
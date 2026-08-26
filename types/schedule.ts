import type { TimePeriod } from "./time-period";

export interface Schedule {
  professionalId: string;
  locationId: string;
  days: string[];
  hours: TimePeriod[];
  appointmentOnly?: boolean;
}
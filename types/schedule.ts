export interface Schedule {
    professionalId: string;
    locationId: string;
    days: string[];
    hours: SchedulePeriod[];
    appointmentOnly?: boolean;
  }
  
  export interface SchedulePeriod {
    start: string;
    end: string;
  }
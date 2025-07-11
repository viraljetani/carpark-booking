export interface Booking {
    id: number;
    name: string;
    phone: string;
    licencePlate: string;
    startDate: string;
    endDate: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface CreateBooking {
    name: string;
    phone: string;
    licencePlate: string;
    startDate: string;
    endDate: string;
  }
export interface BookingRequest {
  id: number;
  guests: number;
  roomClass: string;
  dateFrom: string;
  dateTo: string;
  createdAt: string;
}

export interface Room {
  id: number;
  class: string;
  capacity: number;
  pricePerNight: number;
  description: string;
}

export interface Invoice {
  id: number;
  bookingId: number;
  roomId: number;
  room: Room;
  booking: BookingRequest;
  total: number;
  nights: number;
  createdAt: string;
}

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { BookingRequest, Room, Invoice } from '../types';

// Фіксований список номерів
const AVAILABLE_ROOMS: Room[] = [
  { id: 1, class: 'Стандарт', capacity: 2, pricePerNight: 1200, description: 'Затишний стандартний номер' },
  { id: 2, class: 'Стандарт', capacity: 3, pricePerNight: 1500, description: 'Сімейний стандарт' },
  { id: 3, class: 'Люкс', capacity: 2, pricePerNight: 2500, description: 'Розкішний люкс для двох' },
  { id: 4, class: 'Люкс', capacity: 4, pricePerNight: 3500, description: 'Великий сімейний люкс' },
  { id: 5, class: 'Делюкс', capacity: 2, pricePerNight: 4000, description: 'Преміум номер з виглядом' },
  { id: 6, class: 'Стандарт', capacity: 1, pricePerNight: 900, description: 'Одномісний стандарт' },
];

interface HotelStore {
  bookings: BookingRequest[];
  invoices: Invoice[];
  
  addBooking: (booking: Omit<BookingRequest, 'id' | 'createdAt'>) => number;
  getBookings: () => BookingRequest[];
  getBookingById: (id: number) => BookingRequest | undefined;
  
  getRooms: () => Room[];
  findBestRoom: (booking: BookingRequest) => Room | null;
  
  createInvoice: (bookingId: number, roomId: number) => Invoice | null;
  getInvoices: () => Invoice[];
  getInvoiceById: (id: number) => Invoice | undefined;
  
  calculateNights: (dateFrom: string, dateTo: string) => number;
  
  // Нові методи для очищення
  clearAllBookings: () => void;
  clearAllInvoices: () => void;
}

export const useHotelStore = create<HotelStore>()(
  persist(
    (set, get) => ({
      bookings: [],
      invoices: [],
      
      addBooking: (booking) => {
        const newBooking: BookingRequest = {
          ...booking,
          id: Date.now(),
          createdAt: new Date().toISOString(),
        };
        set((state) => ({ bookings: [...state.bookings, newBooking] }));
        return newBooking.id;
      },
      
      getBookings: () => get().bookings,
      
      getBookingById: (id) => get().bookings.find((b) => b.id === id),
      
      getRooms: () => AVAILABLE_ROOMS,
      
      findBestRoom: (booking) => {
        const rooms = AVAILABLE_ROOMS.filter(
          (room) => room.class === booking.roomClass && room.capacity >= booking.guests
        );
        
        if (rooms.length === 0) return null;
        
        return rooms.reduce((best, current) => 
          current.pricePerNight < best.pricePerNight ? current : best
        );
      },
      
      calculateNights: (dateFrom, dateTo) => {
        const from = new Date(dateFrom);
        const to = new Date(dateTo);
        const diffTime = Math.abs(to.getTime() - from.getTime());
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      },
      
      createInvoice: (bookingId, roomId) => {
        const booking = get().getBookingById(bookingId);
        const room = AVAILABLE_ROOMS.find((r) => r.id === roomId);
        
        if (!booking || !room) return null;
        
        const nights = get().calculateNights(booking.dateFrom, booking.dateTo);
        const total = nights * room.pricePerNight;
        
        const newInvoice: Invoice = {
          id: Date.now(),
          bookingId,
          roomId,
          room,
          booking,
          total,
          nights,
          createdAt: new Date().toISOString(),
        };
        
        set((state) => ({ invoices: [...state.invoices, newInvoice] }));
        return newInvoice;
      },
      
      getInvoices: () => get().invoices,
      
      getInvoiceById: (id) => get().invoices.find((i) => i.id === id),
      
      clearAllBookings: () => set({ bookings: [] }),
      
      clearAllInvoices: () => set({ invoices: [] }),
    }),
    {
      name: 'hotel-booking-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

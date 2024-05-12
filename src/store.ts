/* eslint-disable prettier/prettier */

import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createJSONStorage, persist } from 'zustand/middleware';

interface StoreType {
  coaches: any[];
  appointments: any[];
  addCoach: (n: any) => void;
  bookAppointment: (n: any) => void;
  cancelAppointment: (n: any) => void;

  bookings: any[];
  addBooking: (booking: any) => void;
  removeBooking: (id: string | number) => void;
  loadBookings?: (n: any) => void;
};

const useBookingStore = create<StoreType>()(
  persist((set) => ({

    coaches: [],
    appointments: [],
    addCoach: (coach) => set((state) => ({ coaches: [...state.coaches, coach] })),
    bookAppointment: (appointment) => set((state) => ({ appointments: [...state.appointments, appointment] })),
    cancelAppointment: (appointmentId) =>
      set((state) => ({
        appointments: state.appointments.filter(
          (appointment) => appointment.id !== appointmentId
        ),
      })),
    // setUser: (user) => set({ user }),
    bookings: [],
    addBooking: (booking) => set((state) => ({ bookings: [...state.bookings, booking] })),
    removeBooking: (id) => set((state) => ({ bookings: state.bookings.filter((booking) => booking.id !== id) })),
  }),
    {name: "Bookings", storage:createJSONStorage(() => AsyncStorage)} 
  )
);

export default useBookingStore;

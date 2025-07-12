import { query } from '../config/database';
import { Booking, CreateBooking } from '../types';

export class BookingController {
  // Create a new booking
  static async createBooking(booking: CreateBooking): Promise<Booking> {
    const { name, phone, licencePlate, startDate, endDate } = booking;
    
    const result = await query(
      `INSERT INTO bookings (name, phone, licence_plate, start_date, end_date)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [name, phone, licencePlate, startDate, endDate]
    );

    return result[0];
  }

  // Get all bookings
  static async getBookings(): Promise<Booking[]> {
    const result = await query(
      `SELECT * FROM bookings
       ORDER BY created_at DESC`
    );
    return result.rows;
  }

  // Get booking by ID
  static async getBooking(id: number): Promise<Booking | null> {
    const result = await query(
      'SELECT * FROM bookings WHERE id = $1',
      [id]
    );
    return result.rows[0] || null;
  }

  // Delete booking
  static async deleteBooking(id: number): Promise<void> {
    await query(
      'DELETE FROM bookings WHERE id = $1',
      [id]
    );
  }
}
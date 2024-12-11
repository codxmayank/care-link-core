import pool from '../configs/db.js';
import { Booking } from '../models/bookingModel.js';
import {
  getBookingsByPatientIdQuery,
  createBookingQuery
} from './queries/bookingSql.js';

export const getBookingsByPatientId = async (patientId) => {
  try {
    const res = await pool.query(getBookingsByPatientIdQuery, [patientId]);
    if (!res.rows?.length || !res.rows[0]) return null;

    const bookingRes = res.rows;
    const bookings = [];
    (bookingRes || [])?.forEach((slot) => {
      const bookingObj = new Booking(slot);
      bookings.push(bookingObj);
    });

    return bookings;
  } catch (error) {
    console.error('Error fetching bookings:', error);
    throw error;
  }
};

export const createBookingDao = async (bookingData) => {
  try {
    const { patientId, doctorId, departmentId, bookingDate, bookingTime } =
      bookingData;
    const res = await pool.query(createBookingQuery, [
      patientId,
      doctorId,
      departmentId,
      bookingDate,
      bookingTime
    ]);
    return res.rows[0];
  } catch (error) {
    console.error('Error creating booking:', error);
    throw error;
  }
};

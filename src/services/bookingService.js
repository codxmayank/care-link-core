import { createBookingDao, getBookingsByPatientId } from '../dao/bookingDao.js';

const createBookingService = async (bookingData) => {
  return await createBookingDao(bookingData);
};

const getBookingsByPatientService = async (patientId) => {
  return await getBookingsByPatientId(patientId);
};

export default {
  createBookingService,
  getBookingsByPatientService
};

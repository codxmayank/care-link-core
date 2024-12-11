import bookingService from '../services/bookingService.js';

export const createBooking = async (req, res, next) => {
  try {
    const newUser = await bookingService.createBookingService(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

export const getBookingsByPatient = async (req, res, next) => {
  try {
    const userData = await bookingService.getBookingsByPatientService(
      req.params.patientId
    );
    res.status(200).json(userData);
  } catch (error) {
    next(error);
  }
};

import { body } from 'express-validator';

export const bookingValidator = [
  // Validate patientId
  body('patientId')
    .notEmpty()
    .withMessage('patient id is required')
    .isInt({ min: 0 })
    .withMessage('Invalid patient id '),

  // Validate doctorId
  body('doctorId')
    .notEmpty()
    .withMessage('doctor id is required')
    .isInt({ min: 0 })
    .withMessage('Invalid doctor id '),

  // Validate departmentId
  body('departmentId')
    .notEmpty()
    .withMessage('department id is required')
    .isInt({ min: 0 })
    .withMessage('Invalid department id '),

  // Validate bookingDate
  body('bookingDate').notEmpty().withMessage('Booking date is required'),

  // Validate bookingTime
  body('bookingTime').notEmpty().withMessage('Booking time is required')
];

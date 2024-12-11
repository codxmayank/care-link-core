import express from 'express';
import {
  createBooking,
  getBookingsByPatient
} from '../controllers/bookingController.js';
import { authenticate } from '../middlewares/authenticate.js';
import { validateMiddleware } from '../middlewares/validate.js';
import { bookingValidator } from '../validators/bookingValidator.js';

const router = express.Router();

router.use(authenticate);

router.post('/', bookingValidator, validateMiddleware, createBooking);
router.get('/:patientId', getBookingsByPatient);
// router.patch('/:bookingId', updateBookingValidator, validateMiddleware, updateBookingById);

export default router;

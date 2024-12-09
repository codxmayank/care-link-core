import express from 'express';
import {
  createUser,
  deactivateUserById,
  getUserById,
  updateUserById
} from '../controllers/userController.js';
import { authenticate } from '../middlewares/authenticate.js';
import {
  createUserValidator,
  updateUserValidator
} from '../validators/userValidator.js';
import { validateMiddleware } from '../middlewares/validate.js';

const router = express.Router();

router.use(authenticate);

router.post('/', createUserValidator, validateMiddleware, createUser);
router.get('/:id', getUserById);
router.patch('/:id', updateUserValidator, validateMiddleware, updateUserById);
router.delete('/:id', deactivateUserById);

export default router;

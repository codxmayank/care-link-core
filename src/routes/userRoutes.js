import express from 'express';
import {
  createUser,
  deactivateUserById,
  getUserById,
  updateUserById
} from '../controllers/userController.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = express.Router();

router.use(authenticate);

router.post('/', createUser);
router.get('/:id', getUserById);
router.patch('/:id', updateUserById);
router.delete('/:id', deactivateUserById);

export default router;

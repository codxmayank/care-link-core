import express from 'express';
import { createUser, deactivateUserById, getUserById, updateUserById } from '../controllers/userController.js';

const router = express.Router();

router.post('/', createUser);
router.get('/:id', getUserById);
router.patch('/:id', updateUserById);
router.delete('/:id', deactivateUserById);

export default router;

import express from 'express';
import { createUser, getUserById, updateUserById } from '../controllers/userController.js';

const router = express.Router();

router.post('/', createUser);
router.get('/:id', getUserById);
router.patch('/:id', updateUserById);

export default router;

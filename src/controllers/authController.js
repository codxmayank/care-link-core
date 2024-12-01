import { registerUser, loginUser } from '../services/authService.js';

export const register = async (req, res) => {
  try {
    await registerUser(req.body);
    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await loginUser(email, password);
    res.json({ message: 'Login successful.', token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

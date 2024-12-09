import { validationResult } from 'express-validator';

const customErrorFormatter = (error) => ({
  field: error.path,
  message: error.msg
});

export const validateMiddleware = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const formattedErrors = errors.array().map(customErrorFormatter);
    return res.status(400).json({ errors: formattedErrors });
  }
  next();
};

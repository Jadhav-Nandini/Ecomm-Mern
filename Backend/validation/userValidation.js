import { body } from "express-validator";

export const registerValidation = [
  body("username")
    .trim()
    .notEmpty().withMessage("Username is required")
    .isLength({ min: 3, max: 30 }).withMessage("Username must be 3-30 characters")
    .escape(),

  body("email")
    .trim()
    .normalizeEmail()
    .isEmail().withMessage("Valid email is required"),

  body("password")
    .trim()
    .isLength({ min: 6 }).withMessage("Password must be at least 6 characters")
    .matches(/[A-Z]/).withMessage("Password must contain at least one uppercase letter")
];

export const loginValidation = [
  body("email")
    .trim()
    .normalizeEmail()
    .isEmail().withMessage("Valid email required"),

  body("password")
    .notEmpty().withMessage("Password required"),
];
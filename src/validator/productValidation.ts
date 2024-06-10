import { ValidationChain, body, check } from "express-validator";

export const productCreateValidator = (): ValidationChain[] => [
  check("name")
    .notEmpty()
    .withMessage("Product name is required")
    .isString()
    .withMessage("Product name must me string")
    .isLength({ min: 1 })
    .withMessage("Product name at least 1 character")
    .trim()
    .escape(),
];

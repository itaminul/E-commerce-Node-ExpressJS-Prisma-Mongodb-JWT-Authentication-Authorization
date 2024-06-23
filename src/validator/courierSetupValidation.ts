import { ValidationChain, body, check } from "express-validator";

export const courierCreateValidator = (): ValidationChain[] => [
  check("name")
    .notEmpty()
    .withMessage("name is required")
    .isString()
    .withMessage("name must me string")
    .isLength({ min: 1 })
    .withMessage("name at least 1 character")
    .trim()
    .escape(),
];

export const courierUpdateValidator = (): ValidationChain[] => [
  check("name")
    .notEmpty()
    .withMessage("name is required")
    .isString()
    .withMessage("name must me string")
    .isLength({ min: 1 })
    .withMessage("name at least 1 character")
    .trim()
    .escape(),

  check("activeStatus")
    .notEmpty()
    .withMessage("Active Status  is required")
    .isNumeric()
    .withMessage("Active Status must me boolean"),
];

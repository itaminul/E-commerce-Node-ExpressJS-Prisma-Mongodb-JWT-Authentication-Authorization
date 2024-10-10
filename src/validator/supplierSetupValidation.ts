import { ValidationChain, check } from "express-validator";

export const supplierSetupCreateValidation = (): ValidationChain[] => [
  check("supplierName")
    .notEmpty()
    .withMessage("Supplier name is required")
    .isString()
    .withMessage("Must be string"),
];

export const supplierSetupUpdateValidation = (): ValidationChain[] => [
    check("supplierName")
    .notEmpty()
    .withMessage("Supplier name is required")
    .isString()
    .withMessage("Must be string"),
];

import { ValidationChain, check } from "express-validator";

export const storeSetupCreateValidation = (): ValidationChain[] => [
  check("storeName")
    .notEmpty()
    .withMessage("Store name is required")
    .isString()
    .withMessage("Must be string"),
];

export const storeSetupUpdateValidation = (): ValidationChain[] => [
  check("storeName")
    .notEmpty()
    .withMessage("Store name is required")
    .isString()
    .withMessage("Must be string"),
];

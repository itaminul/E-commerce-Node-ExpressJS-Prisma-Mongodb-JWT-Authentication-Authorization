import { ValidationChain, body, check } from "express-validator";

export const productCreateValidator = (): ValidationChain[] => [
  check("productName")
    .notEmpty()
    .withMessage("Product name is required")
    .isString()
    .withMessage("Product name must me string")
    .isLength({ min: 1 })
    .withMessage("Product name at least 1 character")
    .trim()
    .escape(),

  check("categoryId")
    .notEmpty()
    .withMessage("categoryId name is required")
    .isNumeric()
    .withMessage("categoryId name must me number"),

  check("latestProduct")
    .notEmpty()
    .withMessage("latestProduct name is required")
    .isNumeric()
    .withMessage("latestProduct name must me number"),
];

export const productUpdateValidator = (): ValidationChain[] => [
  check("productName")
    .notEmpty()
    .withMessage("Product name is required")
    .isString()
    .withMessage("Product name must me string")
    .isLength({ min: 1 })
    .withMessage("Product name at least 1 character")
    .trim()
    .escape(),

  check("categoryId")
    .notEmpty()
    .withMessage("categoryId name is required")
    .isNumeric()
    .withMessage("categoryId name must me number"),

  check("latestProduct")
    .notEmpty()
    .withMessage("latestProduct name is required")
    .isNumeric()
    .withMessage("latestProduct name must me number"),

  check("activeStatus")
    .notEmpty()
    .withMessage("Active Status  is required")
    .isNumeric()
    .withMessage("Active Status must me boolean"),
];

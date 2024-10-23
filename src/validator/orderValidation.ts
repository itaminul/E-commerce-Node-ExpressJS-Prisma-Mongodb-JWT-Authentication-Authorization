import { check, ValidationChain } from "express-validator";
export const orderCreateValidation = (): ValidationChain[] => [
  check("orderNo")
    .notEmpty()
    .withMessage("Order No field required")
    .isString()
    .withMessage("Must be string")
    .trim()
    .escape(),

  check("orderDate")
    .notEmpty()
    .withMessage("Order No field required")
    .isString()
    .withMessage("Must be string")
    .trim()
    .escape(),

  check("orderType")
    .notEmpty()
    .withMessage("orderType No field required")
    .isString()
    .withMessage("Must be string")
    .trim()
    .escape(),

  check("orderBy")
    .notEmpty()
    .withMessage("Order No field required")
    .isString()
    .withMessage("Must be string")
    .trim()
    .escape(),

  check("shipType")
    .notEmpty()
    .withMessage("Order No field required")
    .isString()
    .withMessage("Must be string")
    .trim()
    .escape(),

  check("paymentType")
    .notEmpty()
    .withMessage("Order No field required")
    .isString()
    .withMessage("Must be string")
    .trim()
    .escape(),

  check("shippingAddress")
    .notEmpty()
    .withMessage("Order No field required")
    .isString()
    .withMessage("Must be string")
    .trim()
    .escape(),

  check("orderDate")
    .notEmpty()
    .withMessage("Order No field required")
    .isString()
    .withMessage("Must be string")
    .trim()
    .escape(),

  check("orderDate")
    .notEmpty()
    .withMessage("Order No field required")
    .isString()
    .withMessage("Must be string")
    .trim()
    .escape(),

  check("orderDate")
    .notEmpty()
    .withMessage("Order No field required")
    .isString()
    .withMessage("Must be string")
    .trim()
    .escape(),
];

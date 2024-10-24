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
    .withMessage("Order Date No field required")
    .isString()
    .withMessage("Must be string")
    .trim()
    .escape(),

  check("orderType")
    .notEmpty()
    .withMessage("Order Type No field required")
    .isString()
    .withMessage("Must be string")
    .trim()
    .escape(),

  check("orderBy")
    .notEmpty()
    .withMessage("Order By field required")
    .isString()
    .withMessage("Must be string")
    .trim()
    .escape(),

  check("shipType")
    .notEmpty()
    .withMessage("Ship Type field required")
    .isString()
    .withMessage("Must be string")
    .trim()
    .escape(),

  check("paymentType")
    .notEmpty()
    .withMessage("Payment Type field required")
    .isString()
    .withMessage("Must be string")
    .trim()
    .escape(),

  check("shippingAddress")
    .notEmpty()
    .withMessage("Shipping Address field required")
    .isString()
    .withMessage("Must be string")
    .trim()
    .escape(),
];

export const orderUpdateValidation = (): ValidationChain[] => [
  check("orderNo")
    .notEmpty()
    .withMessage("Order No field required")
    .isString()
    .withMessage("Must be string")
    .trim()
    .escape(),

  check("orderDate")
    .notEmpty()
    .withMessage("Order Date No field required")
    .isString()
    .withMessage("Must be string")
    .trim()
    .escape(),

  check("orderType")
    .notEmpty()
    .withMessage("Order Type No field required")
    .isString()
    .withMessage("Must be string")
    .trim()
    .escape(),

  check("orderBy")
    .notEmpty()
    .withMessage("Order By field required")
    .isString()
    .withMessage("Must be string")
    .trim()
    .escape(),

  check("shipType")
    .notEmpty()
    .withMessage("Ship Type field required")
    .isString()
    .withMessage("Must be string")
    .trim()
    .escape(),

  check("paymentType")
    .notEmpty()
    .withMessage("Payment Type field required")
    .isString()
    .withMessage("Must be string")
    .trim()
    .escape(),

  check("shippingAddress")
    .notEmpty()
    .withMessage("Shipping Address field required")
    .isString()
    .withMessage("Must be string")
    .trim()
    .escape(),
];

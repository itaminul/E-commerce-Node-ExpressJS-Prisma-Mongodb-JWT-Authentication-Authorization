import { Router } from "express";
import { authenticateUsingJWTToken, authorizeRoles } from "../middleware/auth";
import { OrderController } from "../controller/orderController";
import {
  orderCreateValidation,
  orderUpdateValidation,
} from "../validator/orderValidation";
const orderController = new OrderController();
const route = Router();

route.post(
  "/createOrder",
  authenticateUsingJWTToken,
  authorizeRoles("ADMIN", "USER"),
  orderCreateValidation(),
  orderController.create
);

route.patch(
  "/updateOrder/:id",
  authenticateUsingJWTToken,
  authorizeRoles("ADMIN", "USER"),
  orderUpdateValidation(),
  orderController.update
);

route.get(
  "/getAllOrders",
  authenticateUsingJWTToken,
  authorizeRoles("ADMIN", "USER"),
  orderController.getAll
);
export default route;

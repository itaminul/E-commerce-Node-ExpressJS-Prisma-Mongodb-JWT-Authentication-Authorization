import { Router } from "express";
import { authenticateUsingJWTToken, authorizeRoles } from "../middleware/auth";
import { OrderController } from "../controller/orderController";
const orderController = new OrderController();
const route = Router();

route.post(
  "/createOrder",
  authenticateUsingJWTToken,
  authorizeRoles("ADMIN", "USER"),
  orderController.create
);

route.patch(
  "/updateOrder/:id",
  authenticateUsingJWTToken,
  authorizeRoles("ADMIN", "USER"),
  orderController.update
);

route.get(
  "/getAllOrders",
  authenticateUsingJWTToken,
  authorizeRoles("ADMIN", "USER"),
  orderController.getAll
);
export default route;

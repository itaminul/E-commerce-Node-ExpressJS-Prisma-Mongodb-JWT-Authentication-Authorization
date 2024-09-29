import { Router } from "express";
import { authenticateUsingJWTToken, authorizeRoles } from "../middleware/auth";
import { OrderController } from "../controller/orderController";
const orderController = new OrderController();
const route = Router();

route.get(
  "/getAllOrders",
  authenticateUsingJWTToken,
  authorizeRoles("ADMIN", "USER"),
  orderController.create
);

export default route;
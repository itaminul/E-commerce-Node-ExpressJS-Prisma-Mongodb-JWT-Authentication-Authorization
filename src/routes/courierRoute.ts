import { Router } from "express";
import { authenticateUsingJWTToken, authorizeRoles } from "../middleware/auth";
import { CourierSetupController } from "../controller/setup/courierSetupController";
const courierSetupController = new CourierSetupController();
const router = Router();
router.get(
  "/getCourier",
  authenticateUsingJWTToken,
  authorizeRoles("ADMIN", "USER"),
  courierSetupController.getAll
);
router.post(
  "/createCourier",
  authenticateUsingJWTToken,
  authorizeRoles("ADMIN"),
  courierSetupController.create
);
router.patch(
  "/updateCourier",
  authenticateUsingJWTToken,
  authorizeRoles("ADMIN"),
  courierSetupController.update
);
router.delete(
  "/deleteCourier",
  authenticateUsingJWTToken,
  authorizeRoles("ADMIN"),
  courierSetupController.deleteCourier
);
export default router;

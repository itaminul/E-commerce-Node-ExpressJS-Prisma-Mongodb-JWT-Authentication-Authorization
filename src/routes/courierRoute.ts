import { Router } from "express";
import { authenticateUsingJWTToken, authorizeRoles } from "../middleware/auth";
import { SupplierSetupController } from "../controller/setup/supplierSetupController";
const supplierSetupController = new SupplierSetupController();
const router = Router();
router.get(
  "/getCourier",
  authenticateUsingJWTToken,
  authorizeRoles("ADMIN", "USER"),
  supplierSetupController.getAll
);
router.post(
  "/createCourier",
  authenticateUsingJWTToken,
  authorizeRoles("ADMIN"),
  supplierSetupController.create
);
router.patch(
  "/updateCourier",
  authenticateUsingJWTToken,
  authorizeRoles("ADMIN"),
  supplierSetupController.update
);
router.delete(
  "/deleteSupplier",
  authenticateUsingJWTToken,
  authorizeRoles("ADMIN"),
  supplierSetupController.deleteSupplier
);
export default router;

import { Router } from "express";
import { SupplierSetupController } from "../controller/setup/supplierSetupController";
import { authenticateUsingJWTToken, authorizeRoles } from "../middleware/auth";
const supplierSetupController = new SupplierSetupController();
const router = Router();
router.get(
  "/getSupplier",
  authenticateUsingJWTToken,
  authorizeRoles("ADMIN", "USER"),
  supplierSetupController.getAll
);
router.post(
  "/createSupplier",
  authenticateUsingJWTToken,
  authorizeRoles("ADMIN", "USER"),
  supplierSetupController.getAll
);
router.patch(
  "/updateSupplier/:id",
  authenticateUsingJWTToken,
  authorizeRoles("ADMIN", "USER"),
  supplierSetupController.getAll
);
router.delete(
  "/deleteSupplier/:id",
  authenticateUsingJWTToken,
  authorizeRoles("ADMIN", "USER"),
  supplierSetupController.getAll
);
export default router;

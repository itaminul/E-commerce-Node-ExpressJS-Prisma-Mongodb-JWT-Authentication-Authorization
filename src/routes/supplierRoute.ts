import { Router } from "express";
import { SupplierSetupController } from "../controller/setup/supplierSetupController";
import { authenticateUsingJWTToken, authorizeRoles } from "../middleware/auth";
import {
  supplierSetupCreateValidation,
  supplierSetupUpdateValidation,
} from "../validator/supplierSetupValidation";
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
  supplierSetupCreateValidation(),
  supplierSetupController.create
);
router.patch(
  "/updateSupplier/:id",
  authenticateUsingJWTToken,
  authorizeRoles("ADMIN", "USER"),
  supplierSetupUpdateValidation(),
  supplierSetupController.update
);
router.delete(
  "/deleteSupplier/:id",
  authenticateUsingJWTToken,
  authorizeRoles("ADMIN", "USER"),
  supplierSetupController.deleteSupplier
);
export default router;

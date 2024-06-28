import { Router } from "express";
import { StoreSetupController } from "../controller/setup/storeSetupController";
import { authenticateUsingJWTToken, authorizeRoles } from "../middleware/auth";
const storeSetupContro = new StoreSetupController();

const router = Router();

router.get(
  "/",
  authenticateUsingJWTToken,
  authorizeRoles("USER", "ADMIN"),
  storeSetupContro.getAll
);
router.post(
  "/",
  authenticateUsingJWTToken,
  authorizeRoles("ADMIN"),
  storeSetupContro.create
);
router.patch(
  "/:id",
  authenticateUsingJWTToken,
  authorizeRoles("ADMIN"),
  storeSetupContro.update
);
router.delete(
  "/:id",
  authenticateUsingJWTToken,
  authorizeRoles("ADMIN"),
  storeSetupContro.deleteStore
);

export default router;

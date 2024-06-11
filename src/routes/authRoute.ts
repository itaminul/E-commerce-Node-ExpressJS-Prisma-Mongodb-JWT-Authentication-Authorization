import { Router } from "express";
import { AuthController } from "../controller/auth/authController";
import { authenticateToken } from "../middleware/authMiddleware";
import { authenticateUsingJWTToken, authorizeRoles } from "../middleware/auth";
const authController = new AuthController();
const router = Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/check", authenticateToken, authController.check);

// Role-based routes
router.get(
  "/user",
  authenticateUsingJWTToken,
  authorizeRoles("USER"),
  (req, res) => {
    res.send("User route");
  }
);

router.get(
  "/admin",
  authenticateUsingJWTToken,
  authorizeRoles("ADMIN"),
  (req, res) => {
    res.send("Admin route");
  }
);

router.get(
  "/super-admin",
  authenticateUsingJWTToken,
  authorizeRoles("SUPER_ADMIN"),
  (req, res) => {
    res.send("Super Admin route");
  }
);

export default router;

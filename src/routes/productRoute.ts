import { Router } from "express";
import { authenticateToken1, authorizeRoles } from "../middleware/auth";
import { ProductController } from "../controller/product/productController";
import { productCreateValidator } from "../validator/productValidation";
const productController = new ProductController();

const router = Router();

router.get(
  "/getProduct",
  authenticateToken1,
  authorizeRoles("USER", "ADMIN"),
  productController.getAll
);

export default router;

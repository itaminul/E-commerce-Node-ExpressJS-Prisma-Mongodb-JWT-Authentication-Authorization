import { Router } from "express";
import { authenticateUsingJWTToken, authorizeRoles } from "../middleware/auth";
import { ProductController } from "../controller/product/productController";
import { productCreateValidator } from "../validator/productValidation";
const productController = new ProductController();

const router = Router();

router.get(
  "/getProduct",
  authenticateUsingJWTToken,
  authorizeRoles("USER", "ADMIN"),
  productController.getAll
);

router.post(
  "/createProduct",
   authenticateUsingJWTToken,
  authorizeRoles("ADMIN"),
  productCreateValidator(),
  productController.create
);


export default router;

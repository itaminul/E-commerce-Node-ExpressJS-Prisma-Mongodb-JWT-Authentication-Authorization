import express from "express";
import authRoute from "../routes/authRoute";
import productRoute from "../routes/productRoute";
import storeSetupRoute from "../routes/storeSetupRoute";
import courierSetupRoute from "../routes/courierRoute";
import supplierSetupRoute from "../routes/supplierRoute";
import emailRoute from '../routes/emailRoutes'
const router = express.Router();
router.use("/auth", authRoute);
router.use("/product", productRoute);
router.use("/store-setup", storeSetupRoute);
router.use("/courier-setup", courierSetupRoute);
router.use("/supplier-setup", supplierSetupRoute);
router.use("/send-email", emailRoute);
export default router;

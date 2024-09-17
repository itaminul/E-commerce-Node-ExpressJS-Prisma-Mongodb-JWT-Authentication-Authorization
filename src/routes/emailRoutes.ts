import { Router } from "express";
import { sendEmailController } from "../controller/emailController";
const sendEmailControl = new sendEmailController();
const router = Router();

router.post("/send", sendEmailControl.sendEmail);

export default router;

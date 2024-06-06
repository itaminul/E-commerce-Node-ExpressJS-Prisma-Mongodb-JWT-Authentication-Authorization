import { Router } from 'express';
import { AuthController } from '../controller/auth/authController';
import { authenticateToken } from '../middleware/authMiddleware';
const authController = new AuthController();
const router = Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/check', authenticateToken,authController.check);

export default router;

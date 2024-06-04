import { Router } from 'express';
import { AuthController } from '../controller/auth/authController';
import { authenticateToken } from '../middleware/authMiddleware';
import { authenticateToken1,authorizeRoles } from '../middleware/auth';
const authController = new AuthController();
const router = Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/check', authenticateToken,authController.check);

// Role-based routes
router.get('/user', authenticateToken1, authorizeRoles('USER', 'ADMIN', 'SUPER_ADMIN'), (req, res) => {
    res.send('User route');
  });
  
  router.get('/admin', authenticateToken1, authorizeRoles('ADMIN', 'SUPER_ADMIN'), (req, res) => {
    res.send('Admin route');
  });
  
  router.get('/super-admin', authenticateToken1, authorizeRoles('SUPER_ADMIN'), (req, res) => {
    res.send('Super Admin route');
  });
  
export default router;

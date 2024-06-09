import express from 'express'
import authRoute from '../routes/authRoute'
import productRoute from '../routes/productRoute'
const router = express.Router();
router.use('/auth', authRoute);
router.use('/product', productRoute)
export default router;
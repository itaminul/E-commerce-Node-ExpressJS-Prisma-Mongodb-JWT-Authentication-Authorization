import express from 'express'
import authRoute from '../routes/authRoute'
const router = express.Router();
router.use('/auth', authRoute);

export default router;
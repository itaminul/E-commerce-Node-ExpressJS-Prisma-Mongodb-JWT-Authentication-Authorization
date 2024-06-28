import express from 'express'
import authRoute from '../routes/authRoute'
import productRoute from '../routes/productRoute'
import storeSetupRoute from '../routes/storeSetupRoute'
const router = express.Router();
router.use('/auth', authRoute);
router.use('/product', productRoute)
router.use('/store-setup', storeSetupRoute)
export default router;
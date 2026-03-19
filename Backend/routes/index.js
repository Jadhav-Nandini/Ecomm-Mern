import express from "express"

import userRoutes from "./userRoutes.js"
import categoryRoute from "./categoryRoute.js"
import productRoute from "./productRoute.js"
import cartRoute from "./cartRoute.js"
import orderRoute from "./orderRoute.js"
import paymentRoute from "./paymentRoute.js"

const router = express.Router();

router.use("/users",userRoutes);
router.use("/category", categoryRoute);
router.use("/product",productRoute);
router.use("/cart", cartRoute);
router.use("/order", orderRoute)
router.use("/payment", paymentRoute)

export default router;
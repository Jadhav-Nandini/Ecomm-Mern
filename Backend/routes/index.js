import express from "express"

import userRoutes from "./routes/userRoutes.js"
import categoryRoute from "./routes/categoryRoute.js"
import productRoute from "./routes/productRoute.js"
import cartRoute from "./routes/cartRoute.js"
import orderRoute from "./routes/orderRoute.js"
import paymentRoute from "./routes/paymentRoute.js"

const router = express.Router();

router.use("/api/users",userRoutes);
router.use("/api/category", categoryRoute);
router.use("/api/product",productRoute);
router.use("/api/cart", cartRoute);
router.use("/api/order", orderRoute)
router.use("/api/payment", paymentRoute)

export default router;
import express from "express"
import { createOrder, getAllOrders, getMyOrders } from "../controllers/orderController.js";
import { authenticate, authorizeAdmin } from "../middlewares/auth.js";

const router = express.Router();

router
.route("/")
.post(authenticate, createOrder)
.get(authenticate,authorizeAdmin, getAllOrders)

router.get("/my-orders", authenticate, getMyOrders)

export default router;

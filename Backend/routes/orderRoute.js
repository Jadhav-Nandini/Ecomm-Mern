import express from "express"
import { createOrder, getAllOrders, getMyOrders, updateDeliveryStatus } from "../controllers/orderController.js";
import { authenticate, authorizeAdmin } from "../middlewares/auth.js";

const router = express.Router();

router
.route("/")
.post(authenticate, createOrder)
.get(authenticate,authorizeAdmin, getAllOrders);

router.get("/my-orders", authenticate, getMyOrders);
router.put("/:id/deliver", authenticate, authorizeAdmin, updateDeliveryStatus);

export default router;

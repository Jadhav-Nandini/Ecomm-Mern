import express from "express"
import { createOrder, getMyOrders } from "../controllers/orderController.js";
import { authenticate } from "../middlewares/auth.js";

const router = express.Router();

router.post("/",authenticate, createOrder);

router.get("/my-orders", authenticate, getMyOrders)

export default router;

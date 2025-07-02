import express from "express"
import { createPayment } from "../controllers/paymentController.js"


const router = express.Router();

router.post("/create-stripe-payment", createPayment)

export default router;
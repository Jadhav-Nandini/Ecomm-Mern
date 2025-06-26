import express from "express"
import { addToCart, getCart, removeItemFromCart } from "../controllers/cartController.js";
import { authenticate } from "../middlewares/auth.js";

const router = express.Router();

router
.route("/")
.post(authenticate, addToCart)
.get(authenticate, getCart)
.delete(authenticate, removeItemFromCart)


export default router;


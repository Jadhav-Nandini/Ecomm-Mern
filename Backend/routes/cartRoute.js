import express from "express"
import { addToCart, getCart } from "../controllers/cartController.js";
import { authenticate } from "../middlewares/auth.js";

const router = express.Router();

router
.route("/")
.post(authenticate, addToCart)
.get(authenticate, getCart)


export default router;


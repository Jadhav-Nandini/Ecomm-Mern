import express from "express"
import { addToCart } from "../controllers/cartController.js";
import { authenticate, authorizeAdmin } from "../middlewares/auth.js";

const router = express.Router();

router
.route("/")
.post(authenticate, authorizeAdmin, addToCart)


export default router;


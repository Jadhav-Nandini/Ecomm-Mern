import express from "express";
import { authenticate, authorizeAdmin } from "../middlewares/auth.js";
import { createProduct } from "../controllers/productController.js";

const router = express.Router();

router
.route("/")
.post(authenticate, authorizeAdmin, createProduct);

export default router;

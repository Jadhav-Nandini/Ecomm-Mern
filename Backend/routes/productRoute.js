import express from "express";
import { authenticate, authorizeAdmin } from "../middlewares/auth.js";
import { createProduct, updateProduct } from "../controllers/productController.js";

const router = express.Router();

router
.route("/")
.post(authenticate, authorizeAdmin, createProduct);

router
.route("/:id")
.put( authenticate, authorizeAdmin , updateProduct)

export default router;

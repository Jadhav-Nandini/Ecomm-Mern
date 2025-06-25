import express from "express";
import { authenticate, authorizeAdmin } from "../middlewares/auth.js";
import { createProduct, deleteProduct, getAllProduct, getProductById, updateProduct, } from "../controllers/productController.js";

const router = express.Router();

router
.route("/")
.post(authenticate, authorizeAdmin, createProduct)
.get(getAllProduct);

router
.route("/:id")
.get(getProductById)
.put( authenticate, authorizeAdmin, updateProduct)
.delete(authenticate, authorizeAdmin, deleteProduct)

export default router;

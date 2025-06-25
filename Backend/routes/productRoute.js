import express from "express";
import { authenticate, authorizeAdmin } from "../middlewares/auth.js";
import { createProduct, getAllProduct, updateProduct, } from "../controllers/productController.js";

const router = express.Router();

router
.route("/")
.post(authenticate, authorizeAdmin, createProduct)
.get(getAllProduct)

router
.route("/:id")
.put( authenticate, authorizeAdmin , updateProduct)

export default router;

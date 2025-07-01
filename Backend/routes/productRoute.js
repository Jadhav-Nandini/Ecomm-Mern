import express from "express";
import { authenticate, authorizeAdmin } from "../middlewares/auth.js";
import { createProduct, deleteProduct, getAllProduct, getProductById, updateProduct, } from "../controllers/productController.js";
import upload from "../utils/multer.js";

const router = express.Router();

router
.route("/")
.post(authenticate, authorizeAdmin, upload.single("image"),createProduct)
.get(getAllProduct);

router
.route("/:id")
.get(getProductById)
.put( authenticate, authorizeAdmin, upload.single("image"), updateProduct)
.delete(authenticate, authorizeAdmin, deleteProduct)

export default router;

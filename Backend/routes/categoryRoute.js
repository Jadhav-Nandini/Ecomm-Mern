import express from "express"
import { authenticate, authorizeAdmin } from "../middlewares/auth.js";
import { createCategory, deleteCategory, getAllCategory, updateCategory } from "../controllers/categoryController.js";

const router = express.Router();

router
.route("/")
.post(authenticate, authorizeAdmin, createCategory)
.get(getAllCategory);

router.
route("/:id")
.put(authenticate,authorizeAdmin, updateCategory)
.delete(authenticate,authorizeAdmin, deleteCategory);

export default router;


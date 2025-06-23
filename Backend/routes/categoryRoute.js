import express from "express"
import { authenticate, authorizeAdmin } from "../middlewares/auth.js";
import { createCategory } from "../controllers/categoryController.js";

const router = express.Router();

router.post("/" , authenticate, authorizeAdmin, createCategory)

export default router;


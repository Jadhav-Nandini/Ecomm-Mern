import express from "express";
import {createUser, loginUser, logoutUser} from "../controllers/userController.js";


const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

export default router;

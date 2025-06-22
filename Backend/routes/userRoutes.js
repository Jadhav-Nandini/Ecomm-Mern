import express from "express";
import {
    createUser, 
    getAllUsers, 
    getUserProfile, 
    loginUser, 
    logoutUser,
    updateUserProfile

} from "../controllers/userController.js";
import { authenticate, authorizeAdmin } from "../middlewares/auth.js";
import { deleteUser, getUserdetail, updateUserbyadmin } from "../controllers/adminController.js";


const router = express.Router();

router
.route("/")
.post(createUser)
.get(authenticate, authorizeAdmin, getAllUsers);


router.post("/login", loginUser);
router.post("/logout", logoutUser);

router
.route("/userProfile")
.get(authenticate, getUserProfile) // get user profile
.put(authenticate, updateUserProfile); // upadate user profile

router
.route("/:id")
.delete(authenticate, authorizeAdmin, deleteUser)
.get(authenticate, authorizeAdmin, getUserdetail)
.put(authenticate, authorizeAdmin, updateUserbyadmin);








export default router;

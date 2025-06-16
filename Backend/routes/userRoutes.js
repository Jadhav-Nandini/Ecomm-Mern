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


const router = express.Router();

router
.route("/")
.post(createUser)
.get(authenticate, authorizeAdmin, getAllUsers);


router.post("/login", loginUser);
router.post("/logout", logoutUser);

router
.route("/userProfile")
.get(authenticate, getUserProfile)
.put(authenticate, updateUserProfile);




export default router;

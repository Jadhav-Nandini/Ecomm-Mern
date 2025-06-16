import express from "express";
import {
    createUser, 
    getAllUsers, 
    getUserProfile, 
    loginUser, 
    logoutUser

} from "../controllers/userController.js";
import auth from "../middlewares/auth.js";


const router = express.Router();

router
.route("/")
.post(createUser)
.get(getAllUsers);


router.post("/login", loginUser);
router.post("/logout", logoutUser);

router
.route("/userProfile")
.get(auth, getUserProfile );


export default router;

import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/user.js";


const deleteUser = asyncHandler(async(req,res) => {
    const user = await User.findById(req.params.id) // this id comes from url
    console.log("Fetched User:", user);
console.log("Is Admin:", user.isAdmin);


    if(user) {
        if(user.isAdmin) {
            res.status (400)
            throw new Error("Cannot delete admin user")
        }
        await User.deleteOne({_id: user._id}) // delete one user from db

        res.json({ message: "User Removed" })

    }else {
        res.status(404)
        throw new Error("user not found")
    }

});

const  getUserdetail = asyncHandler(async(req,res) => {
    const user = await User.findById(req.params.id).select('-password')

    if(user){
        res.json(user)
    }else{
        res.status(404)
        throw new Error("user not found");
    }
});

export { deleteUser, getUserdetail }
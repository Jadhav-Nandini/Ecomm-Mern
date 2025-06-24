import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/user.js";


const deleteUser = asyncHandler(async(req,res) => {
    const user = await User.findById(req.params.id) // this id comes from url

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

const updateUserbyadmin = asyncHandler(async(req, res) => {
    const user = await User.findById(req.params.id)

    if(user) {
        user.username = req.body.username || user.username;
        user.email = req.body.email || user.email;
        user.isAdmin = Boolean(req.body.isAdmin); 

        const updatedUser = await user.save();

        res.json({
            _id: updatedUser._id,
            username: updatedUser.username,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin
        })

    }else {
        res.status(404)
        throw new Error("User not found");
    }

})

export { deleteUser, getUserdetail, updateUserbyadmin }
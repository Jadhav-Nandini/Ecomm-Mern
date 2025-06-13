import User from "../models/user.js";
import createToken from "../utils/createToken.js"

const createUser = async(req,res) =>{
    const {username , email, password} = req.body;

   if(!username || !email || !password) {
    return res.status(400).json({message: "Please fill all the inputs"});
   }

   const userExits = await User.findOne({email})
   if(userExits) res.status(400).send("User Already Exists");

   const newUser = new User({username, email, password})

   try{

    await newUser.save();
    createToken(res, newUser._id);
    
    res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        isAdmin: newUser.isAdmin
    });

   }
   catch(error) {

    console.error("register error", error.message);
    res.status(400).json({
        message: "Invalid user data" , error: error.message});
    
    
    
    // res.status(400)
    // throw new Error("Invalid User Data")
   }

}

export default createUser;

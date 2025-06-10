import User from "../models/user.js";

const createUser = async(req,res) =>{
    const {username , email, password} = req.body;

   if(!username || !email || !password) {
    return res.status(400).json({message: "Please fill all the inputs"});
   }

   const userExits = await User.findOne({email})
   if(userExits) res.status(400).send("User Already Exists");
}

export default createUser;

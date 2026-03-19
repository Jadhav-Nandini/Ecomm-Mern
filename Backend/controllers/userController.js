import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/user.js";
import createToken from "../utils/createToken.js";
import * as  userService from "../services/userService.js";

// create user
// const createUser = asyncHandler(async (req, res) => {
//   const { username, email, password } = req.body;
//   const userExits = await User.findOne({ email });

//   if (userExits) {
//     res.status(400)
//     throw new Error("User already exists")
//   }
//   const user = await User.create({
//     username,
//     email,
//     password,
//   })

//   createToken(res, user._id);

//   res.status(201).json({
//     _id: user._id,
//     username: user.username,
//     email: user.email,
//     isAdmin: user.isAdmin,
//   });
// })


const createUser = asyncHandler(async (req, res) => {
  const user = await userService.createUser(req.body);

  createToken(res, user._id);

  res.status(201).json(user);
});




const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //checks if the user exists or not
  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    res.status(401)
    throw new Error("User not found")
  }

  // checks if the password is valid or not
  const isValidPassword = await existingUser.matchPassword(password)
  if (!isValidPassword) {
    res.status(401)
    throw new Error("Invalid Password")
  }

  //generate token and send response
  createToken(res, existingUser._id);

  res.status(200).json({
    _id: existingUser._id,
    username: existingUser.username,
    email: existingUser.email,
    isAdmin: existingUser.isAdmin,
  });
});

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200)
  throw new Error("Logout Successfully")
});

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({}).select("-password")
  res.json(users)
  console.log(users);

});

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(400)
    throw new Error("User not found")
  }
})

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin
    });

  } else {
    res.status(404)
    throw new Error("User not found")
  }

})

export { createUser, loginUser, logoutUser, getAllUsers, getUserProfile, updateUserProfile };

import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/user.js";
import createToken from "../utils/createToken.js";
import bcrypt from "bcryptjs";

// create user
const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Please fill all the inputs" });
  }

  const userExits = await User.findOne({ email });
  if (userExits) {
    return res.status(400).send("User Already Exists");
  } 

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    createToken(res, newUser._id);

    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
    });
  } catch (error) {
    console.error("register error", error.message);
    res.status(400).json({
      message: "Invalid user data",
      error: error.message,
    });
  }
};

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //checks if the user exists or not
  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    return res.status(401).json({ message: "user not found" });
  }

  // checks if the password is valid or not

  const isValidPassword = await bcrypt.compare(password, existingUser.password);

  if (!isValidPassword) {
    return res.status(401).json({ message: "Invalid Password" });
  }

  //generate token and send response
  createToken(res, existingUser._id);

  res.status(201).json({
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

  res.status(200).json({ message: "Logout Successfully" });
});

export { createUser, loginUser, logoutUser };

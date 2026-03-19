import User from "../models/user.js";

export const createUserService = async (data) => {
  const existing = await User.findOne({ email: data.email });
  const { username, email, password } = data;

  if (existing) {
    throw new Error("User already exists");
  }
  return await User.create({
    username,
    email,
    password
  });

};

export const loginUserService = async (data) => {

  const { email, password } = data;
  const user = await User.findOne({ email });

  if(!user) throw new Error("User not found");

  const isMatch = await user.matchPassword(password);
  if(!isMatch) throw new Error("Invalid Password");
  return user;
  
};
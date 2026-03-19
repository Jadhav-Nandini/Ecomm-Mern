import User from "../models/user.js";

export const createUser = async (data) => {
  const existing = await User.findOne({ email: data.email });

  if (existing) {
    throw new Error("User already exists");
  }

  return await User.create(data);
};

export const loginUserService = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) throw new Error("User not found");

  const isMatch = await user.matchPassword(password);

  if (!isMatch) throw new Error("Invalid password");

  return user;
};
import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../models/user.js";

const authenticate = asyncHandler(async (req, res, next) => {
  let token;

  // .jwt is named while generating token
  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // it will not show the password
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      console.error("register error", error.message);

      res.status(401).json({
        message: "Not authorized, token failed",
        error: error.message
      });
    }
  } else {
    res.status(401).json({
        message: "No token",
        error: error.message
      });

  }
  
});


const authorizeAdmin = (req, res, next) => {
  if(req.user && req.user.isAdmin) {
    next();
  }else{
    res.status(401).send("Not authorized as an admin")
  }
}

export {authenticate, authorizeAdmin};

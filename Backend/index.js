import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"
import cookieParser from "cookie-parser";


const app = express();
dotenv.config();

const Port = process.env.PORT || 4000;
connectDB();

app.use(express.json()); // req.body ko read karne ke liye

app.use(cookieParser());

app.use("/api/users",userRoutes);


// app.get("/", (req, res) => {
//   res.send("<h1>  Its running </h1> ");
// });

app.listen(Port, () => console.log(`Server is running on ${Port}`));

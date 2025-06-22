import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"
import paymentRoute from "./routes/paymentRoute.js"
import cookieParser from "cookie-parser";


const app = express();

const Port = process.env.PORT || 4000;
connectDB();

app.use(express.json()); // req.body ko read karne ke liye

app.use(cookieParser());

app.use("/api/users",userRoutes);
app.use("/api/payment", paymentRoute)




app.listen(Port, () => console.log(`Server is running on ${Port}`));



//Crash Handlers 
process.on("uncaughtException", err => {
  console.error("UNCAUGHT EXCEPTION", err);
  process.exit(1);
});

process.on("unhandledRejection", err => {
  console.error("UNHANDLED PROMISE", err);
  process.exit(1);
});

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";
import routes from "./routes/index.js"
import startCronJobs from "./helpers/cron.js";

const app = express();
const Port = process.env.PORT || 4000;

await connectDB();

app.use(express.json());
app.use(cookieParser());

const allowedOrigin = "http://localhost:3000";

app.use(cors({
  origin: allowedOrigin, // frontend origin
  credentials: true    // allow cookies/auth header
}));

app.use("/api", routes)

//  Default route
app.get("/", (req, res) => {
  res.send("Jewella API is live /");
});

app.listen(Port, () => {
  console.log(`Server is running on ${Port}`);
  startCronJobs();

});



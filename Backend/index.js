import express from "express";
import dotenv from "dotenv";



const app = express();
dotenv.config();

const Port = process.env.PORT || 4000;

app.use(express.json()); // req.body ko read karne ke liye

app.get("/", (req, res) => {
  res.send("<h1>  Its running </h1> ");
});

app.listen(Port, () => console.log(`Server is running on ${Port}`));

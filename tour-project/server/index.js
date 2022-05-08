import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/user.js";

const app = express();

//DdGjtrd7LBn8YP39

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/users", userRouter); // http://localhost:5000/users/signup

const MONGO_URL =
  "mongodb+srv://rickychan:DdGjtrd7LBn8YP39@tour-app.m8lql.mongodb.net/tour-db?retryWrites=true&w=majority";

const port = 5000;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((error) => console.log(`${error} did not connect`));

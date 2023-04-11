import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/config.js";
import router from "./routes/router.js";

const port = 5005;
const app = express();

app.use(cors());

dotenv.config();

connectDB();

app.use(express.json({ limit: "30mb", extended: true }));

app.use("/api", router);

app.listen(port, () => {
  console.log(`server is running at port: ${port}`);
});

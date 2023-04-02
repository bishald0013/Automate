import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/config.js";
import router from "./routes/router.js"

const port = 8000;
const app = express()
dotenv.config()

connectDB()
app.use(express.json({ limit: "30mb", extended: true }))

app.use('/api', router)

app.listen(port, () => {
    console.log(`server is running at port: ${port}`)
})
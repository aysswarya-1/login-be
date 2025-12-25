import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import { connectDB } from "./config/db.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"

dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json())
app.use(cors({
    origin: "https://login-be-h3ti.onrender.com",
    credentials: true,
}))

app.use(cookieParser())

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

connectDB();

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})
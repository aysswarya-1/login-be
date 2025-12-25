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

const allowedOrigins = [
    "http://localhost:5173",
    process.env.CLIENT_URL
];

app.use(express.json())
app.use(cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}))

app.use(cookieParser())

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

connectDB();

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})
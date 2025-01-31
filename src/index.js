import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import cookieParser from "cookie-parser";
// Import
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import dbConnection from "./lib/dbconnection.js";




const PORT = process.env.PORT || 3000;

const app = express();

// middileware 
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.get("/", (req, res) => {
  res.send("<h1> App is running...</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  dbConnection();
});

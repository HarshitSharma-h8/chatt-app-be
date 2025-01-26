import express from "express";
import dotenv from "dotenv";
dotenv.config();

// Import
import authRoutes from "./routes/auth.route.js";
import dbConnection from "./lib/dbconnection.js";



const PORT = process.env.PORT || 3000;

const app = express();

// middileware 
app.use(express.json());  

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("<h1> App is running...</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  dbConnection();
});

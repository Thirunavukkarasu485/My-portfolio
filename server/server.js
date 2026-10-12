
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173"
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Portfolio backend is running!" });
});

app.get("/api/projects", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Portfolio Website",
      description: "My personal React portfolio website",
      tech: ["React", "CSS", "Vite"],
    },
  ]);
});


app.get("/api/health", (req, res) => {
  res.json({
    server: "running",
    database: mongoose.connection.readyState === 1
      ? "connected"
      : "disconnected"
  });
});

import contactRoutes from "./routes/contactRoutes.js";
app.use("/api/contact", contactRoutes);

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB connected successfully!");

    const port = process.env.PORT || 5000;

    app.listen(port, () => {
      console.log(`Backend running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Connection error:", error.message);
    process.exit(1);
  }
}

startServer();

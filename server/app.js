import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import authRoutes from "./routes/authRoutes.js";
import capsuleRoutes from "./routes/capsuleRoutes.js";
import mediaRoutes from "./routes/mediaRoutes.js";
import reminderRoutes from "./routes/reminderRoutes.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: path.resolve(__dirname, "../.env") });
dotenv.config();

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "digital-memory-capsule-api" });
});

app.use("/api/auth", authRoutes);
app.use("/api/capsules", capsuleRoutes);
app.use("/api/media", mediaRoutes);
app.use("/api/reminders", reminderRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || "Internal server error" });
});

export default app;

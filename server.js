import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

app.use(cors());
app.use(express.json());

// needed for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// serve frontend
app.use(express.static(path.join(__dirname, "dist")));

// API route
app.post("/pay", (req, res) => {
  res.json({ ok: true });
});

// IMPORTANT: catch-all route for React
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running"));

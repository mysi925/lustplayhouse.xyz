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

// 🧠 SERVE FRONTEND (THIS IS THE FIX)
app.use(express.static(path.join(__dirname, "dist")));

// 💳 API ROUTE
app.post("/pay", (req, res) => {
  res.json({ ok: true });
});

// ⚠️ IMPORTANT: send React for all routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Running on", PORT));

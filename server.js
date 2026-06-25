import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(express.json());

// needed for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* =========================
   API (Square backend)
========================= */
app.post("/create-payment", async (req, res) => {
  res.json({ ok: true, message: "API working" });
});

/* =========================
   SERVE REACT BUILD
========================= */
app.use(express.static(path.join(__dirname, "dist")));

/* =========================
   FRONTEND ROUTES
========================= */
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

/* =========================
   START SERVER
========================= */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on", PORT);
});

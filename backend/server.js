require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { URL } = require("url");

const connectDB = require("./config/db");
const scanRoutes = require("./routes/scanRoutes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api", scanRoutes);

// SSRF
app.post("/api/fetch", async (req, res) => {
  try {
    const { url } = req.body;

    const parsed = new URL(url);
    const hostname = parsed.hostname;

    if (hostname === "localhost" || hostname === "127.0.0.1") {
      return res.status(403).json({ message: "❌ SSRF Blocked" });
    }

    const response = await axios.get(url);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ message: "Error" });
  }
});

// internal demo
app.get("/internal", (req, res) => {
  res.json({ secret: "DB_PASSWORD=12345" });
});

app.listen(5001, () => console.log("Server running on 5001"));
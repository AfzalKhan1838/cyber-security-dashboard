
const express = require("express");
const router = express.Router();
const axios = require("axios");

// 🧠 detect attack type
const detectType = (url) => {
  if (url.includes("<script>")) return "XSS";
  if (url.toLowerCase().includes("select")) return "SQL";
  if (url.includes("localhost")) return "SSRF";
  return "SAFE";
};

// 🔍 SCAN
router.post("/scan", (req, res) => {
  const { url } = req.body;

  const type = detectType(url);
  const status = type === "SAFE" ? "allowed" : "blocked";

  const ip =
    req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  const log = {
    url,
    type,
    status,
    ip,
    time: new Date()
  };

  global.logs = global.logs || [];
  global.logs.push(log);

  res.json(log);
});

// 💀 SSRF
router.post("/fetch", async (req, res) => {
  const { url } = req.body;

  try {
    // BLOCK internal
    if (url.includes("localhost")) {
      return res.status(403).json({ message: "SSRF Blocked" });
    }

    const response = await axios.get(url);

    res.json({
      message: "Allowed",
      data: response.data
    });

  } catch (err) {
    res.status(500).json({ message: "Error fetching URL" });
  }
});

// 📋 LOGS
router.get("/logs", (req, res) => {
  res.json(global.logs || []);
});

module.exports = router;
const Log = require("../models/Log");
const detectAttack = require("../utils/detectAttack");

exports.scanUrl = async (req, res) => {
  const { url } = req.body;

  const type = detectAttack(url);
  const status = type === "SAFE" ? "allowed" : "blocked";

  const log = await Log.create({ url, type, status });

  res.json(log);
};

exports.getLogs = async (req, res) => {
  const logs = await Log.find().sort({ createdAt: -1 });
  res.json(logs);
};
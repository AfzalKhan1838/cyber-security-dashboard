const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Connecting to Mongo...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("❌ DB ERROR:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
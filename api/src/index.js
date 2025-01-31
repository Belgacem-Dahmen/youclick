require("dotenv").config();
const express = require("express");
const cors = require("cors");
const database = require("./config/database");

const app = express();
const bodyParser = require("body-parser");
const authRoutes = require("./v1/authRoutes");
const userRoutes = require("./v1/userRoutes");
const testRoutes = require("./v1/testRoutes");
const roleRoutes = require("./v1/roleRoutes");
const testCaseRoutes = require("./v1/testCaseRoutes");
const campaignRoutes = require("./v1/campaignRoutes");

const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/tests", testRoutes);
app.use("/api/v1/roles", roleRoutes);
app.use("/api/v1/testcases", testCaseRoutes);
app.use("/api/v1/campaigns", campaignRoutes);

// Error handling
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.get("/health", async (req, res) => {
  try {
    // Example query to check if database is connected and returning data
    const [rows] = await database.execute("SELECT NOW() AS currentTime");
    res.json({
      message: "Connected to the database!",
      time: rows[0].currentTime,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Database connection failed", error: error.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
module.exports = app;

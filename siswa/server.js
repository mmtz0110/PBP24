const express = require("express");
const app = express();
const router = require("./app");
const logger = require("./middleware/logger");

const PORT = 3000;

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use("/siswa", router);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
const express = require("express");
const router = express.Router();
const pool = require("../db");

const auth = require("../middleware/auth");
const validateUser = require("../middleware/validator");

// GET semua siswa
router.get("/", async (req, res, next) => {
  try {
    const [rows] = await pool.query("SELECT * FROM siswa ORDER BY id DESC");
    res.json({
      message: "Daftar siswa dari MySQL",
      data: rows
    });
  } catch (err) {
    next(err); // lempar ke error handler
  }
});

// POST tambah siswa
router.post("/", auth, validateUser, async (req, res, next) => {
  try {
    const { name, age } = req.body;

    const [result] = await pool.query(
      "INSERT INTO siswa(name, age) VALUES(?, ?)",
      [name, age]
    );

    const newUser = {
      id: result.insertId,
      name,
      age
    };

    res.status(201).json({
      message: "Siswa berhasil ditambahkan!",
      data: newUser
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const pool = require("./models/db");

const auth = require("./middleware/auth");
const validateUser = require("./middleware/validator");

// ================================
// GET: Ambil semua siswa
// ================================
router.get("/", async (req, res, next) => {
  try {
    const [rows] = await pool.query("SELECT * FROM siswa ORDER BY id DESC");
    res.json({
      message: "Daftar siswa dari MySQL",
      data: rows
    });
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const [rows] = await pool.query("SELECT * FROM siswa ORDER BY id DESC");
    res.json({
      message: "Daftar siswa dari MySQL",
      data: rows
    });
  } catch (err) {
    next(err);
  }
});

// ================================
// POST: Tambah siswa baru
// ================================
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

// ================================
// PUT: Update siswa berdasarkan ID
// ================================
router.put("/:id", auth, validateUser, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, age } = req.body;

    const [result] = await pool.query(
      "UPDATE siswa SET name = ?, age = ? WHERE id = ?",
      [name, age, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Siswa tidak ditemukan" });
    }

    res.json({
      message: "Siswa berhasil diperbarui",
      data: { id, name, age }
    });
  } catch (err) {
    next(err);
  }
});

// ================================
// DELETE: Hapus siswa berdasarkan ID
// ================================
router.delete("/:id", auth, async (req, res, next) => {
  try {
    const { id } = req.params;

    const [result] = await pool.query(
      "DELETE FROM siswa WHERE id = ?",
      [id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Siswa tidak ditemukan" });
    }

    res.json({
      message: "Siswa berhasil dihapus",
      deletedId: id
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const db = require('../models/db');

// GET /mahasiswa - Mendapatkan daftar semua mahasiswa
router.get('/', (req, res) => {
    db.query('SELECT * FROM mahasiswa', (error, results) => {
        if (error) {
            console.error('Error fetching mahasiswa:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            res.json(results);
        }
    });
});

// GET /mahasiswa/:nim - Mendapatkan detail mahasiswa berdasarkan nim
router.get('/:nim', (req, res) => {
    const mahasiswaId = req.params.nim;
    db.query('SELECT * FROM mahasiswa WHERE nim = ?', [mahasiswaId], (error, results) => {
        if (error) {
            console.error('Error fetching mahasiswa:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        } else if (results.length === 0) {
            res.status(404).json({ message: 'Mahasiswa not found' });
        } else {
            res.json(results[0]);
        }
    });
});

// POST /mahasiswa - Menambahkan mahasiswa baru
router.post('/', (req, res) => {
    const { nim, nama, gender, prodi, alamat } = req.body;
    
    // Validasi input
    if (!nim || !nama || !gender || !prodi || !alamat) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    
    db.query(
        'INSERT INTO mahasiswa (nim, nama, gender, prodi, alamat) VALUES (?, ?, ?, ?, ?)',
        [nim, nama, gender, prodi, alamat],
        (error, results) => {
            if (error) {
                console.error('Error adding mahasiswa:', error);
                if (error.code === 'ER_DUP_ENTRY') {
                    res.status(409).json({ message: 'Mahasiswa with this NIM already exists' });
                } else {
                    res.status(500).json({ message: 'Internal Server Error' });
                }
            } else {
                res.status(201).json({ 
                    message: 'Mahasiswa added successfully',
                    nim: nim
                });
            }
        }
    );
});

// PUT /mahasiswa/:nim - Mengupdate data mahasiswa berdasarkan nim
router.put('/:nim', (req, res) => {
    const mahasiswaNim = req.params.nim;
    const { nama, gender, prodi, alamat } = req.body;
    
    // Validasi input
    if (!nama || !gender || !prodi || !alamat) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    
    db.query(
        'UPDATE mahasiswa SET nama = ?, gender = ?, prodi = ?, alamat = ? WHERE nim = ?',
        [nama, gender, prodi, alamat, mahasiswaNim],
        (error, results) => {
            if (error) {
                console.error('Error updating mahasiswa:', error);
                res.status(500).json({ message: 'Internal Server Error' });
            } else if (results.affectedRows === 0) {
                res.status(404).json({ message: 'Mahasiswa not found' });
            } else {
                res.json({ message: 'Updating mahasiswa Successfully' });
            }
        }
    );
});

// DELETE /mahasiswa/:nim - Menghapus mahasiswa berdasarkan nim
router.delete('/:nim', (req, res) => {
    const mahasiswaNim = req.params.nim;
    
    db.query('DELETE FROM mahasiswa WHERE nim = ?', [mahasiswaNim], (error, results) => {
        if (error) {
            console.error('Error deleting mahasiswa:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        } else if (results.affectedRows === 0) {
            res.status(404).json({ message: 'Mahasiswa not found' });
        } else {
            res.json({ message: 'Mahasiswa deleted successfully' });
        }
    });
});

module.exports = router;


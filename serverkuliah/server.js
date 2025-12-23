const express = require('express');
const mahasiswaRoutes = require('./controllers/mahasiswaController');

const app = express();
const PORT = 3000;

// Middleware untuk parsing JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route untuk mahasiswa
app.use('/mahasiswa', mahasiswaRoutes);

// Route root
app.get('/', (req, res) => {
    res.json({ 
        message: 'Welcome to Mahasiswa API',
        endpoints: {
            'GET /mahasiswa': 'Mendapatkan daftar semua mahasiswa',
            'GET /mahasiswa/:nim': 'Mendapatkan detail mahasiswa berdasarkan nim',
            'POST /mahasiswa': 'Menambahkan mahasiswa baru',
            'PUT /mahasiswa/:nim': 'Mengupdate data mahasiswa',
            'DELETE /mahasiswa/:nim': 'Menghapus mahasiswa'
        }
    });
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


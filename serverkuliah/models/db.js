const mysql = require('mysql2');

// Konfigurasi koneksi database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '011005',
    database: 'mahasiswa'
});

// Membuka koneksi ke database
db.connect((error) => {
    if (error) {
        console.error('Error connecting to database:', error);
    } else {
        console.log('Connected to MySQL database');
    }
});

module.exports = db;


const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;
const secretKey = 'ini_rahasia';

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({message: 'Akses ditolak, token tidak ditemukan'});
    }
    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
    }catch (err) {
        return res.status(401).json({message: 'Token tidak valid'});
    }
};

app.get('/secure', verifyToken, (req, res) => {
    res.json({message: 'Akses diberikan.'});
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
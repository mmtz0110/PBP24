const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const secretKey = 'rahasia';

// CONTOH DATA
const user = {
  ktp: '3204123401230001',
  nama: 'Yulhan Wahyudin',
  alamat: 'Jl. Merdeka No. 123 Jakarta'
};

// GENERATE TOKEN
const token = jwt.sign(user, secretKey, { expiresIn: '1h' });
console.log('\nTOKEN JWT:\n' + token);

// MIDDLEWARE VERIFIKASI TOKEN 
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Token tidak ada' });
  }

  if (!authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Format token salah' });
  }

  const token = authHeader.slice(7);
  
  try {
    req.user = jwt.verify(token, secretKey);
    next();
  } catch (err) {
    return res.status(401).json({
      message: 'Token tidak valid atau kadaluarsa'
    });
  }
};


// ENDPOINT
app.get('/data', verifyToken, (req, res) => {
  res.json({
    message: 'Akses diberikan',
    user: req.user
  });
});

app.listen(3000, () => {
  console.log('\nServer berjalan di http://localhost:3000');
});

const jwt = require('jsonwebtoken');
const secretKey = 'ini_rahasia';

const user = {
    ktp: '123456789',
    nama: 'Ini jawa token',
    alamat: 'Indonesia'
};

const token = jwt.sign(user, secretKey, { expiresIn: '1h' });
console.log('Token: ', token);

const decoded = jwt.verify(token, secretKey);
console.log('Decode: ', decoded);

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
// eyJrdHAiOiIxMjM0NTY3ODkiLCJuYW1hIjoiSW5pIGphd2EgdG9rZW4iLCJhbGFtYXQiOiJJbmRvbmVzaWEiLCJpYXQiOjE3NjYzOTk0MDUsImV4cCI6MTc2NjQwMzAwNX0.
// VdwFYxRKZ4tJ1-ReqsNrsYc0uYi2YJzXkV468CCWfLw
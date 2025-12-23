const express = require('express');
const app = express();
const port = 8000;

// Middleware untuk parsing JSON body
app.use(express.json());

// Data dummy (array)
let students = [
  { id: 1, name: 'Andi', class: 'TI22A' },
  { id: 2, name: 'Rudi', class: 'TI22B' }
];

// 1️⃣ GET → menampilkan semua data mahasiswa
app.get('/api/mahasiswa', (req, res) => {
  res.json(students);
});

// 2️⃣ POST → menambah mahasiswa baru
app.post('/api/mahasiswa', (req, res) => {
  const newStudent = req.body;
  students.push(newStudent);
  res.status(201).json({ message: 'Data berhasil ditambahkan', data: newStudent });
});

// 3️⃣ PUT → memperbarui data berdasarkan id
app.put('/api/mahasiswa/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const update = req.body;
  students = students.map(s => (s.id === id ? { ...s, ...update } : s));
  res.json({ message: `Data id ${id} diperbarui`, data: update });
});

// 4️⃣ DELETE → menghapus data berdasarkan id
app.delete('/api/mahasiswa/:id', (req, res) => {
  const id = parseInt(req.params.id);
  students = students.filter(s => s.id !== id);
  res.json({ message: `Data id ${id} dihapus` });
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
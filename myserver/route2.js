const express = require('express');
const app = express();
const port = 3500;

const users = [
    {id: 1, name: "Desuryama"},
    {id: 2, name: "Yogi Dwi Andri"},
    {id: 3, name: "Javariu Bintang"}
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find((u) => u.id === userId);

    if (!user) {
        res.status(404).json({ message: 'Pengguna tidak ditemukan' });
    } else {
        res.json(user);
    }
});

app.get('/', (req, res) => {
    res.send(`
        <h1>Selamat Datang!</h1>
        <p><a href="/users">Lihat Daftar Pengguna</a></p>
        <p><a href="/users/1">Lihat User 1</a></p>
        <p><a href="/users/2">Lihat User 2</a></p>
        <p><a href="/users/3">Lihat User 3</a></p>
    `);
});

app.use((req,res)=>{
    res.status(404).send('Halaman tidak ditemukan!');
});

app.listen(port, () => {
    console.log(`Aplikasi berjalan di http://localhost:${port}`);
});
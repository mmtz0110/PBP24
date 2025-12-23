const express = require('express');
const app =  express();
const port = 3500;

app.get('/', (req,res)=>{
    res.send('Selamat datang di aplikasi Express!');
});

app.get('/about', (req,res) => {
    res.send('Tentang kami');
});

app.get('/contact', (req, res) => {
    res.send('Halaman kontak kami');
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Menampilkan data user dengan ID: ${userId}`);
});

app.get('/products', (req,res)=>{
    res.send('Daftar produk');
});

app.get('/products/:id', (req,res)=>{
    const productId = req.params.id;
    res.send(`Detail produk dengan ID: ${productId}`);
})

app.use((req,res)=>{
    res.status(404).send('Halaman tidak ditemukan!');
});

app.listen(port, () => {
    console.log(`Aplikasi berjalan di http://localhost:${port}`);
});
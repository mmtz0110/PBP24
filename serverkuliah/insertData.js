const insertData = {
  nim: '1102030',
  nama: 'Naura',
  gender: 'P',
  prodi: 'TI',
  alamat: 'Bandung'
};

fetch(`http://localhost:3000/mahasiswa/`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(insertData)
})
  .then(response => response.json())
  .then(data => console.log('Tambah berhasil:', data))
  .catch(error => console.error('Terjadi kesalahan:', error));

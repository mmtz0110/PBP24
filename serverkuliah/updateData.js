const mahasiswaNim = '1102030'; // NIM yang akan diedit

const updatedData = {
  nama: 'Nasha Samudra',
  gender: 'L',
  prodi: 'SI',
  alamat: 'Cibeber'
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(updatedData)
})
  .then(response => response.json())
  .then(data => console.log('Update berhasil:', data))
  .catch(error => console.error('Terjadi kesalahan:', error));

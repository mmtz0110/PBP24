// Fungsi
function cetakNama(nama){
    return `Hai, nama saya ${nama}`;
}

// Variabel
const Usia = 18;

const dataSiswa = {
    NIM : "2024001",
    infoSiswa(){
        return "NIM: " + this.NIM;
    }
};

// Ekspor Semua Sekaligus
module.exports = {cetakNama, Usia, dataSiswa};
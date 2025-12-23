//objek literal
let mobil = {
    merk: "Miata",
    tahun: "2077",
    warna: "Putih",
    posisi: "berjalan",
    kondisi: function(){
        console.log(`${this.merk} tahun ${this.tahun} sedang ${this.posisi}.`);
    }
};

//mengakses properti
console.log(mobil.merk);
console.log(mobil.warna);

//memanggil method
mobil.kondisi();

mobil.merk = "Honda";
mobil.tahun = "2025";
mobil.posisi = "parkir";
mobil.kondisi();
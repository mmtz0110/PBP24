let inputMobil = {
    merk: "Suzuki",
    tahun: 2022,
    warna: "Biru"
};

if(inputMobil.merk && inputMobil.tahun){
    console.log("Data siap dikirim ke database: ", inputMobil);
}else{
    console.log("Data tidak lengkap!");
}

inputMobil.merk = "Wuling";
inputMobil.tahun = 2077;
inputMobil.warna = "Hytam";
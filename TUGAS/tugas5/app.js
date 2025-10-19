const tambah = require('./modules/tambah');
const kurang = require('./modules/kurang');
const kali = require('./modules/kali');
const bagi = require('./modules/bagi');

const a = 12;
const b = 4;

console.log(`Hasil Tambah (${a} + ${b}) = ${tambah(a, b)}`);
console.log(`Hasil Kurang (${a} - ${b}) = ${kurang(a, b)}`);
console.log(`Hasil Kali (${a} × ${b}) = ${kali(a, b)}`);
console.log(`Hasil Bagi (${a} ÷ ${b}) = ${bagi(a, b)}`);

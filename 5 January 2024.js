/*Jika kita belanja disupermarket, nilai total belanja kita seringkali bukan kelipatan pecahan rupiah yang berlaku.Misalnya, nilai total belanja adalah Rp. 19.212, -.Walaupun pecahan rupian terkecil Rp.50, - akan tetapi cukup susah untuk kembaliannya.solusinya dilakukan pembultan dengan ketentuan:
Jika >= Rp.50 akan dibulatkan ke Rp.100, dan jika < Rp. 50 maka akan di abaikan.Contohnya:
Rp.19.212 dibulatkan menjadi Rp. 19.200
Rp.19.782 dibulatkan menjadi Rp. 19.800

input: Total belanja, uang yang dibayarkan pembeli
output: Uang kemblian
Tambahan nilai: Buat program menggunakan perulangan*/

// Contoh penggunaan dengan beberapa total belanja
const pecahanRupiahTerkecil = 50;

// Total Belanja 1
let totalBelanja1 = 19212;
let uangDibayarkan1 = 20000;

// Pembulatan total belanja
let totalBelanjaBulat1 = Math.ceil(totalBelanja1 / pecahanRupiahTerkecil) * pecahanRupiahTerkecil;

// Hitung uang kembalian
let kembalian1 = uangDibayarkan1 - totalBelanjaBulat1;

// Pembulatan uang kembalian
if (kembalian1 >= pecahanRupiahTerkecil / 2) {
  kembalian1 = Math.ceil(kembalian1 / pecahanRupiahTerkecil) * pecahanRupiahTerkecil;
} else {
  kembalian1 = 0;
}

console.log('Total Belanja 1: Rp.', totalBelanja1);
console.log('Uang Dibayarkan 1: Rp.', uangDibayarkan1);
console.log('Uang Kembalian 1: Rp.', kembalian1);

// Total Belanja 2
let totalBelanja2 = 19782;
let uangDibayarkan2 = 20000;

// Pembulatan total belanja
let totalBelanjaBulat2 = Math.ceil(totalBelanja2 / pecahanRupiahTerkecil) * pecahanRupiahTerkecil;

// Hitung uang kembalian
let kembalian2 = uangDibayarkan2 - totalBelanjaBulat2;

// Pembulatan uang kembalian
if (kembalian2 >= pecahanRupiahTerkecil / 2) {
  kembalian2 = Math.ceil(kembalian2 / pecahanRupiahTerkecil) * pecahanRupiahTerkecil;
} else {
  kembalian2 = 0;
}

console.log('\nTotal Belanja 2: Rp.', totalBelanja2);
console.log('Uang Dibayarkan 2: Rp.', uangDibayarkan2);
console.log('Uang Kembalian 2: Rp.', kembalian2);

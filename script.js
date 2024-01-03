// // repo baru
// // belajar js
// // 1. angka1-angka50 dan angka50-angka1 dengan for dan while
// // 2. cetak tahun 2000 - 2023  dengan do while

// //1
// for (let i = 1; i <= 50; i++) {
//   console.log("Angka ke " + i);
// }

// let a = 50;
// while (a >= 1) {
//   console.log("Angka ke " + a);
//   a--;
// }

// //2
// let x = 2000;
// do {
//   console.log("Tahun " + x);
//   x++;
// } while (x <= 2023);

// let y = 2023;
// do {
//   console.log("Tahun " + x);
//   x--;
// } while (x >= 2000);

// //for angka 1-50
// for (let angka = 1; angka <= 50; angka++) {
//   console.log(angka);
// }

// //while angka 1-50
// let angka = 1;

// while (angka <= 50) {
//   console.log(angka);
//   angka++;
// }

// //do-while angka 1-50
// do {
//   console.log(angka);
//   angka++;
// } while (angka <= 50);

// // inisialisasi aksi iterasi

// //for GANJIL GENAP
// for (let angka = 1; angka <= 50; angka++) {
//   if (angka % 2 === 0) {
//     document.write("<p>" + "No. " + angka + " Adalah Bilangan Genap </p>");
//   } else {
//     document.write("<p>" + "No. " + angka + " Adalah Bilangan Ganjil </p>");
//   }
// }

// //while GANJIL GENAP
// let angka = 0;

// while (angka <= 50) {
//     if (angka % 2 === 0) {
//         console.log(angka + " Adalah Bilangan Genap");
//     } else {
//         console.log(angka + " Adalah Bilangan Ganjil");
//     }
//     angka++;
// }

// //do-while GANJIL GENAP
// let angka = 1;

// do {
//   if (angka % 2 === 0) {
//     console.log("No. " + angka + " Adalah Bilangan Genap");
//   } else {
//     console.log("No. " + angka + " Adalah Bilangan Ganjil");
//   }
//   angka++;
// } while (angka <= 50);

// //for 1-100 GANJIL
// for (let angka = 1; angka <= 100; angka++) {
//   if (angka % 2 === 0) {
//     document.write("<h2>" + "No. " + angka + " Adalah Bilangan Genap </h2>");
//   }
// }

// // while 1-100 GENAP
// let angka = 1;

// while (angka <= 100) {
//   if (angka % 2 === 1) {
//     console.log(angka + " Adalah Bilangan Ganjil");
//   }
//   angka++;
// }

// //factorial 5

// let angka = 5;
// let faktorial = 6;

// for (let i = 1; i <= angka; i++) {
//   faktorial *= i;
// }

// console.log("Faktorial dari " + angka + " adalah: " + faktorial);

// //penjumlahan 1,2,3,4,5

// let angka = 5;
// let faktorial = 0;

// for (let i = 1; i <= angka; i++) {
//   faktorial += i;
// }

// console.log("Penjumlahan dari 1 + 2 + 3 + 4 + " + angka + " adalah: " + faktorial);

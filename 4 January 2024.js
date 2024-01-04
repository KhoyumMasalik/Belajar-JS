/*===== 4 January 2024 =====*/

/*=== Factorial Menggunakan For === */

// let angka = 5;
// let faktorial = 1;

// if (angka < 0) {
//   console.log("Input Harus Non-Negatif");
// } else {
//   for (let i = 2; i <= angka; i++) {
//     faktorial *= i;
//   }
//   console.log(`Faktorial dari ${angka} adalah : ${faktorial}`);
// }

/*=== Factorial Menggunakan While === */

// let angka = 5;
// let faktorial = 1;

// if (angka < 0) {
//   console.log("Input Harus Non-Negatif");
// } else {
//   let i = 1;
//   while (i <= angka) {
//     faktorial *= i;
//     i++;
//   }
//   console.log(`Faktorial dari ${angka} adalah : ${faktorial}`);
// }

/*=== Factorial Menggunakan Do-While === */

// let angka = 5;
// let faktorial = 1;

// if (angka < 0) {
//   console.log("Input Harus Non-Negatif");
// } else {
//   let i = 1;
//   do {
//     faktorial *= i;
//     i++;
//   } while (i <= angka);
//   console.log(`Faktorial dari ${angka} adalah : ${faktorial}`);
// }

/*=== Mencari Tahun Kabisat === */

/*== 1 == */

// let tahun = "";
// for (let tahun = 1600; tahun <= 2024; tahun++) {
//   if (tahun % 4 === 0) {
//     console.log(tahun + " adalah tahun kabisat.");
//   } else if (tahun % 100 !== 0) {
//     console.log(tahun + " bukan tahun kabisat.");
//   } else if (tahun % 400 === 0) {
//     console.log(tahun + " adalah tahun kabisat.");
//   } else {
//     console.log(tahun + " bukan tahun kabisat.");
//   }
// }

/*== 2 == */

// let tahun = "";
// for (let tahun = 1600; tahun <= 2024; tahun++) {
//   if (tahun % 4 === 0 && tahun !== 1800 && tahun != 1700 && tahun != 1900) {
//     console.log(tahun + " adalah tahun kabisat.");
//   } else if (tahun % 100 !== 0) {
//     console.log(tahun + " bukan tahun kabisat.");
//   } else if (tahun % 400 === 0) {
//     console.log(tahun + " adalah tahun kabisat.");
//   } else {
//     console.log(tahun + " bukan tahun kabisat.");
//   }
// }

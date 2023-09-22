//? Sayi tekmi cift mi kontrolunu yapan kod blogu
let sayi = 3
console.log((sayi % 2 === 0) ? "cift sayidir" : " tek sayidir");

//? Mevsim bulma?

let monthNumber = 9

const mevsim = (monthNumber < 3) ? "Winter" : (monthNumber < 6) ? "Spring" : (monthNumber < 9) ? "Summer" : "Fall"

console.log(mevsim);


//? Oy ver / verme

const yas = 119

const oyVerme = (yas < 0 || yas > 120) ? "gecersiz bir yas degeri girdiniz" : (yas >= 18) ? "Oy verebilir" : "Oy veremez"

console.log(oyVerme);

//? Pozitif / Negatif

const num = 0

const cesit = (num < 0) ? "negatif" : (num === 0) ? "0 Noturdur" : "Pozitif"
console.log(cesit);


//? 1 den 10 a kadar olan sayilari yazdiran blok

for (let i = 1; i < 11; i++) {
    console.log(i);
}

//? 10 den 1 a kadar olan sayilari yazdiran blok

for (let i = 10; i > 0; i--) {
    console.log(i);
}

//? 1 den 100 e kadar olan sayilarin toplamini bulan yazdiran blok

toplam = 0

for (let i = 0; i < 101; i++) {
    toplam += i
}
console.log(toplam);

//? 1 den 100 e kadar olan CIFT sayilarin toplamini bulan yazdiran blok

sonuc = 0

for (let i = 0; i < 101; i++) {
    i % 2 === 0 ? sonuc += i : sonuc += 0
}
console.log(sonuc);

//? 1 den 100 e kadar olan TEK sayilarin toplamini bulan yazdiran blok

sonuc1 = 0

for (let i = 0; i <= 100; i++) {
    i % 2 !== 0 ? sonuc1 += i : sonuc1 += 0;
}
console.log(sonuc1);

//? Kullanicidan alinan sayinin faktoriyelini bulan program

const num1 = 4
let fakt = 1

for (let i = 1; i <= num1; i++) {
    fakt *= i
}
console.log(fakt);


//? ASAL SAYI algoritmasi

// function asalMi(sayi2) {
//     return sayi2 > 1 && Array.from({ length: sayi2 - 1 }, (_, i) => i + 2).every(n => sayi2 % n !== 0);
// }

// const num2 = 17; // İlgilenilen sayıyı burada değiştirin

// const result = isPrime(num2) ? `${num2} bir asal sayıdır.` : `${num2} bir asal sayı değildir.`;

// console.log(result);

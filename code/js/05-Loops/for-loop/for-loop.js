//! ********* FOR - LOOP ************
// Karar durumları gibi döngülerde günlük hayatta çok karşımıza çıkan yapılardır.
//Tekrarlı olan işlerde farklı türlerde döngülerden birini kullanabiliriz
//? FOR -LOOP
//? for (initialization,condition,increment/decrement){
//?     code block to be executed
//? }


//todo 1 den 10 a kadar olan sayilari yazdiran blok
console.log("// 1 den 10 a kadar olan sayilari yazin");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//todo 10 den 1 a kadar olan sayilari yazdiran blok
console.log("// 1 den 10 a kadar olan sayilari yazin");

for (let i = 10; i > 0; i--) {
    console.log(i);
}


//todo 1 den 100 e kadar olan sayilarin toplamini bulan yazdiran blok
console.log("// 1 den 100 e kadar olan sayilarin toplami yazin");

let sum = 0;
for (let i = 1; i < 100; i++) {
    sum += i
}
console.log(`1 den 100 e kadar olan sayiarin toplami: ${sum}`);

//todo 1 den 100 e kadar olan CIFT sayilarin toplamini bulan yazdiran blok
//todo 1 Yol
console.log("// 1 den 100 e kadar olan CIFT sayilarin toplami yazin");

let result = 0;
for (i = 2; i < 100; i += 2) {
    result += i
}
console.log(`toplam = ${result}`)

//todo 2. Yol
let toplam = 0
for (let i = 0; i < 100; i++) {
    i % 2 === 0 ? (toplam += i) : null
}
console.log(`toplam = ${toplam}`);

//! Eger tek satirlik bir kod calistiracaksak {} (suslu parantezler) kullanilmayabilir.
let sum1 = 0;
for (let i = 2; i < 100; i += 2) sum1 += i;
console.log(sum1);


//todo 1 den 100 e kadar olan TEK sayilarin toplamini bulan yazdiran blok
console.log("// 1 den 100 e kadar olan TEK sayilarin toplami yazin");
let res = 0;
for (i = 1; i < 100; i += 2) {
    res += i
}
console.log(`toplam = ${res}`)


/* -------------------------------------------------------------------------- */
//todoKullanicidan alinan sayinin faktoriyelini bulan program
console.log("***** Kullanicidan alinan sayinin faktoriyelini bulan program *****");
//1*2*3*4*5...=

//todo let sayi = +prompt("sayi gir");
let sayi = 5
let fakt = 1

for (i = 1; i <= sayi; i++) {
    fakt *= i
}
console.log(`${sayi}'nin faktoriyeli = ${fakt}`)


//todo ASAL SAYI algoritmasi
console.log("// 1 den 100 e kadar olan ASAL sayilari yazdiran blok");

for (let i = 2; i < 100; i++) {
    let isAsal = true;
    for (let j = 2; j < i; j++) {
        if ((i % j) === 0) {
            isAsal = false
        }
    }
    if (isAsal) {
        console.log(`${i} asal bir sayidir`);
    }
}

//! -------------------------------------------------------------------------- */
//todo Kullanicidan alinan sayinin asal olup olmadigini kontrol eden code

// let num = +prompt("Bir sayi giriniz...")
/*
if (num <= 1) {
    console.log(`${num} bir asal sayı değildir.`);
  } else {
    let asal = true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        asal = false;
        break;
      }
    }
    
    if (asal) {
      console.log(`${num} bir asal sayıdır.`);
    } else {
      console.log(`${num} bir asal sayı değildir.`);
    }
  }
*/


console.log("****************************************************************");
//! -------------------------------------------------------------------------- */
//todo Amstrong Number 
//todo Bir sayının sayı değerlerin küplerinin toplamı kendine eşitse o sayı amstrong number olarak tanımlanır.
//todo 153 = 1**3 + 5**3 + 3**3 
//todo a- Kullanıcıdan girilen değer amstron number mı değil mi kontrol eden program

let amsNumber=Number(prompt("Bir sayı giriniz:"))
let birler=amsNumber %10
let onlar =Math.trunc(amsNumber/10) %10
let yuzler=Math.trunc(amsNumber/100)

let result1=birler**3 + onlar**3+yuzler**3

result1===amsNumber ? console.log(`${amsNumber} sayısı bir Amstrong Sayıdır`) : console.log(`${amsNumber} sayısı bir Amstrong Sayı değildir`)


//todo 100den 1000e kadar olan sayılardaki amstrong numberları sıralayınız



/*
const sayi1 = 155

// Sayının basamak sayısını hesaplayın
let basamakSayisi = 0;
let geciciSayi = sayi1;
while (geciciSayi > 0) {
  basamakSayisi++;
  geciciSayi = Math.floor(geciciSayi / 10);
}

// Armstrong sayısı kontrolü
let toplam1 = 0;
geciciSayi = sayi1;
while (geciciSayi > 0) {
  let basamak = geciciSayi % 10;
  toplam1 += Math.pow(basamak, basamakSayisi);
  geciciSayi = Math.floor(geciciSayi / 10);
}

if (toplam1 === sayi1) {
  console.log(`${sayi1} bir Armstrong sayısıdır.`);
} else {
  console.log(`${sayi1} bir Armstrong sayısı değildir.`);
}
*/






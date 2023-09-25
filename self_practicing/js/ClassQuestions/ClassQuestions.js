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

// const asalMi = (a) => {
//     (a > 1 && a % 1 === 0 && a % a === 0) ? `${a} ASALDIR...` : `${a} Asal DEGILDIR...`
// }
// console.log(asalMi(3));


const aasalMi = (a) =>
    (a > 1 &&
        Number.isInteger(a) &&
        ![...Array(Math.floor(Math.sqrt(a)) + 1).keys()].slice(2).some(i => a % i === 0)) ?
        `${a} ASALDIR...` : `${a} Asal DEGILDIR...`;

console.log(aasalMi(3));


//? 1den 10 a kadar olan sayıları yazdıran program
for (let i = 1; i < 11; i++) {
    console.log(i);
}

//? Kullanici 100 ve 200 arasinda bir deger girene kadar islemi devam ettiren program

// let num2;

// do {
// num2 = +prompt("Lutfen 100 ile 200 arasinda bir sayi giriniz")


// } while (num2 < 100 || num2 > 200);

// console.log(num2);

//? Kullanıcıdan vize ve final notlarını isteyen ve vizenin %40 ını finalin %60 ını alarak notunu hesaplayan her işlem bittiğinde devam etmek isteyip istemediğini soran program

// let devamEt = true;

// do {
//     const vize = +prompt("Vize notunuzu girin:");
//     const final = +prompt("Final notunuzu girin:");

//     const not = (vize * 0.4) + (final * 0.6);

//     console.log(not);

//     devamEt = confirm("Başka bir not hesaplamak istiyor musunuz?");
// } while (devamEt);

//? Girilen şifreye yada pin kodu doğru mu kontrolü

let pin = "1q2w3e4R";
let input;

// while (pin !== input) {
//     input = prompt("Pin no giriniz")
//    if (input === pin) {
//         console.log("Tebrikler");
//     } else {
//         console.log("Lutfen tekrar deneyiniz");
//     }
// }


//? 18 yaşından büyüklerin oy kullanabileceğini 18 yaşından küçüklerin oy kullanamayacağını ternary yapı ile konsola yazdıran kodu yazınız.

let age = 17

let kontrol = (age >= 18) ? console.log("oy kullanabilir") : console.log("oy kullanamaz");

//? (Bonus) girilen yilin yuzyilini veren program 1788 > 18.yuzyil

let yil = 2023;
console.log(`${yil} => ${Math.ceil(yil / 100)}.Yuzyil`);


//? Artık yıl sorusu

let yil1 = 1997

const artikYil = (yil1 % 4 === 0 || yil % 100 === 0 && yil % 400 === 0) ?
    console.log(`${yil1} artik yildir`) :
    console.log(`${yil1} artik yil DEGILDIR`);


//? 1000 ile 2000 arasindaki 13 e bolumunden kalani 3 olan sayilari konsola yazdirin.


let sayac = 0;

for (let i = 1000; i <= 2000; i++) {

    if (i % 13 === 3) {
        console.log(i);
        sayac++;
    }
}
console.log("Sayac Total: " + sayac);


//? Kullanıcıdan alınan 5 adet sayının ortalamasını konsola yazdırınız ?


let sum = 0; // Toplamı saklamak için bir değişken
const numbers = []; // Kullanıcıdan alınan sayıları saklamak için bir dizi

function getAverage() {
    let input;
    do {
        input = parseFloat(prompt("Lütfen bir sayı girin veya çıkmak için 0'a basın:"));
        if (!isNaN(input)) {
            if (input !== 0) {
                numbers.push(input);
            }
        } else {
            console.log("Geçersiz bir sayı girdiniz. Lütfen bir sayı girin.");
        }
    } while (input !== 0);

    // Toplamı ve ortalamayı hesapla
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    const average = (sum / numbers.length).toFixed();
    console.log("Girdiğiniz sayıların ortalaması: " + average);
}

getAverage(); // Ortalamayı hesaplamak için fonksiyonu çağır







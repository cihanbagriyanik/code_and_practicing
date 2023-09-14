/* -------------------------------------------------------------------------- */
//!                               ARROW FUNCTIONS                             */
/* -------------------------------------------------------------------------- */
//* REVIEW


//* function decleration
function selamla(ad) {
    console.log(`Selam ${ad}`);
}
selamla("Semih")


//* -------------------------------------------------------------------------- */
//* return keyword
//* -------------------------------------------------------------------------- */
function Selamlar(ad) {
    return `Selam ${ad}`
}
console.log(Selamlar("Semih"));


//* -------------------------------------------------------------------------- */
//* expression function
//* -------------------------------------------------------------------------- */
const sayHello = function (ad) {
    return `Merhaba ${ad}`
}
console.log(sayHello("Sema"));



//* -------------------------------------------------------------------------- */
//!                              ARROW FUNCTION                                */
//* -------------------------------------------------------------------------- */

const merhaba = (ad) => {
    return `Merhabalar ${ad}`
}
console.log(merhaba("DE07"));

//! Tek satirlik bir kodsa {} ve return gerekmez...
const sum = (n1, n2) => console.log(n1 + n2);
sum(67, 78)

//! Tek degisken var ise parantez bile gerkmez ama genelde parantez ile kullanmayi tercih edilir...
//* Verilen sayi tek mi cift mmi?
//* number
const OddEven = (number) => {
    if (number % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}
console.log(OddEven(42));
//******************* */
const isOddEven = (number) => number % 2 === 0 ? "Even" : "Odd"
console.log(isOddEven(67));


//* -------------------------------------------------------------------------- */
//? Silindir hacmini bulduran program
//* hacim => pi * r kare * h => (V = π * r2 * h)

const r = 2;
const h = 3;

const hacimHesapla = (r, h) => {
    const pi = Math.PI;
    const hacim = pi * Math.pow(r, 2) * h;
    return hacim;
}
const silindirHacim = hacimHesapla(r, h).toFixed(2);

console.log(`Silindirin Hacmi: ${silindirHacim}`);


//* -------------------------------------------------------------------------- */
//* Cok fazla sayida gonderilen degerler icin tek tek degisken yazmak yerine function declaration ve exp function da arguments kullanilir. Ancak arrow function da arguments kelimesi tanimli degildir.

const arg = function () {
    console.log(arguments);
}
arg(45, 78, 42, 23, 56)

//! Arrow function da rest operatoru ...degiskeniydi
const degerler = (...number) => console.log(number[5]);
degerler(23, 13, 45, 64, 78, 21)

const toplam = (...sayilar) => {


    for (let sayi of sayilar) {
        console.log(sayi);
    }

    for (let i = 0; i < sayilar.length; i++) {
        console.log(sayilar[i]);
    }
    return
}
toplam(45, 67, 9, 43, 21)


//? Verilen değerler arasında max değeri bulan kod bloğunu arrow function ile yazınız
const enBuyuk = (...numbers) => Math.max(...numbers)
console.log(enBuyuk(34, 12, 455, 67, 854));


//* -------------------------------------------------------------------------- */
//* rest operatör geri kalanlar anlamındadır bu nedenle  başta ve arada kullanılmaz sona yazılır.
//! "a rest paremeter must be last parameter" hatası verir
const numFind = (sayi4, sayi5, ...kalanSayilar) => {
    console.log(sayi4);
    console.log(sayi5);
    console.log(kalanSayilar);

}
numFind(34, 67, 85, 32, 1,)


//? Bir ürün ve fiyat giriliyor. %18 vergi ekleyip döndüren program
//? Bulaşık Makinası 8.500    
//* Vergi %18 = 1.530 TL
//* Bu ürünün KDV dahil fiyatı: 10.030 TL 

const urun = "Bulaşık Makinesi";
const fiyat = 8500;

const toplamRakamHesapla = (urun, fiyat) => {

    const vergiOrani = 0.18;

    const vergi = fiyat * vergiOrani;

    const toplamUcret = fiyat + vergi;

    return `Ürün: ${urun}\nKDV Dahil Fiyat: ${toplamUcret.toFixed(2)} TL\nKDV Miktarı: ${vergi.toFixed(2)} TL`;
}

const sonuc = toplamRakamHesapla(urun, fiyat);
console.log(sonuc);

//* -------------------------------------------------------------------------- */
const vergiBul = (urunFiyati) => `${urunFiyati}  aldığınız urunun KDV li satış fiyatı =  ${urunFiyati * 1.18}`

console.log(vergiBul(8500));


//* -------------------------------------------------------------------------- */
//? Kelvin yada Fahrenheit olarak girilen sıcaklık değerini celcius dönüştüren program. Virgülden sonra iki basamaklı bir gösterimle ile gösteriniz. 
//* °C = (°F – 32) / 1.8
//* °C = °K – 273.15

let temp = +prompt("Lutfen donusturmek sitediginiz sicakligi giriniz")
let unit = prompt("Lutfen donusturmek istediginiz sicaklik birimini giriniz").toUpperCase()

const convertToCelsius = (temp, unit) => {
    if (unit === 'K' || unit === 'KELVIN') {
        return (temp - 273.15).toFixed(2);
    }
    else if (unit === 'F' || unit === 'FAHRENHEIT') {
        return ((temp - 32) / 1.8).toFixed(2);
    }
    else {
        return 'Geçersiz birim';
    }
};
console.log(convertToCelsius(temp, unit));



//* -------------------------------------------------------------------------- */
//todo ÖRNEK:
//todo küçük çikolata (her biri 2 gram) 
//todo büyük çikolata (her biri 5 gram) 
//? Size kaç adet küçük çikolata olduğu, kaç adet büyük çikolata olduğu ve hedef ağırlık verilecek.Bu hedef ağırlığa ulşamka için en az kaç küçük çikolata gerekir.
//? Verilen küçük çikolata sayısı yetersiz kalıyorsa "Bu işlem imkansız mesjı versin"
//* küçük çikolata adedi=10
//* büyük çikolata adedi=5
//* istenen ağırlık=27









//* -------------------------------------------------------------------------- */
//? Bir öğrencinin adını fonksiyona gönderip eğer hafta için bir gün ise 
//? Sema bugün Salı, okul var. 7.00 da kalkmalısın => yazdıran fonksiyon



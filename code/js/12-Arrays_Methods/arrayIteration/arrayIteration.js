//* ======================================================
//*                   FOREACH METHOD
//! NOT: forEach metodu void bir metottur. (Yani herhangi bir değer döndürmez.log(forEach..)=undefined) terminal işlemdir, diziyi fonksiyon içinde yazdırır ve tüketir bitirir.
//*======================================================
//*----------ORNEK-----------

const prices1 = [100, 250, 50, 90];

prices1.forEach((a) => console.log(a))

let toplam = 0

const terminal = prices1.forEach((a) => console.log(toplam += a))

console.log(terminal); // undefined

//******************** Ornek ********************/

//* p => price dizisinin her bir elemani
//* i => index
//* prices => prices dizisidir.

const prices = [100, 250, 50, 90]

let toplam1 = 0

prices.forEach((p, i, price) => {

    toplam1 += p

    console.log(` ${i + 1}. toplam ${toplam1}`);

    price[i] = prices[i] * 2
    //* Bu sekilde diziyi kalici degistirmis olduk

})
console.log(prices);


//* ======================================================
//*                       MAP METHOD
//!map yapılan değişikliği bir diziye atıp, bunu döndürebilir,  foreach gibi tüketmez.
//* ======================================================

//*-------------- ÖRNEK -------------------
//* names dizisinin içindeki her ismi büyük harf olarak
//* yeni bir diziye saklayalım.

const names = [
    "kubilay",
    "irfan",
    "fatih",
    "özlem",
    "nihal",
    "yunus",
    "emirhan",
    "halit",
    "esra",
    "hüseyin",
];

const yeniIsim = names.map((x) => x.toUpperCase())

console.log(yeniIsim); //* degisken atayip yeni diziye atarsak kalici kalir 
console.log(names); //* hala kucuk ana dizi degismez


//*-------------- ÖRNEK -------------------
//* fiyatlar dizisindeki ürün fiyatlarinın 250 TL altında olanlarına
//* %50 zam, diğerlerine de %20 zam yapılmak isteniyor. Ayrıca
//* zamli fiyatlar kalıcı olarak diziye işlenmek isteniyor fiyatlar[1]=eski fiyat*1.5 gibi
//* 1. ürünün zamlı fiyati 150 TL gibi
//* p => prices dizisinin her bir elemanı
//* i => index
//* array=> fiyatlar dizisidir.

const fiyatlar = [100, 300, 50, 90];

fiyatlar.map((p, i, array) => {

    if (p < 250) {
        array[i] = array[i] * 1.5;
    } else {
        array[i] = array[i] * 1.2;
    }

})
console.log(fiyatlar);

//*-------------- ÖRNEK -------------------
//? tlPrices dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizilere kaydediniz
//* toFixed(sayi) methodu virgullu sayilarda kullanilir aldigi sayi parametresi kadar virgulden sonra eleman birakir. toFixed()= kullandığınız sayıları string e çevirir, tekrar number yapmak istersek, önlerine Number yazarız (ya da + koyarız)

const tlPrices = [100, 150, 200, 80, 50];
const dolar = 27.5;
const euro = 29.5;

const dolarPrices = tlPrices.map((para) => +((para / dolar).toFixed(2)))
console.log(dolarPrices);

const euroPrices = tlPrices.map((money) => Number((money / euro).toFixed(2)))
console.log(euroPrices);



//* ======================================================
//*                       FILTER METHOD
//* ======================================================
//* prices array"inde fiyatı 200 TL den az olanlari ayri
//* bir diziye saklayalim.

const prices2 = [200, 500, 100, 180];

const yeni = prices2.filter((fiyat) => fiyat < 200)
console.log(yeni);


//???????? ornek1
const text = "Clarusway Online Career IT Training School Thanks for time";

// ! yukarıdaki string i array e çevirip bütün kelimelerin harflerini büyüttük
text.split(" ").map((a) => a.toUpperCase()).forEach((s) => console.log(s))

//!yukarıda array e döndürdüğümüz string cümledeki, T ile başlayan kelimelerin ilk harfini küçült, gerisini normal yazdır

text.split(" ").filter((item) => item.startsWith("T")).map((a) => a[0].toLowerCase() + a.slice(1)).forEach((a) => console.log(a))


//? ornek2. n harfiyle biten isimleri tersten yazdırıp yeni bir diziye atın
// const names = [
//   "kubilay",
//   "irfan",
//   "fatih",
//   "özlem",
//   "nihal",
//   "yunus",
//   "emirhan",
//   "halit",
//   "esra",
//   "hüseyin",
// ];

const newName = names.filter((a) => a.endsWith("n")).map((a) => a.split("").reverse().join(""))

console.log(newName);


//* ======================================================
//*                       PIPELINE
//* ======================================================

//!slide daki soru, pipeline olmazsa böyle uzun uzun if le çözeriz
//* Fiyatı 100 TL den fazla olanlara %10 zam, 100 tl ve 100 TL den az olanlara ise %15 zam yapılmak isteniyor. Ayrıca, zamlı olan yeni değerleri örnekteki gibi diziye saklamak istiyoruz.

// const fiyatlar = [100, 250, 50, 90];

// fiyatlar.map((p, i, array) => {
//   if (p > 100) {
//     array[i] = array[i] * 1.1;

//   } else array[i] = array[i] * 1.15;
// });

// console.log(fiyatlar);

const tlFiyatlar = [100, 150, 100, 50, 80];

//! 1.YOL
const degerler = tlFiyatlar.map((d) => {
    if (d > 100) {
        d = d * 1.1;
    } else {
        d = d * 1.15;
    }
    return d;
});
console.log(degerler);

//! 2.YOL
const bir = tlFiyatlar.filter((a) => a > 100).map((c) => c * 1.1);
const iki = tlFiyatlar.filter((a) => a <= 100).map((a) => a * 1.15);

console.log(bir.concat(iki));



//* ===============================================================================
//*                      REDUCE (Tek bir eleman dondurur
//*                     reduce(accumulator, currentValue)
//* ===============================================================================

//* salaries dizisindeki maaşları toplayınız (reduce metodu kullanın)

const salaries = [3000, 5000, 4000, 6000, 7500];

console.log(salaries.reduce((toplam, eleman) => toplam + eleman, 0));

//! forEach metodu dizilerde kullanılabilir, reduce tek bir eleman döndürdüğü için, burada forEach kullanamayız

const carpim = salaries.reduce((a, b) => a * b, 1)
console.log(carpim);
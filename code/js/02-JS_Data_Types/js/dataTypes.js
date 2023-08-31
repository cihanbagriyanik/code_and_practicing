/* -------------------------------------------------------------------------- */
/*                                  REVIEW💡                                  */
/* -------------------------------------------------------------------------- */

// var - let - const 
// var ES6 dan önce olan bir yapıdır.
// var verimlilik açısından kullaılması önerilmeyen bir yapıdır.

// global alan
var x=40;
console.log(x);

{ 
    // local alan
    var y=30;
    console.log(x,y);
}

console.log(y);

/* -------------------------------------------------------------------------- */
let k=40;
console.log(k);

{ 
    // local alan
    let t=30;
    console.log(k,t);
}

// console.log(t);
/* -------------------------------------------------------------------------- */

const p=34;
console.log(p);


{
    console.log(p);
}

console.clear()



/* -------------------------------------------------------------------------- */
/*                          DATA TYPES - VERI TURLERI                         */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                          //! Primitive Data Types                          */
/* -------------------------------------------------------------------------- */
// Number - String - Boolean - Null - Undefined

const age = 35;
console.log(age);

// Veri turlerini kontrol etmek icin TypeOf komutunu kullaniriz.
console.log(typeof(age)); //number

let grade = 89.17;
console.log(typeof(grade)); //number


let big = 128736238941732401345234n;
console.log(typeof(big)); //bigint
console.log(big);

/* -------------------------------------------------------------------------- */
console.clear();
//MATH objesi : matematiksel islemler yapabilmek icin fonksiyonlar barindirir.
const pi = Math.PI;
console.log(pi); //3.141592653589793

// Dairenin cevresini bulduran kod blogu
// Dairnein cevre formulu = 2 * pi * r
let r = 6;
console.log(2*Math.PI*r); //37.69911184307752

let result = 2*Math.PI*r
console.log(result); //37.69911184307752

// Sonucu yuvarlyarak gostermek icin => round
console.log(Math.round(result)); //38

// Bir ust tamsayiya yuvarlamak icin  => ceil
let val = 37.3
console.log(Math.round(val)); //37
console.log(Math.ceil(val)) ; //38

// Bir alt tamsayiya yuvarlamak icin  => floor
let val1 = 89.6 
console.log(Math.floor(val)); //37
console.log(Math.floor(val1)); //89

/* -------------------------------------------------------------------------- */
// Math.trunc() ile sadece tamsayi kismini alabiliriz
console.log(Math.trunc(val));
console.log(Math.trunc(val1));
console.log(Math.trunc(result));
console.clear();

/* -------------------------------------------------------------------------- */
// sayi.toFixed(sayi) verilen ondalik sayidan ondalikli kismindan kac basamak yazilacagini
console.log(result);
console.log(result.toFixed(2));

/* -------------------------------------------------------------------------- */
// Math.max : Birden fazla verilen sayılar içinden en büyük sayıyı bulur
console.log(Math.max(3,6,1,8,-23,34,123));
// Math.min : Birden fazla verilen sayılar içinden en küçük sayıyı bulur
console.log(Math.min(4,2,56,2,1,-4));

/* -------------------------------------------------------------------------- */
// RANDOM metodu: rastgele sayı üretmek için kullanılır
// random ile 0-1 arasında bir değer üretir. 0.5, 0.8
// Bu metodlar birbirine eklenerek kullanılabilir
let RandomNumber=Math.random().toFixed(2)
console.log(RandomNumber);

// *10 ile  0-10 arasında bir değer
let rNumber = Math.random()*10;
console.log(Math.round(rNumber));

// *100 ile 0- 100 
let rrNumber = Math.random()*100;
console.log(Math.round(rrNumber));

console.log(Math.trunc(rrNumber));

/* -------------------------------------------------------------------------- */
// Pow : bir sayinin belirtilen ussunu verir
// pow(taban,ust)
console.log(Math.pow(5,3));
console.log(5**3);

/* -------------------------------------------------------------------------- */
// Math.sqrt : Bir saynin kare kokunu bulma
console.log(Math.sqrt(56));

console.clear();

/* -------------------------------------------------------------------------- */
/*                          STRING DATA TYPE - METIN                          */
/* -------------------------------------------------------------------------- */

// Kullanicidan alinan veriler her zaman string olarak gelir

// let yas = prompt("yasinizi giriniz")
// console.log(typeof(yas));

let text = "Javascript";
// Stringlerin her harfine ayri ayri bir dizi elemani olarak ulasilabilir.
// o elemanin 0 dan baslayarak index numarasini vererek ulsabilirz.
console.log(text[4]);
console.log(text[0]);
console.log(text[8]);

// Immutable => parca parca degistirme yapamazsin
text[8] = "Z" ;
console.log(text); //Javascript

/* -------------------------------------------------------------------------- */
//? Escape character ( Kaçış karakterleri) tırnak kullanmak için \'
// \t   tab - 8 karakter ileri atar
// \r	Satır başı (Carriage Return)
// \n	Bir alt satıra iner
// \v	Dikey Tab
// \f	Sayfa ilerleme
// \"	Çift tırnak
// \’	Tek tırnak
// \	Backslash

let text1 = 'Ben Javascript`in ozelliklerini ogreniyorum'
console.log(text1);

let sentece = "\tSeni iki sey anlatir.\nHicbir sey yokken gosterdigin sabir.\nHersey varken sergiledigin tavir."
console.log(sentece);

// String Birlestirme
// 1 - "+" isareti ile birlestirme
let text2 = "Bu guzel gunde javascript ogrenmek "
let text3 = "ne kadar guzel"
console.log(text2+text3);


let ad = "Cihan";
let soyad = "Bagriyanik";
let job = "Developer";
console.log("Persolenimiz " + ad + " " + soyad + " kurumumuzda" + " " + job + " olarak calismaktadir.");

//! Template Literals => string template => ES6

// backtick ` 


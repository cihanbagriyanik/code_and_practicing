/* -------------------------------------------------------------- */
/*          //!  ********** FUNCTIONS *********                   */
/* -------------------------------------------------------------- */

//? Bir fonksiyon belirli bir görevi(tek bir görev için tek fonksiyon olması daha iyidir) gerçekleştirmek için tasarlanmış,
//? yeniden kullanılabilir,
//? test etmesi kolaydır

//! Fonksiyon tanımlama yöntemleri
//* Function Declaration (Fonksiyon Bildirimi):
//* Function Expression (Fonksiyon İfadesi):
//* Arrow Function (Ok Fonksiyonları):
//* Function Constructor (Fonksiyon Oluşturucusu):
//* Immediately Invoked Function Expression (IIFE) (Hemen Çağrılan Fonksiyon İfadesi):

//! * ---------Function-Declaration---------------------------------- */ 
//* 1-Fonksiyonlar   function anahtar kelimesi ile tanımlanır
//* 2-Function kelimesini ardından fonksiyonun ismi verilir.
//* 3-Sonra da bir parantez açılıp kapatılır.
//? fonksiyonun çalışması için çağırmak gereklidir.Çağırılmadığında işleme alınmaz.Bu çağırma işlemine invoke yada call denir.

//* function isim(){
//*    yapilacaklar
//* }

console.log("*******FUNCTIONS*********");
//! Deger göndermeden bütün işlemleri fonksiyon  içinde yapıp bitirdiğimiz fonksiyon

function topla() {
    let x = 50;
    let y = 89;
    let toplam = x + y;
    console.log(toplam);
}
topla()  //! invoke,call

//!Hoisting: fonksiyonun çağrıldıktan sonra yazılması, JS hoisting destekleyen bir dildir.

//? 1- Geriye bir değer döndermek için return anahtar kelimesini kullanırız. 
//!   Geriye bir değer döndermezse yani return anahtar kelimesini unutursak undefined olur

function toplama() {
    let x = 60;
    let y = 90;
    let toplam = x + y
    return toplam
}

console.log(toplama());
let sonuc = toplama()
console.log(sonuc);

//* --------------------------------------------------------- */
//? Girilen sayı tek mi çift olduğunu ana programa döndüren fonksiyon

function checkEvenOdd() {
    let number = 44
    let result = number % 2 === 0 ? "even" : "odd";
    return result;
}
console.log(checkEvenOdd());

/* -------------------------------------------------------------------------- */
//!                   FONKSIYONLARDA PARAMETRE KULLANMA                       */
/* -------------------------------------------------------------------------- */
//* Fonksiyonu bir defa yazip defalarca kullanmak icin parametre alirlar
//* Eger bir fonksiyon parametre aliyorsa, o aldigi paremetre degeriyle  ve ozellikleriyle gelir

function sum(num1, num2) {
    return num1 + num2
}
console.log(sum(35, 65));
console.log(sum(30, 60));
console.log(sum(25, 55));
console.log(sum("Merhaba", " DE07"));

//* Parametlere(Argument) versayilan bir deger de atanabilir
function fullName(firstname, lastname = "") {
    return `${firstname} ${lastname} isimli kisi personelimizdir.`
}
//! Default deger "" oldugu icin soyad gonderilmediginde "" olarak goruntuleneck.
console.log(fullName("Saban", "Ferik"));


//? Kullanıcıdan adını doğum yılını alıp fonksiyonda yaşını  hesaplayan programı fonksiyonlar ile yapalım

// let isim = prompt("Lutfen isminizi giriniz")
let isim = "Cihan";
// let dogumYili = +prompt("Lutfen dogum yilinzi giriniz")
let dogumYili = 1988;

let aktuelYil = new Date().getFullYear();

function soru() {
    return `${isim} ${aktuelYil - dogumYili}, yasinda.`
}
console.log(soru());



//? Fonksiyona iki sayi gonderen bu sayilardan 1.sini  ikinci sayi kadar ussunu alan program.
//* 1.taban, 2.ussu

let num1 = 3;
let num2 = 3;

function calcul(num1, num2) {
    return num1 ** num2
}
console.log(calcul(num1, num2));


console.clear();
//* ------------------------------------------------------- */
//* arguments  anahtar kelimesi çok fazla değişken olduğunda o değişkenlerin tamamını ifade
function sumAll() {
    console.log(arguments);
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] % 2 === 0) {
            console.log(`${arguments[i]} bir çift sayıdır`);
        }
        else {
            console.log(`${arguments[i]} bir tek sayıdır`);
        }
    }
    console.log(arguments[5]);
    return sum
}

let result = sumAll(34, 67, 89, 45, 23, 12, 67, 89)
if (result > 500) {
    console.log(`Sonucunuz  500 den büyük daha fazla sayı eklemeyin`);
}
else {
    console.log(`Sonucunuz 500 den küçük olduğu için sayı eklemeye devam edin`);
}



//* ------------------------------------------------------- */
//* Anonymmous function => isimsiz fonksiyon

const greeting = function (name){
    console.log(`Merhaba ${name}`);
}
greeting("Nalan")
console.log(typeof(greeting));



//* ------------------------------------------------------- */
//! Self invoking function: Kendi kendini cagiran fonksiyon
//* Parantezler icinde yaziliyor ardindan bir parantez daha acilip kapanip deger gonderiyor.
//* Sonunda ; isaretini unutmayin

(function() {console.log("Merhaba");} ) (); //* Bos parantez fonksiyonun bir defa uygulanmasini saglar.

(function(n) {return console.log(`Self invoking ile sonuc: ${n*4}`);} ) (4);//Self invoking ile sonuc: 16



//* ------------------------------------------------------- */
//* ******
//* ******
//* ******

function drawRechtangle(col, row) {
    let star = ""
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
           star += "*" 
        }
        star += "\n" ;
    }
    return star;
}
console.log(drawRechtangle(6,3));

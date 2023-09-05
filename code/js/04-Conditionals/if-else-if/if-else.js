//! ******** CONDITIONALS ************ 

// Şart cümleleri farklı şartlar için karar verebilmek için kullanılır
// Normalda Javascript te bir kod bloğu yukarıdan aşağıya doğtu çalışır ama bu durumu değiştiren birkaç durum olur vardır bunlardan biri şart(karar) yapılarıdır.
// şart durumları çalışma akışını değiştirir : Şart doğruysa o doğru alana girer doğru değilse diğer alana girer.

// Şart durumlarını aşağıdaki durumlarda yapabiliriz

// if
// if else
// if - else if - else
// switch-case
// ternary operators

//? if bir şart durumundaki şartın doğru olup olmadığının kontrol edildiği satırdır
//? if li satırdaki şart durumu kontrol edildikten sonra doğru olma durumunda ne yapılması gerektiğibir blokta , şart durumu doğru değilse yapılacaklar diğer blokta (else bloğunda) belirtilir.

/*
if ( şart )
{ 
    şart durumu doğru ise bu blok çalıştırılır
}
else{
    şart durumu doğru değilse bu blok çalıştırılır.
}
*/

/*
let val = 10;

if (val > 10) {
    console.log("Sayi ondan buyuktur");
} else if (val === 10) {
    console.log("Sayi 10a esittir");
} else {
    console.log("Sayi ondan kucuktur");
}
*/



/* -------------------------------------------------------------------------- */
// Sayi tekmi cift mi kontrolunu yapan kod blogu

//kullanicidan bir sayi almak isin promt kullniyoruz (normalde formlardan gelir su an ogrenmek icin kullnailiyor)
// let number = prompt("Bir sayi giriniz:")

//% mod alma operatoru: bolumden kalani verir
/*
if (number %2 === 0) {
    console.log(`Girdiginiz ${number} sayisi cift sayidir`);
} else {
    console.log(`Girdiginiz ${number} sayisi tek sayidir`);
} 
*/



/* -------------------------------------------------------------------------- */
//Bir ogrencinin aldigi nota gore harf karsiligini yazan program
// 0-25 : F
// 25 - 44 : C
// 45 - 70 : B
// 71 - 100 : A

/*
let grade = 0 ;

if( grade >= 20 && grade < 45 ){
    console.log(`Notunuzun harf karsiligi: C`);
} else if( grade >= 45 && grade <= 70){
    console.log(`Notunuzun harf karsiligi: B`);
} else if( grade > 70 && grade <= 100){
    console.log(`Notunuzun harf karsiligi: A`);
} else if( grade < 0){
    console.log(` 1 - 100 arasinda bir deger giriniz`);
} else if (grade < 20) {
    console.log(`Bu notla hala harf mi soruyorsun`);
} else {
    console.log(`Gecersiz Not!!!`);
}
*/



/* -------------------------------------------------------------------------- */
// Hava durumuna gore oneriler
//Sunny : take a sunglasses
//rainy : take a umbrella
// cloudy : go for a walk
// Stay home and study JS

let weather = prompt("Enter the weather").toLowerCase();

if (weather === "sunny") {
    console.log(`take a sunglasses`);
} else if (weather === "rainy") {
    console.log(`take a umbrella`);
}else if (weather === "cloudy") {
    console.log(`go for a walk`);
} else {
    console.log(`Stay home and study JS`);
}




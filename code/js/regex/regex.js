// REGEX
// Regular Expression - Düzenli İfadeler

// JS de regex metodları
// match(): Bir metindeki ilk eşleşmeyi döndürür.
// replace(): Bir metindeki bir eşleşmeyi başka bir metinle değiştirir.
// search(): Bir metindeki bir eşleşmenin konumunu döndürür.
// split(): Bir metni bir eşleşmeye göre böler.
9
// Temel karakterler  A,Z,a,z,34234
// Escape Karakter -Kaçıs karaklter -> \n \t 
// Meta karakterler

// META KARAKTER
// .  => nokta yerine herhangi bir karakter gelebilir.
// /alfa.e/

// Merhaba bu gün alfabe ile alfaye öğrendik
// $  : bir yazı yada metnin sonu olduğunu belirtir. 

// [ ] : bu ikisi arasındaki bütün ifadelerde eşleştirmeye bakar
// - : belirtilen iki değer arasındakiler
// [A-Z] [a-z] [0-9]
// | : veya anlamındadır. 
// /com|edu/ 

// + : kendisinde ve kendinden sonrakilerde bu ifade aynı şekilde eşleşsin

// /7+/   7, 77 , 777 , 7777

// ^ : başta kullanılabilr yada [ içinde kullanılır, hariç anlamı katar]
// 1. /^   başta kullnıldığında metnin başında itibaren arama yap
// 2. [^\s]  :  boşluklar hariç

// { } : Belirtilen sayıda tekrar et, o sayıda olsun 

// A[0-9]{3}   => A456 A123 A109

// +[0-9]{2}-[0-9]{3}

// \s boşluk ifade 
/* -------------------------------------------------------------------------- */

// /g : global : Arama yapılacak metnin tammamında eşleşenleri bul
// /i : büyük küçük harfe bakmaksızın eşleşenleri göster
// /abc/

const cumle="Bu bir kelimedir.Bir"
console.log(cumle.match(/B/gi));
console.log(cumle.replace(/i/g,"ı"));

console.log(cumle.split(/bir/gi));

// Regex ile daha çok pattern oluşturulur.
const emailRegex = /^[a-zA-Z0-9._]+@[A-Za-z0-9]+[^\s][a-z]{3}$/
const email="merhaba@458.com"
console.log(emailRegex.test(email));

// let eposta=prompt("aaaa@aaa.com gibi bir adresiniz").toLowerCase()
// console.log(eposta);

const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

const dateRegex = /^(?!00)([0-9]{4})-(0[1-9]|1[0-2])-[0-12]{2}-[0-31]{2}$/
const dateDene=/ ^0\d\d{4}$/
const date="023-11-03"
const dateXy="1023"
console.log("yıl deneme:",dateRegex.test(date));
console.log(dateDene.test(dateXy));

const date1=/^[^0].*$[0-9]{2}/
const date2="2023"
console.log(date1.test(date2));

const phoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;  //545 696 3263

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const newDate=/^(?!00)([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
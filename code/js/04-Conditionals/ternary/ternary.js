//!  ************  TERNARY OPERATOR ************
// Şarta bağlı durumlar yazmak için başka ve daha kısa bir yöntem de ternary operator
// ES6 ile gelen bir özellik 

// condition ?                 true                :          false
// condition ?              expression1            :       expression2
// condition ? (sart dogru oldugunda yapilacaklar) : (sart dogru olmadiginda yapilacaklar)

const age = 18 
let message;

// age >= 18 ? (message="You can drive.") : (message="You can not drive!")
message = age >= 18 ? ("You can drive.") : ("You can not drive!")
console.log(message);

/* -------------------------------------------------------------------------- */

//Oy ver / verme
const yas = 19 
let mesaj;

mesaj = yas >= 18 ? ("Oy verebilir.") : ("Oy veremez!")
console.log(mesaj);

/* -------------------------------------------------------------------------- */

//Tek sayi / Cift sayi
let num = 0
let m;

m = num % 2 === 0 ? ("Cift sayi") : ("Tek sayi")
console.log(m);

/* -------------------------------------------------------------------------- */

// Pozitif / Negatif
let nr = 0
let mes;

mes = nr >= 0 ? (nr === 0 ? "Notr" : "Pozitif") : ("Negatif")
console.log(mes);

/* -------------------------------------------------------------------------- */

//
operator="+";
let num1=45;
let num2=67;

let x= (operator ==="+") ? (num1+ num2) : ( num1 - num2)
console.log(x);

/* -------------------------------------------------------------------------- */
uzaklık=500
sure= 3

let y= (uzaklık>300 && sure>5) ? (`${uzaklık/sure} km hızla gidiyorsun çok yavaşsın `) : "Çok hızlı gitmişsin"
console.log(y);

/* -------------------------------------------------------------------------- */

ad="Sema"
let selamla= ad ? `Merhaba ${ad} ` : "Hoşgeldin bilinmeyen misafir"
console.log(selamla);



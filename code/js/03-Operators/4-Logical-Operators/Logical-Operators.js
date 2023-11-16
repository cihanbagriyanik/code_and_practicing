/* -------------------------------------------------------------------------- */
/*               //! *********** LOGICAL OPERATORS**************              */
/* -------------------------------------------------------------------------- */

//? ****** AND OPERATOR ****** 

// Herşey true olmalı, Bir tane false olursa sonucumuz false olur

// let a = true
// let b = true
// let c = true

// console.log(a && b && c)

// Kayıt formunda ad,soyad,şifre ve telefon numarasını girin. Sadece birini girmezseniz bile kayıt formu onaylanmaz

let ad = "Harvey"
let soyad = "Watson"
let sifre = 1234
let telefon = "+905555555555"
// Eğer hepsi true ise ve en sondaki değeri gösterir
console.log(ad && soyad && sifre && telefon)

// Eğer içinde false olan değerler olsa ilk gördüğü false değerini döndürür

//? ****** OR OPERATOR ****** 


// Herşey false olsa bile bir tane true, true döndermeye yeter

let inst1 = false
let inst2 = false

console.log(inst1 || inst2 )

let a = false
let b = "harvey"
let c = true
let d = ""
let e = 0

console.log(a || b || c || d || e )

// AND opratörü
// her iki değer de true ise son true değeri döndürür, aksi takdirde ilk false değeri döndürür

// OR opratörü
// değerlerden biri true ise ilk true değeri döndürür, aksi takdirde her ikisi de false ise son false değeri döndürür

let x = true
console.log("Not işlemine tabi tutulmuş x:", !x)

let isOpen = true // Siteye giriş yaptım
isOpen = !isOpen // Siteden oturumu kapat butonuna basınca çıkış yapmak için

console.log(1 || false);    //1
console.log(false || 0); //0

console.log(1 && 3);  //3
console.log(1 && 0); //0
console.log( [] && 1); // 1

console.log(0 || false); //false
console.log(0 || true);  //true
console.log(1 || true);  //1


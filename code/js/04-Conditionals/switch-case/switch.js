//! ---------------------------------------------
//! ****************** SWITCH - CASE ***********
//! ---------------------------------------------

// Switch -case bloğu if-else gibi kullanılacak if-else alternatif bir yöntemdir.
// Burda bir şart durumunun karşılacağı birden fazla ihtimale göre ortaya çıkabilme ihtimali olan her duruma karşılık bir yapı verilir .
// Switch de önemli olan şey;  bir şartla karşılaştığı zaman onu uygular ve devam eder işte o noktada çıkmasını istiyoruz ve kod blogunu kırıp çıkmazsak sadece sonuncu değeri yazar
//! bu bloktan çıkması için break kelimesi ile switch alanından çıkmasını sağlarız


/*
switch(degisken){

    case durum1:
        degeisken durum1 e esit oldugunda yapilacaklar
        break;
    case durum2:
        degeisken durum2 e esit oldugunda yapilacaklar
        break;
    ...
    ...
    ...
    case durumN:
        degeisken durumN e esit oldugunda yapilacaklar
        break;
    default:
        yukaridaki durumlarin hic biri gerceklesmediginde yapilacaklar
}
*/

const product = "notebook"
let message;

switch (product) {
    case "pen":
        message = "Pen is $2.25"
        break;
    case "eraser":
        message = "Pen is $3.15"
        break;
    case "notebook":
        message = "Pen is $5.45"
        break;
    default:
        message = "Select a product"
        break;
}
console.log(message);

/* -------------------------------------------------------------------------- */

let day; 

switch (new Date().getDay()) {
    case 0:
        day = "Sunday"
        break;
    case 1:
        day = "Monday"
        break;
    case 2:
        day = "Tuesday"
        break;
    case 3:
        day = "Wednesday"
        break;
    case 4:
        day = "Thursday"
        break;
    case 5:
        day = "Friday"
        break;
    case 6:
        day = "Saturday"
        break;
    default:
        day = "Not valid"
        break;
}
console.log(day);

/* -------------------------------------------------------------------------- */

//Kitap turu girildiginde kitap adi oneren kod yapisi switch - case ile olusturun
//novel - Anna Karennina
//fiction - Notre Dame
//poetry - Pillov Thought 

let bookStyle = "fiction";
let book;

switch (bookStyle) {
    case "novel":
        book = "Anna Karennina"
        break;
    case "fiction":
        book = "Notre Dame"
        break;
    case "poetry":
        book = "Pillov Thought"
        break;
    default:
        book = "not valid!!!"
        break;
}
console.log(book);

/* -------------------------------------------------------------------------- */
//Mevsim bulma
let ay = 5;
let mevsim;

switch (ay) {
    case 12:
    case 1:
    case 2:
        mevsim = "Kis"
        break;
    case 3:
    case 4:
    case 5:
        mevsim = "Ilkbahar"
        break;
    case 6:
    case 7:
    case 8:
        mevsim = "Yaz"
        break;
    case 9:
    case 10:
    case 11:
        mevsim = "Sonbahar"
        break;
    default:
        mevsim = "gecersiz veri!!!"
        break;
}
console.log(`${ay}.ay ${mevsim} mevsimidir`);


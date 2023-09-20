
/* -------------------------------------------------------------------------- */
//*                            ITERATION IN ARRAYS                            */
/* -------------------------------------------------------------------------- */

//* ======================================================
//*                     FOR LOOP
//* ======================================================
//*ÖRNEK: dizi1 arrayindeki pozitif sayılarla negatif sayıları 2 ayrı array de toplayan function yazınız
console.log("*************** FOR LOOP **************");
const dizi1 = [-5, 15, 22, -4, 45, 79, -54];

const negatifler1 = []
const pozitifler1 = []

const dizilereAyir1 = () => {

    for (let i = 0; i < dizi1.length; i++) {

        if (dizi1[i] < 0) {
            negatifler1.push(dizi1[i]);
        } else {
            pozitifler1.push(dizi1[i]);
        }
    }
    console.log(negatifler1);
    console.log(pozitifler1);
}
dizilereAyir1()


//*************** FOR IN **************/
console.log("*************** FOR IN **************");
const dizi2 = [-5, 15, 22, -4, 45, 79, -54]

const negatifler2 = []
const pozitifler2 = []

const dizilereAyir2 = () => {
    for (let i in dizi2) {
        if (dizi2[i] < 0) {
            negatifler2.push(dizi2[i]);
        } else {
            pozitifler2.push(dizi2[i]);
        }
    }
    console.log(negatifler2);
    console.log(pozitifler2);
}
dizilereAyir2()


//*************** FOR OF **************/
console.log("*************** FOR OF **************");
const dizi3 = [-5, 15, 22, -4, 45, 79, -54]

const negatifler3 = []
const pozitifler3 = []

const dizilereAyir3 = () => {
    for (let i of dizi3) {
        if (i < 0) {
            negatifler3.push(i);
        } else {
            pozitifler3.push(i);
        }
    }
    console.log(negatifler3);
    console.log(pozitifler3);
}
dizilereAyir3()



//* ======================================================
//*                   FOR IN LOOP
//* ======================================================

//*-------------------------------------------------------
//? SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin
//? bir dizide saklandığını varsayalım.Bu hayvanları türüne
//? göre aramamızı sağlayacak ve o türden kaç adet bulunduğunu
//? ana programa döndürecek fonksiyonu yazınız.
//*--------------------------------------------------------
console.log("*************** FOR IN LOOP SORU **************");
/*
const animal = [
    "fil",
    "aslan",
    "deve",
    "fil",
    "kaplan",
    "fil",
    "deve",
    "aslan",
    "aslan",
    "aslan",
];

const userAnimal = prompt("Lutfen bir hayvan adi giriniz")

const findAnimal = () => {
    let sayac = 0 ;
    for (let i in animal) {
        if(animal[i] == userAnimal) {
            sayac++;
        }
    }
    // console.log(`${userAnimal} hayfanindan ${sayac} tane bulunmaktadir`);
    return `${userAnimal} hayfanindan ${sayac} tane bulunmaktadir`
}
console.log(findAnimal());
*/



//* ======================================================
//*                   FOR OF LOOP
//* ======================================================
//* for of dongusu, for in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir. Bu dongude dizi icindeki veriye erisirken indisleme kullanmaya gerek yoktur.
//? SORU: Alttaki dizinin elemanlarını yanyana string olarak yazdır (for of döngüsü kullanın)
console.log("*************** FOR OF LOOP SORU **************");

const arabalar = ["bmw", "mercedes", "audi", "volvo"]

//! 1. YOL
console.log(arabalar.join(""));

//! 2.YOL
let araba = ""
for (let i of arabalar) {
    araba += i // araba = araba + i
}
console.log(araba);



//! for loop=> Bir dizi üzerinde iteration yapmanın orjinal yollarından biridir.	
//? forEach=> Bir dizi üzerinde iteration yapmak için daha az kod içeren daha yeni bir yoldur.
//! for loop=>Performansta daha hızlıdır.	
//? forEach=> Performansta geleneksel döngüden daha yavaştır.
//! for loop=> Break ifadesi döngüden çıkmak için kullanılabilir.	
//? forEach=> Break ifadesi, geri arama işlevi nedeniyle kullanılamaz.
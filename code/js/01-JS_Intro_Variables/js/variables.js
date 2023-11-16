
/* -------------------------------------------------------------------------- */
/*                                2 - VARIABLES                               */
/* -------------------------------------------------------------------------- */

// Desgisken bir deger tutar ve cagirildiginda o deger isleme girer
// CONST : constant : sabit

const degiskenAdi = 'Javascript';
console.log(degiskenAdi," cok kullanisli bir dil..."); // Javascript cok kullanisli bir dil

let sayi = 45
console.log(sayi+54); //99

var cumle = "Bu bir var ile olusturulan degiskendir..."
console.log(cumle); //Bu bir var ile olusturulan degiskendir...

var kelime;
console.log(kelime); //undefined



// Global Scope ve local Scope

// global Scope : program icerisinde fonksiyonlarin disinda tanimlanan ve heryerden ulasilabilen alan
// local scope : Bir block ici {} ( fonksiyonlarin ici, donguicleri, if block icleri)

const global = "Bu global alanda tanimlanmis bir degislendir..."
console.log(global); //Bu global alanda tanimlanmis bir degislendir

{
    const local = "Bu local alanda tanimlanmis bir degislendir"
    console.log(local); //Bu local alanda tanimlanmis bir degislendir
    console.log(global); //Bu global alanda tanimlanmis bir degislendir
}
    // console.log(local); //local is not defined at variables.js:37:13



// VAR KULANIMI
/*
VAR her ortamdan erisilebilir ve degistirilebilir.
O nedenle ES6 ile gelen Let ile Const kullanimi daha cok onerilir
*/

var num = 8;

console.log(num); //8

{
    console.log(num); //8

    var num1 = 10
}
    num1 = 40;
    var num1 = 100;
    console.log(num1);//10 - 40 - 100 ...

    console.clear();
    // ----------------------------------------------------------------------



// CONST ve LET KULLANIMI
// const : constant : sabit (degismeyen)

const pi = 3.14;
console.log(pi);
// const degisken tanimlama ile olusturulan degisleneler degistirilmek istendiginde asagidaki hata alinir
// Uncaught TypeError: Assigmnet to constant variable.


// LET KULLANIMI
// LET ile degiskenin degeri degistirilebilir
let kisiSayisi = 300;
console.log("Kurtaki ogrenci sayisi:",kisiSayisi); //300

// kisiSayisi=kisiSayisi+1
kisiSayisi++
console.log("Kurtaki ogrenci sayisi:",kisiSayisi); //301

kisiSayisi--
console.log("Kurtaki ogrenci sayisi:",kisiSayisi); //300



let ad = "saban"
{
       let ad = "Cihan"
    console.log(ad); //Cihan
    /*let*/ad = "Harwey"
    console.log(ad); // Harwey
}
    console.log(ad); //ad is not defined at variables.js:89:13

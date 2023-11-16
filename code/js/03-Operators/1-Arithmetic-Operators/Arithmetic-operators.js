/* -------------------------------------------------------------------------- */
/*              ! *********** ARITHMETIC OPERATORS**************              */
/* -------------------------------------------------------------------------- */

let num1 = 54;
let num2 = 77;

console.log("Aritmetik operatorler");

//Toplama Islemi (ADDITION)
console.log("Toplama islemi:", num1+num2);

//Cikarma islemi (SUBSTRACTION)
console.log("Cikarma islemi:", num2-num1);

//Carpma islemi (MULTIPLICATION)
console.log("Carpma islemi:", num2*num1);

//Bolme islemi (DIVISION)
console.log("Bolme islemi:", (num1/num2).toFixed(2));

//Us alma (POWER)
console.log("Us alma:",5**3);

//!Mod alma (MODULES)
console.log("Mod alma 10%3:",10%3);


//Tek midir Cift midir?
// if(num2%2 == 1){
//     console.log("Bu sayi tektir");
// }else{
//     console.log("Bu sayi cifttir");
// }


// 3 Basamkli bir sayinin sayi degerlerini bulan program
// 526  5 2 6
const num = 526 ;
const birler = num%10
const onlar = (Math.trunc(num/10)%10)
const yuzler =  (Math.trunc(num/100)%10)
console.log(`Sayi degerleri: ${yuzler} - ${onlar} - ${birler}`);



// Kullanicidan aldigimiz saat bilgisini alip isin kac gunde yapildigini hesaplayan program.
// let hours = +prompt("Bu is kac saatte yapildi?")

// console.log(typeof hours);

// let day = Math.trunc(hours/24)

// let remainder = hours % 24

// console.log(`Bu is ${day} gun ve ${remainder} saatte tamamlanmistir`);



// let now = new Date()
// console.log(now.getFullYear());
// console.log(now);

// let saat = now.getHours()
// let dakika = now.getMinutes()
// console.log(`${saat}:${dakika}`);



/* -------------------------------------------------------------------------- */
/*                            INCREMENT - DECREMENT                           */
/* -------------------------------------------------------------------------- */

let num3 = 54 ;
console.log(num3++);
console.log(num3);
console.log(++num3);


let num4 = 15
console.log(num4--);
console.log(num4);
console.log(--num4);



// ODEV ICIN ARASTIRMA
/* -------------------------------------------------------------------------- */

const now = new Date();
const yil = now.getFullYear();
const ay = now.getMonth() + 1; // JavaScript ayları 0'dan başlayarak sayar, bu yüzden 1 ekliyoruz.
const gun = now.getDate();

console.log(`Bugünün tarihi:${gun}-${ay}-${yil}`);
//? 1-Kelvin yada Fahrenheit olarak girilen sıcaklık değerini celcius dönüştüren program. Virgülden sonra iki basamaklı bir gösterimle ile gösteriniz. 
//* °C = (°F – 32) / 1.8
//* °C = °K – 273.15

// let temp = +prompt("Lutfen donusturmek sitediginiz sicakligi giriniz")
// let unit = prompt("Lutfen donusturmek istediginiz sicaklik birimini giriniz").toUpperCase()

// const convertToCelsius = (temp, unit) => {
//     if (unit === 'K' || unit === 'KELVIN') {
//         return (temp - 273.15).toFixed(2);
//     }
//     else if (unit === 'F' || unit === 'FAHRENHEIT') {
//         return ((temp - 32) / 1.8).toFixed(2);
//     }
//     else {
//         return 'Geçersiz birim';
//     }
// };
// console.log(convertToCelsius(temp, unit));

//* -------------------------------------------------------------------------- */

//? 2-Belirli bir string ifadenin tersini bulan fonksyon yaziniz?
// todo const string = "Hello world" >>>>>> "dlrow olleh"

function backward(str) {
    let yeni = "";
    for (let i = str.length - 1; i >= 0; i--) {
        yeni += str[i];
    }
    return yeni;
}
console.log(backward("Hello World"));

//* -------------------------------------------------------------------------- */

//? 3-Belirli bir string ifadenin palidrome olup olmadigini bulan fonksiyonu yaziniz?

const string1 = "selles";
function isPalindrome(str) {
    let newStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    return newStr === str;
}
console.log(isPalindrome(string1)) //true

//* -------------------------------------------------------------------------- */

//? 4-Belirli bir sayinin tam bolenlerinin toplamini bulan fonksiyonu yaziniz?

function bolen(deger) {
    toplam = 0
    for (let i = 1; i <= deger; i++) {
        if (deger % i === 0) {
            toplam += i;
        }
    }
    return toplam;
}
console.log(bolen(12));

//* -------------------------------------------------------------------------- */

//? 5-Yari capi verilen bir dairenin alan ve cevresini bulan program?

function daireAlanCevre(yariCap) {
    const alan = (Math.PI * Math.pow(yariCap, 2)).toFixed(2);
    const cevre = (2 * Math.PI * yariCap).toFixed(2);
    return { alan, cevre };
}
const yariCap = 7; // Yarı çapı belirliyoruz.
const sonuc = daireAlanCevre(yariCap);

console.log("Dairenin Alanı:", sonuc.alan);
console.log("Dairenin Çevresi:", sonuc.cevre);

//* -------------------------------------------------------------------------- */

//? 6-Belirli bir sayinin asal sayi olup olamdigini kontrol eden fonksiyonu yaziniz

function asalMi(num) {
    if (num <= 1) {
        return false;
    } for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(asalMi(4));

//* -------------------------------------------------------------------------- */

//? 7-Ilk Parametreyi carpip 3. parametre ussune alan fonsiyon yaziniz?

function multiplyFirstTwoAndDivideByThird(a, b, c) {
    return (a * b) ** c;
}
console.log(multiplyFirstTwoAndDivideByThird(1, 2, 4)); // 16

//* -------------------------------------------------------------------------- */

//? 8- Bir sayıyı tersine çevirecek bir fonksiyon yazın?
//* 1.yöntem
function reverseNumber1(num) {
    var reverse = 0
    while (num != 0) {
        reverse = reverse * 10
        reverse = reverse + (num % 10)
        num = Math.trunc(num / 10) //virgülden sonrasını atmak için
    }
    return reverse
}
console.log("reverse number:", reverseNumber1(123))


//* 2.yöntem
const ters = (sayi) => {
    let cevir = sayi.toString()
    let ekle = ""
    for (let i = cevir.length - 1; i >= 0; i--) {
        ekle += cevir[i]
    }
    return parseInt(ekle)
}
console.log(ters(546))

//* -------------------------------------------------------------------------- */

//! 9- 100-1000 e kadar olan sayılardan polindrom olanlarını belirten/yazan program

// function reverseNumber(number) {
//   var reverse = 0;
//   var num = number;
//   while (num != 0) {
//     reverse = reverse * 10;
//     reverse = reverse + (num % 10);
//     num = Math.trunc(num / 10); //virgülden sonrasını atmak için
//   }
//   return reverse === number ? `${number} polindromdur` : null;
// }

// for (let i = 100; i < 1000; i++) {
//   let x = reverseNumber(i);

//   x === null ? null : console.log(x);
// }

//* -------------------------------------------------------------------------- */

//! 10- Girilen bir sayının pozitif bölenlerini bulan bir fonksiyon yazınız.

function findPositiveDivisors(num) {
    let result = [];

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) result.push(i);
        console.log("result", result);
    }

    return result;
}

console.log(findPositiveDivisors(12)); // output: [1, 2, 3, 4, 6, 12]

function findFactors(num) {
    const factors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

console.log(findFactors(12)); // output: [1, 2, 3, 4, 6, 12]

//* -------------------------------------------------------------------------- */

//! 11- Aşağıdaki isterleri sağlayan bir fal programı yazın?

//? tellFortune adlı bir işlev yazın:
//? 4 farklı parametre : jobTitle, geoLocation, partner, numKids.
//? falınızı ekrana şu şekilde verir: "Gelecekteki mesleğiniz *****'dir. ****'da yaşayacaksınız. **** ile evlenecek ve *** çocuk sahibi olacaksınız"

function tellFortune(jobTitle, geoLocation, partner, numKids) {
    let future =
        "You will be a " +
        jobTitle +
        " in " +
        geoLocation +
        " and married to " +
        partner +
        " " +
        " with " +
        numKids +
        " kids.";
    console.log(future);
}

// tellFortune('bball player', 'spain', 'Shaq', 3);
// tellFortune('stunt double', 'Japan', 'Ryan Gosling', 3000);
// tellFortune('Elvis impersonator', 'Russia', 'The Oatmeal', 0);

//* -------------------------------------------------------------------------- */

//! 12- Mükemmel sayıyı bulan fonksiyonu yazınız.

//? Bölen sayıları toplamı orjinal sayının 2 katına eşitse bu mükemmel sayıdır...(6,28,496)
//? 6   = 1, 2, 3, 6 = 12  = 6*2
//? 28  = 1, 2, 4, 7, 14, 28   = 56   = 28*2;

const muksayi = (sayi) => {
    let toplam = 0;

    for (let i = 2; i <= sayi / 2; i++) {
        if (sayi % i == 0) {
            toplam += i;
        }
    }
    toplam += 1 + sayi;
    console.log(toplam);

    if (toplam == sayi * 2) {
        console.log("Mükemmel Sayıdır...");
    } else {
        console.log("Mükemmel Sayı Değildir..");
    }
};

muksayi(28);

//* -------------------------------------------------------------------------- */

//! 13- Write a function to calculate compound interest based on the principle amount
// Function `compoundInt()` returns a final amount based on the compound interest formula provided principal amount, rate of interest per year, time on a yearly basis, and n as the number of times that interest is compounded per unit time.

function compoundInt(principle, rate, time, n) {
    var interest = principle * Math.pow(1 + rate / n, n * time);
    return principle + interest;
}

console.log(compoundInt(20000, 5, 2, 2)); //3021250
console.log(compoundInt(150000, 25, 1, 2)); //27487500

//* -------------------------------------------------------------------------- */

//! 14- Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.
function calculateSupply(age, numPerDay) {
    var maxAge = 100;
    var totalNeeded = numPerDay * 365 * (maxAge - age);
    var message =
        "You will need " +
        totalNeeded +
        " cups of tea to last you until the ripe old age of " +
        maxAge;
    console.log(message);
}

calculateSupply(28, 36);
calculateSupply(28, 2.5);
calculateSupply(28, 400);

//AND Operatörü

//? her iki değer de true ise son true değeri döndürür, aksi takdirde ilk false değeri döndürür

console.log(true && 1); //1
console.log(false && 1); //false
console.log(1 && 3);  //3 
console.log(1 && 0);  // 0
console.log([] && 1);  //1

// OR opratörü
console.log(1 || false);  //1
console.log(false || 0); //0
console.log(0 || NaN);  //NaN
console.log(213 || "saban"); //213
console.log(1 || true); // 1

// const a = false;

// if (a) {
//     console.log("Merhaba")
// }

// const status1 = false

// if (status1) {
//     console.log("deneme1")
// } else if (status2) {
//     console.log("deneme2")
// } else{}

console.clear();

//! 1- 18 yaşından büyüklerin oy kullanabileceğini 18 yaşından küçüklerin oy kullanamayacağını ternary yapı ile konsola yazdıran kodu yazınız. (ternary)

let age = 18
let mesaj;

mesaj = age >= 18 ? ("Oy verebilir.") : ("Oy veremez!")
console.log(mesaj);


//! (Bonus) girilen yilin yuzyilini veren program 1788 > 18.yuzyil

// let yil = +prompt("Yil giriniz")
//* 1788/100
//* 17.88
//* 17
//* 17+1
// let x = Math.trunc(yil / 100) + 1
// console.log(`${x}.Yuzyil`);


//! 2- Bir dersten alınan notun harfini aşağıdaki duruma göre konsola yazdırınız?  
//?  Not:
//?  90'dan büyükse AA.
//? - 80'den büyük yada 90'a eşitse AB,
//? - 70'den büyük yada 80'a eşitse BB,
//? - 60'den büyük yada 70'a eşitse BC,
//? - 50'den büyük yada 60'a eşitse CC,
//? - 40'den büyük yada 50'a eşitse CD,
//? - 30'den büyük yada 40'a eşitse DD,
//? - 30'dan küçük yada eşitse FF ,

let not = 75;
if (not > 100 || not < 0) {
    console.log("Gecersiz bir not girdingiz.Notunuzun 0 ile 100 arasinda olmasi gerekiyor");
} else if (not > 90) {
    console.log("Notunuz AA");
} else if (not > 80) {
    console.log("Notunuz AB");
} else if (not > 70) {
    console.log("Notunuz BB");
} else if (not > 60) {
    console.log("Notunuz BC");
} else if (not > 50) {
    console.log("Notunuz CC");
} else if (not > 40) {
    console.log("Notunuz CD");
} else if (not > 30) {
    console.log("Notunuz DD");
} else if (not <= 30) {
    console.log("Notunuz FF");
}

//! 3- Artık yıl sorusu
//? Artık yıl, bir yıldaki günlerin 365 yerine 366 gün olmasına denir. Bu fazladan gün (artık gün), normalde 28 gün olan şubat ayına 29 Şubat'ın eklenmesi ile elde edilir.  Bunun hesaplanması için aşağıdaki algoritma kullanılır.

//? Bir tarih 4 ile tam bölünüp 100 katları ile tam bölünemiyorsa, veya yıl 400 sayısına tam bölünüyorsa artık yıldır. BU iki şartın dışında yılarda şubat ayı 28 gün, artık yıllarda 29 gün olarak belirlenir.

//? Yukarıdaki bilgilere göre bir yılın artık yıl olup olmadığını konsola yazdıran conditional statement'i yazınız.

// let yil = +prompt("Bir yıl girin:");
let yil = 2024;

if ((yil % 4 === 0 && yil % 100 !== 0) || yil % 400 === 0) {
    console.log(`${yil} bir artık yıldır.`);
} else {
    console.log(`${yil} bir artık yıl değildir.`);
}


//! 4 - 1000 ile 2000 arasindaki 13 e bolumunden kalani 3 olan sayilari konsola yazdirin.

for (let i = 1000; i <= 2000; i++) {
    if (i % 13 === 3) {
        console.log(i);
    }
}



console.clear();



//! 5- kullanıcıdan alınan 5 adet sayının ortalamasını konsola yazdırınız ?
/*
let num = 0;
let result = 0;

while (num < 5) {
    let sayi = +prompt(`Lutfen ${num+1} adet sayi giriniz...`)
    result += sayi 
    num++ // counter
}
console.log(`Girinlen ${num} sayinin ortalamasi ${result/num}'dur`);
*/

//todo  FOR DONGUSU ILE 
/*
let sayac=0
let toplam=0;
for(let i=1; i<=5; i++){
    sayi=+prompt(`${i}. sayi giriniz`);
    sayac++
    toplam+=sayi;
   
}
console.log(toplam/sayac);
*/

//! 6- Kullanıcıdan alınan sayıları negatif girilene kadar toplayan ve sonucunu konsola yazdıran kodu yazınız ?
/*
toplam = 0;

while (true) {
    let sayi = +prompt("bir sayi giriniz");
    if (sayi >= 0) {
        toplam += sayi;
    }
    else {
        break;
    }
}
console.log(toplam);
*/

//! 7- sizden 1'den 100'e kadar sayıları konsola yazdırmanız istenmektedir ancak 3'ün katlarına gelince 'Fizz', 5'in katlarına glince 'Buzz' yazacak. Hem 3'ün hemde 5'in katına geldiğinde ise 'FizzBuzz' yazdırmanız istenmektedir.

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

console.clear();

//! 8- Bir sayinin basamak sayini yazdiran kodu yaziniz?

let number = 1531546;
let digitCount = 0;

while (number !== 0) {
    digitCount++;
    number = Math.trunc(number / 10)
}
console.log(`Sayinin basamak sayisi: ${digitCount}`);


//! 9- Kullanıcıdan alınan n adet kadar olan Fibonacci dizisini aralarında boşluk olan string şekilde konsola yazdırınız ?  
//! 0 1 1 2 3 5 8 13 

let n = 10
// let n = +prompt("Kaç adet fibonacci sayısı istersiniz")
let q = 0
let w = 1
// let c;
let strFibonacci = '0 1'
for (let i = 2; i < n; i++) {
    e = q + w
    strFibonacci += ` ${e}`
    q = w
    w = e  
}
console.log(strFibonacci)


//! 10- Aşağıdaki çıktıyı konsola yazdırınız
// ?   * * * * *
// ?   * * * * * 
// ?   * * * * *
// ?   * * * * * 
// ?   * * * * *

let dig = 5
// let dig = prompt("Lutfen bir deger giriniz")
let deger = ""

for (column = 0; column < dig; column++) {
    for (row = 0; row < dig; row++) {
       deger += "*" 
    }
    deger = (`${deger}\n`);
}
console.log(deger);


//! 11- Aşağıdaki çıktıyı konsola yazdırınız
//? 0
//? 00
//? 000
//? 0000
//? 00000
//? 000000

let satirSayisi = 6;
// let satirSayisi = +prompt("Lutfen olusturmak istediginiz astir sayisini giriniz?")

let sonucMetni = '';

for (i = 1; i <= satirSayisi; i++) {
  for (k = 0; k < i; k++) {
    sonucMetni += '0';
  }
  sonucMetni += '\n';
}
console.log(sonucMetni);


//! 12- girilen değerlerin üçgen oluşturp oluşturamayacağını bulan program
/*
let a = +prompt("Birinci kenar uzunlugu: ")
let b = +prompt("Ikinci kenar uzunlugu: ")
let c = +prompt("Ücüncü kenar uzunlugu: ")

let check1 = a + b > c;
let check2 = a + c > b;
let check3 = b + c > a;

if (check1 && check2 && check3) {
    console.log("Bu sayılar bir üçgen oluşturabilir")
} else {
    console.log("Bu sayılar bir üçgen oluşturamaz")
}
*/
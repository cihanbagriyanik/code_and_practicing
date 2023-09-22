let isimler = ["harvey", "helen", "ashley", "ethan", "fernando"]
let bos = []

console.log(typeof isimler[0])
console.log(isimler.length)
console.log(Boolean(isimler))
console.log(Boolean(bos.length))

bos.length ? console.log("veriler geliyo") : console.log("veriler gelmiyo")

//for while foEach do while

// for (let i = 0; i < isimler.length; i++) {
//     console.log(isimler[i])
// }

// let sayac = 0;

// while (sayac < isimler.length) {
//     console.log(isimler[sayac]);
//     sayac ++
// }

// isimler.forEach(isim=>console.log(isim))

console.clear();

//? Belirli bir string ifadenin içindeki sesli harfleri bulan fonksiyonu yazınız?

// let n = "Ardahan"

// for (let i = 0; i < n.length; i++) {
//   (n.includes(/[aeıioöuü]/i)) ? console.log(n[i]) : console.log("ERROR");
// }

// const n = "Ardahan";
// const vowelRegex = /[aeıioöuü]/i;

// for (let i = 0; i < n.length; i++) {
//   const isVowel = vowelRegex.test(n[i]);
//   const output = isVowel ? n[i] : "ERROR";
//   console.log(output);
// }

//* -------------------------------------------------------------------------- */

//? Bir dizi icerisindeki en buyuk sayiyi bulan bir fonsiyon

let arr = [3, 4, 50, 6, 20, 8, 9, 10]

function enBuyuk(sayilar) {
    let max = sayilar[0]
    for (let i = 0; i < arr.length; i++) {
        if (sayilar[i] > max) {
            max = sayilar[i]
        }
    }
    return max;
}
console.log(enBuyuk(arr));

//* -------------------------------------------------------------------------- */

//? Bir dizi icerisindeki sayilari toplayan bir fonsiyon yaziniz.

let dizi1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function toplama(arr) {
    let toplam = 0
    for (let i = 0; i < arr.length; i++) {
        toplam += arr[i];
    }
    return toplam;
}
console.log(toplama(dizi1));

//* -------------------------------------------------------------------------- */

//? Bir dizideki sayilarin ortalamasini bulan fonksiyon

let dizi2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function bolme(arr) {
    let ortalama = 0
    for (let i = 0; i < arr.length; i++) {
        ortalama += arr[i] / dizi2.length;
    }
    return ortalama;
}
console.log(bolme(dizi2));

//* -------------------------------------------------------------------------- */

//? Girilen bir cumledeki kelime sayisini bulan bir fonsiyon yazin

const cumle = "Merhaba nasilsin"

function sayac(cumle) {
    const kelimeler = cumle.split(" ")
    const sayi = kelimeler.length
    return sayi
}
console.log(sayac(cumle));

//* -------------------------------------------------------------------------- */

//? Bir cümleyi alın ve kelimeleri ters sırayla birleştirerek yeni bir cümle oluşturun.

let sentence = "JavaScript harika bir dil"; // "dil bir harika JavaScript"

function dondur(sentence) {
    const kelime = sentence.split(" ");
    const ters = kelime.reverse().join(" ")
    return ters;
}
console.log(dondur(sentence));

//* -------------------------------------------------------------------------- */

//? Bir isim listesi oluşturmak istiyorsunuz. İlk başta boş bir diziyle başlayın. Kullanıcıdan klavyeden  isimleri alarak listeye ekleyin. Kullanıcı 'q' tuşuna basana kadar isim eklemeye devam edin. Kullanıcı 'q' tuşuna bastığında en son eklediği ismi listeden çıkarın ve sonuçları konsola yazdırın.

let isimListesi = []

while (true) {
    let isim = (prompt("Bir isim giriniz (Cikmak icin 'q' tusuna basiniz): ")).toLowerCase();

    if (isim === 'q') {
        isimListesi.pop()
        break;
    } else {
        isimListesi.push(isim);
    }
}
console.log(isimListesi);



//! 8- kullanıcının isim ve doğum tarihi değerlerini parametre olarak alan ve kullanıcın yaşını hesaplayan fonksiyonu function declaration ve arrow function ile yazınız

function hesapla(isim, tarih) {
    let yas = new Date().getFullYear() - tarih;
    return console.log(` ${isim} ${yas} yaşındadır `);
  }
  
  const hesapla1 = (isim, tarih) => {
    let yas = new Date().getFullYear() - tarih;
    return console.log(` ${isim} ${yas} yaşındadır `);
  };
  hesapla("harvey", 2000);
  hesapla1("saban", 1988);
  
  //! 9- isimler dizisin içerisindeki her ismi küçük harf olarak yeni bir diziye saklayınız.
  
  const isimler1 = [
    "Ahmet",
    "mehmet",
    "ismet",
    "SAFFET",
    "Can",
    "Canan",
    "Cavidan",
  ];
  //   for ile
  // const smallNames = [];
  // for (let i = 0; i < isimler1.length; i++) {
  //   let element = isimler1[i].toLowerCase();
  //   smallNames.push(element);
  // }
  // console.log(smallNames);
  
  //! map ile
  let newa = isimler1.map((isim) => isim.toLowerCase());
  console.log(newa);
  
  // * fiyatlar array'inde fiyatı 250 TL den az olanlari ayri bir diziye saklayalınız.
  
  const fiyatlar = [100, 250, 249, 500, 50, 89];
  let yeniFiyat = fiyatlar.filter((a) => a < 250);
  console.log(yeniFiyat);
  
  //! 10- Bir sayının faktöriyelini hesaplayan bir fonksiyon yazınız.
  // 5! = 5*4*3*2*1
  //! 1.yötem
  function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
  
  console.log(factorial(6)); // 1*2*3*4*5 = 120
  //! 2.yöntem
  function factorial2(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial2(n - 1);
    }
  }
  
  console.log(factorial2(5));
  
  //! 11- kayıp sayıyı bulun?
  
  //! 1.yöntem
  let dizi3 = [5, 2, 6, 1, 3, 7];
  dizi3.sort((a, b) => a - b);
  console.log(dizi3);
  
  for (let i = 0; i < dizi3.length; i++) {
    if (dizi3[i] !== dizi3[i + 1] - 1) {
      console.log(dizi3[i] + 1);
      break;
    }
  }
  console.clear();
  //!  2.yöntem n (n+1) /2
  const sal = [5, 2, 6, 1, 3, 7];
  
  const findNumber = (arr) => {
    let total = ((arr.length + 1) * (arr.length + 2)) / 2;
  
    let arrTotal = sal.reduce((acc, curr, i) => {
      console.log("akümülatör", acc);
      console.log("current", curr);
      console.log("index", i);
      return acc + curr;
    });
    return total - arrTotal;
  };
  
  console.log(findNumber(sal));
  
  //! 12- let string="altı,bir,iki,dört,beş,üç,yedi,sekiz,dokuz"
  //! 612453789   bu hale dönüştüren program
  
  let string = "altı,bir,iki,dört,beş,üç,yedi,sekiz,dokuz";
  let stringNumber = [];
  const splitToNumber = (string) => {
    let newString = string.split(",");
    console.log(newString);
    for (let i = 0; i <= newString.length - 1; i++) {
      if (newString[i] === "bir") stringNumber.push(1);
      else if (newString[i] === "iki") stringNumber.push(2);
      else if (newString[i] === "üç") stringNumber.push(3);
      else if (newString[i] === "dört") stringNumber.push(4);
      else if (newString[i] === "beş") stringNumber.push(5);
      else if (newString[i] === "altı") stringNumber.push(6);
      else if (newString[i] === "yedi") stringNumber.push(7);
      else if (newString[i] === "sekiz") stringNumber.push(8);
      else stringNumber[i] = 9;
    }
  
    return stringNumber.join("");
  };
  console.log(splitToNumber(string));
  
  //! 13- Size bir dizi kelime verildi. "Nemo" kelimesini bulmanız ve şuna benzer bir dize döndürmeniz gerekir: 
  
  //? "[Nemo'yu bulduğunuz kelimenin sırası] 'nda Nemo'yu buldum!"
  
  //? Nemo'yu bulamıyorsanız, "I can't find Nemo :(" yazın.
  
  //? findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
  
  //? findNemo("Nemo is me") ➞ "I found Nemo at 1!"
  
  //? findNemo("I Nemo am") ➞ "I found Nemo at 2!"
  
  
  
  //! 14- Bir öğe dizisini alan, tüm yinelenen öğeleri kaldıran ve eski diziyle aynı sırada yeni bir dizi döndüren bir fonksiyon oluşturan program 
  
  // removeDups([1, 0, 1, 0]) ➞ [1, 0]
  
  // removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]
  
  // removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]

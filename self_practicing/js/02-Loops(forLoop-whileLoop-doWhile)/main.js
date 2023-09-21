
//* EXP
for (let i = 1; i <= 10; i++) {
    console.log(`${i} - Merhaba`);
}


//? 1 den n ye kadar olan sayıların toplamını yazdıran program.NOT: n prompt ile dışarıdan girilebilir.

const n = 100
let toplam = 0

for (let i = 1; i <= n; i++) {
    toplam += i
}
console.log(toplam);


//? 0-100 arasında 10 adet rastgele say üreten kodu for döngüsü ile yazınız.

for (let i = 0; i <= 10; i++) {
    let sayi = (Math.random() * 100).toFixed()

    console.log(sayi);
}


//?Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı for dongüleri ile yazınız.

const num = 5
let asal = true;

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        asal = false;
        break;
    }
}
asal === true ? console.log(`${num} bir asal sayıdır.`) : console.log(`${num} bir asal sayı değildir.`);

//* -------------------------------------------------------------------------- */

//* EXP 10 kere konsola Merhaba yazdıran uygulamayı while döngüsü ile yazınız.

let i = 1
while (i <= 10) {
    console.log(i + " Merhaba");
    i++
}


//? Kullanıcıdan 0-100 arasında bir not isteyen ve girilen not 0-100' den farklı ise Kullanıcıyı uyararak yeniden 0-100 arasında not girmeye zorlayan kodu while döngüsü ile yazınız.

// let input = +prompt("Lutfen 1 ile 100 arasindan bir sayi giriniz:");

// while (input < 0 || input > 100) {
//     console.log("Girilen sayi yanlis lutfen 0 ile 100 arasinda bir sayi giriniz:");
//     input = +prompt("Lutfen 1 ile 100 arasindan bir sayi giriniz:");
// }
// console.log("Gercerli Giris:", input);


//* -------------------------------------------------------------------------- */
//* EXP 10 kere konsola Merhaba yazdıran uygulamayı Do-While döngüsü ile yazınız.

let sayac = 1
do {
    console.log("Merhaba -", sayac);
    sayac++
} while (sayac <= 10);

//?      ÖDEV:TahminOyunu
//todo  • Program 0-100 arasında rasgele bir sayı tutmalı ve kullanıcının bu sayıyı 5 kerede (hak) bilmesini istemelidir.
//todo  • Her yanlışta hakkını bir düşürmeli ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirmelidir.
//todo  • Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" diye bir bilgi mesajı yazdırmalıdır.

// let tahmin;
// let rastgeleSayi = (Math.random() * 100).toFixed()
// console.log(rastgeleSayi);
// var hak = 5;

// do {

//     tahmin = +prompt(`Kalan hak: ${hak}\n0 ile 100 arasında bir sayı tahmin edin:`)

//     if (isNaN(tahmin) || tahmin < 0 || tahmin > 100) {
//         console.log("Geçersiz giriş. 0 ile 100 arasında bir sayı girin.");
//         continue;
//     };

//     hak--;

//     (tahmin === rastgeleSayi) ? console.log(`Tebrikler! ${5 - hak} denemede bildiniz.ct`) : (hak === 0) ?  console.log(`Üzgünüz, haklarınız tükendi. Doğru cevap ${rastgeleSayi} idi.`) : console.log("Yanlış tahmin. Daha fazla deneyin." + hak + " hakkınız kaldı.")

// } while (hak > 0);


// let tahmin;
// let rastgeleSayi = Math.floor(Math.random() * 101);
// console.log(rastgeleSayi); // 0 ile 100 arasında rastgele bir sayı üretin.
// let hak = 5; // Kullanıcının hakkı

// do {
//     tahmin = parseInt(prompt(`Kalan hak: ${hak}\n0 ile 100 arasında bir sayı tahmin edin:`));

//     if (isNaN(tahmin) || tahmin < 0 || tahmin > 100) {
//         console.log("Geçersiz giriş. 0 ile 100 arasında bir sayı girin.");
//         continue; // Geçersiz tahminlerde döngüyü devam ettirin.
//     }

//     hak--;

//     if (tahmin === rastgeleSayi) {
//         console.log(`Tebrikler! ${5 - hak} denemede bildiniz.`);
//         break; // Doğru tahminde döngüyü sonlandırın.
//     } else {
//         if (hak === 0) {
//             console.log(`Üzgünüz, haklarınız tükendi. Doğru cevap ${rastgeleSayi} idi.`);
//             break; // Haklar tükenirse döngüyü sonlandırın.
//         } else {
//             console.log("Yanlış tahmin. Daha fazla deneyin.");
//             console.log(hak + " hakkınız kaldı.");
//         }
//     }
// } while (hak > 0);





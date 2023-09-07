//!  ***** WHILE LOOP ******* 
//* For loop ile benzer şekilde sadece syntax farklılığı vardır.Birbirini yerine kullanılabilir
//*"while" döngüsü, belirli bir koşul doğru olduğu sürece kod bloğunu tekrarlayan bir döngüdür. "While" döngüsü, başlangıçta belirtilen koşul doğru olduğu sürece çalışır ve koşul yanlış olduğunda döngüyü sonlandırır.
//! NOT: Eğer koşul düzgün yapılındırılmamışsa, "while" döngüsü sonsuz bir döngü oluşturabilir ve bu durum sayfanızın veya uygulamanızın donmasına neden olabilir.
//? while(Koşul) {
//?      çalıştırılacak kodlar
//?   }


//todo 1den 10 a kadar olan sayıları yazdıran program

let i = 1;
while (i <= 10) {
    console.log(i);
    i++
}



//todo Kullanici 100 ve 200 arasinda bir deger girene kadar islemi devam ettiren program

// let number =90

// while(number <= 100 || number>200){
//     number = prompt("100 ile 200 arasinda bir deger giriniz.")
// }


// console.log("100 ile 200 arasindabir deger girmediniz");

//! -------------------------------------------------------------------------- */

// Cikis islemi
// let cevap = "";
// while(cevap !== "evet"){
//     cevap = prompt("Cikmak istiyor musunuz (evet / hayir):").toLowerCase()
// }
// console.log("Bizi tercih ettiginiz icin tesekkurler...");

console.clear();

//! -------------------------------------------------------------------------- */
//? console.log(`Urun Listesi
//? 1-Urun giriniz
//? 2-Urun Listele
//? 3-Urun Sil
//? 4-Cikis`);

/*
let check = true;
1
while (check === true) {
    console.log(`Urun Listesi
               1-Urun giriniz
               2-Urun Listele
               3-Urun Sil
               4-Cikis`);
    let tercih = Number(prompt("Yapacaginiz islemin numarasini giriniz:"))

    switch (tercih) {
        case 1:
            console.log("Urununuz girildi");
            break;
        case 2:
            console.log("Urununuz listelendi");
            break;
        case 3:
            console.log("Urununuz silindi");
            break;
        case 4:
            check = false
            break;
        default:
            console.log("Gecersiz giris yaptiniz.");
            break;
    }
}
*/


//! -------------------------------------------------------------------------- */


//todo SAYI TAHMIN OYUNU
//todo pc rastgele bir deger tutacak
//todo Kullanici bulmaya calisacak.
//todo Kullanicinin girdigi sayi bilgisayarin tuttugu sayidan kucuksa "daha buyuk sayi giriniz" desin
//todo buyukse "daha kucuk bir sayi giriniz" desin
//todo Bulursa tebrikler desin...







//todo Girilen sayinin kac basamkli oldugunu bulan program WHILE LOOP ile yaziniz
//todo 2346 sayisi 4 basamaklidir
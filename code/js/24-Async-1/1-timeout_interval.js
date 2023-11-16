//*=================================================================
//*              1- Senkron-Asenkron Programlama
//* ================================================================

//! Javascript, bir single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basariyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Async Programlama
//? kullanilmasi cok onemlidir.

//*Senkron Programlama
//****************************************** */
// // Zorla bekletmek icin boyle gereksiz ve uzun bir kod yapilabilir setTimeout bunun kisa yoludur...
// const bekle  = (ms) => {
//     const start = new Date().getTime()
//     while (new Date().getTime() < start + ms) {}
// }
console.log("hello");
// console.time("timer1") // Kronometre yi baslat //- time ile timeEnd in icinde yazan ayni olmali
// bekle(3000)
// console.timeEnd("timer1") // Kronometreyi durdur


//*Asenkron (setTimeout) 1 seferlik
//******************************** */

setTimeout(() => {

    console.log("hello world");

}, 2000)

console.log("world hello");

setTimeout(() => {
    console.log("Hii World");
}, 1000);

//!world hello - Hii World - hello world çalışır, 3. nün süresi 1.den azsa, 2-3-1 sırasında çalışır
//!settimeout müsait zamanda ortaya çıkar, onun sırası geçtiğinde alttaki işlemler bitince çalışır



//*Asenkron(setInterval, clearInterval) belli aralıklarla durdurulana kadar devam eder. mesela 1 dakikada bir döviz kurunu güncellemek için kullanılabilir
//***************************** */

//?setInterval non-blocking

console.log("Sayac Basliyor");

let sayac = 0;

// const interval1 = setInterval(() => {
//     console.log(sayac++);

//     if(sayac == 7) clearInterval(interval1)

// }, 1000);

console.log("Sayac durduruldu");

//! ********************************************************************************/
//! TEKRAR

const interval = setInterval(() => {

    console.log(sayac++);

    (sayac == 8) ? clearInterval(interval) : 0

},1000)
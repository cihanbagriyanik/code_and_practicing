// Short circuit, programlama terimleri içinde sıkça kullanılan bir kavramdır ve genellikle mantık operatörleri (AND, OR) ve koşullu ifadelerle ilişkilendirilir. Short circuit, bir koşulun değerlendirmesinin bir noktada durdurulması veya atlanması anlamına gelir. Bu, bazı durumları hızlı bir şekilde belirlemeye ve gereksiz işlemleri önlemeye yardımcı olabilir.

// Short circuit özellikle `&&` (ve) ve `||` (veya) mantık operatörleri ile ilgilidir. İşte bu iki operatörün short circuit özelliği ile nasıl çalıştığını açıklayan örnekler:

// 1. `&&` (ve) Operatörü:
//    - `&&` operatörü kullanıldığında, sol taraftaki ifade doğru (true) değilse, sağ taraftaki ifade değerlendirilmez ve sonuç hemen `false` olarak kabul edilir.
//    - Bu, bir koşulun her iki tarafının da doğru olması gerektiği durumlarda kullanışlıdır.

// AND Yaspisi
// Yalniz bir tane 0 olmasi sonucu tamamen 0 yapar 

// Short Circuit
const x = -10
const y = 8

if (x > 0 && y > 0) {
    console.log("Her iki kosulda dogru");
} else {
    console.log("En az bir kosul yanlis");
}

// AND mukemmeliyetcidir. Hepsi dogru olunca TRUE deger dondurur. Ilk FALSE gordugunde onu yazar
// Eger HEPSI TRUE ise sonucu olani yazdirir

// FALSE ureten degerler
// 0, -0, null, undefined, false, NaN(Not a Number)

console.log("12" && "" && "Merhaba"); //.....Bos
console.log("12" && "5" && "Merhaba"); // Merhaba ---// Hepsi TRUE o nedenle sonuncuyu yazdirir
console.log(0 && "" && "Merhaba"); // 0 ---// 0 FALSE o yuzden ) yazdirir ve birakir




/* OR */
/* -------------------------------------------------------------------------- */

//OR
//Mutevazidir : En az bor dogru yeterlidir. Ilk gordugu TRUE degere sahip degeri yazdirir.
//HEPSI FALSE oldugunda FALSE deger uretir ve bunlardan sonuncusunu yazar.

console.log("object" || "" || 1 || 0); //object ---// Ilk gordugu true olan objecti yazdirdi
console.log("" || 0 || "" || false); //false ---// hepsi FALSE oldugu icin sonuncu olan false i yazdiriryor.

let ad = "Sema"
let yas = 17

if (ad === "Sema" || yas > 22) {
    console.log("Hos geldin");
} else {
    console.log("Bu sisteme giremezsin");
}


// {
//     isLogin || {
//         <div>
//             <p>Kullanici giris yapmalisin</p>
//             <button>Giris</button>
//         </div>
//     }
// }
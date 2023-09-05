/* -------------------------------------------------------------------------- */
/*                                  SORU - 1                                  */
/* -------------------------------------------------------------------------- */
// Harcadığın kadar kazan 

// Harcamanız   10 un katıysa size verilecek bonus puan ödemenizin 10 katı 
// Harcamanız   5 un katıysa size verilecek bonus puan ödemenizin 5 katı 
// Harcamanız   4 un katıysa size verilecek bonus puan ödemenizin 3 katı 

const harcama = 10;
let bonusPuan;

bonusPuan = (harcama % 10 === 0) ? (harcama * 10) :
    (harcama % 5 === 0) ? (harcama * 5) :
        (harcama % 4 === 0) ? (harcama * 3) :
            0;

console.log(`Bonus punani: ${bonusPuan}`);



/* -------------------------------------------------------------------------- */
/*                                  SORU - 2                                  */
/* -------------------------------------------------------------------------- */

// Girilen nesneye göre atılması gereken çöp kutusunu belirten program 
// Ekmek = > gıda çöpüne 
// şişe => Cam çöpü 
// karton => kağıt çöpüne

const nesne = "ekmek"
let copKutusu;

copKutusu = (nesne === "ekmek") ? ("gida copu") :
    (nesne === "sise") ? ("cam copu") :
        (nesne === "karton") ? ("kagit copu") :
            ("Siyah cop:)")

console.log(`Copunuzu ${copKutusu} kutusuna atiniz.`);


/* -------------------------------------------------------------------------- */
/*                                  SORU - 3                                  */
/* -------------------------------------------------------------------------- */

// Dart oyununda attığınız noktaya göre puan alıyorsunuz. Kullanıcıdan attığı 
// alanı girmesini isteyip puanını yazan program 

// Pano yarıçapı ve dış daire yarıçapı = 10 birim 
// Orta daire yarıçapı = 5 birim 
// İç daire yarıçapı = 1 birim 

// R > 10    0 puan verir,  
// 10 >= R > 5   1 puan verir,
// 5 >= R > 1   5 puan verir,  
// R <= 1 10 puan verir.

const birim = 10
let puan;

puan = (birim > 10) ? (`0 Puan`) :
    (birim <= 10 && birim > 5) ? (`1 Puan`) :
        (birim <= 5 && birim > 1) ? (`5 Puan`) :
            (birim <= 1) ? (`10 Puan`) :
                ("Gecersiz bir birim girdiniz")
console.log(`${puan} aldiniz`);


/* -------------------------------------------------------------------------- */
/*                                  SORU - 4                                  */
/* -------------------------------------------------------------------------- */

// Girilen iki renk karıştırılınca sonucun ne olduğunu gösteren programı oluşturun 
// ÖRN:  
// renk1:mavi 
// renk2: kırmızı 
// oluşan renk: Mor

const renk1 = "kirmizi"
const renk2 = "sari"
let olusanRenk;

olusanRenk = (renk1 === "mavi" && renk2 === "kirmizi") ? ("Mor") :
    (renk1 === "kirmizi" && renk2 === "sari") ? ("Turuncu") :
        (renk1 === "mavi" && renk2 === "sari") ? ("Yesil") :
            ("Hatali giris yaptiniz!!!")

console.log(olusanRenk);


/* -------------------------------------------------------------------------- */
/*                                  SORU - 5                                  */
/* -------------------------------------------------------------------------- */

// Dil kısaltması alarak bunun hangi dile karşılık olduğunu yazan programı switch yapısı ile oluşturup kullanıcıya “Bu web sitesi Türkçe olarak yazılmıştır” mesajı yazan program 
// Tr : Türkçe 
// En :  İngilizce 
// Es: İspanyolca 
// Fr: Fransızca
//Aksi takdirde Bilinmeyen dil yazdıran program

const kisaltma = "tr";
let dil;

switch (kisaltma) {
    case "tr":
        dil = "Turkce"
        break;
    case "en":
        dil = "ingilizce"
        break;
    case "es":
        dil = "Ispanyolca"
        break;
    case "fr":
        dil = "Fransizca"
        break;
    case "de":
        dil = "Almanca"
        break;
    default:
        dil = "Bilinmeyen bir dil"
        break;
}
console.log(`Bu web sitesi ${dil} ile yazilmistir.`);


/* -------------------------------------------------------------------------- */
/*                                  SORU - 6                                  */
/* -------------------------------------------------------------------------- */

// Bir türüne göre yakıt tüketimini hesaplayan switch yapısı ile oluşturunuz 
// Benzin : 8.5 
// Dizel: 6.2 
// Elektrik:0 

const yakitTuru = "Benzin"
let yakitTuketimi;

switch (yakitTuru) {
    case "Benzin":
        yakitTuketimi = 8.5
        break;
    case "Dizel":
        yakitTuketimi = 6.2
        break;
    case "Elektrik":
        yakitTuketimi = 0
        break;
    default:
        yakitTuketimi = "Hatali bir giris yaptiniz"
        break;
}
console.log(`Yakit tuketiminiz her 100 km'de ${yakitTuketimi} cent'dir`);


/* -------------------------------------------------------------------------- */
/*                                  SORU - 7                                  */
/* -------------------------------------------------------------------------- */

// Kullanıcının girdiği bir meyvenin hangi vitaminleri içerdiğini switch yapısı ile gösteren program 
// Elma : A ve C vitaminleri 
// Muz : A,B6 ve C vitaminleri 
// Portakal: C vitamini 
// Üzüm : C ve K vitaminleri

const meyve = "Uzum"
let vitaminler;

switch (meyve) {
    case "Elma":
        vitaminler = "`inde A ve C vitaminleri vardir."
        break;
    case "Muz":
        vitaminler = "`inde A, B6 ve C vitaminleri vardir."
        break;
    case "Portakal":
        vitaminler = "`inde C vitamini vardir."
        break;
    case "Uzum":
        vitaminler = "`inde C ve K vitaminleri vardir."
        break;
    default:
        vitaminler = "`i veri tabanimzda mevcut degildir!!!";
        break;
}
console.log(`${meyve} meyvesi${vitaminler}`);


/* -------------------------------------------------------------------------- */
/*                                  SORU - 8                                  */
/* -------------------------------------------------------------------------- */

// Bu yapıyı ternary ile yazın 
/*
if (ad === "John") { 
    selam = "Merhaba John!"; 
} else if (ad === "Alice") { 
    selam = "Merhaba Alice!"; 
} else { 
    selam = "Merhaba misafir!"; 
}
*/

const ad = "cihan"
let selam;

selam = (ad === "John") ? ("Merhaba John!") :
    (ad === "Alice") ? ("Merhaba Alice!") :
        ("Merhaba Misafir!")

console.log(selam);


/* -------------------------------------------------------------------------- */
/*                                  SORU - 9                                  */
/* -------------------------------------------------------------------------- */

// Kullanıcıdan iki sayı girişi alın ve bu iki sayının büyüklük ilişkisini kontrol eden bir ternary ifadesi oluşturun. Eğer ilk sayı ikinci sayıdan büyükse "Birinci sayı büyüktür.", eğer ikinci sayı ilk sayıdan büyükse "İkinci sayı büyüktür.", aksi halde "İki sayı eşittir." sonucunu ekrana yazdırın.

/*
const birinciSayi = prompt("Lutfen karsilastirmak istediginiz bir sayi giriniz?")
const ikinciSayi = prompt("Ve son olarak lutfen karsilastirmak istediginiz ikinci sayiyi giriniz?")
let karsilastirma;


karsilastirma = (birinciSayi>ikinciSayi) ? ("Birinci sayı büyüktür.") : 
                (ikinciSayi>birinciSayi) ? ("Ikinci sayı büyüktür.") : 
                ("Iki sayi esittir...")
console.log(`Girilen ${birinciSayi} ile ${ikinciSayi} karsilastirmasi: ${karsilastirma}`);
*/


/* -------------------------------------------------------------------------- */
/*                                  SORU - 10                                 */
/* -------------------------------------------------------------------------- */

// Notu 80den fazlaysa  GEÇTİ, 40 dan düşükse KALDI, 40-80 arası değerler içinde SINAV TEKRARI yazdıran programı  ternary yapısı ile oluşturun 

const not = 100
let sonuc;

sonuc = not <= 100 && not >= 0 ? 
        not >= 80 ? "Gectiniz" : 
        not < 40 ? "Kaldiniz" : 
        "SINAV TEKRARI" : 
        "Hatali not girisi yaptiniz. Lutfen 1 ile 100 arasinda bir not giriniz"

console.log(sonuc);

        

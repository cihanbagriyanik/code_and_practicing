
//? Console dan girilen bir sayinin pozitif, negatif yada 0 oldugunu tespit ederk yaziniz?

// const num = +prompt("Lutfen bir sayi giriniz...")
const num = 0
if (num > 0) {
    console.log("Girdiginiz sayi POZITIF bir sayidir...");
} else if (num < 0) {
    console.log("Girdiginiz sayi NEGATIF bir sayidir...");
} else {
    console.log("Girdiginiz sayi NOTR(0)'dir...");
}


//? Consale dan  3tam sayi alarak bunlarin en buyunu yazdirin

// const nr1 = +prompt("Lutfen karsilastirmak istediginiz 3 numaradan 1. sini giriniz...")
// const nr2 = +prompt("Lutfen karsilastirmak istediginiz 3 numaradan 2. sini giriniz...")
// const nr3 = +prompt("Lutfen karsilastirmak istediginiz 3 numaradan 3. sini giriniz...")
const nr1 = 5
const nr2 = 5
const nr3 = 5

if (nr1 > nr2 && nr1 > nr3) {
    console.log(`Girinlen 1. sayi sayilar arasinda en buyugudur: ${nr1}`);
} else if (nr2 > nr1 && nr2 > nr3) {
    console.log(`Girinlen 2. sayi sayilar arasinda en buyugudur: ${nr2}`);
} else if (nr3 > nr1 && nr3 > nr2) {
    console.log(`Girinlen 3. sayi sayilar arasinda en buyugudur: ${nr3}`);
} else {
    console.log(`Girinlen sayilar birbirine esittir...`);
}


//? 4 Islem makinesi yaziniz (2 Adet sayi icin)
/*
const islem = prompt("Yapmak istediğiniz işlemi seçiniz (+, -, *, /):");

if (islem === "+" || islem === "-" || islem === "*" || islem === "/") {
    const sayi1 = +prompt("Birinci sayıyı giriniz:");
    const sayi2 = +prompt("İkinci sayıyı giriniz:");

    let sonuc;

    if (islem === "+") {
        sonuc = sayi1 + sayi2;
        console.log(`Sonuç: ${sayi1} + ${sayi2} = ${sonuc}`);
    } else if (islem === "-") {
        sonuc = sayi1 - sayi2;
        console.log(`Sonuç: ${sayi1} - ${sayi2} = ${sonuc}`);
    } else if (islem === "*") {
        sonuc = sayi1 * sayi2;
        console.log(`Sonuç: ${sayi1} * ${sayi2} = ${sonuc}`);
    } else if (islem === "/") {
        if (sayi2 !== 0) {
            sonuc = sayi1 / sayi2;
            console.log(`Sonuç: ${sayi1} / ${sayi2} = ${sonuc}`);
        } else {
            console.log("Bölme işlemi sıfıra bölünemez.");
        }
    }
} else {
    console.log("Geçersiz işlem seçtiniz. Lütfen +, -, *, / işlemlerinden birini seçiniz.");
}
*/


//? Clarusway’dekihaftalık ders ve etkinlik programınızı, console’dangirilen gün değerine göre çıktı veren kodu switch-caseyapısı ile yazınız.
//todo  •Program
//todo  •Pazartesi, Salı ,Çarşamba, Perşembe -> InClass
//todo  •Cuma -> Teamwork
//todo  •Cumartesi -> InClass+ Workshop
//todo  •Pazar -> Self-Study
//todo  •Aksi takdirde -> Yanlisgungirildi.

// const gun = prompt("Lutfen bir gun giriniz...").toLowerCase();
const gun = "cuma"

switch (gun) {
    case "pazartesi":
    case "sali":
    case "carsamba":
    case "persembe":
        console.log("InClass");
        break;
    case "cuma":
        console.log("TeamWork");
        break;
    case "cumartesi":
        console.log("InClass+ Workshop");
        break;
    case "pazar":
        console.log("Self-Study");
        break;
    default:
        console.log("Yanlis gun girildi...");
        break;
}


//? Girilen nota göre Geçti veya Kaldı yazdıran programı yazınız. Geçme notunu 50olarak kabul edebilirsiniz?

const not = 100

const sonuc = (not >= 0 && not <= 100) ? ((not >= 50) ? "Geçti" : "Kaldı") : "Geçersiz not";

console.log(sonuc);


//?    Girilen nota göre Kaldı, Şartlı Geçti veya Geçtiyazdıran programı yazınız.
//todo • Not < 40 ise Kaldı
//todo • Not 40-50 arası Şartlı Geçti
//todo • Not > 50 ise Geçti

const note = 49

const result = (note >= 0 && note <= 100) ? ((note >= 50) ? "Gecti" : (note >= 40) ? "Sartli Gecti" : "Kaldi") : "ERROR"

console.log(result);


//?     Console’dan kişinin maaşını alan
//todo -Eğer girilen maaş asgari ücretten az ise maaşa %50 zam
//todo -Aksi takdirde %10 zam yapan kodu Ternary deyimi kullanarak yazınız.
//! asgari maas 2000 €
const maas = 2000

const zam = maas < 2000 ? maas * 1.50 : maas * 1.10;

console.log((zam).toFixed());


//?     Console’dan kişinin gelir ve gider miktarını alan
//todo -eğer kişinin geliri giderinden en az asgari ücret kadar fazla ise Kredi Verilebilir
//todo -değilse Kredi Verilemez şeklinde çıktı veren kodu 
//? Ternary deyimi kullanarak yazınız.

const asgariMaas = 2000
const gelir = 3000
const gider = 1000

const kredi = asgariMaas <= (gelir - gider) ? "Kredi verilebilir" : "Kredi verilemez"

console.log(kredi);


/* -------------------------------------------------------------------------- */
//*                                  ODEVLER                                  */
/* -------------------------------------------------------------------------- */


//?   Soru-1: Girilen not değerine karşılık gelen harfli notu bildiren programı yazınız.
//todo   •0-25 arası FF
//todo   •26-45 arası DD
//todo   •46-65 arası CC
//todo   •66-75 arası BB
//todo   •76-90 arası BA
//todo   •91-100 arası AA  olarak çevrilmelidir.
//todo   •100’den büyük veya 0‘dan küçük değerlerde hata mesajı verecektir.

const grade = 76

switch (true) {
    case grade >= 0 && grade <=25:
        console.log("FF");
        break;
    case grade >= 26 && grade <=45:
        console.log("DD");
        break;
    case grade >= 46 && grade <=65:
        console.log("CC");
        break;
    case grade >= 66 && grade <=75:
        console.log("BB");
        break;
    case grade >=76 && grade <=90:
        console.log("BA");
        break;
    case grade >= 91 && grade <=100:
        console.log("AA");
        break;
    default:
        console.log("ERROR");
        break;
}


//? Soru-2: Girilen ay ismine karşılık gelen sıra numarası veren programı switch-case yapısı kullanarak yazınız.

const ay = ("   haziran").toLowerCase().trim()

switch (true) {
    case ay === "ocak":
        console.log(1);
        break;
    case ay === "subat":
        console.log(2);
        break;
    case ay === "mart":
        console.log(3);
        break;
    case ay === "nisan":
        console.log(4);
        break;
    case ay === "mayis":
        console.log(5);
        break;
    case ay === "haziran":
        console.log(6);
        break;
    case ay === "temmuz":
        console.log(7);
        break;
    case ay === "agustos":
        console.log(8);
        break;
    case ay === "eylul":
        console.log(9);
        break;
    case ay === "ekim":
        console.log(10);
        break;
    case ay === "kasim":
        console.log(11);
        break;
    case ay === "aralik":
        console.log(12);
        break;
    default:
        console.log("ERROR");
        break;
}


//?  Soru-3: Girilen farklı 3 tam sayının toplamını, çarpımını, en küçüğünü ve en büyüğünü yazdıran programı yazınız.

const num1 = 4
const num2 = 7
const num3 = 4

const toplam = num1+num2+num3
console.log(`Toplam : ${toplam}`)
const carpim = num1*num2*num3
console.log(`Carpim : ${carpim}`)

const end = (num1 > num2 && num1 > num3) ? `EN buyuk sayi ${num1} sayisidir` : (num2 > num1 && num2>num3) ? `EN buyuk sayi ${num2} sayisidir` : `EN buyuk sayi ${num3} sayisidir`

console.log(end);


//? Soru-4: Girilen sayıların tek veya çift olduğunu bildiren programı tasarlayınız.(Ternary deyimi ile yapınız).


//? 4 işlem hesap makinası nı fonksiyonlari ile tekrardan yazalım.

function toplama(a, b) {
    return a + b
}
function cikarma(a, b) {
    return a - b
}
function bolme(a, b) {
    return a / b
}
function carpma(a, b) {
    return a * b
}
console.log(toplama(5, 55));
console.log(cikarma(55, 5));
console.log(carpma(5, 5));
console.log(bolme(50, 5));


//? Bir sayıyı parametre olarak alan ve bu sayının tek veya çift olduğunu hesaplayıp sonucu ana programa döndüren fonksiyonu yazınız.
//todo •Fonksiyon sonucu TEK veya ÇİFT olarak döndürmelidir ve sonuç ana programda ekrana bastırılmalıdır.

function tekMiciftMi(a) {
    return (a % 2 === 0) ? "CIFT" : "TEK"
}
console.log(tekMiciftMi(2));

//* -------------------------------------------------------------------------- */
//! ARROW FUNCTION

const tekMiciftMii = (a) => (a % 2 === 0) ? "CIFT" : "TEK";
console.log(tekMiciftMii(2));
/* -------------------------------------------------------------------------- */
const yasHEsapla = (dogumTarihi) => new Date().getFullYear() - dogumTarihi
console.log(yasHEsapla(1988));
/* -------------------------------------------------------------------------- */
// const usAl = (taban, us) => taban ** us
// console.log(usAl(3, 3));
/* -------------------------------------------------------------------------- */
const selam = () => alert("Merhaba")
// console.log(selam());
/* -------------------------------------------------------------------------- */
const topla = (a, b) => {
    const sonuc = a + b
    return sonuc
}
console.log(topla(2, 6));



//? Bir dairenin alanını hesaplayan fonksiyonu arrow fonksiyon olarak yazınız.Yarı çap prompt ile girilmeli ve sonuç ana programda yazdırılmalıdır.

// const r = +prompt("Lutfen Alani ni hesaplamak istediginz darinin yari capini giriniz")
// const alanHesapla = (r) => (Math.PI).toFixed(2) * r ** 2
// console.log(alanHesapla(5).toFixed(2));

//? Doğum tarihini parametre olarak alan ve ana programa yaşı hesaplayıp döndüren fonksiyonu yazınız.

const yasHesapla = (yil, ay, gun) => {

    const yilFarki = new Date().getFullYear() - yil;
    const ayFarki = new Date().getMonth() - ay;
    const gunFarki = new Date().getDate() - gun;

    const sonuc = `Siz ${yilFarki} yil, ${ayFarki} ay, ${gunFarki} gun yasindasiniz`
    return sonuc;
}

console.log(yasHesapla(1988, 3, 14));


//* -------------------------------------------------------------------------- */
//! Fonksiyonun baska fonksiyonu cagirmasi
const meyveDilimle = (meyveSayısı) => meyveSayısı * 4;
const meyveSuyuHazırla = function (portakal, elma, muz) {
    const pDilimSayısı = meyveDilimle(portakal);
    const eDilimSayısı = meyveDilimle(elma);
    const mDilimSayısı = meyveDilimle(muz);
    const meyveSuyu = `Meyve Suyu ${pDilimSayısı} dilim portakal,
${eDilimSayısı} dilim elma ve ${mDilimSayısı} dilim muz'dan oluşmaktadır`;
    return meyveSuyu;
};
console.log(meyveSuyuHazırla(2, 1, 3));
console.log(meyveSuyuHazırla(4, 2, 1));

//? Taban ve yükseklik değerlerini parametre olarak alan ve bir üçgenin alanı nı hesaplayarak ana programa döndüren fonksiyonu yazınız.
//! çeşitkenar üçgenlerde = (taban * h) / 2

const ucgenAlan = (t, h) => (t * h) / 2
console.log("Olculeri verielen eskenar ucgenin alani: " + ucgenAlan(2, 3) + "cm2 dir.");


//* -------------------------------------------------------------------------- */

//? kareAl, küpAl, üsAl şeklinde üç adet farklı arrow fonksiyonu tanımlayın.Bu fonksiyonların ana programdan gereken parametreleri alarak sonuçları ana programa döndürmeli gerekmektedir.


const kareAl = (a, b) => a * b
const kupAl = (a, b, h) => a * b * h
const usAl = (a, b) => a ** b
function Hesapla() {
    const alanHesapla = kareAl(2, 2)
    const kupHesapla = kupAl(2, 2, 3)
    const ussuHesapla = usAl(3, 3)
    const sonuc = `Girilen olculerderki karenin alani ${alanHesapla}cm2 dir, kupu ${kupHesapla}cm3 dur ve ayrica verilen degerin ussu ${ussuHesapla} dir `
    return sonuc;
}
console.log(Hesapla());


//? Yıl değerini parametre olarak alan ve bu yılın artık yıl olup olmadığını hesaplayarak sonucu ana programa döndüren fonksiyonu function-expression yöntemi ile yazınız. 
// todo NOT: Yıl 4’e tam bölünüyorsa VE (100'e tam bölünmüyorsa VEYA 400'e tam bölünüyorsa)artık yıldır aksi takdide değildir.

const artikMi = function (yil) {
    let sonuc = (yil % 4 === 0 && yil % 100 !== 0 || yil % 400 === 0) ? `${yil} yili artik yil dir.` : `${yil} yili artik yil DEGILDIR.`
    return sonuc;
}
console.log(artikMi(2001));
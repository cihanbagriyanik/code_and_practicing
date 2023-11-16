
const arabalar = ["Mercedes", "Tofas", "Anadol", "Ferrari"]

console.log(arabalar);
console.log(arabalar[0]);

const arabam = arabalar[arabalar.length - 1]
console.log(arabam);

arabalar[0] = "DOGAN SLX"
console.log(arabalar);
arabalar[3] = "TOROS"
console.log(arabalar);

// arabalar = ["FIAT", "AUDI","Citroen"]

const rakamlar = [-5, 15, 22, -4, 45, 78, -25];
let toplam = 0;
for (let i = 0; i < rakamlar.length; i++) {
    toplam += rakamlar[i];
}
console.log(toplam);


const dizi = [-5, 15, 22, -4, 45, 78, -25];
const topla = (n) => {
    let negatifler = 0;
    let pozitifler = 0;
    for (let i = 0; i < n.length; i++) {
        if (n[i] < 0) {
            negatifler += n[i];
        } else {
            pozitifler += n[i];
        }
    }
    console.log(`Dizideki Pozitif Sayıların Toplamı: ${pozitifler}`);
    console.log(`Dizideki Pozitif Sayıların Toplamı: ${negatifler}`);
};
topla(dizi);


//? SORU - 1 Notlar dizisinin ortalamasını hesaplayarak sonucu döndüren fonksiyonu FOR döngüsü ile yazınız.

const notlar = [55, 77, 23, 89, 100];
let toplaBol = 0

const ortalama = (notlar) => {
    for (let i = 0; i < notlar.length; i++) {
        toplaBol += notlar[i];
    }
    return toplaBol / notlar.length;
}
console.log(ortalama(notlar));


//! -------------------------------------------------------------------------- */
//*FOR IN *******************************************
const sayılar = [-5, 15, 22, -4, 45, 78, -25];
let sonuç = 0;
for (let i in sayılar) {
    sonuç += sayılar[i];
}
console.log(sonuç);
/* -------------------------------------------------------------------------- */
const adlar = ["Ahmet", "Can", "Mustafa", "Ayşe", "Elif"];
const soyAdlar = ["Öztürk", "Yılmaz", "Arı", "Çalı", "Yazı"];

const birleştir = (x, y) => {
    let adVeSoyadlar = [];
    for (let i in x) {
        adVeSoyadlar[i] = `${x[i]} ${y[i]}`;
    }
    return adVeSoyadlar;
};
console.log(birleştir(adlar, soyAdlar));

//* FOR OF *******************************************

const num = [-5, 15, 22, -4, 45, 78, -25];
let sonuc = 0;
for (let sayi of num) {
    sonuc += sayi;
}
console.log(sonuc);


let cars = ["BMW", "Volvo", "Mini"];
let yazı = "";

for (let arac of cars) {
    yazı += arac + " ";
}
console.log(yazı);

//! -------------------------------------------------------------------------- */
//!                                  IMPORTANT                                 */
//! -------------------------------------------------------------------------- */

//* forEach() *******************************************

let öğrenciler = ["John", "Ali", "Ahmet"];

// öğrenciler.forEach(yazdır);
// function yazdır(v) {
// console.log(v);
// }

öğrenciler.forEach((a) => console.log(a));

//? Bir dizideki elemanların toplamını bularak sonucu konsola FOR EACH yardımıyla yazdırınız.

const dizi3 = [65, 44, 12, 4, -20, 19];
let result = 0

dizi3.forEach((x) => result += x)

console.log(result);


/* -------------------------------------------------------------------------- */
const dizi5 = [-5, 24, -13, 7];
const yeniDizi = [];
dizi5.forEach(katAl);
function katAl(değer, indis, dizi5) {
    yeniDizi[indis] = değer * 5;
}
console.log(yeniDizi);

const dizi6 = [-5, 24, -13, 7];
const yDizi = [];
dizi6.forEach((d, i) => yDizi[i] = d * 5);
console.log(yDizi);


//* map() *******************************************

const rakamlar1 = [3, 7, 17, 8, 9, 3, 0]

const katAlınmış = rakamlar1.map((x) => x * 5);
console.log(katAlınmış);

//? ORNEK ---------- Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.

let isimler = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"];

const buyukHarfli = isimler.map((a) => a.toUpperCase());
console.log(buyukHarfli);

//? ORNEK ---------- tlFiyatlar dizisindeki fiyatların Euro ve dolar karşılıklarını hesaplatarak yeni dizlere kaydediniz.
const tlFiyatlar = [100, 150, 100, 50, 80];


const euro = 18.19;
const dolar = 8.16;

tlFiyatlar.map((x) => console.log(`Euro Karsiligi : ${(x / euro).toFixed(1)}`))
tlFiyatlar.map((x) => console.log(`Dolar Karsiligi : ${(x / dolar).toFixed(1)}`))

//? ORNEK ---------- tlFiyatlar dizidekisindeki ürünlere zam yapılmak isteniyor. Fiyatı 100 TL den fazla olanlara %10 zam, 100 TL den az olanlara ise %15 zam yapılmak isteniyor. Ayrıca, zamlı olan yeni değerleri örnekteki gibi diziye saklamak istiyoruz.

const degerler = tlFiyatlar.map(function (d, i) {
    if (d > 100) {
        return `${i + 1}. Urun Fiyati : ${(d * 1.1).toFixed(1)}`
    } else {
        return `${i + 1}. Urun Fiyati : ${(d * 1.15).toFixed(1)}`
    }
});

console.log(degerler);

//* filter() *******************************************

//? Ornek Koordinatlar dizisindeki negatif koordinatları alıp yeni bir diziye saklayan uygulamayı filter() ile yapınız.

const koordinatlar = [-100, 150, -32, 43, -20]

negatifKoordinatlar = koordinatlar.filter((x) => x < 0);
console.log(negatifKoordinatlar);

//* PIPELINE ******************************************* 
//! PIPELINE (CHAINING) Dizi iterasyon metotları ardı ardına kullanılabilir. Böylelikle ardışık bir şekilde diziler işlenebilir.
//? ORNEK ---------- Koordinatlar dizisindeki negatif koordinatları seçerek bunları pozitife çevirip alt alta konsola bastıran uygulamayı yazınız.

koordinatlar.filter((x) => x < 0).map((t) => t * -1).forEach((y) => console.log(y))

//? ORNEK Bireyler dizisindeki kişilerden adı "Belirtilen" harf ile başlayanları seçerek ayrı bir diziye saklayan uygulamayı yazınız 

const bireyler = ["Mustafa", "Murat", "Ahmet", "mustafa", "Ayşe", "Canan"];

bireyler.filter((x) => x.toLowerCase().startsWith("m")).map((y) => y).forEach((z) => console.log(z))


//* reduce() *******************************************
//? ORNEK ---------- Koordinatlar dizisindeki değerlerin toplamını hesaplayarak konsola bastıran uygulamayı reduce() ile yazınız.

// const koordinatlar = [-100, 150, -32, 43, -20]
const toplamm = koordinatlar.reduce(function (x, y) {
    return x + y;
});
console.log(toplamm);

//? ORNEK ---------- Koordinatlar dizisindeki değerlerin toplamını, ara değerleri de göstererek konsola bastıran uygulamayı reduce() ile yazınız.

const toplammm = koordinatlar.reduce(function (x, y, i) {
    console.log(`iterasyon ${i} ${x}`);
    return x + y;
});
console.log(toplammm);

//? ORNEK ----------  Koordinatlar dizisindeki değerlerin ortalamasını hesaplayarak konsola bastıran uygulamayı reduce() ile yazınız.

const ortalamaa = koordinatlar.reduce(function (x, y, i, arr) {
    // Toplamı biriktiriyoruz
    x += y;

    // Son elemana ulaştığımızda, toplamı dizinin uzunluğuna bölerek ortalama hesaplıyoruz.
    if (i === arr.length - 1) {
        return x / arr.length;
    }

    return x;
});

console.log(ortalamaa);


//? ORNEK ----------  Bir Firma, 3000 TL den az olan maaşlara %10 zam yapmak istiyor ve zam yapılan bu kişilere toplam kaç TL ödeneceğini bilmek istiyor. İlgili programı yazınız.

const maaslar = [3000, 2891, 3500, 4200, 7000, 2500];

maaslar.filter((a) => a <= 3000).map((x) => (x * 1.10).toFixed()).forEach((y,i) => console.log(`${i+1}. elemanin yeni maasi ${y}`))















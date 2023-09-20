
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


//? Console dan girilen bir sayinin pozitif, negatif yada 0 oldugunu tespit ederk yaziniz?

// const num = +prompt("Lutfen bir sayi giriniz...")
const num = 0
if (num>0) {
    console.log("Girdiginiz sayi POZITIF bir sayidir...");
} else if (num<0) {
    console.log("Girdiginiz sayi NEGATIF bir sayidir...");
} else {
    console.log("Girdiginiz sayi NOTR(0)'dir...");
}

//? Consale dan  3tam sayi alarak bunlarin en buyunu yazdirin

const nr1 = +prompt("Lutfen karsilastirmak istediginiz 3 numaradan 1. sini giriniz...")
const nr2 = +prompt("Lutfen karsilastirmak istediginiz 3 numaradan 2. sini giriniz...")
const nr3 = +prompt("Lutfen karsilastirmak istediginiz 3 numaradan 3. sini giriniz...")


if (nr1>nr2 && nr1>nr3) {
    console.log(`Girinlen sayilar arasinda ${nr1} en buyugudur...`);
} else if (nr2>nr1 && nr2>nr3) {
    console.log(`Girinlen sayilar arasinda ${nr2} en buyugudur...`);
} else if (nr3>nr1 && nr3>nr2) {
    console.log(`Girinlen sayilar arasinda ${nr3} en buyugudur...`);
} else {
    console.log(`Girinlen sayilar birbirine esittir...`);
}
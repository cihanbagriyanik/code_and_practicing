
//? Console dan girilen bir sayinin pozitif, negatif yada 0 oldugunu tespit ederk yaziniz?

const num = +prompt("Lutfen bir sayi giriniz...")

if (num>0) {
    console.log("Girdiginiz sayi POZITIF bir sayidir...");
} else if (num<0) {
    console.log("Girdiginiz sayi NEGATIF bir sayidir...");
} else {
    console.log("Girdiginiz sayi NOTR(0)'dir...");
}
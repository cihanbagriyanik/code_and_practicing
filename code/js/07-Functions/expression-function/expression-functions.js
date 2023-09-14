/* -------------------------------------------------------------------------- */
//!                             EXPRESSION FUNCTION                           */
/* -------------------------------------------------------------------------- */
//! İsimsiz fonksiyondur
//! Bir değişkene atanan bir fonksyiondur. Bu nedenle bir dönüş değeri olmalıdır.
//! Parametre göndermek için değişken adını yazıp parantez içinde parametreler veriyoruz.

const EvenOdd = function(number){
    return number %2 === 0 ? "Even" : "Odd" ;
}
console.log(EvenOdd(57));

//* arguments kelimesi exp functionlarda da gecerlidir.
const degerler = function(){
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]); 
    }
}
degerler(45,78,56)

//* -------------------------------------------------------------------------- */
//? 3 sayidan en buyugunu bulduran fonksiyon

const EnBuyuk = function (number1,number2,number3) {
    let max = number1
    max = number2 > max ? number2 : max ;
    max = number3 > max ? number3 : max ;
    return max;
}
console.log(EnBuyuk(5,1,3));
//* ------------------------------------------------ */
//* Arguments ile 
const enbBul=function(){
    let enb=arguments[0]
    for(let i=1;i<arguments.length; i++){
        if ( arguments[i]>enb) {
            enb=arguments[i]
        }
    }
    return enb
}
console.log(enbBul(900,345,123,23,545,112,5454,76767,22));


console.clear();
//* ------------------------------------------------ */
//!Bir fonksiyon icinde baska bir fonknsiyon cagirilabilir.

const add = function(n1,n2)
{
    return n1+n2
}
const sub = function(n1,n2)
{
    return n1-n2
}
const mul = function(n1,n2)
{
    return n1*n2
}
const div = function(n1,n2)
{
    return (n1/n2).toFixed(2)
}

const compute = function (n1,n2,op) {
    let result=0;
    switch (op) {
        case "+":
            result=add(n1,n2)
            break;
        case "-":
            result=sub(n1,n2)
            break;
        case "*":
            result=mul(n1,n2)
            break;
        case "/":
            result=div(n1,n2)
            break;
        default:
            break;
    }
    console.log(result);
}
compute(34,12,"/")


//* ------------------------------------------------ */
//? Dollars and cents
//? çalıştığınız şirket ürün tutarları girecek .Sizde girilen tutarları biçimlendirmesini dolar ve sent olarak döndürecek bir program yazacaksınız

//? 39.99 becomes $39.99
//? 3 needs to become $3.00
//? 3.1 needs to become $3.10

function dollars() {
    const price = tutar.toFixed(2)
    return "$" + price;
}
const tutar = 3.1;
console.log(dollars(tutar));


//* ------------------------------------------------ */
//? Bir ülkedeki ortalama yaşam ömrü 75 yıl olduğuna göre, 
//?  doğum yılı girilen kişinin yaşını hesaplattıran
//?  yaşına göre ortalama ... ömrünüz kaldı yazıp önerilerde bulunan program

//?  0-10 : " Sen bu değerleri önemseme hayatın tadını çıkar"
//?  10-20 : " Gezmek görmek istediğin yerler varsa yola çıkma zamanı.. "
//?  20-30 : " Gezmeye devam gorulecek yer cok "
//?  30-40 : " Gezmeye devam gorulecek yer cok "
//?  40-50 : " Gezmeye devam gorulecek yer cok "
//?  50-60 : " Gezmeye devam gorulecek yer cok ama daha dikkat ederek "
//?  60-75 : " Gezmeye devam gorulecek yer cok ama dr kontrollerini aksatmadan:) "

function hesaplaYasVeOneri(dogumYili) {
    const ortalamaYasamOmrü = 75;
    
    const suAnkiYil = new Date().getFullYear();

    const yas = suAnkiYil - dogumYili;

    let oneri = ""

    switch (true) {
        case yas >= 0 && yas <= 10:
            oneri = "Sen bu değerleri önemseme, hayatın tadını çıkar!";
            break;
        case yas > 10 && yas <= 20:
            oneri = "Gezmek ve görmek istediğin yerlere gitme zamanı!";
            break;
        case yas > 20 && yas <= 30:
        case yas > 30 && yas <= 40:
        case yas > 40 && yas <= 50:
            oneri = "Gezmeye devam et, görmek istediğin yerler çok!";
            break;
        case yas > 50 && yas <= 60:
            oneri = "Gezmeye devam et, ama daha dikkatli ol!";
            break;
        case yas > 60 && yas <= 75:
            oneri = "Gezmeye devam et, ama doktor kontrollerini aksatma!";
            break;
        default:
            oneri = "Üzgünüm, geçerli bir yaş değeri girmelisiniz.";
    }

    const kalanYas = ortalamaYasamOmrü - yas;

    const sonucMetni = `Yaşınız: ${yas} yıl. Ortalama yaşam ömrünüzden kalan süre: ${kalanYas} yıl. Öneri: ${oneri}`;

    return sonucMetni;
}

const dogumYili = 1990; 
const sonuc = hesaplaYasVeOneri(dogumYili);
console.log(sonuc); 

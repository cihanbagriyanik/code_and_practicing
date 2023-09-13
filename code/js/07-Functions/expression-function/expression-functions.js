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
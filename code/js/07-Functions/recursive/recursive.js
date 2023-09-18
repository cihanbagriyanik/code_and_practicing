/* -------------------------------------------------------------------------- */
//*                         FONKSİYONLAR - RECURSIVE                          */
/* -------------------------------------------------------------------------- */
//* Kendi kendi çağıran fonksiyona recursive fonksiyon denilir.

//* Özellikle karmaşık hesaplamaların kodlamasını kolaylaştırmak için kullanılır.
//* Ancak, dikkatli kullanmak gerekir. Yoksa stack overflow hatası alınabilir.


//?sayma sayılarının ilk 6 terim toplamını bulunuz
let toplam = 0;
const add = (sayi) => {
    for(let i = 1; i <= 6; i++){
        toplam += i
    }
    return toplam;
}
console.log(add(6));

//todo recursive ile cozumu

const topla = (sayi) => {
    if(sayi < 1){
        return sayi
    } else {
        return topla (sayi-1) + sayi
    }
}
console.log(topla(6));

//? ORNEK: Girilen n. terimdeki Fibonacci sayısını  yazdıran fonksiyonu recursive olarak kodlayınız.

//? FIBONACCI terimleri:   1, 1, 2, 3, 5, 8, 13, 21, 34 ...
//!fibonacci dizisindeki  n. terimi  bulma fonksiyonu

console.log("************ 5- RECURSION *************");

const fibo = (n) => {
    if(n<2){
        return n
    } else {
        return fibo(n-1) + fibo(n-2)
    }
}
console.log(fibo(6));

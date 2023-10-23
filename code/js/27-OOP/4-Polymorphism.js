//* ======================================================
//*     OOP - Inheritance and Polymorphism(ES6)
//*         (kalıtım,miras)ve(çok biçimlilik)
//* ======================================================

//? Extends keyword ü, parent class ın işlevselliğini child class a genişletmek (extend) için kullanılır..(INHERITANCE)

//* Polymorphism  object-oriented programming concept li bir programlama kavramıdır,bir variable ın, nesnenin, yada fonksiyonun,birden çok form alma özelliğini ifade eder

//* In the OOP, Polymorphism genellikle  Overloading and Overriding le gerçekleştirilir (overriding=aynı ada sahip iki fonksiyon tanımlarsanız, tanımlanan sonuncusu önceden tanımlanmış sürümü geçersiz kılar ve fonsiyona her çağrı yapıldığında, son tanımlanan fonksiyon yürütülür.)(overloading=overloading demektir, javascriptte böyle denmez, aynı adlarla fonksiyonu işlemek denir ve js  direk overloading i desteklemez, manuel uğraşmak gerekir )

class Book {
    constructor(a, b, c) {
        (this.author = b),
        (this.title = a),
        (this.year = c),
        (this.ozetFunction = function () {
            return `${this.title} kitabini ${this.year} yilinda ${this.author} yazmistir.`;
        });
    }

    yilHesapla() {
        return 2023 - this.year;
    }
}

//! OVERRIDING
class Dergi extends Book {
    constructor(title, author, year, mounth) {

        super(title, author, year, mounth)

        this.mounth = mounth
    }

    //! Overriding yaptigimiz fonksiyon
    yilHesapla() {
        return `${this.title} cok guzel bir dergidir`
    }

}

const dergi1 = new Dergi("kasagi", "omer seyfettin", 1990, "eylul")

console.log(dergi1);
console.log(dergi1.yilHesapla());


//! OVERLOADING 
// Diğer programlama dillerinden farklı olarak JavaScript , Function Overloading'i desteklemez . 
// İşte JavaScript'in Function Overloading i desteklemediğini gösteren küçük bir kod. 
function gel(arg1) {
    console.log(arg1);
}
function gel(arg1,arg2,arg3) {
    console.log(arg1,arg2,arg3);
}

gel("naber") //naber undefined undefined
gel("naber","nasilsin","iyimisin") //naber nasilsin iyimisin

// Çıktıdaki "undefined" ifadesinin nedeni şudur: JavaScript'te aynı adla iki işlev tanımlanırsa, son tanımlanan işlev önceki işlevin üzerine yazar. 
// Bu durumda, gel(arg1) öğesinin üzerine gel(arg1,arg2,arg3) tarafından yazılmıştır, ancak 
// işleve yalnızca bir Argüman ("naber") ilettik. Bu, ikinci ve üçüncü argümanın tanımsız olduğu anlamına gelir, yani ikinci argümanı yazdırmaya çalıştığımızda, "tanımsız" olarak yazdırılır.
// overloading işlevinin JavaScript'te desteklenmediğini gördük, ancak overloading işlevini kendi başımıza uygulayabiliriz; bu, daha fazla sayıda ve daha fazla türde argüman söz konusu olduğunda oldukça karmaşıktır. Aşağıdaki kod, JavaScript'te overloading işlevinin nasıl uygulanacağını anlamanıza yardımcı olacaktır.
//* https://www.geeksforgeeks.org/function-overloading-in-javascript/

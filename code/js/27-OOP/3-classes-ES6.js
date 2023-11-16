//* ======================================================
//*             OOP - Classes (ES6)
//* ======================================================

//? Classlar,  objects oluşturmak için template (şablondur).
//? JS deki Classes,   prototypes üzerine kuruludur,  aynı zamanda ES5 syntax ından farklı bazı syntax and semantics e sahiptir .
//? Aslında  class keyword ü  ES6 da tanıtılmıştır, but is syntactical sugar (yalnızca dili kullanmanın bazı yönlerini daha kolay ve genel olarak daha keyifli hale getirmek için eklenen bir dil özelliği için kullanılan bir terimdir.), JavaScript  prototype-based dir.

class Book {
  constructor(a, b, c) {

    (this.author = b),
      (this.title = a),
      (this.year = c),
      (this.ozetFunction = function () {
        return `${this.title} kitabini ${this.year} yilinda ${this.author} yazmistir.`;
      });
  }

  //?bu alt kısma yazdıklarımız direk kalıbın prototype alanına gider (ES6 İLE biz belirtmeden)
  yilHesapla() {
    return 2023 - this.year;
  }
}

const book1 = new Book("safaaht", "m.akif", 1910);
console.log(book1);
console.log(book1.yilHesapla());

//? INHERITANCE
//* Book object kalibindan Dergi object ine kalip getir


class Dergi extends Book {
  constructor(author, title, year, d) {
    super(author, title, year);

    this.mounth = d;
  }
}

const dergi1 = new Dergi("kafa", "ibrahim büyükak", 1980, "eylül");


console.log(dergi1);
console.log(dergi1.yilHesapla());


class Gazete extends Book {
  constructor(author, title, year, d, e) {
    super(author, title, year)

    this.mounth = d
    this.fiyat = e
  }


}

const gazete1 = new Gazete("sabah", "", 1932, "aralik", 20)

console.log(gazete1);

//! extends edildiği zaman, atadan gelen her veriyi kullanmak zorundayız, en fazla value kısmını boş " " bırakabiliriz

document.querySelector("h2").textContent = gazete1.year


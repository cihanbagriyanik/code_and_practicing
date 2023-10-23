//* ======================================================
//*          OOPS- Object Constructor (ES5)
//* ======================================================

//*Object Constructor
//* Javascript is a prototype-based language.
//* Tüm JavaScript nesneleri, bir prototipten (ilk örnek)özellikleri ve yöntemleri devralır (inherit)
//* Object prototipi, prototip miras zincirinin en üstündedir.
//* For example, Date and Array objects,   Object prototype den devralır

//* Object Constructor
//! Book ismi büyük harfle,constructor olduğu biz tarafından anlaşılsın diye. anne karnında bebek var doğarsa değeri olur (üstte constructor anne karnındaki bebek, altta book1 oluşturmak=bebeğin doğması)
//!arrow function this keyword unu desteklemediği için burada function decleration yazımını tercih ettik

function Book(a, b, c) {
  (this.author = b),
    (this.title = a),
    (this.year = c),
    (this.ozetFunction = function () {
      return `${this.title} kitabini ${this.year} yilinda ${this.author} yazmistir.`;
    });
}

const book1 = new Book("karamazov", "dostyevski", 1980);
const book2 = new Book("yaprak dokumu", "resat nuri", 1950);

console.log(book1);
console.log(book2);

document.querySelector("h2").textContent = book2.ozetFunction();

//? new keyword ü  Book Constructor ı parametrelerle çağırır.
//? Constructor, Book object in bir örneğini kalıbını oluşturur.
//? Constructor daki tüm variablelar ve functionlar, oluşturulan her  single örneğe (instance) eklenir

//!kalıp ta prototype alanına ulaşmak için alttaki gibi bir syntax kullanılır
//*Book un prototype alanına yeni bir parametre ekledik ama bellekte yer kaplamaz, ihtiyaç olunca child lar kullanır

Book.prototype.tur = "roman";
Book.prototype.yilHesapla = function () {
  return 2023 - this.year;
};
console.log(book2);
console.log(book2.tur);

// document.querySelector("h2").textContent = book2.tur // out : roman

console.log(book2.yilHesapla());

//?direk object lerime açıktan bir value eklemek istersem, bellekte yer kaplar, alttaki gibi yazılır
book1.fiyat = 100;
console.log(book1);
console.log(book2);

//! OKUL YONETIMINI HATIRLA
//? INHERITANCE (Miras)

function Dergi(title, author, year, d) {
  Book.call(this, title, author, year);

  this.month = d;
}

//*Book object inden (kalıbından) türetilen Dergi kalıbına, Book un prototype alanındaki bilgiler (ES5 te) direk gelmez,gelmesini istiyorsak alttaki kodu (daha child oluşturmadan önce)yazmalıyız
Dergi.prototype = Object.create(Book.prototype);

const dergi1 = new Dergi("kafa", "ibrahim", 1980, "eylul");
const dergi2 = new Dergi("nokta", "hasan can", 1960, "kasim");

console.log(dergi1);
console.log(dergi1.ozetFunction());

console.log(dergi1.yilHesapla());

//* ======================================================
//*        OOP - Static and Private  (ES6)
//* ======================================================

//? Static degiskenler ve fonksiyonlar butun bir class'i ilgilendiren
//? verileri tutmak veya degistirmek icin elverislidir.

//?  nesnelerden bagimsiz sadece ilgili class' a ait bir degiskene
//? ihtiyac varsa o zaman static degisken kullanmak mantiklidir.

//! ENCAPSULATİON OOP'nin temel unsurlarindan birisidir.
//! Bir class icerisindeki degeri/durumu class disindan dogrudan ve
//! izinsiz erisimlere kapatmak icin kullanilir.

//! Encapsulation, private degiskenler ve private fonksiyonlar yardimiyla yapilir.
//! ES6 ve sonrasinda private degisken ve metotlari belirtmek icin
//! # (hash) kullanilir.

//! Private degiskenlere dogrudan erisilemezler. Bunlara erismek icin class
//! icerisinde tanimlanan public (genel) erisimli getter ve setter metotlar
//! kullanilir.

//! Private metotlara ise class disarisindan da erisilemez.
//! Private metotlara ancak class icerisindeki diger metotlar ile erisilebilir.

class Book {
    //!private değişken tanımlanması
    #id;
    #name;
    //!static değişken tanımlanması
    static counter = 0;
  
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
      this.#id = 44;
      this.#name = "osman";
  
      this.getirTitle = function () {
        return this.title;
      };
      Book.counter++;
      Book.id++;
    }
  
    //!alttaki kod, atanın (Book) child lara id değişkenini görme izni
    getId() {
      return this.#id;
    }
    getName() {
      return this.#name;
    }
  
    //!alttaki kod, Book kalıbının, child lara update izni vermesi
    setId(id){
  
      this.#id=id
    }
  
    
  }
  const book1=new Book("simyacı", "poelho coelgo", 1988)
  console.log(book1);
  console.log(Book.counter);
  console.log(++Book.counter);
  console.log(book1.id);//private değişken bu şekilde gelmez
  
  
  //!private değişkenlerine, Book kalıbında izin vererek alttaki gibi çağırdık
  console.log(book1.getId());
  console.log(book1.getName());
  
  // book1.#id=111
  
  book1.setId(111)
  
  console.log(book1.getId());
  
  
  //!setter sız private değişkenleri değiştiremeyiz
  // book1.#name="ayse"
  console.log(book1.getName());
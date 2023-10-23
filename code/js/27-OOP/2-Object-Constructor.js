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

function Book (a, b, c) {
    
    (this.author = b),
    (this.title = a),
    (this.year = c),
    (this.ozetFunction = function () {
        return `${this.title} kitabini ${this.year} yilinda ${this.author} yazmistir.`
    })

}

const book1 = new Book ("karamazov", "dostyevski", 1980)
const book2 =  new Book ("yaprak dokumu", "resat nuri", 1950)

console.log(book1);
console.log(book2);

document.querySelector("h2").textContent = book2.ozetFunction()


//* ======================================================
//*                    (OOP)
//* Object Oriented Programming
//* ======================================================

//*object literals
//! Arrow function this keyword unu dogru calistirmaz

const book1 = {
    title : "karamazov kardesler",
    yazar : "dostyevski",
    year : 1980,

    ozetFunction:function () {
        console.log(`${this.title} kitabini ${this.year} yilinda ${this.yazar} yazmistir.`);
    }
}
console.log(book1);
book1.ozetFunction();



const book2 = {
    title : "yaprak dokumu",
    yazar : "resat nuri",
    year : 1950,

    ozetFunction:function () {
        console.log(`${this.title} kitabini ${this.year} yilinda ${this.yazar} yazmistir.`);
    }
}
console.log(book2);
book2.ozetFunction();

//? object literals yöntemi ile fazla sayıda yeni  Object ler oluşturmak oldukça zahmetlidir, ayrıca programcılık yaklaşımı açısından da çok tekrar içerdiği için uygun değildir
//! DRY (Dont Repeat Yourself) Prensibi için uygun değildir
//? SOLUTION:  Object Constructor kullan (ES5 and ES6)


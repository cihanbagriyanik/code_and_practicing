/* -------------------------------------------------------------------------- */
/*             //! *********** COMPARISON OPERATORS**************             */
/* -------------------------------------------------------------------------- */

//* ilkel veri türleri değerlerine göre karşılaştırılır. Çünkü ilkel olmayan veri türleri referanslarına göre karşılaştırılır. */

let numOne = 3
let numTwo = 5

// Denk olması demek tuttuğu değerler aynı demektir. Tipi aynı olmayabilir.
// Eşit olması demek tuttuğu değer ve veri tipinin aynı olması demektir.

console.log("numOne numTwo ya denk midir:", numOne == numTwo )
console.log("numOne numTwo ya eşit midir:", numOne === numTwo )

let num3 = "javaScript"
let num4 = "javaScript"

console.log(num3 === num4)

// ! (NOT) -- değil anlamında

console.log("numOne numTwo ya denk değil midir:", numOne != numTwo)

5>4 //true
3>5 //false

console.log(5>4)
console.log(5>8)
console.log(4<=5)

console.log(10<21)
console.log(100<21)
console.log(100>=100)


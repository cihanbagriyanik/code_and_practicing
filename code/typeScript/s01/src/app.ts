/* console.log('Hello World')



// Bu fonksiyon iki değeri toplar
const add = (x:number,y:number) => x+y

console.log(add(4,3))
// Bu fonksiyon iki değeri toplar

console.log(`${5+3}`)
 */

//Type Annotations
/* 
let msg:string = 'Hello World'

msg= 'merhaba'
msg = false


let num = 3.14

num = 5
num = 'Hello'

let isTrue:Boolean = false

isTrue = true

isTrue = 1 */

//Arrays
/* const arr:number[] = [1,2,3,4]

arr.push(5) //hata almaz
arr.push('5') //hata alır
arr[0] = 0

arr[1]= '1'

const strArr = ['0','1','2']

strArr.push('3') //hata almaz
strArr.push(3) //hata alır

strArr[0] = '10'

str[1] = 1

const mixArr = ['Merhaba', 2024]

mixArr.push('Hoşçakal')
mixArr.push(2023)
mixArr.push(true) // hata alır */

//tuples

/* let myTuple: [number,string,boolean]

myTuple = [1,'Mark',true]


myTuple = [1,true, 'Mark']


let tuple3 : [number,string]

tuple3 = [ 1, 'Ashley']

tuple3.push(false) //hata alır
tuple3.push(2) //hata almaz
  */

//tuple arrays

/* let arrTuples: [number,string][];

arrTuples = [[1,'steve'],[2, 'Mark']]

arrTuples.push([3,'Ashley'])
arrTuples.push([4,2024]) */

//enum

// enum Role {
//     User = 1000,
//     Admin,
//     SuperAdmin,
//     DBUser,
//     DBAdmin
// }

// let currentUser: Role = Role.SuperAdmin //let currentUser = 1

// console.log(currentUser)

// const enum StatusCodes {
//     NotFound = 404,
//     Success = 200,
//     Accepted = 202,
//     BadRequest = 400
// }

// let result: StatusCodes = StatusCodes.Success
// console.log(result)

// enum Tshirts {
//     'Small' = 'S',
//     'Medium' = 'M',
//     'Large' = 'L'

// }

// let sold:Tshirts = Tshirts.Medium

// console.log(sold)

// //Mix Enum

// enum Shirts {
//     'Small' = 'S',
//     Size    = 36,
//     'Medium' = 'M',
//     MediumSize = 38,
//     LargeSize = MediumSize+2,
//     XLargeSize,
//     'Large' = 'L'

// }

//Any type

/* let anyVar: any = 10;

anyVar = 'Hello'

anyVar = true

let newVar: Boolean = anyVar

let anyArr: any[];

anyArr = [true, 20, 'Selam'] */

//Unknown type

/* let notSure : unknown = 'Hello'

console.log(notSure.length)

let newUnk: string = notSure */

//Void
//fonkksiyon dönüş tipleri
// function warnUser(): void {
//     console.log("This is my warning message");

// }

//Never

//Asla gerçekleşmeyecek değerleri belirtmek için kullanılır.
// Sonsuz döngü gibi.

/* function error(message: string): never {
    throw new Error(message);
}

console.log(error('Uygulama Çöktü')) */

//Union Type

/* let yedekSayi : boolean = false

let code: number | string;

code = 123
code = 'abc'

code = false

code = yedekSayi */

/* -------------------------------------------------------------------------- */
//! Second Day 03.01.2024

//* Type narrowing

/* type nm = number | string;

  
function checkNumber (n:nm):void{
    
  if (typeof n === 'string'){
    console.log(n)
  }else{
    console.log(n **2)
  }
}

checkNumber('Hello')
checkNumber('Hello', 'world')
checkNumber(5)
checkNumber(false) */

//? String literals

/* type Car = 'BMW' | 'Ford' | 'Mercedes'

let car1: Car = 'BMW'
let car2: Car = 'Ford'
let car3: Car = 'Audi'

type Size = 36 | 38 | 40 | 42

let tShirt1: Size = 'Small'
let tShirt2: Size = 36
let tShirt3: Size = 45 */

//? Objects
/* const car: {
  make: string,
  model : number,
  age(year: number):void,
  sunroof?: boolean
} = {
  make: 'BMW',
  model: 1990,
  age(year: number):void{
    console.log(`Age is ${year - 2009}`)
  }
}


console.log(car.make)
console.log(car.model)
car.age(2024)

car.model = 2000
car.model = 'ikibin' */

//! Intersection

/* type Book = {
  book_id: number;
  book_name: string
}

type Author = {
  Author_id: number;
  Author_name: string;
}


type intersected_type = Book & Author;

const book1:intersected_type = {
  book_id:1,
  book_name: '1985',
  Author_id: 1000,
  Author_name: 'George  Orwell'
}

const author1: Author ={
  Author_id: 1000,
  Author_name: 'George  Orwell'
} */

//! Type Assertions

/* let someValue: unknown = 'Ben bir stringim'

console.log(someValue.length)
console.log((<string>someValue).length)
console.log((someValue as string).length)

let y:string = someValue //! hata
let x:string = someValue as string


let score : string = '350'

let z: number = +score as number
 */

//! Functions

/* function greet (greet: string, name:string): string{
  return `${greet} ${name}`
}

console.log(greet('Günaydın', 'Mark')) //* Çalışır
console.log(greet('Günaydın', 2024)) //! Hata
console.log(greet('Günaydın')) //! Hata
console.log(greet('Günaydın', 'Mark', 'Hello')) //! Hata */

//? optional parameters

/* function greet2 (name:string, greet?: string ): void{
  
  if(!name){
    name = 'user'
  }
  console.log(`${greet} ${name}`)
}

greet2('Günaydın', 'Mark')
greet2('Günaydın') */

//? Overloading

/* function add (a:string, b:string):string;
function add (a:number, b:number):number;
function add (a:any, b:any):any{
  return a+b
}

console.log(add('Hello','World'))
console.log(add(10,20))
console.log(add(10, 'Hello'))
 */
//? Rest Parameters

function topla(num: number, ...numbers: number[]) {
  let toplam = num;

  numbers.forEach((num) => (toplam += num));
  console.log(toplam);
}

topla(1);
topla(1, 2);
topla(1, 2, 3, 4, 5);

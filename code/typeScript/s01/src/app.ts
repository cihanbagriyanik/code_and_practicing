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

let yedekSayi : boolean = false

let code: number | string;

code = 123
code = 'abc'

// code = false 

// code = yedekSayi
   







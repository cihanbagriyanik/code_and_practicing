// console.log('hello World')
//& Interfaces
/* interface Calendar {
    events: string[];
    addEvents(event:string):void
}

class LMSCalendar implements Calendar{
    
    constructor(public events: string[]){

        
    }
    addEvents(events:string):void{
        this.events.push(events)
    }

}

const de07 = new LMSCalendar(['HTML','JS','React'])


de07.events.push('TS')
console.log(de07)

const de08 = new LMSCalendar(['HTML','JS','VueJS'])
console.log(de08) */
/* interface Color {
    color: {r: number, g: number, b: number};
}

const red:Color = {color: {r:255, g:0, b:0}}

// console.log(red)

// red = {color: {r:0}}

interface Shape {
    area: number;
}

let shape1: Shape = {area: 255}

class Square implements Color, Shape {
    constructor( public color: {r:number, g:number, b:number}, public area: number){

    }
}

const sq1 = new Square({r:0,g:255,b:0},255)
const sq2 = new Square({r:0,g:0,b:255},10)

console.log(sq1) */
// interface Sum {
//     (num1: number, num2: number):number;
// }
// function add(n1:number, n2: number): number{
//     return n1 + n2
// }
// function conC(n1:string, n2:string):string{
//     return n1 + n2
// }
// let mat:Sum = add
// let str:Sum = conC //! Hata
// console.log(mat(2,5))
// console.log(str('Hello ', 'World')) //! Hata
//& Class Modifiers
//? Private
// class Person {
//     public name: string;
//     private age: number;
//     constructor(name:string, age: number){
//         this.name = name;
//         this.age = age;
//     }
//     getAge(){
//         console.log(this.age)
//     }
//     changeAge(newAge:number){
//         if (newAge > 0 && newAge < 100) {
//             this.age = newAge
//             this.getAge()
//         } else {
//             console.log('Hatalı giriş yaptınız')
//         }
//     }
// }
// const Mark = new Person('Mark', 45)
// console.log(Mark.name)
// console.log(Mark.age)
// Mark.getAge()
// Mark.changeAge(-1)
// Mark.changeAge(105)
// Mark.changeAge(44)
//? protected
// class Employee {
//     public empName: string;
//     protected empCode: number;
//     private id = Math.random();
//     constructor(empCode: number, name: string) {
//       this.empCode = empCode;
//       this.empName = name
//     }
//   }
//   class DevelopmentEmployee extends Employee {
//     private department: string;
//     constructor(code: number, name: string, dep: string) {
//       super(code, name);
//       this.department = dep;
//       this.id = 100 // Compiler Error. Private to parent
//     }
//   }
//   let emp = new DevelopmentEmployee(100, "John", "Backend")
//   console.log(emp.department) // Compiler Error
//? Read only
/* class Employee {
    empName: string;
    readonly empCode: number;
  
    constructor(empCode: number, name: string) {
      this.empCode = empCode;
      this.empName = name
    }
  }
  
  let emp = new Employee(100, "John")
  emp.empCode = 20 // Compiler Error */
//? Static
class Circle {
  static calcArea(radius) {
    return this.pi * radius * radius;
  }
}
Circle.pi = 3.14;
console.log(Circle.pi); // returns 3.14
console.log(Circle.calcArea(5)); // return 78.5

//* ------------------------------------------------------------------------- */
//!                                  OBJECTS                                  */
//* ------------------------------------------------------------------------- */

//* Diziler : index numaraları ile erişim sağlanıyor. 0'dan başlayarak artan bir sıralama.

//! Diziler sıralı bellek bölgeleridir ve sıralı bir şekilde ulaşılabilir. Ama daha karmaşık veriler için Object(nesne) kullanılır
const dizi = [1, 2, 3, 4, 5, 6]

//! Objectlerde key-value ( Property-value) değerlerini içerir. Bu o nesnenin özelliklerini belirtir.

//! Herhangi bir veriye erişim için property (key) adı kullanılır.

/* -------------------------------------------------------------------------- */
//*                        Object olusturma Yontemleri                        */
/* -------------------------------------------------------------------------- */
//? 1. YONTEM Object() classindan turetme - (//!HIC DENECEK KDR AZ KULLANILIYOR)

const car = new Object() //* Boc bir object urettik
console.log(car);

car.brand = "BMW"
car.model = 1990
car.speed = 6

console.log(car.speed);

const car1 = new Object()
car1.brand = "Volvo"
car1.model = 2020
car1.speed = 19

//* -------------------------------------------------------------------------- */

//? 2. YONTEM Constructor metodu ile object olusturma (//!AZ DA OLSA GORULEBILIR COK TERCIH EDILMIYOR)

//* Sanki bir kalip cikarmis oluyoruz
function PersonelList(id, ad, maas) {
    this.id = id
    this.ad = ad
    this.maas = maas

}

const personel11 = new PersonelList(1001, "Ali", 10000)
console.log(personel11);

const personel22 = new PersonelList(2002, "Veli", 20000)
console.log(personel22);

//* Her nesne icin ayri bir kopya olusturulan metotlar, bellek kullanimini arttirabilir

//* -------------------------------------------------------------------------- */

//? 3. YONTEM OBJECT LITERAL - (En cok kullanilam yontem)

let personelYapisi = {} //* Bos bir object tanimlamak
console.log(personelYapisi);

let personel1 = {

    name: "Henry",
    lastName: "Edward",
    dateOfBirth: 1995,
    isMarried: false,
    workExperinces: ["tester", "developer", "team lead"],
    address: {
        city: "London",
        street: "12034th Street",
        no: 5,
        postalCode: 234243,
    },


    calculateAge: function () {
        return new Date().getFullYear() - this.dateOfBirth
    },

    formattedName: function () {
        return `${this.name} ${this.lastName}'nin yasi ${this.calculateAge()}`
    },
    //! Objectlerde icince arrow function kullanarak this metotduyla object icindeki degerlere ulasilmaz

    selam : () => {
        return "Merhaba"
    },

    arrowFunction : () => {
        return `${this.address}` //* Window objesine karsilik gelir. HTML root anlamindadir.
    },

    ClassicFunction : function () {
        return `${this.workExperinces}` //* Klassik function da this objedeki elemandir.
    },
    //! Arrow function uretilirken this keyword unden kurtumak icin yapilmistir. 
    //! Arrow function this window objesine karsilik gelir.
    //! Window objesi icinde workExp. isimli bir ozellik bulamadigindan undefined olarak geri doner

}

console.log(personel1.name);
console.log(personel1.dateOfBirth);
console.log(personel1.calculateAge());
console.log(personel1.formattedName());
console.log(`Arrow function bana ne dondurdu : ${personel1.arrowFunction()}`);
console.log(personel1.ClassicFunction());

//* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
//*               Object icindeki  ozellige  erisim yontemleri                */
/* -------------------------------------------------------------------------- */

//? 1.DOT NOTATION "." (Nokta gosterimi)

console.log(personel1);
console.log(personel1.dateOfBirth);


//? 2.Koseli parantez icinde ozellik belirterek erisim
//* Degisken Kullanimina olanak saglar

console.log("Ozellik yontemi  ile :",personel1["dateOfBirth"]);

//* Ornek verilecek icice object kullanimda

//* -------------------------------------------------------------------------- */
//! NOT: object icinde array varsa array metodlarida kullanilabilir

console.log(personel1.name);
console.log(personel1.workExperinces[1]);
console.log("*****forEach*****");
console.log(personel1.workExperinces.forEach((work) => console.log(work)));

//* -------------------------------------------------------------------------- */

//? 3. Destructuring yontemi ile erisim 

//* tanimlama yaparken istenilen bilgiler bilgiler object icinden parcalanip alinabilir.

const{name,lastName,isMarried} = personel1
console.log(name);
console.log(lastName);
console.log(isMarried);
// console.log(workExperinces); //* Destructure edilmediginde dahil olmadiginda hata verir.

//* -------------------------------------------------------------------------- */
// console.clear();
//! Objelere kolaylikla yeni deger eklenebilir

personel1.phoneNumber = "454-659-6969"
console.log(personel1);

//! Bir objeyi baska bir obje icine aktarabilirz
const elemanListesi  = personel1
console.log("Personel Listesi : ",personel1);
console.log("Eleman Listesi : ",elemanListesi);

personel1.title = "Full Stack Developer"
personel1.title = "*****Kopyalama yapildiktan sonra*****"
console.log("Personel Listesi : ",personel1);
console.log("Eleman Listesi : ",elemanListesi);

//* Shallow copying (sig) kopyalama
//* Yularidaki sekilde yapildiginda degisimlerden etkilenir

//! -------------------------------------------------------------------------- */
//! Koyasinin etkilenmesini istemiyorsak - Deep copy yontemi kullnailir

let deepCopyPersonel = JSON.parse(JSON.stringify(personel1))
console.log(deepCopyPersonel);
personel1.salary = 300000
console.log("-----------------------");
console.log("Personel", personel1);
console.log("Deep Copy", deepCopyPersonel);

//* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
//*                               OBJECT METHODS                              */
/* -------------------------------------------------------------------------- */
////? 1.Icice (Nested) Object Kullnimi

let workerList = {
    person1:{
        name:"Harward",
        lastName:"Ferty",
        dateOfBirth: 1990,
        salary: 40000,
        job: "developer" 
    },
    person2:{
        name:"Ferdinand",
        lastName:"Ferty",
        dateOfBirth: 1990,
        salary: 40000,
        job: "developer" 
    },
    person3:{
        name:"Lucy",
        lastName:"Ferty",
        dateOfBirth: 1990,
        salary: 40000,
        job: "tester" 
    }
}

//* Bu sekilde bir yapinin icine girmek
console.log(workerList.person3.name);
console.log(workerList["person3"].name);

let x = "2";
console.log(workerList[`person${x}`].name);
// let x = "person2";
// console.log(workerList[x].name);

//* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
//*                              FOR - OF YAPISI                              */
/* -------------------------------------------------------------------------- */

//* for of
// let numbersAndLetters = ["a",4,6,7,"C"]
// for(const i of numbersAndLetters){
//     console.log(i);
// }

//! for of sirali dizilerde kullanilir ama objelerde daha komplex bir yapi oldugu icin for-of kullanilmaz!!!
// for (const x of workerList){
//     console.log("for of ile objenin degerleri :",x); //**Uncaught TypeError: workerList is not iterable
// }

//* -------------------------------------------------------------------------- */
//! Object kendi icinde var olan ozelliklerdir
//* Object.keys
//* Object.values
//* Object.entries


// let workersList={
//     person1:{
//         name:"Harward",
//         lastName:"Ferty",
//         dateOfBirth:1990,
//         salary:40000,
//         job:"developer"

//     },
//     person2:{
//         name:"Ferdinand",
//         lastName:"Ferty",
//         dateOfBirth:1990,
//         salary:40000,
//         job:"developer"

//     },
//     person3:{
//         name:"Lucy",
//         lastName:"Ferty",
//         dateOfBirth:1990,
//         salary:20000,
//         job:"developer"
//     }
// }

console.log(Object.keys(workerList));
console.log(Object.values(workerList));
console.log(Object.entries(workerList));

let newValue = Object.entries(workerList);
console.log(newValue[0]);

/* -------------------------------------------------------------------------- */

for (const x of Object.keys(workerList)){
    console.log(x);
}

for (const y of Object.values(workerList)){
    console.log(y);
}

for ( [k,v] of Object.entries(workerList)){
    console.log(`${k} değeri için ${v.salary}`);
}

/* -------------------------------------------------------------------------- */

const devFilter=Object.values(workerList).filter((p)=> p.job==="developer")
console.log(devFilter);

const devname=Object.values(workerList).filter((p)=> p.name[0]==="H")
console.log(devname);

const filterSalary=Object.values(workerList).filter((p)=>p.salary>30000)
console.log(filterSalary);
/* -------------------------------------------------------------------------- */
// FOR IN
// For in objectlerde keyleri dönderir
for (x in workerList){
    console.log("for in",x);  // sadece key değerlerine ulaşırız
    console.log(workerList[x].name, "burasi**********************" );    // workerList[person1].name
}
// Dizi ise index numarası
const dizii=[435,565,6,7]
for (i in dizii){
    console.log(i,"***** merhaba   ");
}
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                   JSON -Javascript Script Object Notation                  */
/* -------------------------------------------------------------------------- */
// JSON ile içiçe obje karıştırmalayalım


// console.clear()
const team = [
    {
      id:1,
      name: "Harold",
      lastname: "Strevy",
      DateOfBirth: 2000,
      job: "developer",
      salary: 8000,
      drivingLicense: true,
    },
  
    {
      id:2,
      name: "Farold",
      lastname: "Strevy",
      DateOfBirth: 2002,
      job: "developer",
      salary: 40000,
      drivingLicense: true,
    },
    {
      id:3,
      name: "Ketty",
      lastname: "Strevy",
      DateOfBirth: 2000,
      job: "devOps",
      salary: 30000,
      drivingLicense: true,
    },
  ];
  
// JSON ile farklı veri türleri barındırılabilir
// Dillerden bağımsızdır.
//nesnelerin (objelerin) temsil edilmesi için anahtar-değer çiftlerini kullanır. Bu, verilerin daha iyi organize edilmesini ve ilişkilendirilmesini sağlar.
//JSON, veri  işleme açısından hızlıdır. Bu nedenle web uygulamalarında ve servislerde yaygın olarak kullanılır.

// Json yeni bir eleman ekleme:

team.push({
    id:4,
    name: "Ferdinand",
    lastname: "Strevy",
    DateOfBirth: 2011,
    job: "tester",
    salary: 30000,
    drivingLicense: true,
  })

  console.log(team);

  team.forEach((t)=> console.log(t.name))
//   workersList.forEach((m)=> console.log(m.name)) // Objelerde map,forEach,filter,reduce kullanılmaz. JSon bir dizi içinde obje olduğu için dizi metodları map,filter,reduce,forEach kullanılabiliyor.

  /* -------------------------------------------------------------------------- */
  team.forEach((t)=> console.log(`${t.name} ${t.lastname}`))
  /* -------------------------------------------------------------------------- */
//   Team objesindeki her elemanın maasına %10 zam yapılmış halini göster
const zam=team.map((m)=> m.salary *1.1)
console.log(zam);


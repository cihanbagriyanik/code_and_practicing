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

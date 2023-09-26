
/* -------------------------------------------------------------------------- */
//*             NEW GENERATION OPERATORS: DESTRUCTURING (OBJECT)              */
/* -------------------------------------------------------------------------- */

const car = {
    title: "BMW",
    model: 1990,
    engine: 1.6
}
//* 1.Klasik YOl
console.log(car.title);
console.log(car["model"]);


//* 2.YOL DESTRUCTURING

const { title, model } = car
console.log(title, model, car.engine);

const arabalar = {
    car1: {
        marka: "BMW",
        model: 1990,
        renk: "red",
    },
    car2: {
        marka: "MERCEDES",
        model: 1980,
        renk: "white",
    },
    car3: {
        marka: "AUDI",
        model: 2000,
        renk: "gray",
    },
};
console.log(arabalar.car1.marka);

const { car1, car2, car3 } = arabalar
console.log(car1.marka);

const { marka, renk } = car1
console.log(marka, renk);


//! car1 için marka model ismini kullandık, o yüzden car2 de yeni isimler verdik. ilk object i oluştururken key leri (marka,model..) farklı verebilirdik, bu sayede yeni isim vermekle uğraşmazdık, ama o zamanda for in ile dönerken her bir marka yı yazdır diyemezdik, çünkü car2 nin içinde mesela marka2 yazıyor olacağından, onu tanıyamazdı
const { marka: marka2, renk: renk2 } = car2
console.log(marka2, renk2);


//* Object - Object gezinme ******** //

for (let i in arabalar) {
    console.log(i);

    console.log(arabalar[i].marka);
}


//* ornek: Array-Object gezinme-DEST

const people = [
    {
        name: "Mustafa",
        surname: "Gertrud",
        job: "developer",
        age: 30,
    },
    {
        name: "Halo",
        surname: "Müller",
        job: "tester",
        age: 35,
    },
    {
        name: "Mehmet",
        surname: "Rosenberg",
        job: "team lead",
        age: 40,
    },
    {
        name: "Ozkul",
        surname: "Gutenberg",
        job: "developer",
        age: 26,
    },

    {
        name: "Baser",
        surname: "Shaffer",
        job: "tester",
        age: 24,
    },
];
//* 1.YOL
people.forEach((kisi) => {

    // console.log(kisi.name)
    // console.log(kisi.surname)
    // console.log(kisi.job)

    const { name, surname, job, age } = kisi
    // console.log(name);
    // console.log(surname);
    // console.log(job);
})

//* 2.YOL
people.forEach(({ name, surname, job, age }) => {
    // const { name, surname, job, age } = kisi

    console.log(name);
    console.log(surname);
    console.log(job);
})


//?Fonksiyonlar object parametreleri destructuring yapabilir

const kontrol = (veri) => {
    console.log(veri);

    const { adi, renk, yildiz } = veri
    console.log(adi, renk, yildiz);

}
kontrol({ adi: "FB", renk: "sari-lacivert", yildiz: 3 })

//***************************** */

const kontrol2 = ({ adi, renk, yildiz }) => {

    console.log(adi);
    console.log(renk);
    console.log(yildiz);

}
kontrol2({ adi: "GS", renk: "sari-kirmizi", yildiz: 4 })


/* -------------------------------------------------------------------------- */
//*              NEW GENERATION OPERATORS: SPREAD OR REST (...)               */
/* -------------------------------------------------------------------------- */
//* ------------------------------------------------------
//!  REST =>>[...name]=diziden (ya da object den) alınmayan, geri kalanları yeni bir (diziyse) diziye,(object se)object e atıyor
//* ------------------------------------------------------

//todo  1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//todo     ayri dizi yada objelere kopyalanmasini saglayabilir.

//*REST OBJECT***************************************

const personel = {
    pName: "Johny",
    surname: "DEEP",
    job: "actor",
    age: 55,

};

const { pName, surname, ...gerisi } = personel
console.log(pName, surname, personel.job);
console.log(gerisi);
console.log(gerisi.job);

//* OBJECT KOPYA (REST)
//todo orjinal diziyle aynı şartlarda bir kopya oluşturdum
const ikizPersonel = personel

//todo orjinal diziden farklı bir kopya oluşturduk
const { ...personel2 } = personel


//*** orjinal diziden farklı bir kopya oluşturduğumuz için, bu kopyaya yapılan değişiklik orjinal diziyi bozmaz*/
personel2.age = 45
//***** orjinal diziyle aynı şartlarda bir kopya oluşturduk, bu yüzden kopyada yapılan değişiklik orjinal diziyi de etkiledi */
ikizPersonel.job = "father"

console.log(personel);
console.log(personel2);
console.log(ikizPersonel);



//*ARRAY KOPYA (REST)

const autos = ["anadol", "renault", "tofas", "ferrari"];

const ikizAutos = autos

const [...autos2] = autos

console.log(autos2);
autos2.push("bmw")
console.log(autos2);


ikizAutos.unshift("Merco")
console.log(ikizAutos);
console.log(ikizAutos);


//! 2- bir fonksiyonun argument lerini diziye çevirmek için kullanılabilir

//* ornek1

//*yanlış çözüm
const sum = (x, y) => x + y;

console.log(sum(1, 2, 3, 4, 5, 6));

//*doğru çözüm

const sum2 = (...x) => console.log(x.reduce((toplam, a) => toplam + a, 0));

sum2(1, 2, 3, 4, 5, 6);

//* örnek2

const show = (name, soyad, ...title) => {

    console.log(title);
    console.log(name);
    console.log(soyad);

    console.log(`${name} ${soyad} is a ${title.join(" and ")}`);
}

show("esra", "kara", "developer", "mom", "teacher", "computer science")

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//* ------------------------------------------------------
//!  SPREAD==>> parçala (yapısını boz)-> istenilen diziye ekle,içinde gezin vs
//* ------------------------------------------------------
//? Ornek people (object li ) dizisinden yaşları değişmiş olarak yeni bir object li dizi oluşturalım
const insanlar = [
    {
        name: "Mustafa",
        surname: "Gertrud",
        job: "developer",
        age: 30,
    },
    {
        name: "Halo",
        surname: "Müller",
        job: "tester",
        age: 35,
    },
    {
        name: "Mehmet",
        surname: "Rosenberg",
        job: "team lead",
        age: 40,
    },
    {
        name: "Ozkul",
        surname: "Gutenberg",
        job: "developer",
        age: 26,
    },

    {
        name: "Baser",
        surname: "Shaffer",
        job: "tester",
        age: 24,
    },
];

//! UZUN VE GEREKSIZ VE HIC KULLANMAYACAGIMIZ KULLANIM
const yeniInsanlar = insanlar.map((kisi) => ({
    name: kisi.name,
    surname:kisi.surname,
    job:kisi.job,
    age: kisi.age + 5

}))
console.log(yeniInsanlar);


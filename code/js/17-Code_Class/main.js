/* -------------------------------------------------------------------------- */
//*                                   1.SORU                                  */
/* -------------------------------------------------------------------------- */

ogrenciNotlarList = [
    { name: "Sema", notes: [70, 90, 60] },
    { name: "Neva", notes: [50, 70, 60] },
    { name: "Salih", notes: [40, 20, 30] },
    { name: "Ahmet", notes: [80, 90, 100] },
    { name: "şevval", notes: [30, 40, 55] },
    { name: "Zeki", notes: [90, 100, 100] },
];

//? Elif öğretmenin öğrencilerinin isimlerini ve notlarını tutan JSON yapısı gösterilmektedir. Sınıfında bazı raporlamalar yapmak istiyor.

//? a- Öğrencisinin adını ve aldığı en yüksek notu yeni bir listeye almak istiyor

// Beklenen Sonuç:
//   ➞ [
//     { "name": "sema", "EnYüksekNotu": 90 },
//     { "name": "Neva", "EnYüksekNotu": 70 },
//     { "name": "Salih", "EnYüksekNotu": 40 },
//     { "name": "Ahmet", "EnYüksekNotu": 100 },
//     { "name": "Şevval", "EnYüksekNotu": 55 },
//     { "name": "Zeki", "EnYüksekNotu": 100},//
//   ]

const enYüksekNot = [];

ogrenciNotlarList.map((ogrenci) => {
    const yuksekNot = Math.max(...ogrenci.notes);
    enYüksekNot.push({ name: ogrenci.name, enYüksekNot: yuksekNot });
})
console.log(enYüksekNot);


//? b- Öğrencisinin adını ve aldığı en dusuk notu yeni bir listeye almak istiyor
const enDusukNot = [];

ogrenciNotlarList.map((ogrenci) => {
    const yuksekNot = Math.min(...ogrenci.notes);
    enDusukNot.push({ name: ogrenci.name, enDusukNot: yuksekNot });
})
console.log(enDusukNot);


//? c- Elif öğretmenin öğrencilerinin karne notları(not ortalamaları)
// Beklenen Sonuç:
//[
// {name: 'Sema', Ortalama: '73.3'}
// {name: 'Neva', Ortalama: '60.0'}
// {name: 'Salih', Ortalama: '30.0'}
// {name: 'Ahmet', Ortalama: '90.0'}
// {name: 'şevval', Ortalama: '41.7'}
// {name: 'Zeki', Ortalama: '96.7'}
//]
// ortalama bulurken reduce ile yapabilirsiniz

const notOrtalama = ogrenciNotlarList.map((ogrenci) => ({
    name: ogrenci.name,
    Ortalama: +(ogrenci.notes.reduce((toplam, not) => toplam + not, 0) / ogrenci.notes.length).toFixed(1),
}));
console.log(notOrtalama);

//? d- Notları 70 ve  70den büyük olanlara 10 puan , 70 den az olanlara 5 puan kanaat notu verecek. notu 100 den büyükse 100den büyük olamayacağı için 100 olarak geçecek

// Beklenen Sonuç:
// [
// {name: 'Sema', guncelOrtalama: 83.3}
// {name: 'Neva', guncelOrtalama: 65}
// {name: 'Salih', guncelOrtalama: 35}
// {name: 'Ahmet', guncelOrtalama: 100}
// {name: 'şevval', guncelOrtalama: 46.7}
// {name: 'Zeki', guncelOrtalama: 100}
// ]

// 
const guncelOrtalamaListesi = ({ name, Ortalama }) => {
    // let Ort = Number(Ortalama)
    let Ort = Ortalama;
  
    Ort = Ort >= 70 ? Ort + 10 : Ort + 5;
    // console.log(Ort);
  
    Ort = Ort > 100 ? 100 : Ort;
    // console.log(Ort);
  
    return {
      name: name,
      guncelOrtalama: Ort,
    };
};
  
  const yeniOrtalamalar = notOrtalama.map((item) =>
    guncelOrtalamaListesi(item)
  );
  
  console.log(yeniOrtalamalar);
  

//? e - Ortalaması 100 olan öğrencilerine tebrik notu yazmak istiyor.
//? 100 olan öğrencilerinin adlarını ve adlarına yazılan tebrik notunu yeni bir liste oluşturun
 // [
// {name: 'Sema', guncelOrtalama: 83.3}
// {name: 'Neva', guncelOrtalama: 65}
// {name: 'Salih', guncelOrtalama: 35}
// {name: 'Ahmet', guncelOrtalama: 100}
// {name: 'şevval', guncelOrtalama: 46.7}
// {name: 'Zeki', guncelOrtalama: 100}
// ] 

const yuzOrtalama = yeniOrtalamalar.filter((student) => student.guncelOrtalama === 100);

const tebrikMesajlari = yuzOrtalama.map((student) => {
    return {
      name: student.name,
      tebrik: `TEBRIKLER ${student.name}! 100 puan ortalamayı başardın.`,
    };
  });

  console.log(tebrikMesajlari);

  




/* -------------------------------------------------------------------------- */
//?                                   2.SORU                                  */
/* -------------------------------------------------------------------------- */
// Bir firmanın müsterilerinin bilgilerinin bululnduğu JSON yapısı aşağıdadır.

const customerList = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618",
        },
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
      },
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "McKenziehaven",
        zipcode: "59590-4157",
        geo: {
          lat: "-68.6102",
          lng: "-47.0653",
        },
      },
      phone: "1-463-123-4447",
      website: "ramiro.info",
      company: {
        name: "Romaguera-Jacobson",
        catchPhrase: "Face to face bifurcated interface",
        bs: "e-enable strategic applications",
      },
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      address: {
        street: "Hoeger Mall",
        suite: "Apt. 692",
        city: "South Elvis",
        zipcode: "53919-4257",
        geo: {
          lat: "29.4572",
          lng: "-164.2990",
        },
      },
      phone: "493-170-9623 x156",
      website: "kale.biz",
      company: {
        name: "Robel-Corkery",
        catchPhrase: "Multi-tiered zero tolerance productivity",
        bs: "transition cutting-edge web services",
      },
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      address: {
        street: "Skiles Walks",
        suite: "Suite 351",
        city: "Roscoeview",
        zipcode: "33263",
        geo: {
          lat: "-31.8129",
          lng: "62.5342",
        },
      },
      phone: "(254)954-1289",
      website: "demarco.info",
      company: {
        name: "Keebler LLC",
        catchPhrase: "User-centric fault-tolerant solution",
        bs: "revolutionize end-to-end systems",
      },
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
      address: {
        street: "Norberto Crossing",
        suite: "Apt. 950",
        city: "South Christy",
        zipcode: "23505-1337",
        geo: {
          lat: "-71.4197",
          lng: "71.7478",
        },
      },
      phone: "1-477-935-8478 x6430",
      website: "ola.org",
      company: {
        name: "Considine-Lockman",
        catchPhrase: "Synchronised bottom-line interface",
        bs: "e-enable innovative applications",
      },
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
      address: {
        street: "Rex Trail",
        suite: "Suite 280",
        city: "Howemouth",
        zipcode: "58804-1099",
        geo: {
          lat: "24.8918",
          lng: "21.8984",
        },
      },
      phone: "210.067.6132",
      website: "elvis.io",
      company: {
        name: "Johns Group",
        catchPhrase: "Configurable multimedia task-force",
        bs: "generate enterprise e-tailers",
      },
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
      address: {
        street: "Ellsworth Summit",
        suite: "Suite 729",
        city: "Aliyaview",
        zipcode: "45169",
        geo: {
          lat: "-14.3990",
          lng: "-120.7677",
        },
      },
      phone: "586.493.6943 x140",
      website: "jacynthe.com",
      company: {
        name: "Abernathy Group",
        catchPhrase: "Implemented secondary concept",
        bs: "e-enable extensible e-tailers",
      },
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
      address: {
        street: "Dayna Park",
        suite: "Suite 449",
        city: "Bartholomebury",
        zipcode: "76495-3109",
        geo: {
          lat: "24.6463",
          lng: "-168.8889",
        },
      },
      phone: "(775)976-6794 x41206",
      website: "conrad.com",
      company: {
        name: "Yost and Sons",
        catchPhrase: "Switchable contextually-based project",
        bs: "aggregate real-time technologies",
      },
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
      address: {
        street: "Kattie Turnpike",
        suite: "Suite 198",
        city: "Lebsackbury",
        zipcode: "31428-2261",
        geo: {
          lat: "-38.2386",
          lng: "57.2232",
        },
      },
      phone: "024-648-3804",
      website: "ambrose.net",
      company: {
        name: "Hoeger LLC",
        catchPhrase: "Centralized empowering task-force",
        bs: "target end-to-end models",
      },
    },
];
  
//? Müşteri bilgilerini düzenli bir şekilde göstermek istiyor.Bunun için 
//   İsim - adres ve telefonlarını yeni bir listeye alarak düzenli bir şekide gösterecektir. 
// Beklenen Sonuç:
// [
//     {name: 'LEANNE GRAHAM', adress: 'Gwenborough city, Kulas Light street Apt. 556 suite', phone: '1-770-736-8031 x56442'}
//     {name: 'ERVIN HOWELL', adress: 'Wisokyburgh city, Victor Plains street Suite 879 suite', phone: '010-692-6593 x09125'}
//     {name: 'CLEMENTINE BAUCH', adress: 'McKenziehaven city, Douglas Extension street Suite 847 suite', phone: '1-463-123-4447'}
// ]
  
  const duzenle = ({ name, address, phone }) => {
    return {
      name: name.toUpperCase(),
      address: `${address.city} city, ${address.suite} suite `,
      phone: phone,
    };
  };
  
  const yeniListe = customerList.map((x) => duzenle(x));
  
  console.log(yeniListe);

//*************************/
//? Müşterilerinin bazılarına telefon ile arayıp memnuniyet anketi yapacaktır
// Baş harfi e ile başlıyorsa Pazartesi,
// Baş harfi C ile başlıyorsa Çarşamba arayacaktır

// Beklenen Sonuç:
// Pazartesi Aranacaklar
// {name: 'ERVIN HOWELL', phone: '010-692-6593 x09125'}

// Çarşamba Aranacaklar
// {name: 'CLEMENTINE BAUCH', phone: '1-463-123-4447'}
// {name: 'CHELSEY DIETRICH', phone: '(254)954-1289'}
// {name: 'CLEMENTINA DUBUQUE', phone: '024-648-3804'}
  
  
//*************************/

//? id Ad-ve email adreslerini ayrı bir listeye alıp, id numaraları tek sayı olanlara yeni çıkan elektronik cihazları ile ilgili mesajekleyecek, çift sayı olanlara yeni çıkan küçük ev aleti mesajını ekleyecektir

// Beklenen Sonuc
// {name: 'Leanne Graham', phone: 'Sincere@april.biz', mesaj: 'Yeni çıkan XXX elektronik cihazımızı mutlaka denemelisiniz '}
// {name: 'Ervin Howell', phone: 'Shanna@melissa.tv', mesaj: ' Yeni Çıkan kahve yapma makinamızı deneyin.Memnun kalacaksınız'}











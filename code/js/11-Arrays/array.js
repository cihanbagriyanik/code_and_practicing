
/* -------------------------------------------------------------------------- */
//*                             DİZİLER (ARRAYS)                              */
/* -------------------------------------------------------------------------- */
//* Dizi Tanımlama
//* ---------------------------------------------------------

//! 1. Yontem (Array literal) tercih edilen yontem

const yaslar = [30,29,45,27,12]
console.log(yaslar); //[30,29,45,27,12]
//! Hata diziyi tamamiyle tek seferde degistiremeyiz
// yaslar = [4,5,6,7]


//! 2.Yontem (Array constructor)

const cars = new Array ("BMW", "Mercedes", "Volvo")
console.log(cars);
//! 10 elemanli bir bir tanimlayalim
const sayilar = new Array(10)
console.log(sayilar);
sayilar[4]=234
sayilar[9]="Ayse"
console.log(sayilar);

console.log("***********************************************");

const birth = 1979
const isimler = ["omer" , "saban", "hasan", 2023 - birth, "cihan", true, yaslar]
console.log(isimler); // ['omer', 'saban', 'hasan', 44, 'cihan', true, Array(5)]

isimler[5] = false // true to false
isimler[7] = 58 // +58

console.log(isimler); //['omer', 'saban', 'hasan', 44, 'cihan', false, Array(5), 58]
console.log(isimler[6][2]); //45
console.log(isimler[isimler.length-2][yaslar.length-3]); //45

console.log(--isimler[6][2]); // 44 - kalici degisiklik yapiyor
console.log(isimler); // 44 - kalici degisiklik yapiyor


/* -------------------------------------------------------------------------- */
//*                   DIZIYI DEGISTIREN METODLAR (MUTATOR)                    */
/* -------------------------------------------------------------------------- */

//* pop() dizinin son elemanini siler, yazdirirsak sildigi elemani dondurur.
const meyveler = ["Elma","Erik","Armut","Muz","Kivi" ]

meyveler.pop()
console.log(meyveler);//["Elma","Erik","Armut"]
console.log(meyveler.pop()); //Muz

//*shift() dizinin ilk elemanını siler, yazdırırsak sildiği elemanı döndürür
meyveler.shift()
console.log(meyveler);

//*push() dizinin sonuna eleman ekler, yazdırırsak dizinin güncel eleman sayısını döndürür
console.log(meyveler.push("Çilek","Kavun", "karpuz"));
console.log(meyveler);

//*unshift() dizinin başına eleman ekler, yazdırırsak dizinin güncel eleman sayısını döndürür
console.log(meyveler.unshift("Ayva"));
console.log(meyveler);



//* reverse() dizinin tamamini ters cevirir
meyveler.reverse()
console.log(meyveler);
console.log(meyveler[3].split("").reverse()); // ['t', 'u', 'm', 'r', 'A']
//todo split("") -> string'e bölerek her bir harfyi array'den alırız

console.log(meyveler); 


// *splice() belirtilen indexten itibaren karakterleri silip veya değiştirir ve bu işlemin gerç
//*splice() 1. parametre dizinin eleman ekleyeceğimiz index ini belirtir
//*2. parametre=0 ise belirttiğim index teki elemanı sağa ittir, artık orada yeni yazdığım olsun
//*2.parametre=1 ise belirttiğim index teki elemanı sil üstüne yaz

// ['karpuz', 'Kavun', 'Çilek', 'Armut', 'Erik', 'Ayva']

meyveler.splice(2,0, "Mango") // 2 indexliyi saga itip 2 index e mango yazar
meyveler.splice(1,1, "Ananas") // meyveler[1] = "Ananas"
console.log(meyveler);
meyveler.splice(3,1) // dizinin 3 indexli elemanini siler
console.log(meyveler);


//*sort(), string ifadelerde alfabetik sıralar(ascıı değerlerine göre)
//* sort metodu diziyi iterasyona uğratır ve parametre olarak aldığı arrow fonksiyonunu (a-b>0 önce b yi yaz gibi) dizinin her bir elemanına uygular. Bu sayade küçük sayılar ile büyük sayıları yer değişirerek sıralama işlemini gerçleştirir.

meyveler.sort()
console.log(meyveler);

const number = [3,5,1,35,10,22,55,77,231]
console.log(number.sort()); // [1, 10, 22, 231, 3, 35, 5, 55, 77]

number.sort((a,b) => (a-b))
console.log(number); // [1, 3, 5, 10, 22, 35, 55, 77, 231]

//* -------------------------------------------------------------------------- */
//* -------------------------------------------------------------------------- */
//* -------------------------------------------------------------------------- */
//* -------------------------------------------------------------------------- */
//* -------------------------------------------------------------------------- */

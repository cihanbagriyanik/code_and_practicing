/* -------------------------------------------------------------------------- */
//*                              STRING METOTLAR                              */
/* -------------------------------------------------------------------------- */
console.log("*****STRING METHODS*****");
//! 1-Klasik yontemle tanimmlanan string ilkel (primitive) dir.

const str1 = "clarusway"
const str2 = "hello"
const str3 = "all the world"
console.log(str2 + str3, typeof(str2+str3));

//! 2-constructor ile tanimlanan String non-primitive (ilkel olmayan).
const str4 = new String("yeni bir string")
console.log(typeof str4);


//! Normalde primitive veri tiplerinin property veya metodu olmaz.
//! Ancak Javascript  otomatik olarak primitive String'leri String
//! object lerine dönüştürür. Bu sayede, String object lerine ait olan
//! fonksiyonlar veya özellikleri primitive string ile kullanmak
//! mümkün olur. Ayrıca 2 tür arasında çevrim yapmakta mümkündür.
//? Ek Açıklama için : https://javascript.info/primitives-methods

/* -------------------------------------------------------------------------- */
//*                      concat() IMMUTABLE=DEGISTIRMEZ                       */
/* -------------------------------------------------------------------------- */

const s1 = "clarusway"
const s2 = "hello"

console.log(s1.concat(s2));
const s3 = s1.concat(s2);
console.log(s3);
//! orginal degerler degismez, assign ile kalici hale getirebiliiz.

const myName = "Cihan Bagriyanik"
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());
console.log(myName.toLocaleUpperCase("tr"));
//! toLocaleUpperCase("tr") = turkce buyut demek bos birakinca eng (ingilizce) karakterlere uygun buyutebilirz.

const esitMi = (a,b) => a == b.toUpperCase() ? "esittir" : "esit degildir"
console.log(esitMi ("ISMET" , "ismet"));

/* -------------------------------------------------------------------------- */
//*                                 charAt()                                  */
/* -------------------------------------------------------------------------- */

const s4="primitive \n veri tiplerinin \nproperty ya \n da methodu olmaz."
console.log(s4);

console.log(s4.charAt(5)); //t
console.log(s4.charAt(12)); //v
console.log(s4.charAt(s4.length-1)); //.

console.log(`primitive 
 veri tiplerinin 
property ya 
 da methodu`);


 /* -------------------------------------------------------------------------- */
 //*          includes()- case sensitive (buyuk kucuk harfe duyarli)           */
 /* -------------------------------------------------------------------------- */

const kelime = "to be or not to be, that is The questions."
console.log(kelime.includes("to be")); //true
console.log(kelime.includes("TO BE")); //false
console.log(kelime.toUpperCase().includes("TO BE")); //true

console.log(kelime.includes(" ")); //true
console.log(kelime.includes("to be", 14)); //true

console.log(kelime.includes(",") ? "evet var" : "hayir yok");


/* -------------------------------------------------------------------------- */
//*          indexOf() - case sensitive (buyuk kucuk harfe duyarli)           */
/* -------------------------------------------------------------------------- */

console.log(kelime.indexOf("be")); // 3
console.log(kelime.lastIndexOf("be")); // 16
console.log(kelime.indexOf("BE")); // -1 
console.log(kelime.indexOf("be" , 4)); // 16 
console.log(kelime.indexOf("be" , kelime.indexOf("be")+1)); // 16 
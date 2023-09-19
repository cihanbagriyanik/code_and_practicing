//! ************STRING PROPERTY ************
//* Property bir stringin kendi özelliğidir bir method(fonksiyon) değildir bu nedenle parantez açıp kapatmaya gerek yoktur
//? lenght
//? prototype
//! ************STRING METHODS ************
// charAt()             Returns the character at the specified index.
// charCodeAt()	        Returns the Unicode of the character at the specified index.
// concat()	            Joins two or more strings, and returns a new string.
// endsWith()	        Checks whether a string ends with a specified substring.
// fromCharCode()	    Converts Unicode values to characters.
// includes()	        Checks whether a string contains the specified substring.
// indexOf()	        Returns the index of the first occurrence of the specified value in a string.
// lastIndexOf()	    Returns the index of the last occurrence of the specified value in a string.
// localeCompare()	    Compares two strings in the current locale.
// match()	            Matches a string against a regular expression, and returns an array of all matches.
// repeat()	            Returns a new string which contains the specified number of copies of the original string.
// replace()	        Replaces the occurrences of a string or pattern inside a string with another string, and return a new string without modifying the original string.
// search()	             Searches a string against a regular expression, and returns the index of the first match.
// slice()	            Extracts a portion of a string and returns it as a new string.
// split()	            Splits a string into an array of substrings.
// startsWith()	        Checks whether a string begins with a specified substring.
// substr()	            Extracts the part of a string between the start index and a number of characters after it.
// substring()	        Extracts the part of a string between the start and end indexes.
// toLocaleLowerCase()	Converts a string to lowercase letters, according to host machine's current locale.
// toLocaleUpperCase()	Converts a string to uppercase letters, according to host machine's current locale.
// toLowerCase()	    Converts a string to lowercase letters.
// toString()	        Returns a string representing the specified object.
// toUpperCase()	    Converts a string to uppercase letters.
// trim()	            Removes whitespace from both ends of a string.
// valueOf()	        Returns the primitive value of a String object.

//* -------------------------------------------------------------------------- */

const str1 = "Hello"
const str2 = "World"
console.log(str1 + str2);

str1.concat(str2)
console.log(str1.toLowerCase());
console.log(str1.charAt(2));

//* String icinde arama yapma
console.log(str1.includes("al"));
console.log(str1.indexOf("a"));
console.log(str1.startsWith("H"));

//* String Parcalama
//* slice da eksi(-) deger kullanilabiliyor.
//* substring() de eksi(-) deger kullanilmiyor
console.log(str1.slice(1, 3));

//* trim()
const str = "   Merhaba     "
console.log(str);
console.log(str.trim());

//* -------------------------------------------------------------------------- */

//* split() - (Seperotor)
console.log(str1.split(""));
console.log(str1[0]);

const cumle = "Merhaba D07 sinifi"
console.log(cumle.split(" "));

const cumle1 = "Merhaba/D07/sinifi"
console.log(cumle1.split("/"));
const splitedCumle = cumle1.split("/");
console.log(splitedCumle);
console.log(splitedCumle[0]);

//* -------------------------------------------------------------------------- */

//* split(),reverse(),join()
//* reverse : Bir işlemi tersten yaptırır
//* join: Liste elemanlarını birleştirir

const tersten = str1.split("").reverse().join("")

console.log(str1.split("").reverse().join(""));

//* -------------------------------------------------------------------------- */
console.clear();
console.log("*****Code Class*****");

/* -------------------------------------------------------------------------- */
//*                                CODE CLASS                                 */
/* -------------------------------------------------------------------------- */

//? Soru-1 : Bir cumlenin kelime sayisini veren fonksiyon.

const cumle2 = "Seni gidi findik kiran"
const cumlesplit = cumle2.split(" ").length
const kelimeSayisi = (cumlesplit) => {
    return;
}
console.log(cumlesplit);

//* -------------------------------------------------------------------------- */

//? Soru-2 : Email giren kisiye kullanici adi olarak @ isaretinden once verdigi degeri veren 
//todo  mert12@gmail.com => mert12

const userName = (mail) => {

    const mailWithoutAt = mail.replace("@", " ").split(" ")
    console.log(mailWithoutAt[0]);

}
user = "mert21@gmail.com"
userName(user)

//* -------------------------------------------------------------------------- */

//? Soru-3 : Bir cumleyi tersten yazan program 

const reverse = (cumle) => {
    const reverse = cumle.split("").reverse().join("")
    console.log(reverse);
}

const cumle4 = "yakalarsam muah muah"
reverse(cumle4)

//? Girilen kelimenin polidrom olup olmadigini kontrol eden program

const reverseWord = (word) => {
    return word === word.split("").reverse().join("") ? "Polidromdur" : "Polidrom DEGILDIR"
}

console.log(reverseWord("level"));

//? Girilen cumlenin polidrom olup olmadigini kontrol eden program

const reversee = (sentence) => {

    const orjinalSentence = sentence.toLowerCase().replaceAll(" ", "")
    console.log(orjinalSentence);

    return orjinalSentence === orjinalSentence.split("").reverse().join("") ? "Polidromdur" : "Polidrom DEGILDIR"
}

console.log(reversee("Ayol abla keten etek al baloya"));

//* -------------------------------------------------------------------------- */

//? Soru-4 : Belirli bir string ifadenin icindeki sesli harfleri bulan fonsiyonu yaziniz?
//* 1.YOL :
const sesliBul = (input) => {
    const sesli = [];
    let harf;

    for (harf of input) {
        if (['a', 'e', 'i', 'o', 'u'].includes(harf.toLowerCase())) {
            sesli.push(harf);
        }
    }
    return sesli;
}
console.log(sesliBul("Ayol abla keten etek al baloya"));

//* 2.YOL :
//todo - str.match()

const sesliyiBul = (kelime) => {
    const sesliHarfDeseni = /[aeiouAEOUI]/g;
    const sesliHarfler = kelime.match(/[aeiouAEOUI]/g)
    console.log(sesliHarfler);

};

sesliyiBul("Merhaba");

//* -------------------------------------------------------------------------- */

//? Soru-5 : ROMEN RAKAM dönüştürücü
//todo  -  V: 57
//todo  -  X :10
//todo  -  I :1
//todo  -  Kullanıcı bu şekilde girdiğinde   XXV - 25

console.log();

const cevir=(romen)=>{
const parca=romen.split("")
let sum=0;
console.log(parca);
for (let i=0; i<parca.length;i++){
    switch (parca[i]) {
        case "X":
         sum +=10;   
            break;
        case "V":
         sum +=5;   
            break;
        case "I":
         sum +=1;   
            break;
        default:
            break;
    }
}
return sum
}
const romen="XVI"
 console.log(cevir(romen));


//?     "Run-Length Encoding" (RLE) sıkıştırma algoritması
//todo  "aaabbbccddddeee";
//todo   3a3b2c4d2e

function runLengthEncoding(input) {
    let result = '';
    let count = 1;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i + 1]) {
            count++;
        } else {
            result += count + input[i];
            count = 1;
        }
    }

    return result;
}

const originalString = "aaabbbccddddeee";
const compressedString = runLengthEncoding(originalString);
console.log(compressedString); // Output: "3a3b2c4d2e"


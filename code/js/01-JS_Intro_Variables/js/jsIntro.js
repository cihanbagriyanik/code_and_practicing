/* -------------------------------------------------------------------------- */
/*                                1 - JS INTRO                                */
/* -------------------------------------------------------------------------- */

// tek satiri yprum alamak icin cift slash //
/* 
birden fazla 
satiri yorum 
almak 
icin
*/

//! Cikti alma ve kullanici ile etkilesi yontemi

// **********Console Kullanimi************

console.log("Bu alan konsol alanidir");
console.error("Bu bir hata mesajidir"); //! Hata mesaji yazdirma yontemi


/*
ad = prompt("Adinzi giriniz:")
console.log(ad);
*/


console.warn("Bu bir uyari mesajidir");

console.clear();

console.table(
    [ {name : "Harwey",age:30},
      {name : "Helen",age:30} ]
);


// ************ ALERT ******************

// alert("Bu bir uyari mesajidir")



// ************* Document.Write *************

// document.write("Browser da sonuc gosterme yontemi")



// ******************* PROMPT KULLANIMI ***************

ad = prompt("Adinzi giriniz:")
console.log(ad, "hosgeldin");
document.write( ad, " hosgeldin...");


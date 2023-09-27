
//* getElementById
const paragraf = document.getElementById("par");
paragraf.style.color = "red";

const buton = document.getElementById("btn")
buton.style.color = "yellow"
buton.style.backgroundColor = "black"
buton.innerHTML = "ARA"
buton.style.fontSize = "20px";
//! NOT: id tüm HTML dosyası için tekrarsız olduğu için getElementById() metodu ile sadece tek bir HTML elemanını seçebiliriz.


//* getElementsByTagName
const resim = document.getElementsByTagName("img")
resim[0].style.borderStyle = "solid"
resim[0].style.borderColor = "black"
resim[0].style.borderRadius = "50px"
resim[0].style.width = "350px"
resim[1].style.borderStyle = "solid"
resim[1].style.borderColor = "yellow"
resim[1].style.borderRadius = "50px"
//! NOT: Bu metot ile etiketi aynı olan tüm elemanlar (<img) seçilmektedir. 
//! Dolayısıyla tek bir eleman seçmek için indisleme kullanmak gerekir.


//* getElementsByClassName
const header = document.getElementsByClassName('header');
header[0].innerHTML = 'DOM Manipülasyonu Çok ilginç';
header[0].style.fontSize = "25px";
header[0].style.fontFamily ='Tahoma';
header[0].style.color = 'yellow';
//! NOT: Bu metot ile class (sınıfı) aynı olan tüm elemanlar (<h1>) seçilmektedir. 
//! Dolayısıyla tek bir eleman seçmek için indisleme kullanmak gerekir.

//* querySelector
const body = document.querySelector("#body");
body.style.backgroundImage = "linear-gradient(to right, green, yellow)"

const title = document.querySelector(".title");
title.innerHTML = "DOM Örnekleri 👀";
title.style.color = "yellow"
title.style.fontSize = "20px"
//!  NOT:
//!  • querySelector metodunda id ile seçim yaparken ‘#id’, class için ise
//!  ‘.classAdı’ yazılmalıdır.
//!  • querySelector belirtilen şarta uygun ilk elemanı seçer. Aynı class’daki birden
//!  fazla elemanı seçmek için querySelectorAll() metodu kullanılmalıdır.
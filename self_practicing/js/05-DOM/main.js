
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
header[0].style.fontFamily = 'Tahoma';
header[0].style.color = 'yellow';
//! NOT: Bu metot ile class (sınıfı) aynı olan tüm elemanlar (<h1>) seçilmektedir. 
//! Dolayısıyla tek bir eleman seçmek için indisleme kullanmak gerekir.

//* querySelector
const body = document.querySelector("#body");
body.style.backgroundImage = "linear-gradient(to right, green, yellow)"

const title = document.querySelector(".title");
title.innerHTML = "DOM Örnekleri 👀";
//!  NOT:
//!  • querySelector metodunda id ile seçim yaparken ‘#id’, class için ise
//!  ‘.classAdı’ yazılmalıdır.
//!  • querySelector belirtilen şarta uygun ilk elemanı seçer. Aynı class’daki birden
//!  fazla elemanı seçmek için querySelectorAll() metodu kullanılmalıdır.


//* DOM OLAYLARI (ÖRNEK-1)
//? <h1> elemanının üzerine Fare ile geldiğimizde yazı rengi mavi, Fare uzaklaştığında yeniden eski rengi olan siyaha çevirecek kodu yazalım.
//* 1.YOL
//todo Inline bir sekilde tag in icinde(onmouseover="style.color='black'" onmouseout="style.color='blue'") yaziliyor
//* 2.YOL
const h1 = document.querySelector(".h1")
const yaziMavi = () => h1.style.color = "blue";
const yaziSiyah = () => h1.style.color = "black";
//* 3.YOL
document.querySelector(".headerrr").onmouseover = function () {
    document.querySelector(".headerrr").style.color = "blue";
}
document.querySelector(".headerrr").onmouseout = function () {
    document.querySelector(".headerrr").style.color = "black";
}
//* 4.YOL
document.querySelector(".h2").addEventListener('mouseover', function () {
    document.querySelector(".h2").style.color = "blue";
});
document.querySelector(".h2").addEventListener("mouseout", () => {
    document.querySelector(".h2").style.color = "black";
});


//* DOM OLAYLARI (ÖRNEK-2)
//* 1.YOL
document.getElementById("btn").onclick = function () {
    document.getElementById("body").style.backgroundColor = "green";
    document.getElementById("btn").innerHTML = "BAS";
};
//*2.YOL
document.querySelector("#btn").addEventListener('click', () => {
    document.querySelector("#body").style.backgroundColor = "green";
    document.querySelector("#btn").innerHTML = "BAS";
});


/* -------------------------------------------------------------------------- */
//*                             GETELEMENTBYID()                              */
/* -------------------------------------------------------------------------- */

//* example-1 (buton style)

const buton = document.getElementById("btn")

buton.style.width = "200px"
buton.style.height = "80px"
buton.style.fontSize = "40px"
buton.style.backgroundColor = "red"


//* example-2 (paragraf style)

const paragraf = document.getElementById("par")

paragraf.style.width = "200px"
paragraf.style.height = "80px"
paragraf.style.fontSize = "40px"
paragraf.style.color = "red"
paragraf.style.margin = "200px"




/* -------------------------------------------------------------------------- */
//*                          GETELEMENTSBYTAGNAME()                           */
//!tag ismiyle çağırıyoruz.aynı tag den çok olacağı için index le hangisini seçtiğimizi belirtiyoruz (HTMLCollection- Array özellikleri gösterir)
/* -------------------------------------------------------------------------- */

//* example-3 (img style)



const resim = document.getElementsByTagName("img")

resim[0].style.width = "300px";
resim[1].style.border = "5px solid red";



/* -------------------------------------------------------------------------- */
//*                         GETELEMENTSBYCLASSNAME()                          */
/* -------------------------------------------------------------------------- */
//* class ismiyle çağırıyoruz

const baslik = document.getElementsByClassName("H1")
console.log(baslik);

baslik[0].style.color = "purple";

baslik[1].style.fontSize = "50px"


//*array i değiştirmeyen metodları kullanabilirsiniz

for (let i = 0; i < baslik.length; i++) {
    baslik[i].style.color = "red"
    baslik[i].style.textAlign = "center"
}

//*  DOM SELECTOR yazan h1 etiketini, DOM ÇOK KOLAY yazan a etiketiyle değiştirdim
baslik[0].innerHTML = "<a href='https://www.google.com/'>DOM COK KOLAY</a>"


// baslik[1].innerHTML= "innerHTML IYIMISIN"
baslik[1].textContent= "IYIMISIN"
//* sadece içerik değişecekse textContent tercih edilir, ama innerHTML de etiketi değiştirebildiği gibi, içeriği de değiştirebilir


/* -------------------------------------------------------------------------- */
//*                      QUERYSELECTOR,QUERYSELECTORALL                       */
/* -------------------------------------------------------------------------- */

document.querySelector("title").textContent = "DOM MANIPULASYON💚"

document.querySelector("#badi");
badi.style.backgroundImage = "linear-gradient(green, pink)"


document.querySelector(".H2").style.color = "pink"



const parag = document.querySelectorAll("p")

console.log(parag); //NodeList


parag[1].style.fontSize = "70px"


// Bir NodeList ve bir HTMLcollection hemen hemen aynı şeydir.

// Her ikisi de bir belgeden çıkarılan düğümlerin (öğelerin-node) dizi benzeri koleksiyonlarıdır (listeleridir). Düğümlere indeks numaraları ile erişilebilir. indeks 0'dan başlar.

// Her ikisinin de listedeki (koleksiyon) öğelerin sayısını döndüren bir uzunluk özelliği (length) vardır.


// HTMLCollection öğelerine adları, kimlikleri veya dizin numaralarıyla erişilebilir.
// baslik.namedItem("id1").style.color = "red";
//  baslik[0].style.color="red";

// NodeList öğelerine yalnızca dizin numaralarıyla erişilebilir.

// Bir HTMLCollection her zaman canlı bir koleksiyondur. Örnek: DOM'daki bir listeye bir <li> öğesi eklerseniz, HTMLCollection'daki liste de değişecektir.

// Bir NodeList genellikle statik bir koleksiyondur. Örnek: DOM'daki bir listeye bir <li> öğesi eklerseniz, NodeList'teki liste değişmez.
// getElementsByClassName()ve yöntemleri , getElementsByTagName() canlı bir HTMLCollection döndürür.

// querySelectorAll(), statik bir NodeList döndürür.
//!burada netten https://softauthor.com/javascript-htmlcollection-vs-nodelist/ adresinden göster
// Dizi Değil!
// Bir NodeList bir dizi gibi görünebilir ama öyle değildir.

// Bir NodeList içinde döngü yapabilir ve düğümlerine dizine göre başvurabilirsiniz.

// Ancak, bir NodeList'te push(), pop() veya join() gibi Array yöntemlerini kullanamazsınız.

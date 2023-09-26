
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
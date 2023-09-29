
document.querySelector("h1").style.color = "red"
document.querySelector("h1").style.textAlign = "center"

let resim = document.querySelector(".resim")
let ses1 = document.querySelector(".ses1")

//! ara butonuna tiklandiginda
document.querySelector(".ara").onclick = () => {
    resim.src = "./img/img.gif"
    //todo play() komutu HTML deki audio etiketini js de calistirir
    ses1.play()
    //todo sesin volume unu 0 ile 1 arasinda deger vererek ayarlayabiliriz
    ses1.volume = "0.1"
}

//! baglat butonu tikladiginda
document.querySelector(".baglat").onclick = () => {
    resim.src = "./img/telbagla.gif"
    ses1.pause()
}

//! konus butonu tikladiginda
document.querySelector(".konus").onclick = () => {
    resim.src = "./img/telefon.gif"
    ses1.pause()
}


//!mouse ile resmin üzerine gelince
// resim.onmouseover=()=>{}
resim.addEventListener("mouseover", () => {
    resim.src = "./img/aslan2.jpeg"
    ses1.pause()
    // document.querySelector(".ses2").play(); //!Aslan sesi aciyor
})

//!mouse resmin üzerinden ayrılınca
resim.addEventListener("mouseout", () => {
    resim.src = "./img/aslan1.jpeg";
    document.querySelector(".ses2").pause()

});

//! klavyeden inputa veri girisi yapilirken elimizi tustan cektigimizde varolan degisiklik
const textInput = document.querySelector(".textbox")
const checkInput = document.querySelector(".checkbox")

textInput.onkeyup = () => {
    // if(checkInput.checked){
    //     textInput.value = textInput.value.toUpperCase()
    // } else {
    //     textInput.value = textInput.value.toLowerCase()
    // }

    (checkInput.checked)
        ? textInput.value = textInput.value.toUpperCase()
        : textInput.value = textInput.value.toLowerCase()

}

//! Listenin basina "Programlama Dilleri" h1 etiketi eklemek 

//! ***** UZUN YOL *****
//? HTML ye h1 elemeti olustur
const baslik = document.createElement("h1");
{/* <h1></h1> */ }

//? olusan h1 elementine class ismi ata
baslik.className = "baslik2"
{/* <h1 class="baslik2"></h1> */ }

//? Programlama Dilleri text i
const yazi = document.createTextNode("Programlama Dilleri");

//? h1 elementi icin olusturdugum text i h1 e child yapalim.
baslik.appendChild(yazi);
{/* <h1 class="baslik2">Programlama Dilleri</h1> */ }

//? Input-div class isimli div in son child e yapalim
// document.querySelector(".input-div").appendChild(baslik)

//? Input-div class isimli div den hemen sonraya ekle
// document.querySelector(".input-div").after(baslik)

//! h1 e bazi style lar verelim ayni seyleri CSS de .baslik2 classi ile de verebiliriz cunku yukrda class ismi atadik.
baslik.style.marginTop = "5%";
baslik.style.color = "red";


//*  "append" metodu ile seçtiğimiz Html etiketi bitmeden önceki son kısma ekleme yapabiliriz (<div>merhaba -buraya-  </div>).  "prepend" metodu ile seçtiğimiz Html etiketi başladıktan sonraki ilk kısma ekleme yapabiliriz  (<div> -buraya-  merhaba   </div>).  "after" metodu ile ile seçtiğimiz Html etiketi bittikten sonraki ilk kısma ekleme yapabiliriz (<div> merhaba </div>  -buraya-).

//! ***** KISA YOL *****
// document.querySelector(".input-div").innerHTML = document.querySelector(".input-div").innerHTML +
//     `<h1 class="title text-danger"> Programlama Dilleri </h1>`

document.querySelector(
    ".input-div"
).innerHTML += `<h1 class="title text-danger mt-5"> Programlama Dilleri </h1>`


//! Languages inputuna girilen değerleri, ul ye eklemek

//? Ekle butonuna baglamakla basliyoruz.
document.querySelector(".ekle").onclick = () => {
    //! Uzun yol
    //? Inputu js ye cagiralim
    const dilInput = document.querySelector(".languages")

    // //? yeni girilen satiri saklamak icin li olusturalim
    // const yeniLi = document.createElement("li")

    // //? yeni li icin text olusturduk
    // const text = document.createTextNode(dilInput.value)

    // //? Olusturdugumuz texi yeni li ye bagladik
    // yeniLi.appendChild(text)

    // //? Olusan yeni li mizi ul nin son child i yapalim
    const liste = document.querySelector(".liste")

    // liste.appendChild(yeniLi)

    // dilInput.value = ""


    
    //! Kisa YOL
    liste.innerHTML += `<li>${dilInput.value}</li>`
    dilInput.value = ""

}



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
    document.querySelector(".ses2").play();
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







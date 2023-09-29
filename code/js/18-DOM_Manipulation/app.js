document.querySelector("h1").style.color = "red";
document.querySelector("h1").style.textAlign = "center";

let resim = document.querySelector(".resim");

let ses1 = document.querySelector(".ses1");

//! ara butonuna tıklandığında

document.querySelector(".ara").onclick = () => {
  resim.src = "./img/img.gif";

  // play() komutu html deki audio etiketini js de çalıştırır
  ses1.play();
  //sesin volume ünü 0 ile 1 arasında değer vererek ayarlayabilirsiniz
  ses1.volume = 0.1;
};

//! baglat butonu tıklandığında

document.querySelector(".baglat").onclick = () => {
  resim.src = "./img/telbagla.gif";
  //pause() komutuyla çalan audio sesini durdurabilirsiniz
  ses1.pause();
};

//! konus butonu tıklandığında

document.querySelector(".konus").onclick = () => {
  resim.src = "./img/telefon.gif";

  ses1.pause();
};

//!mouse ile resmin üzerine gelince

// resim.onmouseover=()=>{}

resim.addEventListener("mouseover", () => {
  resim.src = "./img/aslan2.jpeg";
  document.querySelector(".ses2").play();
  ses1.pause();
});

//!mouse resmin üzerinden ayrılınca
resim.addEventListener("mouseout", () => {
  resim.src = "./img/aslan1.jpeg";
  document.querySelector(".ses2").pause();
});

//! klavyeden inputa veri girişi yapılırken elimizi tuştan çektiğimizde varolan değişiklik

const textInput = document.querySelector(".textbox");
const checkInput = document.querySelector(".checkbox");

console.log(textInput); //input

textInput.onkeyup = () => {
  //   if (checkInput.checked) {

  //     textInput.value = textInput.value.toUpperCase();

  //   } else {
  //     textInput.value = textInput.value.toLowerCase();
  //   }

  checkInput.checked
    ? (textInput.value = textInput.value.toUpperCase())
    : (textInput.value = textInput.value.toLowerCase());
};

//! listemin başına "Programlama Dilleri" h1 etiketi eklemek ****uzun yol*****

//? HTML DE h1 elementi oluştur
const baslik = document.createElement("h1");
{
  /* <h1></h1> */
}

//? oluşan h1 elementine class ismi ata
baslik.className = "baslik2";
{
  /* <h1 class="baslik2"></h1> */
}

//?Programlama Dilleri text i oluştur
const yazi = document.createTextNode("Programlama Dilleri");

//? h1 elementi için oluşturduğum text i h1 e child yapalım

baslik.appendChild(yazi);
{
  /* <h1 class="baslik2"> Programlama Dilleri</h1> */
}

//? input-div class isimli div in son child ı yapalım
// document.querySelector(".input-div").appendChild(baslik)

//? input-div class isimli div den hemen sonraya ekle
// document.querySelector(".input-div").after(baslik)

//!!  "append" metodu ile seçtiğimiz Html etiketi bitmeden önceki son kısma ekleme yapabiliriz (<div>merhaba -buraya-  </div>).  "prepend" metodu ile seçtiğimiz Html etiketi başladıktan sonraki ilk kısma ekleme yapabiliriz  (<div> -buraya-  merhaba   </div>).  "after" metodu ile ile seçtiğimiz Html etiketi bittikten sonraki ilk kısma ekleme yapabiliriz (<div> merhaba </div>  -buraya-). before ile de etiketin önüne ekleyebiliriz

//! kısayol

// document.querySelector(".input-div").innerHTML = document.querySelector(
//   ".input-div"
// ).innerHTML +`<h1 class="title text-danger" >Programlama Dilleri </h1>`;

document.querySelector(
  ".input-div"
).innerHTML += `<h1 class="title text-danger mt-4" > Programlama Dilleri </h1>`;

//! languages inputuna girilen değerleri, ul ye eklemek

document.querySelector(".ekle").onclick = () => {
  //!uzun yol
  //? inputu js ye çağıralım
  // const dilInput = document.querySelector(".languages");

  // //* yeni girilen satırı saklamak için li create edelim

  // const yeniLi = document.createElement("li");

  // //* yeniLi için text oluşturduk

  // const text = document.createTextNode(dilInput.value);

  // //* oluşturduğumuz text i yeni li ye bağladık

  // yeniLi.appendChild(text);

  // //* oluşan yeni li mizi ul nin son child ı yapalım
  // const liste = document.querySelector(".liste");

  // liste.appendChild(yeniLi);

  //*ekle ye basılınca input un içi boşalsın
  // dilInput.value=""

  //! kısa yol
  const liste = document.querySelector(".liste");
   const dilInput = document.querySelector(".languages");
   
  liste.innerHTML += `<li> ${dilInput.value} </li>`;

  dilInput.value = "";
};

//!sil butonuna basılınca ul listesinden li elemanını silmek için removeChild metodunu kullanacağız

 const liste = document.querySelector(".liste");

document.querySelector(".sil").onclick=()=>{

 liste.removeChild(liste.lastElementChild)//ul nin son çocuğunu sil
// liste.removeChild(liste.firstElementChild)//ul nin ilk çocuğunu sil
// liste.removeChild(liste.children[2])//ul nin 2 indexli  çocuğunu sil

}


//!klavyedeki keycode ları kullanarak kod yazma

 const dilInput = document.querySelector(".languages");


// dilInput.addEventListener("keydown",(tus)=>{})

 dilInput.onkeydown=(tus)=>{
console.log(tus.keyCode);

//! click() komutu tıklanırsa önündeki tuş tetiklensin demek

if(tus.keyCode==13)
document.querySelector(".ekle").click()



 if(tus.keyCode==12)
document.querySelector(".sil").click()

 }
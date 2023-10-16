//* ===================================================
//*                 Checkout Page Solution
//*  map filter, dest,spread ===================================================
//!table da kullanılacak değişkenler
const kargo = 15.00;
const vergi = 0.18;

let sepettekiler = [
  { name: "Vintage Backpack", price: 34.99, adet: 1, img: "./img/photo1.png" },
  { name: "Levi Shoes", price: 40.99, adet: 1, img: "./img/photo2.png" },
  { name: "Antique Clock", price: 69.99, adet: 1, img: "./img/photo3.jpg" },
];

//! EKRANA BASTIR
sepettekiler.forEach((urun) => {

  //!DESTRUCTURING
  const { name, price, adet, img } = urun

  document.querySelector("#urun-rowlari").innerHTML += `

  <div class="card mb-3" style="max-width: 540px;">

    <div class="row g-0">

      <div class="col-lg-3 col-md-5">
        <img src="${img}" class=" w-100 rounded-start" alt="..." />
      </div>

      <div class="col-md-7 ">

        <div class="card-body">

          <h5 class="card-title">${name}</h5>

          <div class="ürün-price">
            <p class="text-warning h2">$
              <span class="indirim-price">${(price * 0.7).toFixed(2)}</span>
              <span class="h5 text-dark text-decoration-line-through">${(price).toFixed(2)}</span>
            </p>
          </div>


          <div
            class="border border-1 border-dark shadow-lg d-flex justify-content-center p-2"
          >
            <div class="adet-controller">
              <button class="btn btn-secondary btn-sm minus">
                <i class="fas fa-minus"></i>
              </button>
              <p class="d-inline mx-4" id="ürün-adet">${adet}</p>
              <button class="btn btn-secondary btn-sm plus">
                <i class="fas fa-plus"></i>
              </button>
            </div>

          </div>

          <div class="ürün-removal mt-4">
            <button class="btn btn-danger btn-sm w-100 remove-ürün">
              <i class="fa-solid fa-trash-can me-2"></i>Remove
            </button>
          </div>

          <div class="mt-2">
            Ürün Toplam: $<span class="ürün-toplam">${(price * 0.7).toFixed(2) * adet}</span>
          </div>
        </div>
      </div>
    </div>
  </div> 
  
  `

})


hesaplaCardTotal();



//! SILME 
sil();

function sil() {

  document.querySelectorAll(".remove-ürün").forEach((btn) => {

    btn.onclick = () => {
      alert("Emin misiniz?")
      //! Ekrandan sildik
      btn.closest(".card").remove()


      //! Diziden de sil
      sepettekiler = sepettekiler.filter((urun) => urun.name != btn.closest(".card").querySelector("h5").textContent)

      // console.log(sepettekiler);


      //! Hesapla Total
      hesaplaCardTotal()

    };
  });
};

//! ADET DEGISTIRME
document.querySelectorAll(".adet-controller").forEach((kutu) => {

  const arti = kutu.lastElementChild
  const eksi = kutu.firstElementChild
  const adet1 = kutu.children[1]
  // const adet1 = arti.previousElementSibling
  // const adet1 = eksi.nextElementSibling

  //! artiya tiklaninca olacaklar
  arti.onclick = () => {

    //* ekranda degistirme
    adet1.textContent = +adet1.textContent + 1

    //* Urun Toplam kismini guncelle 
    adet1.closest(".card").querySelector(".ürün-toplam").textContent = adet1.textContent * adet1.closest(".card").querySelector(".indirim-price").textContent

    //? dizideki adeti guncelle
    sepettekiler = sepettekiler.map((a) => {
      if (a.name == arti.closest(".card").querySelector("h5").textContent) {
        return { ...a, adet: +adet1.textContent }
      } else { return a }
    })
    console.log(sepettekiler);



    hesaplaCardTotal();

  }




  //! eksiye tiklaninca olacaklar
  eksi.onclick = () => {

    //* ekranda degistirme
    adet1.textContent = adet1.textContent - 1

    //* Urun Toplam kismini guncelle 
    adet1.closest(".card").querySelector(".ürün-toplam").textContent = adet1.textContent * adet1.closest(".card").querySelector(".indirim-price").textContent

    //* eger adet 1 iken tekrar eksiye basilirsa o urunu sil
    if (adet1.textContent < 1) {
      alert("Sileyim mi?")
      adet1.closest(".card").remove()
    }

    //? dizideki adeti guncelle
    sepettekiler = sepettekiler.map((a) => {
      if (a.name == eksi.closest(".card").querySelector("h5").textContent) {
        return { ...a, adet: +adet1.textContent }
      } else { return a }
    })
    console.log(sepettekiler);


    hesaplaCardTotal();

  }



})


//! BROWSERDAKI TOTAL I HESAPLAMA
function hesaplaCardTotal() {

  const urunToplam = document.querySelectorAll(".ürün-toplam");
  // console.log(urunToplam); // NodeList cikti


  //!   querySelectorAll(), statik bir NodeList döndürür.
  //!burada netten https://softauthor.com/javascript-htmlcollection-vs-nodelist/ adresinden göster
  // Dizi Değil!
  // Bir NodeList bir dizi gibi görünebilir ama öyle değildir.
  // Bir NodeList içinde döngü yapabilir ve düğümlerine dizine göre başvurabilirsiniz.
  // Ancak, bir NodeList'te push(), pop() veya join() gibi Array yöntemlerini kullanamazsınız.
  //* Reduce tam olarak Array istiyor, nodeList yeterli degil
  // console.log(Array.from(urunToplam)); // Array cikti


  const araToplam = Array.from(urunToplam).reduce((topl, item) => topl + +item.textContent, 0);

  document.querySelector(".aratoplam").textContent = (araToplam).toFixed(2)
  document.querySelector(".vergi").textContent = (araToplam * vergi).toFixed(2)
  document.querySelector(".kargo").textContent = (araToplam > 0 ? kargo : 0).toFixed(2);
  document.querySelector(".toplam").textContent = araToplam > 0 ? (araToplam + (araToplam * vergi) + kargo).toFixed(2) : (0).toFixed(2)

}





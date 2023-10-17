//*===============================================================
//*                   4- ASYNC-AWAIT
//*===============================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//?! Bu baglamda syntatic sugar benzetmesi yapilabilir.

//* Bir fonksiyonu async  hale getirmek icin fonksiyon keyword'nun onune async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron kod yazmayı mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi satirdaki kodun durdurulmasini saglar. Yapilan istek yerine getirilip sonuc degerlerinin dondurulmesi ile kodun calismasi devam eder.
//! JavaScript try anahtar kelimesi kod bloğundaki kodları çalışma zamanında test etmek için kullanılır.

//! JavaScript catch anahtar kelimesi çalışma zaman hatası sonucu oluşan hataları ekrana yazdırmak için kullanılır.

//! JavaScript throw anahtar kelimesi özel hata oluşturmayı sağlar.



const veriGetir = async () => {

    //! throw ile hata firlatirsak, kodumuz calismayi durdurur ve kullaniciyi uyaramayiz, bu yuzden kod durmasin diye try-catch  kod blogunu kullaniyoruz
    try {

        //! hata msjini gormek icin url de ? ne kadar silebiliriz
        const res = await fetch("https://api.tvmaze.com/search/shows?q=girls")
        // console.log(res);

        if (!res.ok) {
            throw new Error(`biraz hata var ${res.status}`)
            console.log("Merhaba"); // hic bir sekilde buraya giris yapmaz o yuzden silik
        }
        const veri = await res.json()

        // console.log(veri);
        ekranaBastir(veri)
    } catch (error) {
        console.log(error);

        console.log("try-catch sayesinde kod devam ediyor");

        console.log("Merhaba");
    }


}


document.querySelector("button").onclick = () => {
    veriGetir()
}


const ekranaBastir = (data) => {

    const alan = document.querySelector("section")

    data.forEach((eleman) => {

        alan.innerHTML += `        
        <h1 class="mt-4">Name: <span class="text-danger">${eleman.show.name}</span>  </h1>
        <img src="${eleman.show.image.medium}" alt="" width="50%" />
        <h3 class="mt-4 fst-italic">${eleman.show.genres}</h3>
        `
    });
};








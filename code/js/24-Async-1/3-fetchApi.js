//* ===========================================================
//*                3- FETCH API
//*=============================================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamiza ve cevaplari yonetebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

//! Alttaki hata kontrolsuz yol
// fetch("https://api.github.com/users").then((res) => res.json()).then((veri) => ekranaBastir(veri))

//! Hata kontrolu yaptigimiz yol
// fetch("https://api.github.com/users").then((res) => {

//     if (res.ok == false) {
//         throw new Error("URL de hata var")
//     }
//     return res.json()

// }).then((veri) => ekranaBastir(veri))

// const veriGetir = () => {
//     fetch("https://api.github.com/users").then((res) => {

//         if (!res.ok) {
//             throw new Error("URL de hata var")
//         }
//         return res.json()

//     }).then((veri) => ekranaBastir(veri))
// }


// document.querySelector("button").onclick = () => {

//     veriGetir()

// }


// const ekranaBastir = (data) => {

//     const alan = document.querySelector("section")

//     data.forEach((eleman) => {
//         // const {login,avatar_url,node_id} = eleman

//         alan.innerHTML += `        
//         <h1 class="mt-4">NAME:  <span class="text-danger">${eleman.login}</span></h1>
//         <img src="${eleman.avatar_url}" alt="" width="50%" />
//         <h3>NODE-ID: ${eleman.node_id}</h3>
//         `
//     });
// }


//! ********************************************************************************/
//! TEKRAR

// fetch("https://api.github.com/users").then((res) => res.json()).then((veri) => console.log(veri))


const veriGetir1 = () => {

    fetch("https://api.github.com/users").then((res) => {

        if (!res.ok) {
            throw new Error("URL de hata var")
        }
        return res.json()
    }).then((veri) => ekranaBastir1(veri))

}


document.querySelector("button").onclick = () => {

    veriGetir1()

}



const ekranaBastir1 = (data => {

    const alan = document.querySelector("section")

    data.forEach((eleman) => {

        alan.innerHTML += `
            <h1>NAME: <span class="text-danger">${eleman.login}</span></h1>
            <img src="${eleman.avatar_url}" alt="" width="50%"/>
            <h3>NODE-ID: ${eleman.node_id}</h3>
        `;

    })
})



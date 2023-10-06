
let liste = []
//! boş liste hem database işini kolaylaştırır, hem ul ye eklenen verinin aynısı tekrar eklenmesin demek için ,bütün p leri çağır içeriğinde input.value deki değer varsa ekleme, demeli ama p oluşmadan bunu diyemeyiz, bu şekilde liste dizisine eklenen veri globalde old için içeriğine (includes) her yerden bakılabilir


let total = 0
let completed = 0

const listeInput = document.querySelector("#todo-input");
const listeUl = document.querySelector("#todo-ul");
const listeButon = document.querySelector("#todo-button");
const toplam = document.querySelector("#toplam");

//! Add butonuna tiklandiginda
listeButon.onclick = () => {

    if (!listeInput.value) {
        alert("Lutfen bir not giriniz")
        return;
    }
    else if (liste.includes(listeInput.value)) {
        alert("Daha once bu notu girmistiniz")
        return; // seadece returnle de olabilir ama kullaniciya bir sey dondurmemis olur.
    }
    else {
        liste.push(listeInput.value)
        total += 1
    }

    //! listeyi ekranda gor
    listeUl.innerHTML += `
    <li class="esra">
    <i class="fa fa-check fa-lg"></i>
    
    <p> ${liste[liste.length - 1]}</p>
 
    <i class="fa fa-trash fa-lg"></i>
    </li>
    `;
    //? 2. secenek <p> tagi ekleme
    // {/* <p>${listeInput.value}</p> */}


    //! Total i ekrana bastir
    toplam.textContent = total

    //! Deger girildikten sonra input u bize bos donduruyor.
    listeInput.value = ""

    //! Her li girisinde cursor inputta olsun
    listeInput.focus()


    //! Silme islemi
    //! Bu islemde icerde yapiliyor cunku htmlde bir cop kutusu iconu yok add a basilinca geliyor.
    // createSilButon()
    document.querySelectorAll(".fa-trash").forEach((a) => a.onclick = () => {
        //? Ekrandan sil
        a.parentElement.remove()
    })

    //? Diziden sil






    //! Check islemi

}











//! boş liste hem database işini kolaylaştırır, hem ul ye eklenen verinin aynısı tekrar eklenmesin demek için ,bütün p leri çağır içeriğinde input.value deki değer varsa ekleme, demeli ama p oluşmadan bunu diyemeyiz, bu şekilde liste dizisine eklenen veri globalde old için içeriğine (includes) her yerden bakılabilir
let liste = JSON.parse(localStorage.getItem("LISTE")) || [];

let total = 0;
let completed = 0;

const listeInput = document.querySelector("#todo-input");
const listeUl = document.querySelector("#todo-ul");
const listeButon = document.querySelector("#todo-button");
const toplam = document.querySelector("#toplam");

//! Add butonuna tıklandığında
listeButon.onclick = () => {
    if (!listeInput.value) {
        alert("lütfen bir not giriniz");
    }

    //! input a girilen veri (Add e basınca) daha önce listeye girildiyse, tekrar girilmesin, boş dön, bu kontrolü mesela ekrandaki li leri çekerek yapamayız, çünkü includes  lar dizi de çalışır
    else if (liste.includes(listeInput.value)) {
        return;
        // return=if in içindeki şart true ise hiçbirşey yapma, koda alt satırdan devam et demek
    } else {
        liste.push(listeInput.value);
        localStorage.setItem("LISTE", JSON.stringify(liste))
        total += 1;


        //!listeyi ekranda gör

        listeUl.innerHTML += `
            <li class="esra">
                <i class="fa fa-check fa-lg"></i>

                    <p>${liste[liste.length - 1]}</p>

                <i class="fa fa-trash fa-lg"></i>
            </li>
        `;
        //?2.seçenek
        //  <p>${listeInput.value}</p>;


        //!total i ekrana bastır
        toplam.textContent = total;

        listeInput.value = "";

        //? her li girişinde cursor inputta olsun
        listeInput.focus();
    }

    //!silme işlemi
    createSilButon()



    //!check işlemi
    createCheckButon()

};

const createSilButon = () => {

    document.querySelectorAll(".fa-trash").forEach(
        (a) =>
        (a.onclick = () => {
            //?ekrandan sil

            //1.yol
            a.parentElement.remove();
            //2.yol
            // a.closest("li").remove()
            total -= 1;
            toplam.textContent = total;


            //! eger silinen isin classname inde checked varsa (bitirilmis bir is ise) completed sayisinda bir eksiltme yap.
            if (a.parentElement.classList.contains("checked")) {
                completed -= 1
                document.querySelector("#tamamlanan").textContent = completed
            } 
            

            //?diziden sil
            liste = liste.filter(
                (yapilacak) =>
                    yapilacak != a.parentElement.querySelector("p").textContent
            );
        })
    );
}

const createCheckButon = () => {

    document.querySelectorAll(".fa-check").forEach((a) => a.onclick = () => {

        //! 1.YOL
        if (a.parentElement.classList.contains("checked")) {
            a.parentElement.classList.remove("checked")
            completed -= 1
        } else {
            a.parentElement.classList.add("checked")
            completed += 1
        }
        document.querySelector("#tamamlanan").textContent = completed

        //! 2.YOL
        // if (a.parentElement.className == "checked") {
        //     a.parentElement.className == ""
        // } else {
        //     a.parentElement.className == "checked"
        // }

    })

}





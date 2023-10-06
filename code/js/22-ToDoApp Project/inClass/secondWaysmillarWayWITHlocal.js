//!LOCALSTROGE Lİ BİZİM ÇÖZÜMÜMÜZE BENZEYEN YOL




//!burada liste adında, local de LISTE adında boş bir liste oluştur, listenin içi doluysa dolu listeyi getir*************************
//todo *****************
let liste = JSON.parse(localStorage.getItem("LISTE")) || [];

const listeInput = document.querySelector("#todo-input");
const listeUl = document.querySelector("#todo-ul");
const listeButon = document.querySelector("#todo-button");
const toplam = document.querySelector("#toplam");
let completed = 0;

//!Add butonuna basıldığında

listeButon.onclick = () => {
  if (!listeInput.value) {
    alert("lütfen bir not giriniz");
  } else if (liste.includes(listeInput.value)) {
    return;
  } else {
    liste.push(listeInput.value);

    //!liste ye eleman eklenince  localStorage deki LISTE yi güncelle**************************
    //todo *****************
    localStorage.setItem("LISTE", JSON.stringify(liste));

    // console.log(liste);
    //!ekranda listeyi göster

    gosterListe();
    listeInput.value = "";
  }
};
// console.log(liste);
const gosterListe = () => {
  //todo *****************
  // localstorage daki verileri ekrana baştan yazdır
  // başka türlü olmaz, o an girileni yazdırır. refresh te bütün diziyi ekrana basacağımız için
  //todo *****************
   listeUl.textContent = "";
//    ekranı temizleyip, localstroge deki listeyi indexiyle teker teker bastırıyoruz. bunun yerine app.js deki gibi bir yol izlersek, ekran ilk açıldığında gosterliste dediğimizde, listenin sadece son elemanı kayıttan gelir ve ekrana yazdırılır, bütün dizi basılsın diye böyle bir yol izleyebiliriz
  for(let i=0; i<liste.length;i++){
    console.log(liste[i]);
listeUl.innerHTML =
      `<li class="ayse">
    <i class="fa fa-check fa-lg"></i>
    <p>${liste[i]}</p>
    <i class="fa fa-trash fa-lg"></i>
    </li>` + listeUl.innerHTML;

  }
//   liste.forEach((todo ) => {
//     listeUl.innerHTML =
//       `<li class="ayse">
//     <i class="fa fa-check fa-lg"></i>
//     <p>${todo}</p>
//     <i class="fa fa-trash fa-lg"></i>
//     </li>` + listeUl.innerHTML;
//    });

  //todo *****************
  toplam.textContent = liste.length;

  listeInput.focus();

  //!silme
  createSilButon();
  //!check
  createCheckButon();
};


const createSilButon = () => {
  //?ul deki bütün fa-trash lara ulaş
  document.querySelectorAll(".fa-trash").forEach((a) => {
    a.onclick = () => {
      //  console.log(a.parentElement);
      //!listeden silme
      //  console.log(a.closest("li").querySelector("p").textContent);
      //! closest=herhangi bir elemanın istediğiniz uzaklıktaki parent ına götürür. yani a.parentElement.parentElement.parentElement ile 3. babaya ulaşabilirken closest ile 3. babanın adını yazarak direk ulaşabiliriz

      liste = liste.filter(
        (yapılacak) =>
          yapılacak != a.closest("li").querySelector("p").textContent
      );

      console.log(liste);
      //!ekrandan silme, sadece ekrandan silersek sonrasında diziyi bastırmaya kalkarsak, eleman hala dizide bulunduğu için yanlış cevap alırız
      a.parentElement.remove();
      //!ekrandan silmezsek o an ekranda elemanlar durur, refresh yapınca localStorage den dizi geleceği için silinmiş olarak gelir, o yüzden ekrandan da silmekte fayda var
      //!listeden eleman silinince localStorage deki LISTE yi güncelle*************
      //todo *****************
      localStorage.setItem("LISTE", JSON.stringify(liste));

      //todo *****************
      toplam.textContent = liste.length;

      //!!!! SONRAA
      //!  silinen üzeri çizili checked ise
      if (a.parentElement.classList.contains("checked")) {
        completed = completed - 1;
        document.querySelector("#tamamlanan").textContent = completed;
      }
    };
  });
};

const createCheckButon = () => {
  //!1.yol
  document.querySelectorAll(".fa-check").forEach((a) => {
    a.onclick = () => {
      if (a.parentElement.classList.contains("checked")) {
        a.parentElement.classList.remove("checked");
        completed = completed - 1;
      } else {
        a.parentElement.classList.add("checked");
        completed = completed + 1;
      }
      document.querySelector("#tamamlanan").textContent = completed;
    };
  });
};

// ekran tekrar açıldığında kalıcı kaydettiğim elemanlar ekrana direk basılsın
gosterListe();

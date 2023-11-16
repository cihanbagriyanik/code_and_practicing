localStorage.setItem("lastname", "Smith");
// localStorage.getItem("lastname");



// localStorage ne demek
// The localStorage object allows you to save key/value pairs in the browser.
let liste = localStorage.getItem('liste') ? JSON.parse(localStorage.getItem('liste')) : [];

// let liste={
//     id:new Date().getTime(),
//     name:"Helen",
//     toplantıyaKatıldımı:false
    
// }

// Local storage bilgi kaydetme
localStorage.setItem("liste",JSON.stringify(liste))
//localStorageden bilgiyi geri çağırma
const yeniListe=JSON.parse(localStorage.getItem("liste"))
console.log(yeniListe);
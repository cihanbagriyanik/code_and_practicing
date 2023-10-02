
// rastgele sayı tutma işleminde 1 ile 20 arasında bir sayıya ihtiyacımız varsa Math.random() ı 20 ile çarpıp yukarı yuvarlamalıyız
let PCsayi = Math.ceil(Math.random() * 20);

let mesaj = document.querySelector(".msg");

let score = document.querySelector(".score");

//? Enter tuşuna basılınca "check" butonuna tıklanmasını sağliyorum
document.querySelector(".guess").onkeydown = (tus) => {
    if (tus.keyCode === 13) {
        document.querySelector(".check").click();
    }
};

//? her check butonuna basılınca yapılacaklar
document.querySelector(".check").onclick = () => {
    // Farkli bir renk dizisi tanimliyoruz
    const renkler = ["red", "blue", "pink", "purple", "brown", "DarkAqua", "DarkOrange", "Fuchsia"];
    // Tanimladigmiz dizilerin rastgele gelmesini sagliyoruz
    const rasgeleRenk = Math.floor(Math.random() * renkler.length);

    const tahmin = document.querySelector(".guess").value;

    document.querySelector(".guess").value = "";
    // tahmin doğruysa
    if (PCsayi == tahmin) {
        mesaj.textContent = "🥳 Congratulations, guess is correct 🎊";
        document.querySelector(".body").style.backgroundColor = "green";
        document.querySelector(".number").textContent = PCsayi;
    }
    // tahmin yanlışsa
    // bizi arttır azalt diye yönlendir
    else if (PCsayi > tahmin) {
        mesaj.textContent = "Guess is low, raise it ⬆️";
        document.querySelector(".body").style.backgroundColor = renkler[rasgeleRenk];
        if (score.textContent > 1) {
            score.textContent--
        } else {
            mesaj.textContent = "You Lost"
            document.querySelector(".number").textContent = PCsayi;
            score.textContent = 0
        }
    } else if (PCsayi < tahmin) {
        mesaj.textContent = "Guess is high, reduce it ⬇️";
        document.querySelector(".body").style.backgroundColor = renkler[rasgeleRenk];
        if (score.textContent > 1) {
            score.textContent--
        } else {
            score.textContent = 0
            mesaj.textContent = "You Lost"
            document.querySelector(".number").textContent = PCsayi;
        }
    } else {
        mesaj.textContent = "ERROR!!!..."; // Hata durumunda mesajı temizliyorum
    }
};

//* Bu kod butun sayfayi 0 dan oyuncu basliyor gibi yeniliyor...
// document.querySelector(".again").onclick = () => {
//     window.location.reload()
// }


//* Bu kod ise ikinci oyuncu icin bir yenileme yapiliyor...
document.querySelector(".again").onclick = () => {
    PCsayi = Math.ceil(Math.random() * 20);
    document.querySelector(".body").style.backgroundColor = "#2d3436";
    mesaj.textContent = "Ready to go for next Player"
    document.querySelector(".number").textContent = "?";
    score.textContent = 10

}
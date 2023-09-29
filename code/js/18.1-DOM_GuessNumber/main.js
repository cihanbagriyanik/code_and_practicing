
// rastgele sayı tutma işleminde 1 ile 20 arasında bir sayıya ihtiyacımız varsa Math.random() ı 20 ile çarpıp yukarı yuvarlamalıyız
let PCsayi = Math.ceil(Math.random() * 20);

let mesaj = document.querySelector(".msg");

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
    
    const tahmin = +document.querySelector(".guess").value;

    document.querySelector(".guess").value = "";
    // tahmin doğruysa
    if (PCsayi === tahmin) {
        mesaj.innerHTML = "Tebrikler, Bildiniz";
        document.querySelector(".body").style.backgroundColor = "green";
        document.querySelector(".number").innerHTML = PCsayi;
    }
    // tahmin yanlışsa
    // bizi arttır azalt diye yönlendir
    else if (PCsayi > tahmin) {
        mesaj.innerHTML = "Tahmin düşük, yükseltin";
        document.querySelector(".body").style.backgroundColor = renkler[rasgeleRenk];
    }
    else if (PCsayi < tahmin) {
        mesaj.innerHTML = "Tahmin yüksek, düşürün";
        document.querySelector(".body").style.backgroundColor = renkler[rasgeleRenk];
    } else {
        mesaj.innerHTML = ""; // Hata durumunda mesajı temizliyorum
    }
};
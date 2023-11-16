//* ======================================================
//*                     IOS CALCULATOR
//* ======================================================
const numberButtons = document.querySelectorAll(".num");
const decimal = document.querySelector(".decimal");
const operationButtons = document.querySelectorAll(".operator");
const equalButtons = document.querySelector(".equal");
const acButtons = document.querySelector(".ac");
const pmButtons = document.querySelector(".pm");
const percentButtons = document.querySelector(".percent");
const ustEkran = document.querySelector(".valueUp");
const altEkran = document.querySelector(".valueDown");



//?operator değiskenleri
let ustEkranYazi = "";
let altEkranYazi = "";

let islem = "";


// //?esittir yada percent e basıldıktan sonra yeni isleme yeni sayılar girmek için, tıklandı tıklanmadı boolean değiskeni hazırladık, esittir (ve de percent) butonunda bu true yani tıklandı olacak
// let esittirPressed=false



numberButtons.forEach((number) => {
    number.onclick = () => {

        ekranaHazirlik(number.textContent);

        updateEkran();
    };
});


const ekranaHazirlik = (num) => {


    // // //?kullanıcı 0 girerse, sonrasında 0 ve . dısında bir sayı girerse, ekranda sadece girilen yeni sayı (0 iptal olsun) gözüksün
    //  if(altEkranYazi=="0" && num !=="0"&& num !==".")
    // {
    //   altEkranYazi = num;
    //   // bu döngüden çık bu isini globaldeki değiskeni değistirerek bitirdi ama bisey döndürmeyecek
    //   return;
    // }


    //?kullanıcı herhangi bir yerde . girmisken, tekrar nokta girmeye kalkarsa giremesin

    if (num === "." && altEkranYazi.includes(".")) return

    //?kullanıcı 10 haneden sonra girmesin

    if (altEkranYazi.length > 10) return



    //?kullanıcı ilk basta 0 girer ardından tekrar 0 girerse, girilmesin, tek 0 döndürsün

    if (altEkranYazi === "0" && num === "0") return

    // //?esittir yada percent a basıldıktan sonra girilen number tek basına ekranda görünsün,çünkü yeni islem baslıyor(ekranda 72 yazan islem sonucu varken 5 e basınca 725 olmasın)

    // if(esittirPressed==true){
    // esittirPressed=false
    //   altEkranYazi=num
    //   return
    // }

    
    //! SIFIRDAN .0 yapma**********************
    let nokta = decimal.innerHTMl
    if (altEkranYazi.includes(nokta)) {
        altEkranYazi += "0."
        console.log("if icindeyim");
        return
    }




    //?bütün sartları basarı ile geçtiyse basılan numaraları arka arkaya ekle
    altEkranYazi += num;
}

//?BURADA YAPILANLARI EKRANA BASTIRMA
const updateEkran = () => {
    altEkran.textContent = altEkranYazi;


    
    //! islem sonucu 8 haneyi geçmesin



    //?islem girilince
    if (islem) {
        ustEkran.textContent = `${ustEkranYazi}  ${islem}`;
    } else {
        ustEkran.textContent = "";
    }



};


//?herhangi bir isleme tıklandığında

operationButtons.forEach((op) => {

    op.onclick = () => {

        //?altekran bosken, hiçbir sekilde sayı girisi yapılmamıssa, operatöre basılmasın. bos return yapmaya çalıstığınız islemi yaptırmaz.
        //? return fonksiyon içerisinde her yerde kullanılabilir. Kod return satırına eristiğinde fonksiyon durur ve değer fonksiyonun çağırıldığı yere geri gönderilir. Bir fonksiyon içerisinde birden fazla return fonksiyonu da olabilir. return değer döndürmek zorunda değildir.

        if (altEkranYazi === "") return;


        //?esittire basılmadan arka arkaya isleme basılırsa (alt ve üst ekran doluyken isleme basılmaya devam edilirse)
        if (altEkranYazi && ustEkranYazi) hesapla()


        islem = op.textContent;

        ustEkranYazi = altEkranYazi;

        altEkranYazi = "";
        updateEkran();
    }
})



//?esittir butonuna tıklandığında

equalButtons.onclick = () => {

    hesapla()
    updateEkran()
    // esittirPressed=true

}

const hesapla = () => {
    let sonuc;
    switch (islem) {
        case "+":
            sonuc = +ustEkranYazi + Number(altEkranYazi);
            break;
        case "-":
            sonuc = ustEkranYazi - altEkranYazi;
            break;
        case "x":
            sonuc = ustEkranYazi * altEkranYazi;
            break;
        case "÷":
            sonuc = ustEkranYazi / altEkranYazi;
            break;
        //?% ye basılınca altekrandaki sayı 100 e bölünsün
        case "%":
            sonuc = +ustEkranYazi * +(altEkranYazi / 100);
            break;
        default:
            return;
    }

    altEkranYazi = sonuc

    ustEkranYazi = ""
    islem = ""
}


//? pm butonuna basıldığında altekrandaki sayının isareti değissin -1 ile çarpma
pmButtons.addEventListener('click', () => {
    if (altEkranYazi !== 0) {
        if (altEkranYazi > 0) {
            altEkranYazi = `-${altEkranYazi}`;
        } else if (altEkranYazi < 0) {
            altEkranYazi = altEkranYazi.slice(1)
        } else null;
        updateEkran();
    }
});


//?AC butonuna basıldığında ekranlar temizlensin
acButtons.addEventListener('click', () => {
    ustEkranYazi = ""
    altEkranYazi = ""
    islem = ""
    ustEkran.textContent = ""
    altEkran.textContent = ""
    sonuc = ""

});
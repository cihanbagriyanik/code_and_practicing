

const getirCountry = async (land) => {

    const res = await fetch(`https://restcountries.com/v3.1/name/${land}`);

    const veri = await res.json();

    // console.log(veri);
    // console.log(veri[0].name.common);
    // console.log(veri[0].capital);

    ekranaBastir(veri[0]);

}

//! 1.YOL
// getirCountry("Turkey");
// getirCountry("Canada");
// getirCountry("France");
// getirCountry("Germany");

//! 2.YOL
let dizi = ["Turkey", "Canada", "France", "Germany"]
dizi.forEach((a) => getirCountry(a))


const ekranaBastir = (ulke) => {

    document.querySelector(".countries").innerHTML += 
    `
    <div class="card text-start w-50 shadow-lg bg-light my-4">
        <img src="${ulke.flags.png}" class="card-img-top" alt="..." />
            
        <div class="card-body">
            <h5 class="card-title">${ulke.name.common}</h5>
            <p class="card-text">${ulke.name.official}</p>
        </div>
    
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><i class="fas fa-lg fa-landmark"></i> ${ulke.capital}</li>
            <li class="list-group-item"><i class="fas fa-lg fa-comments"></i> ${Object.values(ulke.languages)}</li>
            <li class="list-group-item"><i class="fas fa-lg fa-money-bill-wave"></i> ${Object.values(ulke.currencies)[0].name} 
            (${Object.values(ulke.currencies)[0].symbol})</li>
        </ul>
    </div>
    `;

}

//!ekrana bastırılacak dizi elemanlarının key leri farklı farklıysa===>>
//!!!! Object.values()öğeleri, nesnede bulunan numaralandırılabilir  bir DİZİ döndürür, istenen nesne nin içindeki object in value larını yaz, bu value lar ,object.value sayesinde dizi içinde toplanır

//? Object.values(country.currencies)=currencies in value larını bir dizide toplar
//! TRY: nin value sini dizi yapar 0 indexli: [{name: 'Turkish lira', symbol: '₺'}]. TRY key i silinir
//? Object.values(country.languages)=languages in value larını bir dizide toplar[eng,span..] Eng key i silinir
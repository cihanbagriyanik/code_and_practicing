
const takeData = async () => {


    try {


        const api = await fetch("https://restcountries.com/v3.1/all")

        if (!api.ok) {
            throw new Error("hata var")
        } 
        const ver = await api.json()

        ekranaBastir(ver)



    } catch (error) {

        console.log(error);

    }


}


document.querySelector("button").onclick = () => {
    takeData()
}


const ekranaBastir = (data) => {

    const alan = document.querySelector("section")

    data.forEach((eleman) => {

        alan.innerHTML += `        
        <h1 class="mt-4">${eleman.name.common}</h1>
        <img src="${eleman.flags.png}" alt="" width="50%" />
        <h3 class="mt-4 fst-italic">${eleman.translations.tur.official}</h3>
        <p>${eleman.borders}</p>
        `
    });
};


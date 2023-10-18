

let showList = [];

// https://www.themealdb.com/
fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  .then((response) => response.json())
  .then((veri) =>{
  showList=veri
  ekranaBastir(showList.meals)});



function ekranaBastir(data) {

    const food = document.querySelector(".food");

    //! inputa olusan dizi bastirilacaginda ekran tmeiz olsun ki sadece girilen degerleri ekrana getirsin. BU OLMAZS ISE 25(dizi) =+ seklinde devam eder 
    food.innerHTML = "";

    data.forEach((w) => {

        food.innerHTML += `
        <div class="col-md-3 m-1">
            <p>${w.strMeal}</p>
            <img src=${w.strMealThumb} alt="" width="" />
        </div>

        `;

    });

}



//! Arama inputunda arama yapma (oninput = kullanici input elemanina her veri girisinde calismaktadir)
document.querySelector("#ara").oninput = (e) => {
    // console.log(e.target.value);
    // document.querySelector("#ara").value

    const veri  = showList.meals.filter((a) => a.strMeal.toLowerCase().includes(e.target.value.toLowerCase()))

    ekranaBastir(veri)


}

//* -------------------------------------------------------------------------- */

//! Bayraklara tiklaninca tiklanan bayragin yemekleri gelsin. API adresi, end point olarak ulkenin vatandas ismini istiyor, o da img lerin id sinde var...

document.querySelectorAll(".ulke").forEach((country) => country.onclick = () => {

    // console.log(country.id);

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country.id}`)
    .then((res) => res.json())
    .then((veri) => ekranaBastir(veri.meals))

})






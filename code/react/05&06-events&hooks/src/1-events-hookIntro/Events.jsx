import React from 'react'



const Events = () => {

    //! Javascript Alani
    let baslik = "MERHABA";
    let count = 0;

    let increase = () => {
        count++
        // console.log(count);
        document.querySelector("span").textContent = count
    }

    //! react alanında parametreli fonksiyon çağıracaksak, fonksiyonun adının önüne ()=> işaretini koymalıyız, yoksa fonksiyonu event ı beklemeden çalıştırıyor
    let buttonTitle = (date) => {
        // console.log(date);
        count = 0
        document.querySelector("span").textContent = count
        document.querySelector(".btn-danger").textContent = date
    }

    return (
        //! JSX alani
        <div className='text-center m-4'>
            <h1>INFO: {baslik} </h1>
            <h2>SAYAC: <span className=' text-danger'>{count}</span> </h2>

            <button className='btn btn-primary m-2' onClick={increase}>ARTTIR </button>
            <button className='btn btn-danger m-2' onClick={() => buttonTitle(new Date().getFullYear())}>TEMIZLE </button>
            <button className='btn btn-info m-2' onClick={() => alert("Buton Tiklandi")}>TIKLANDI </button>
        </div>
    )
}

//?-------------------------------------------------------------------
//! Konsolda, güncellenen değişen count u görebiliriz ancak web sayfasında (biz görüntüle demeden) görüntülenmiyor..
//* Çünkü, REACT herhangi bir element i default olarak static sayar
//*DOM manipülasyonunu en aza indirmek için bunu yapar
//* Hangi elementin interactive olduğu konusunda React'e bilgi vermeliyiz.
//! REACT'i interactive elements hakkında bilgilendirmek için iki yöntem kullanıyoruz
//* 1. Statefull Classes. State-based inform (Class Components)
//* 2. Hooks (Functional Components)
//?--------------------------------------------------------------------

export default Events
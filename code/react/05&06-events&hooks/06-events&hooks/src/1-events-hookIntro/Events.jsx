import React from 'react'

//! Bootstrap in yolunu da import ediyoruz
import "bootstrap/dist/css/bootstrap.min.css";


const Events = () => {

    //! Javascript Alani
    let baslik = "MERHABA";
    let count = 0;


    return (
        //! JSX alani
        <div className='text-center'>
            <h1>INFO: {baslik} </h1>
        </div>
    )
}

export default Events
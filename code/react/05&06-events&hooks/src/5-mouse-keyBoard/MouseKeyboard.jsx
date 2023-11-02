import React, { useState } from 'react'


import { FaReact, FaBitbucket } from "react-icons/fa";
import { GiAbstract046 } from "react-icons/gi";



const MouseKeyboard = () => {

    const [xEkseni, setX] = useState(0)
    const [yEkseni, setY] = useState(0)
    /* -------------------------------------------------------------------------- */
    const [inputData, setInput] = useState("")



    //!onMouseMove=mouse umun sayfa üzerindeki hareketlerini inceler. pageX ve pageY komutunu kullanırsanız, bulunduğunuz sayfanın sol üst köşesini 0-0 kabul eder, ona göre konum bildirir
    const mouseMoveEvenT = (e) => {
        // console.log(e.pageX);
        // console.log(e.pageY);
        setX(e.pageX)
        setY(e.pageY)
    }
    /* -------------------------------------------------------------------------- */

    const keyDownEvenT = (e) => {

        if (e.keyCode >= 48 && e.keyCode <= 57) {
            alert("Lutfen harf giriniz")
        } else if (e.keyCode >= 65 && e.keyCode <= 90) {
            alert("Tebrikler harf girdiniz")
        } else {
            alert("ERROR")
        }

    }



    return (
        <div
            // onMouseMove={mouseMoveEvenT}
            className='container text-center mt-4 d-flex flex-column align-items-center'>
            <h2>MOUSE EVENTS</h2>

            <p>X ve Y</p>
            <p className='text-danger fw-bold' > {xEkseni} , {yEkseni}</p>

            <div className='bg-success text-light w-50 p-4' id='coord'
                onMouseMove={mouseMoveEvenT} >
                Koordinatlar <FaReact /> <FaBitbucket /> <GiAbstract046 />
            </div>



            <div className='mt-4 text-danger'>
                <h1>-----------------------------------------</h1>
                <h2>KEYBOARD - CLIPBOARD EVENTS</h2>

                <h2 className='text-success' > {inputData} </h2>

                <input type="text" className='form-control'

                    onChange={(e) => setInput(e.target.value)}

                    onKeyDown={keyDownEvenT}
                />
            </div>

        </div>
    )
}

export default MouseKeyboard
import React from 'react'


import { FaReact, FaBitbucket } from "react-icons/fa";
import { GiAbstract046 } from "react-icons/gi";


const MouseKeyboard = () => {



    return (
        <div className='container text-center mt-4 d-flex flex-column align-items-center'>
            <h2>MOUSE EVENTS</h2>

            <p>X ve Y</p>
            <p className='text-danger' > </p>

            <div className='bg-success text-light w-50 p-4'>
                Koordinatlar <FaReact /> <FaBitbucket /> <GiAbstract046 />
            </div>


        </div>
    )
}

export default MouseKeyboard
import "./Main.scss"
import Card from "./Card"
import {data} from "../../helper/data"

import React from 'react'



const Main = () => {
    // console.log(data);
    return (
        <div className='card-container'>
            {/* //! 1.YOL */}
            {/* {data.map((item) => <Card item = {item} /> )} */}
            {/* //! 2.YOL */}
            {data.map((item) => <Card {...item} key = {item.id} /> )}
        </div>
    )
}

export default Main


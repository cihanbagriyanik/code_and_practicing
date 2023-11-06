import React from 'react'

import logo from "../assets/nba-logo.png"

const Header = () => {
    return (
        <div className='container text-center mt-5' >
            <div>
                <img className='logo' src={logo} alt="" />
                <h1 className='my-3 font-monospace display-5 fw-bold' >NBA Legends</h1>
            </div>
           
        </div>
    )
}

export default Header
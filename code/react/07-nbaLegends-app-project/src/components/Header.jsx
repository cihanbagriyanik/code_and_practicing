//* BENIM YAPTIGIM
// import React from 'react'

// import logo from "../assets/nba-logo.png"

// const Header = () => {
//     return (
//         <div className='container text-center mt-5' >
//             <div>
//                 <img className='logo' src={logo} alt="" />
//                 <h1 className='my-3 font-monospace display-5 fw-bold' >NBA Legends</h1>
//             </div>

//         </div>
//     )
// }

// export default Header
//*DERSTE YAPTIGIMIZ
//! -------------------------------------------------------------------------- */

import React from 'react'
import { Container, Image } from 'react-bootstrap'

import logo from "../assets/nba-logo.png"

const Header = () => {
  return (
    <Container>

      <Image src={logo} width="200px"/>

      <h1 className='display-4 my-2 fw-bold font-monospace'>NBA Legends</h1>

    </Container>
  )
}

export default Header
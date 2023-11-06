//* BENIM YAPTIGIM
// import React, { useState } from 'react'
// import PlayerCard from './PlayerCard'

// import { Row } from "react-bootstrap"

// import { data } from "../helper/data"

// const CardContainer = () => {

//     const [filter, setFilter] = useState('');

//     const filteredData = data.filter(item =>
//         item.name.toLowerCase().includes(filter.toLowerCase())
//     );


//     return (
//         <>
//             <input className='w-50 m-auto form-control' type="search" placeholder='Search Player...'
//                 onChange={e => setFilter(e.target.value)} />

//             <div className='justify-content-center card-container rounded-4 my-4 p-3 d-flex'>


//                 <Row className='d-flex justify-content-center gap-3'>
//                     {filteredData.map((item) => <PlayerCard {...item} />)}
//                 </Row>

//             </div>
//         </>
//     )
// }

// export default CardContainer
//*DERSTE YAPTIGIMIZ
//! -------------------------------------------------------------------------- */

import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import { data } from "../helper/data"
import PlayerCard from './PlayerCard'


const CardContainer = () => {
  return (
    <Container className='rounded-4 my-4 p-3 card-konteynir'>
      <Row className='justify-content-center gap-3'>
        {data.map((player, index) => (

          <Col md={6} lg={4} xl={3} key={index} >
            {/* <PlayerCard player={player} /> */}
            <PlayerCard {...player} />
          </Col>

        ))}
      </Row>
    </Container>
  )
}

export default CardContainer
//* BENIM YAPTIGIM
// import { useState } from 'react';
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';

// function PlayerCard({ name, img, statistics }) {

//     const [statistic, setStatistic] = useState(true)


//     return (
//         <Card className=' player-card rounded-2 p-0 '
//             onClick={() => setStatistic(!statistic)} >
//             {(statistic == true)
//                 ? <Card.Img className=' cardImg' variant="top" src={img} />
//                 : <ListGroup className='d-flex flex-grow-1 justify-content-center align-items-center border-0'>
//                     <ListGroup.Item className='sta-li d-flex h5 text-start'>🏀 {statistics[0]}</ListGroup.Item>
//                     <ListGroup.Item className='sta-li d-flex h5 text-start'>🏀 {statistics[1]}</ListGroup.Item>
//                     <ListGroup.Item className='sta-li d-flex h5 text-start'>🏀 {statistics[2]}</ListGroup.Item>
//                     <ListGroup.Item className='sta-li d-flex h5 text-start'>🏀 {statistics[3]}</ListGroup.Item>
//                 </ListGroup>
//             }

//             <Card.Footer className='cardFooter'>

//                 <Card.Title> {name} </Card.Title>
//             </Card.Footer>

//         </Card>
//     );
// }

// export default PlayerCard;
//*DERSTE YAPTIGIMIZ
//! -------------------------------------------------------------------------- */

import React from 'react'
import { useState } from 'react'
import { Card } from 'react-bootstrap'


const PlayerCard = ({ name, img, statistics }) => {

  const [showImage, setShow] = useState(true)

  return (
    <div>
      <Card className='rounded-2 m-auto player-kart' role='button' onClick={() => setShow(!showImage)}>
        {(showImage)
          ? (<Card.Img className='player-logo' variant="top" src={img}  />)
          : (<ul className='m-auto'>
            {statistics.map((item, index) => {
              return (
                <li className='h5 text-start list-unstyled' key={index}>🏀 {item} </li>
              )
            })}
          </ul>)
        }




        <Card.Footer>
          <Card.Title> {name} </Card.Title>
        </Card.Footer>

      </Card>

    </div>
  )
}

export default PlayerCard
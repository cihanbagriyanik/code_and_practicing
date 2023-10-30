import React from 'react'

//! 1.YOL
// const Card = ({item}) => {
// console.log(object);

// ! 2.YOL
const Card = (props) => {
// console.log(props);


  return (
    <div>

        <div className='title'>
            <h1>{props.title}</h1>
        </div>

        <div className='date'>
            <h1>{props.date}</h1>
        </div>

        <img src={props.image} width={300} alt="" />

        <div className='card-over'>
            <p>{props.desc}</p>
        </div>

    </div>
  )

}

export default Card
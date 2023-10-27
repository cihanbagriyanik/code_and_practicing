import React from 'react'
import MyCard from './Card'

import "../main/Main.scss"

const Main = ({ data }) => {
  return (
    <div className="box">

      {data.map((item) => <MyCard {...item} key={item.id} />)}

    </div>
  )
}

export default Main
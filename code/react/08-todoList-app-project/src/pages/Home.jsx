import React from 'react'
import GorevEkle from '../components/GorevEkle'
import GorevleriGoster from '../components/GorevleriGoster'

import Data from "../helper/Data"
import { useState } from 'react'

const Home = () => {

  const [gorevler, setGorevler] = useState(Data)
  // console.log(gorevler);


  return (
    <div>

      <GorevEkle gorevler={gorevler} setGorevler={setGorevler} />

      <GorevleriGoster gorevler={gorevler} setGorevler={setGorevler} />

    </div>
  )
}

export default Home
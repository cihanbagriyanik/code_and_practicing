import React, { useEffect, useState } from 'react'
import moment from "moment"

const Clock = () => {

  const [time, setTime] = useState(moment())
  const [sayac, setSayac] = useState(0)

  // console.log(time.format());


  //! componentDidMount = ilk render da calis bir daha burayi gorme
  useEffect(() => {
    const zaman = setInterval(() => {
      console.log("merhaba");

      setTime(moment())

    }, 1000)

    //! component kapandiginda yada baska sayfaya gidildiginde calismamiz dursun istersek alttaki return u yaziyoruz.
    //! componentWillUnmount()
    return () => {
      clearInterval(zaman)
    }
    //! componentDidUnmount()
  }, [])



  //! sayac değişkeni her değiştiğinde olmasını istediğim extra olaylar için alttaki useEffect. 
  //! componentDidUpdate()
  useEffect(() => {
    console.log("Sayac arttirildi")
  }, [sayac])




  return (
    <div>

      {time.format("hh")}:
      {time.format("mm")}:
      {time.format("ss")}

      <div>
        <h2>*******************</h2>

        <h1> {sayac} </h1>
        <button
          className='btn btn-warning'
          onClick={() => setSayac(sayac + 1)}
        >
          ARTTIR
        </button>


      </div>


    </div>
  )
}

export default Clock
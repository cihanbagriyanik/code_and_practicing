import React from 'react'

const Msg = ({ isim, telefon }) => {
  // console.log(props.isim);

  //! 2. YOL babadan gelen veriyi props la karilarsak alttaki gibi dest yapmamiz gerekir....
  //!Destruc..(Bu islem fonksiyon parantezinin icinde suslu ile yapiliyor)
  // const { isim, telefon } = props

  return (
    <div style={{ color: "red" }}>

      <h1 >Merhaba ben {isim} ve telefon numaram {telefon}</h1>

    </div>
  )
}

export default Msg
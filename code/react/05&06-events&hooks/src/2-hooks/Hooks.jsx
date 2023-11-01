
import { useState } from "react"


const Hooks = () => {
  //! useState hook u her zaman yukariya yani buraya yazilir
  /* -------------------------------------------------------------------------- */
  const [sayac, setSayac] = useState(0);

  const increasE = () => {
    // sayac = sayac + 1
    // document.querySelector("...").textContent = sayac
    setSayac(sayac + 1)
  }

  const decreasE = () => setSayac(sayac - 1)

  // const cleaR = () => setSayac(0)
  // Asagida da onClick={cleaR} DEMEK GEREK
  /* -------------------------------------------------------------------------- */

  let initinal = {
    isim: "Esra",
    eMail: "esra@gmail.com",
    yas: 39,
    renk: "red",
  }

  const [kisi, setKisi] = useState(initinal);
  // console.log(kisi);

  const changeKisi = () => {

    if (kisi.isim === "Esra") {
      setKisi({
        isim: "Cihan",
        eMail: "cihan@gmail.com",
        yas: 35,
        renk: "blue",
      })
    } else {
      setKisi(initinal);
    }

  }


  return (
    <div className="container text-center">
      <h2>**********************************************</h2>
      <h1 className="mt-5">useState()</h1>
      <h2>SAYAC: <span className="text-danger">{sayac}</span></h2>

      <button className="btn btn-primary m-2" onClick={increasE}>ARTTIR</button>
      <button className="btn btn-danger m-2" onClick={decreasE}>AZLAT</button>
      <button className="btn btn-info m-2" onClick={() => setSayac(0)}>TEMIZLE</button>

      <h2 className="mt-5">**********************************************</h2>

      <div className="mt-5">
        <h1 className="text-info">OBJECT ILE useState() KULLANIMI</h1>
        <h2>{kisi.isim}</h2>
        <h3> {kisi.eMail} </h3>
        <h5> {kisi.yas} </h5>
        <button style={{ backgroundColor: kisi.renk, color: "yellow" }} className="btn" onClick={changeKisi}>CHANGE</button>

      </div>

    </div>
  )
}

export default Hooks
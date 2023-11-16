import React, { useState } from 'react'

import { v4 as uuidv4 } from 'uuid';

const HastaEkle = ({ hastalar, setHastalar, doktorlar, setDoktorlar, doctorClick }) => {
  const [patientName, setName] = useState("")
  const [tarih, setTarih] = useState("")
  console.log(doktorlar);//doktorlar dizisi tek elemanlı geldi
  const handleSubmiT = (e) => {
    e.preventDefault(); //direk submit olayı yapmadan önce alttaki kodlara bak

    let yeniHasta = {
      id: uuidv4(),
      text: patientName,
      day: tarih,
      isDone: false,
      dr: doktorlar[0].doctorName,
    };
    setHastalar([...hastalar, yeniHasta]);

    // submit sonrası inputlardan value temizlemek için, hem alttaki işlemler yapılır, hemde inputlarda value={isim} yazarak browser da boşluksa boşluk isimse isim gözükmesi sağlanır

    setName("");
    setTarih("");
  }

  const yenile = () => {
    setHastalar(hastalar)
    setDoktorlar(doktorlar)

  }





  // console.log(hastalar);

  return (
    <div>
      <form onSubmit={handleSubmiT}>
        <div className="form-control">
          <label htmlFor="text"> Hasta Bilgileri</label>
          <input
            type="text"
            id="text"
            onChange={(e) => setName(e.target.value)}
            value={patientName}
          />
        </div>

        <div className="form-control">
          <label htmlFor="day"> Day & Time</label>
          <input
            type="datetime-local"
            id="day"
            onChange={(e) => setTarih(e.target.value)}
            value={tarih}
          />
        </div>

        <div>
          <button className="dok" type="submit">
            <span style={{ color: "#6a0707" }}>{doktorlar[0].doctorName}</span> için kayıt
            oluştur
          </button>
        </div>
        <div>
          <button className="dok" type="button"
            onClick={yenile}>
            Ana Sayfa
          </button>
        </div>
      </form>
    </div>
  );
}

export default HastaEkle
import React, { useState } from 'react'

const HastaEkle = ({hastalar,setHastalar,doktorlar}) => {
const[patientName,setName]=useState("")
const[tarih,setTarih]=useState("")
 console.log(doktorlar);//doktorlar dizisi tek elemanlı geldi
const handleSubmiT=(e)=>{
  e.preventDefault(); //direk submit olayı yapmadan önce alttaki kodlara bak
  // let yeniHasta = { id: 7, text: patientName, day: tarih, isDone: false };
  setHastalar([
    ...hastalar,
    { id: hastalar.length+1, text: patientName, day: tarih, isDone: false, myDoctor: doktorlar[0].doctorName },
  ]);

  // submit sonrası inputlardan value temizlemek için, hem alttaki işlemler yapılır, hemde inputlarda value={isim} yazarak browser da boşluksa boşluk isimse isim gözükmesi sağlanır

  setName("");
  setTarih("");
}





console.log(hastalar);

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
      </form>
    </div>
  );
}

export default HastaEkle
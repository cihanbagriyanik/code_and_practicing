

//? React, JSX kullanır.
//?  JSX'te, HTML öğelerini doğrudan JS'de kullanabiliriz

//! Componentler birleştirilmiş bir HTML,CSS,JS kodu döndürebilir..
//!Ancak, tek bir kapsayıcı (div, section, article, <> etc. gibi) öğesi döndürmesi gerekir.
//* JSX'te Styling çeşitli şekillerde gerçekleştirilebilir.
//* 1-) Inline-Styling kullanılabilir.
//* 2-) Styling, local veya global bir değişken olarak tanımlanabilir..
//* 3-) Styling external stylesheet (harici stil sayfası) olarak tanımlanabilir

//! NOTES:
//*styling için, property-value(object) yapısı kullanılır.
//* property name için camelCase yazı şekli, class tanımlamaları için className ismi kullanılır
//*Material UI, Styled Component, Sass, Bootstrap etc. gibi 3. part kütüphaneler de stil için kullanılabilir.


import Clock from "../clock/Clock";
import resim1 from "../img/a.jpeg";


//! External CSS importu
import "./Msg.css"


//! Internal css
const styleA = {
  color: "green",
  border: "2px solid red",
  fontFamliy: "Tahoma",
}


const Msg = () => {
  return (

    <div>
      <h2 style={styleA}>Burasi Msg Alani</h2>

      <Clock/>

      <p style={{ color: "red", fontSize: "30px" }}>Hosgeldin REACT</p>

      <img className="resimler" src={resim1} alt="" />

      {/* public deki resimiler direkt yolunu yazarak kullanılabilir */}
      <img className="resimler" src="./assets/images.jpeg" alt="" />

      <img className="resimler" src="https://cdn.pixabay.com/photo/2023/05/03/16/11/alfa-romeo-7968027_640.jpg" alt="" />

    </div>

  )
}

export default Msg
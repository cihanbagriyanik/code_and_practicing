import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import BilgiList from "../components/BilgiList";
import AddBilgi from "../components/AddBilgi";

const Home = () => {
  const [tutorial, setTutorial] = useState([]);

  const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

  //! GET işlemi
  const getTutorialS = async () => {
    const veri = await axios.get(BASE_URL);

    // console.log(veri.data);
    setTutorial(veri.data);
  };

  //!then zinciriyle de yazabilirsiniz
  // useEffect(() => {
  //   axios.get(url).then((res) => setBilgiler(res.data));
  // }, []);
  // console.log(bilgiler);

  useEffect(() => {
    getTutorialS();
  }, []);

  // console.log(tutorial);

  //!POST İşlemi
  const postBilgi = async (veri) => {
    await axios.post(BASE_URL, veri);

    getTutorialS();
  };

  //! Bu sefet farklilik olsun die silme islemi ni cocukta yaptik fakat best practice burda babada olmasidir cunku url yi gondermek iyi degil
  // const deleteBilgi = async (id) => {
  //   await axios.delete(BASE_URL / id)
  // }

  return (
    <>
      <AddBilgi postBilgi={postBilgi} />

      <BilgiList tutorial={tutorial} getTutorialS={getTutorialS} />
    </>
  );
};

export default Home;

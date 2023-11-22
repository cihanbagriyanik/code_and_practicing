import { createContext, useState } from "react";
import data from "./data";
import Home from "./components/Home";

//!context alani aciyoruz
export const OgrenciContext = createContext();

const App = () => {
  const [ogrenci, setOgrenci] = useState(data);

  const changeRenk = (id, newRenk) => {
    setOgrenci(
      ogrenci.map((a) => (a.id === id ? { ...a, color: newRenk } : a))
    );
  };

  return (
    <OgrenciContext.Provider value={{ ogrenci, changeRenk }}>
      <Home />
    </OgrenciContext.Provider>
  );
};

export default App;

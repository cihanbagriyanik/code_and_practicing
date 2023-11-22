import { createContext, useEffect, useState } from "react";
import GosterUsers from "./pages/GosterUsers";

export const KullaniciContext = createContext();

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const changeWidth = (id, yeniWidth) => {
      setUsers(users.map((a) => a.id === id ? {...a, width:yeniWidth} : a))
  };

  return (
    <KullaniciContext.Provider value={{ users, changeWidth }}>
      <GosterUsers />
    </KullaniciContext.Provider>
  );
};

export default App;

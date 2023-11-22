import React, { useContext } from "react";
import { createContext } from "react";

import { useEffect } from "react";
import { useState } from "react";
//! Creating context
export const KullaniciContext = createContext();

//!Provider
const KullaniciProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const changeWidth = (id, yeniWidth) => {
    setUsers(users.map((a) => (a.id === id ? { ...a, width: yeniWidth } : a)));
  };

  const values = { users, setUsers, changeWidth };

  return (
    <KullaniciContext.Provider value={values}>
      {children}
    </KullaniciContext.Provider>
  );
};

//! Consuming
export const useKullaniciContext = () => {
  return useContext(KullaniciContext);
};

export default KullaniciProvider;

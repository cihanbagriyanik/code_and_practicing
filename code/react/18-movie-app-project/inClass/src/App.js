import React from "react";
import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./context/AuthContext";

import { ToastContainer } from "react-toastify";
//!1 yarn add ile package.json a kütüphane yükledik, index.js ye teşekkür importu ekledik, (isteğe bağlı)=> ayrı bir sayfada toast ları topladık, AppRouter hizasına ToastContainer ekledik

const App = () => {
  return (
    <AuthContextProvider>
      <AppRouter />
      <ToastContainer />
    </AuthContextProvider>
  );
};

export default App;

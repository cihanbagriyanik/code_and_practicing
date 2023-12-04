import React from "react";
import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import MovieContextProvider from "./context/MovieContext";
//!1 yarn add ile package.json a kütüphane yükledik, index.js ye teşekkür importu ekledik, (isteğe bağlı)=> ayrı bir sayfada toast ları topladık, AppRouter hizasına ToastContainer ekledik
const App = () => {
  return (
    <div className="dark:bg-[#23242a] min-h-screen">
      <AuthContextProvider>
        <MovieContextProvider>
          <AppRouter />
          <ToastContainer />
        </MovieContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;

import { auth } from "../auth/firebase";
import React, { createContext } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { toastErrorNotifY, toastSuccessNotifY } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";

//!context alanı
export const AuthContextt = createContext();

//!component
const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  //!register
  const createUser = async (email, password, displayName) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toastSuccessNotifY("Registered Successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
      toastErrorNotifY(error.message);
    }
  };

  //!login
  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toastSuccessNotifY("Logged in successfully");
      navigate("/");
    } catch (error) {
      toastErrorNotifY(error.message);
    }
  };

  //! Google ile giris
  //* https://console.firebase.google.com/
  //* => Authentication => sign-in-method => enable Google
  //! Google ile girişi enable yap
  //* => Authentication => settings => Authorized domains => add domain
  //! Projeyi deploy ettikten sonra google sign-in çalışması için domain listesine deploy linkini ekle
  const signUpGoogle = () => {
    //?Google hesaplarima ulasmak icin firebase methodu
    const provider = new GoogleAuthProvider();

    //?acilir pencere ile giris yapilmasi icin firebase methodu
    signInWithPopup(auth, provider)
      .then((result) => {
        toastSuccessNotifY("Logged in Successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const values = { createUser, signIn, signUpGoogle };

  return (
    <AuthContextt.Provider value={values}>{children}</AuthContextt.Provider>
  );
};

export default AuthContextProvider;

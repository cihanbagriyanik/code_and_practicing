import { auth } from "../auth/firebase";
import React, { createContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
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

  const values = { createUser, signIn };

  return (
    <AuthContextt.Provider value={values}>{children}</AuthContextt.Provider>
  );
};

export default AuthContextProvider;

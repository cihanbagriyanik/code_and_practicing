import React, { createContext } from "react";

import { auth } from "../auth/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toastErrorNotifY, toastSuccessNotifY } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";

export const AuthContextt = createContext();

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const createUser = async (email, password, displayName) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toastSuccessNotifY("Registered Successfully")
      navigate("/");
    } catch (error) {
      toastErrorNotifY(error.message);
    }
  };

  const values = { createUser };
  return (
    <AuthContextt.Provider value={values}>
      <>{children}</>
    </AuthContextt.Provider>
  );
};

export default AuthContextProvider;

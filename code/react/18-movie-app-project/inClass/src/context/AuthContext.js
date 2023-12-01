import { auth } from "../auth/firebase";
import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { toastErrorNotifY, toastSuccessNotifY } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";

//!context alanı
export const AuthContextt = createContext();

//!component
const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    userTakip();
  }, []);

  //!register
  const createUser = async (email, password, displayName) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toastSuccessNotifY("Registered Successfully");
      navigate("/");

      //? USERTAKİPTEN SONRA -----kullanıcı profilini güncellemek için kullanılan firebase metodu, login logout da userTakip sayesinde güncelleniyor ama register da isim güncellemesi yok, o da bu şekilde oluyor
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });
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

  //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu. bir kere çalıştır login logout takip eder
  const userTakip = () => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        const { email, displayName, photoURL } = user;
        setCurrentUser({ email, displayName, photoURL });
      } else {
        setCurrentUser(false);
      }
    });
  };

  //! Siteden cikis
  const cikis = () => {
    signOut(auth);
    toastSuccessNotifY("Logout is successfully");
  };

  const values = { createUser, signIn, signUpGoogle, currentUser, cikis };

  return (
    <AuthContextt.Provider value={values}>{children}</AuthContextt.Provider>
  );
};

export default AuthContextProvider;

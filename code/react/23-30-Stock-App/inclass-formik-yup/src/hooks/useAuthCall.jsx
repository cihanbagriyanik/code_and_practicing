import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart, registerSuccess, signInSuccess, signOutSuccess } from "../features/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useAuthCall = () => {
  // const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        "https://stock-api-js.fullstack.clarusway.com/users/",
        userInfo
      );
      console.log("register", data);
      dispatch(registerSuccess(data));
      toastSuccessNotify("Registration is successfully");
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Registration is NOT successfully");
    }
  };

  const signIn = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        "https://stock-api-js.fullstack.clarusway.com/auth/login",
        userInfo
      );
      console.log("signIn", data);
      dispatch(signInSuccess(data));
      toastSuccessNotify("Sign In is successfully");
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Sign In is NOT successfully");
    }
  };

  const signOut = async () => {
    dispatch(fetchStart());
    try {
      // await axios.post(
      //   "https://stock-api-js.fullstack.clarusway.com/auth/logout",
      //   null,
      //   {
      //     headers: {
      //       Authorization: `Token ${token}`,
      //     },
      //   }
      // );

      dispatch(signOutSuccess());
      toastSuccessNotify("Log Out is successfully");
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Log Out is NOT successfully");
    }
  };

  return { register, signIn, signOut };
};

export default useAuthCall;

// https://react.dev/learn/reusing-logic-with-custom-hooks

//! Birden fazla componentte aynı fonksiyona veya fonksiyonlara ihtiyacım varsa (fetch gibi) ve bu fonksiyonlar içerisinde hooklara ihtiyaç duyuyorsam dispatch,state gibi o zaman custom hook yazmak mantıklıdır.
//* custom hooklar "use" kelimesiyle başlar.
//+ custom hooklar jsx return etmez.
//* custom hookslar parametre alabilirler.
//? birden fazla değer veya fonksiyon paylaşabiliriz. Eğer tek bir değer veya fonskiyon paylaşacaksak return deger dememiz yeterli. Ama birden fazlaysa o zaman object içerisinde değerlerimi, fonksiyonlarımı paylaşabilirim.
//? Tek değer paylaştığımızda kullancağımız componentte direk olarka çağırabiliriz. Ama birden fazla değer paylaşıyorsak kullanırken destructuring yapmalıyız.

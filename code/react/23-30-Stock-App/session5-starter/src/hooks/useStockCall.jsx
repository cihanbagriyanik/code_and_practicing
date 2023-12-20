// import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  //   brandsSuccess,
  // firmsSuccess,
  fetchFail,
  fetchStart,
  getSuccess,
} from "../features/stockSlice";
import useAxios from "./useAxios";

const useStockCall = () => {
  // const BASE_URL = import.meta.env.VITE_BASE_URL;
  // const { token } = useSelector((state) => state.auth);
  const { axiosWithToken } = useAxios();
  const dispatch = useDispatch();
  const getFirms = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(`${BASE_URL}firms/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      console.log(data.data);
      //   dispatch(firmsSuccess(data.data))
      dispatch(getSuccess({ data: data.data, url: "firms" }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  const getBrands = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(`${BASE_URL}brands/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      console.log(data.data);
      //   dispatch(brandsSuccess(data.data))
      dispatch(getSuccess({ data: data.data, url: "brands" }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  //* DRY
  //! yukarıdaki gibi her seferinde yazmak yerine daha modüler bir yapı kurarak tek bir fonksiyonla bir den fazla get işlemini gerçekleştirebiliyoruz
  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      // const { data } = await axios(`${BASE_URL}${url}/`, {
      //   headers: {
      //     Authorization: `Token ${token}`,
      //   },
      // });
      const { data } = await axiosWithToken(`${url}/`);
      console.log(data.data);
      //   dispatch(brandsSuccess(data.data))
      dispatch(getSuccess({ data: data.data, url }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  //! istek atarken ortak olan base_url  ve token gibi değerleri her seferinde yazmak yerine axios instance kullanarak bunları orada tanımlıyoruz. Ve sonrasında sadece istek atmak istediğimiz end pointi yazmamız yeterli oluyor.
  const deleteStockData = async (url, id) => {
    dispatch(fetchStart());
    try {
      // await axios.delete(`${BASE_URL}${url}/${id}`, {
      //   headers: {
      //     Authorization: `Token ${token}`,
      //   },
      // });
      await axiosWithToken.delete(`${url}/${id}`);
      getStockData(url);
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const postStockData = async (url, body) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`${url}/`, body);
      getStockData(url);
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  const putStockData = async (url, body) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`${url}/${body._id}`, body);
      getStockData(url);
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { getFirms, getBrands, getStockData, deleteStockData, postStockData,putStockData };
};

export default useStockCall;

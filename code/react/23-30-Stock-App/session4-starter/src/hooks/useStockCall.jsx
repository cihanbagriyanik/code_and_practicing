import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  //   brandsSuccess,
  // firmsSuccess,
  fetchFail,
  fetchStart,
  getSuccess,
} from "../features/stockSlice";

const useStockCall = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { token } = useSelector((state) => state.auth);
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
      const { data } = await axios(`${BASE_URL}${url}/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      console.log(data.data);
      //   dispatch(brandsSuccess(data.data))
      dispatch(getSuccess({ data: data.data, url }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { getFirms, getBrands,getStockData };
};

export default useStockCall;

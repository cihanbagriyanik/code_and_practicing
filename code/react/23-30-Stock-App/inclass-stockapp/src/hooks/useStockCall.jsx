// import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  //   brandsSuccess,
  // firmsSuccess,
  fetchFail,
  fetchStart,
  getProCatBrandSuccess,
  getProPurcFirBrandsSuccess,
  getProSalBrandsSuccess,
  getPurSalesSuccess,
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
  //!Promise.all()
  //* eş zamanlı istek atma. aynı anda istek atılıyor aynı anda responselar gelmeye başlıyor. Zaman noktasında da avantajlı. En uzun hangi istek sürdüyse veriler ondan sonra valid olur. Birbirine bağımlı isteklerde en büyük avantajı hata durumu. İsteklerden biri bile hatalı olursa hepsi iptal olur.
  const getProCatBrand = async () => {
    dispatch(fetchStart());
    try {
      // const [a,b,c] = [1,2,3]
      const [products, brands, categories] = await Promise.all([
        axiosWithToken(`products`),
        axiosWithToken(`brands`),
        axiosWithToken(`categories`),
      ]);
      console.log(products);
      dispatch(
        getProCatBrandSuccess([
          products?.data?.data,
          brands?.data?.data,
          categories?.data?.data,
        ])
      );
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  const getProSalBrands = async () => {
    dispatch(fetchStart());
    try {
      // const { data } = await axiosWithToken.get(`stock/${url}/`);
      const [products, brands, sales] = await Promise.all([
        axiosWithToken.get(`products/`),
        axiosWithToken.get(`brands/`),
        axiosWithToken.get(`sales/`),
      ]);

      dispatch(
        getProSalBrandsSuccess([products?.data, brands?.data, sales?.data])
      );
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  const getProPurcFirBrands = async () => {
    dispatch(fetchStart());
    try {
      // const { data } = await axiosWithToken.get(`stock/${url}/`);
      const [products, purchases, firms, brands] = await Promise.all([
        axiosWithToken.get(`products/`),
        axiosWithToken.get(`purchases/`),
        axiosWithToken.get(`firms/`),
        axiosWithToken.get(`brands/`),
      ]);

      dispatch(
        getProPurcFirBrandsSuccess([
          products?.data,
          purchases?.data,
          firms?.data,
          brands?.data,
        ])
      );
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  const getPurSales = async () => {
    dispatch(fetchStart());
    try {
      const [purchases, sales] = await Promise.all([
        axiosWithToken.get(`purchases/`),
        axiosWithToken.get(`sales/`),
      ]);

      dispatch(getPurSalesSuccess([purchases?.data, sales?.data]));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return {
    getFirms,
    getBrands,
    getStockData,
    deleteStockData,
    postStockData,
    getProCatBrand,
    getProPurcFirBrands,
    getProSalBrands,
    getPurSales,
    putStockData,
  };
};

export default useStockCall;

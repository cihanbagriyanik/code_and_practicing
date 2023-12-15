import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const Firms = () => {
  //? firms verileri bana birden fazla yerde lazım olduğu için fonksiyonu burada değil de her yerden erişebileceğim bir noktada tanımlıyorum. İçerisinde react hookları lazım olduğu için de bu ortak nokta en iyi custom hook olmuş oluyor.
  // const BASE_URL = import.meta.env.VITE_BASE_URL
  // const {token} = useSelector(state=>state.auth)
  // const getFirms = async ()=>{

  //   try {
  //     const {data} = await axios(`${BASE_URL}firms/`,{
  //       headers:{
  //         "Authorization":`Token ${token}`
  //       }
  //     })
  //     console.log(data.data)
  //   } catch (error) {

  //   }
  // }

  const { getFirms, getStockData } = useStockCall();
  const { firms } = useSelector((state) => state.stock);

  useEffect(() => {
    // getFirms();
    getStockData("firms");
  }, []);
  // console.log(firms);

  return (
    <Container>
      <Typography variant="h4" component="h1">
        Firms
      </Typography>
    </Container>
  );
};

export default Firms;

import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";
// import Container from "@mui/material/Container" //! bu yöntem daha performanslı
import { Button, Container, Grid, Typography } from "@mui/material"; //! birden fazla olduğunda yazım kolaylığı sağlıyor.
import FirmCard from "../components/Cards/FirmsCard";

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
  console.log(firms);
  return (
    <Container maxWidth={"xl"}>
      <Typography
        align="center"
        variant="h4"
        component={"h1"}
        color={"secondary.second"}
      >
        Firms
      </Typography>
      <Button variant="contained">New Firm</Button>
      <Grid container spacing={2} mt={3}>
        {firms?.map((firm) => (
          <Grid key={firm._id} item xs={12} md={6} lg={4} xl={3}>
            <FirmCard {...firm} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Firms;

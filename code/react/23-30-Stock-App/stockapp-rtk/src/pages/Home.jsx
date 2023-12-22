import React from "react";
import KpiCards from "../components/KpiCards";
import Charts from "../components/Charts";
import PageHeader from "../components/PageHeader";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <PageHeader text="Dashboard" />
      <KpiCards />
      <Charts />
    </Container>
  );
};

export default Home;

// react-query
// rtk-query
// useSwr

//1. Props & Local State
//2. Context API(auth-theme vb.)
//3. Redux,Zustand,Mobx,Redux-Saga

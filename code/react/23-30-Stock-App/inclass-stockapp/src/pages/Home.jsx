import { Container } from "@mui/material";
import React, { useEffect } from "react";
import PageHeader from "../components/PageHeader";
import KpiCards from "../components/KpiCards";
import Charts from "../components/Charts";
import useStockCall from "../hooks/useStockCall";

const Home = () => {
  const { getPurSales } = useStockCall();

  useEffect(() => {
    getPurSales();
  }, []);

  return (
    <Container maxWidth="xl">
      <PageHeader text="Dashboard" />

      <KpiCards />

      <Charts />
    </Container>
  );
};

export default Home;

import { Container } from "@mui/material";
import React from "react";
import PageHeader from "../components/PageHeader";
import KpiCards from "../components/KpiCards";
import Charts from "../components/Charts";

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

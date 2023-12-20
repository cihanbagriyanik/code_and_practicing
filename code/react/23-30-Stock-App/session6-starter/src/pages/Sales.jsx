import { useEffect, useState } from "react";

import useStockCall from "../hooks/useStockCall";
import { Button, Container } from "@mui/material";

import SaleModal from "../components/modals/SaleModal";
import SaleTable from "../components/tables/SaleTable";
import PageHeader from "../components/PageHeader";

const Sales = () => {
  const { getProSalBrands } = useStockCall();

  const [open, setOpen] = useState(false);

  const [info, setInfo] = useState({
    brandId: "",
    productId: "",
    quantity: "",
    price: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({
      brandId: "",
      productId: "",
      quantity: "",
      price: "",
    });
  };

  useEffect(() => {
    getProSalBrands();
  }, []); // eslint-disable-line

  return (
    <Container maxWidth={"xl"}>
      <PageHeader text="Sales" />

      <Button variant="contained" onClick={handleOpen}>
        New Sale
      </Button>

      <SaleModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <SaleTable setInfo={setInfo} setOpen={setOpen} />
    </Container>
  );
};

export default Sales;

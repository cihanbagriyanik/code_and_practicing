import { useEffect, useState } from "react";
import useStockCall from "../hooks/useStockCall";
import PurchaseModal from "../components/modals/PurchaseModal";
import PurchaseTable from "../components/tables/PurchaseTable";
import PageHeader from "../components/PageHeader";
import { Button, Container } from "@mui/material";

const Purchases = () => {
  const { getProPurcFirBrands } = useStockCall();

  const [open, setOpen] = useState(false);

  const [info, setInfo] = useState({
    brandId: "",
    firmId: "",
    productId: "",
    quantity: "",
    price: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({
      brandId: "",
      firmId: "",
      productId: "",
      quantity: "",
      price: "",
    });
  };

  useEffect(() => {
    getProPurcFirBrands();
  }, []); // eslint-disable-line

  return (
    <div>
      <PageHeader text="Purchases"/>

      <Button variant="contained" onClick={handleOpen}>
        New Purchase
      </Button>

      <PurchaseModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />

      <PurchaseTable setInfo={setInfo} setOpen={setOpen} />
    </div>
  );
};

export default Purchases;

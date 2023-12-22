import Button from "@mui/material/Button";
import Container  from "@mui/material/Container";
import { useState } from "react";
import PurchaseModal from "../components/modals/PurchaseModal";
import PurchaseTable from "../components/tables/PurchaseTable";
import PageHeader from "../components/PageHeader";

const Purchases = () => {
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

  return (
    <Container maxWidth={"xl"}>
      <PageHeader text="Purchases" />

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
    </Container>
  );
};

export default Purchases;

import { useState } from "react";
import { Button , Container} from "@mui/material";
import ProductModal from "../components/modals/ProductModal";
import ProductTable from "../components/tables/ProductTable";
import PageHeader from "../components/PageHeader";

const Products = () => {
  //*Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({
      name: "",
      categoryId: "",
      brandId: "",
    });
  };
  const [info, setInfo] = useState({
    name: "",
    categoryId: "",
    brandId: "",
  });

  return (
    <Container maxWidth={"xl"}>
      <PageHeader text="Products" />
      <Button variant="contained" onClick={handleOpen}>
        New Products
      </Button>
      <ProductModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <ProductTable/>
    </Container>
  );
};

export default Products;

//* Lifting State Up

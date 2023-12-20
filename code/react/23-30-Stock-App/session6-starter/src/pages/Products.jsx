import { useEffect, useState } from "react";
import useStockCall from "../hooks/useStockCall";
import Typography from "@mui/material/Typography";
import { Button, Container, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import loadingGif from "../assets/loading.gif";
import PageHeader from "../components/PageHeader";
import ProductModal from "../components/modals/ProductModal";
import ProductTable from "../components/tables/ProductTable";

const initialState = {
  categoryId: "",
  brandId: "",
  name: "",
};

const Products = () => {
  const { getStockData,getProCatBrand } = useStockCall();
  const { products } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo(initialState);
    //* handleClose olduğunda yani modal kapnadığında formdaki verilerin temizlenmesi için burada tanımladık.
  };
  const [info, setInfo] = useState(initialState);

  useEffect(() => {
    // getStockData("products");
    // getStockData("categori");
    // getStockData("brands");

    getProCatBrand()
  }, []);

  return (
    <Container maxWidth={"xl"}>
      <PageHeader text="Products" />
      <Button variant="contained" onClick={() => setOpen(true)}>
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

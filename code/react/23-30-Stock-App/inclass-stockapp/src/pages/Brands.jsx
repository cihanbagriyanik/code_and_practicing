import { useEffect, useState } from "react";
import useStockCall from "../hooks/useStockCall";
import Typography from "@mui/material/Typography";
import { Button, Container, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import BrandModal from "../components/modals/BrandModal";
import loadingGif from "../assets/loading.gif";
import BrandCard from "../components/Cards/BrandsCard";
import PageHeader from "../components/PageHeader";

const Brands = () => {
  const { getStockData } = useStockCall();
  const { brands, loading } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({
      name: "",
      image: "",
    });
    //* handleClose olduğunda yani modal kapnadığında formdaki verilerin temizlenmesi için burada tanımladık.
  };
  const [info, setInfo] = useState({
    name: "",
    image: "",
  });

  useEffect(() => {
    getStockData("brands");
  }, []);

  return (
    <Container maxWidth={"xl"}>
      {/* <Typography  align="center"
        variant="h4"
        component={"h1"}
        color={"secondary.second"} mb={3}>
        Brands
      </Typography> */}
      <PageHeader text="Brands" />
      <Button variant="contained" onClick={() => setOpen(true)}>
        New Brand
      </Button>
      <BrandModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <Grid container justifyContent={"center"} spacing={2} mt={3}>
        {/* stock ta oluşturduğumuz loading stateini bu şekilde kullanabiliriz. */}
        {loading ? (
          <img src={loadingGif} alt="loading..." height={500} />
        ) : (
          brands?.map((brand) => (
            <Grid item xs={12} md={6} lg={4} xl={3} key={brand._id}>
              <BrandCard
                brand={brand}
                handleOpen={handleOpen}
                setInfo={setInfo}
              />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default Brands;

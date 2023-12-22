import { useState } from "react";
import { Button, Grid, Container } from "@mui/material";
import BrandCard from "../components/Cards/BrandCard";
import BrandModal from "../components/modals/BrandModal";
import PageHeader from "../components/PageHeader";
import { useGetBrandsQuery } from "../services/brands";
import Loading from "../components/Loading";

const Brands = () => {
  const { data: brands, isLoading } = useGetBrandsQuery();
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

  return (
    <Container maxWidth={"xl"}>
      <PageHeader text="Brands" />
      <Button variant="contained" onClick={() => setOpen(true)}>
        New Brand
      </Button>
      <BrandModal open={open} handleClose={handleClose} info={info} />
      <Grid container mt={3} justifyContent={"center"} spacing={3}>
        {/* stock ta oluşturduğumuz loading stateini bu şekilde kullanabiliriz. */}
        {isLoading ? (
          // <img src={loadingGif} alt="loading..." height={500} />
          <Loading />
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

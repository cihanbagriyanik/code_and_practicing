import { useEffect, useState } from "react";
import { Button, Grid, Container } from "@mui/material";
import FirmCard from "../components/Cards/FirmCard";
import FirmModal from "../components/modals/FirmModal";
import PageHeader from "../components/PageHeader";
import { useGetFirmsQuery } from "../services/firms";
import Loading from "../components/Loading";

const Firms = () => {
  //? firms verileri bana birden fazla yerde lazım olduğu için fonksiyonu burada değil de her yerden erişebileceğim bir noktada tanımlıyorum. Ve her seferinde yeniden istek atmamak için bu işlemi rtk query ile yapacağım.
  const { data: firms, isLoading } = useGetFirmsQuery();

  //*Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({
      name: "",
      phone: "",
      image: "",
      address: "",
    });
  };
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    image: "",
    address: "",
  });

  return (
    <Container maxWidth={"xl"}>
      <PageHeader text="Firms" />
      <Button variant="contained" onClick={handleOpen}>
        New Firm
      </Button>
      <FirmModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <Grid container justifyContent="center" spacing={3} mt={3}>
          {firms?.map((firm) => (
            <Grid item xs={12} md={6} lg={4} xl={3} key={firm._id}>
              <FirmCard firm={firm} handleOpen={handleOpen} setInfo={setInfo} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Firms;

//* Lifting State Up

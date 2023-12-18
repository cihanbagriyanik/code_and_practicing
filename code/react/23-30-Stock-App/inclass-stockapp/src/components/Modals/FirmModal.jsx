import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function FirmModal({ open, handleClose }) {
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);

  //   const [name, setName] = useState("");
  //   const [image, setImage] = useState("");
  //   const [phone, setPhone] = useState("");
  //   const [address, setAddress] = useState("");
  const [info, setInfo] = useState({
    name: "",
    address: "",
    phone: "",
    image: "",
  });

  const handleChange = (e) => {
    console.log(e.target.id);
    setInfo({ ...info, [e.target.id]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              label="Firm Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info.name}
              //   onChange={(e) => setInfo({...info, "name": e.target.value})}
              onChange={handleChange}
            />
            <TextField
              label="Firm Address"
              name="address"
              id="address"
              type="text"
              variant="outlined"
              value={info.address}
              //   onChange={(e) => setInfo({...info, "name": e.target.value})}
              onChange={handleChange}
            />
            <TextField
              label="Firm Phone"
              name="phone"
              id="phone"
              type="text"
              variant="outlined"
              value={info.phone}
              //   onChange={(e) => setInfo({...info, "name": e.target.value})}
              onChange={handleChange}
            />
            <TextField
              label="Firm Logo"
              name="image"
              id="image"
              type="text"
              variant="outlined"
              value={info.image}
              //   onChange={(e) => setInfo({...info, "name": e.target.value})}
              onChange={handleChange}
            />
            <Button variant="contained" type="submit">
              Submit Form
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

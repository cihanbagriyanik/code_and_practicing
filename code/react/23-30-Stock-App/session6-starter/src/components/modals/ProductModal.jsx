import React from "react";
import { flexColumn, modalStyle } from "../../styles/globalStyle";
import { Box, Button, MenuItem, Modal, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { useSelector } from "react-redux";
import useStockCall from "../../hooks/useStockCall";

const ProductModal = ({ open, handleClose, info, setInfo }) => {
  const { categories, brands } = useSelector((state) => state.stock);
  const { postStockData } = useStockCall();

  const handleChange = (e) => {
    // console.log(e.target)
    setInfo({ ...info, [e.target.name]: e.target.value }); // selecten ötürü id propertysini kullanamadık sadece name propertysini kullanabiliyoruz.
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postStockData("products", info);
    handleClose();
  };
    console.log(info)
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={flexColumn}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-category">
                Category Name
              </InputLabel>
              <Select
                labelId="demo-simple-select-category"
                id="categoryId"
                name="categoryId"
                value={info.categoryId}
                label="Category Name"
                onChange={handleChange}
              >
                {categories.map((category) => (
                  <MenuItem key={category._id} value={category._id}>
                    {category.name}
                  </MenuItem>
                ))}
                {/* <MenuItem value={"665dasdadasd"}>Food</MenuItem>
                <MenuItem value={"665dasdadasdasd"}>Drink</MenuItem>
                <MenuItem value={"665dasdadasdasds"}>Thirty</MenuItem> */}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-brand">Brand Name</InputLabel>
              <Select
                labelId="demo-simple-select-brand"
                id="brandId"
                name="brandId"
                value={info.brandId}
                label="Brand Name"
                onChange={handleChange}
              >
                {brands.map((brand) => (
                  <MenuItem key={brand._id} value={brand._id}>
                    {brand.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Product Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
            />
            <Button type="submit" variant="contained">
              Submit Product
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ProductModal;

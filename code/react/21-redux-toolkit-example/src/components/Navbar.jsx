import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { kullaniciSil } from "../features/yetkiSlice";

const Navbar = () => {
  const { email } = useSelector((state) => state.yetkiSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    //  ben sayfaya kendi bilgilerimle girdiğimde, biri gelip bu siteye girerse benim bilgilerimle girer, bu yüzden logout yaptığımda bilgilerim silinsin
    dispatch(kullaniciSil());
    navigate("/login");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, cursor: "pointer" }}
            >
              Clarusway News
            </Typography>
            {email === "osman" ? (
              <Button color="inherit" onClick={handleLogout}>
                logout
              </Button>
            ) : (
              <Button color="inherit">login</Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;

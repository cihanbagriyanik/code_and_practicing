import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useAuthCall from "../hooks/useAuthCall";
import LogoutIcon from "@mui/icons-material/Logout";

function Dashboard() {
  const { signOut } = useAuthCall();
  return (
    <Box sx={{ display: "flex", zIndex:"100" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            STOCK APP
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              // same shape as initial values
              // console.log(values);
              signOut();
            }}
          >
            Logout <LogoutIcon style={{marginLeft:"7px"}} />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Dashboard;

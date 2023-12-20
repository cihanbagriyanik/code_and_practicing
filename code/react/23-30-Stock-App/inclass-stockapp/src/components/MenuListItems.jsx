import React, { useState } from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";
import { Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const icon = (name) => `/assets/navbar/${name}.svg`;
const links = [
  {
    // icon:"/assets/navbar/ic.analytics.svg",
    icon: icon("ic_analytics"),
    title: "Dashboard",
    url: "/stock",
  },
  {
    title: "Purchases",
    icon: icon("purchase"),
    url: "/stock/purchases/",
  },
  {
    title: "Sales",
    icon: icon("sales"),
    url: "/stock/sales/",
  },
  {
    title: "Firms",
    icon: icon("firms"),
    url: "/stock/firms/",
  },
  {
    title: "Brands",
    icon: icon("brand"),
    url: "/stock/brands/",
  },
  {
    title: "Products",
    icon: icon("ic_cart"),
    url: "/stock/products/",
  },
];

const MenuListItems = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const iconStyle = {
    color: "secondary.main",
    borderRadius: "1rem",
    "&:hover": {
      backgroundColor: "secondary.main",
      color: "white",
    },
  };
  const selectedStyle = {
    backgroundColor: "secondary.second",
    borderRadius: "1rem",
    "&:hover": {
      backgroundColor: "secondary.main",
      color: "secondary.second",
    },
    color: "white",
  };
  return (
    <div>
      <Toolbar />
      <List>
        {links.map((link, index) => (
          <ListItem key={link.title} disablePadding>
            <ListItemButton
              onClick={() => navigate(link.url)}
              sx={link.url == pathname ? selectedStyle : iconStyle}
            >
              {/* <ListItemIcon sx={{ color: "inherit" }}>
                <Box
                  sx={{
                    // backgroundImage: `url(${link.icon})`,
                    width: 24,
                    height: 24,
                    bgcolor: "currentColor",
                    mask: `url(${link.icon}) no-repeat center / contain`,
                  }}
                />
              </ListItemIcon> */}
              <Box
                  sx={{
                    // backgroundImage: `url(${link.icon})`,
                    width: 24,
                    height: 24,
                    mr:2,
                    bgcolor: "currentColor",
                    mask: `url(${link.icon}) no-repeat center / contain`,
                  }}
                />

              <ListItemText primary={link.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MenuListItems;

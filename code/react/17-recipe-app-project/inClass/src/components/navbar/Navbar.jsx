import React from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyles";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/home">
        <i> {"<Clarusway>"} </i> <span> Recipe </span>
      </Logo>
    </Nav>
  );
};

export default Navbar;

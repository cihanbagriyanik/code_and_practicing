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

      <Hamburger>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu>
        <MenuLink to="/about">About</MenuLink>
        <a href="https://github.com/cihanbagriyanik" target="_blank">GitHub</a>
        <MenuLink to="/">Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;

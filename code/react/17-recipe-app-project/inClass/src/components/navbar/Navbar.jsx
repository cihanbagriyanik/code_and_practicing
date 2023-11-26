import React from 'react'
import { Hamburger, Logo, Menu, MenuLink, Nav } from './NavbarStyles'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
const Navbar = () => {

  const[acik,setAcik]=useState(false)

  return (
    <Nav>
      <Logo >
        <i>{"<Clarusway/>"} </i>
        {/* tag lere özel < işaretlerini string gibi kullanmak istersek üstteki syntax la yazarız */}
        <span>recipe</span>
      </Logo>

      <Hamburger>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu >
        <MenuLink >About</MenuLink>

        <a href="https://github.com">Github</a>

        <MenuLink >Logout</MenuLink>
      </Menu>
    </Nav>
  );
}

export default Navbar
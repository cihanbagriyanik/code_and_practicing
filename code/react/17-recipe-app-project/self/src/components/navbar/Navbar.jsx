import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MenuLink, Logo, MyNavbar, Span } from "./style";

const myNavbar = () => {
  return (
    <MyNavbar expand="md" className="bg-body-tertiary">
      <Container fluid>
        <Logo href="/">
          {" "}
          <Span>{"< Cihan / >"}</Span> Recipe App{" "}
        </Logo>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-end flex-grow-1">
            <MenuLink to="/">Home</MenuLink>
            <MenuLink to="/about">About</MenuLink>
            <MenuLink to="/login">Login</MenuLink>
            <MenuLink to="/register">Register</MenuLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </MyNavbar>
  );
};

export default myNavbar;

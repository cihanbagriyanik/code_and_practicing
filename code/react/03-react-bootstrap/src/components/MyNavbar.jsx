import React from 'react'

//! Import etmenin 1. Yolu
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


//! Import etmenin 2. yolu elle ve uzun oluyor
// import {Container, Form, Nav, NavDropdown, Navbar, Button} from "react-bootstrap";

//! Import IMG
import resim from "../img/logo_colorful.png"


function MyNavbar() {
    //! Navbar scrolling modeli
    return (
        //! expand="lg" => linklerin large ekrandan itibaren gozuksun (lg-mg-sm) da olabilir
        //* BURDA ben expand i (sm) yaptim orj ni (lg) **//
        <Navbar expand="sm" bg='light' >  
            <Container fluid>
                <Navbar.Brand href="#">
                    <img src={resim} width="70px" alt="" />
                </Navbar.Brand>
                {/* Hamburger butonu ile toggle olayini yapiyor (tiklayinca kaybolan linkler gelsin gitsin) */}
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        {/* <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link> */}
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;
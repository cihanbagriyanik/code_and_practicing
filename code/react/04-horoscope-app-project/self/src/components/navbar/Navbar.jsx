import React from 'react'

//SCSS import
import "../navbar/Navbar.scss"

// Responsive behaviors Navbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


// Logo import
import logo from "../../helper/logo.png"


const MyNavbar = () => {
    return (

        <Navbar collapseOnSelect expand="sm" className="navbar-body">

            <Container fluid>

                <Navbar.Brand href="#home">
                    <img className='logo' src={logo} alt="" />
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className='links' href="#horoscope">Horoscope</Nav.Link>
                        <Nav.Link className='links' href="#daily">Daily</Nav.Link>
                        <Nav.Link className='links' href="#tarot">Tarot</Nav.Link>
                        <Nav.Link className='links' href="#article">Article</Nav.Link>
                        <Nav.Link className='links' href="#contact"> Contact </Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>

        </Navbar>
    );
}

export default MyNavbar
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

export const MenuLink = styled(NavLink)`
  color: #02475e;
  margin-left: 1rem;
  text-decoration: none;
  transition: all 0.3s ease-in 0s;
  font-weight: 600;
  &:hover{
    color: #00adb5;
  }
`;

export const MyNavbar = styled(Navbar)`
  background-color: #e1f1dd !important;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
`;

export const Logo = styled(Navbar.Brand)`
  color: #00adb5;
  font-size: 2rem;
`;

export const Span = styled.span`
  color: black;
  font-style: italic;
`;

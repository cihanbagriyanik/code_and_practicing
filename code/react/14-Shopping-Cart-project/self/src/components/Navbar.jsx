import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-secondary bg-opacity-75 bg-body-tertiary">
        <div className="container-fluid">
          <span className=" navbar-brand text-white">
            {/* <a className="nav-link" href="/">Shopping Cart</a> */}
            Shopping Cart
          </span>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="navbar-collapse text-end w-full collapse"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="newproduct">
                  New Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="productlist">
                  Product List
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="about">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

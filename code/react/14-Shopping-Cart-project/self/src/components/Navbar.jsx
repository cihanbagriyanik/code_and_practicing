import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-md bg-secondary bg-opacity-75 bg-body-tertiary">
        <div className="container-fluid">
          <span class="navbar-brand text-white">Shopping Cart</span>
          <button
            class="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className="navbar-collapse text-end w-full collapse"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  New Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Product List
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

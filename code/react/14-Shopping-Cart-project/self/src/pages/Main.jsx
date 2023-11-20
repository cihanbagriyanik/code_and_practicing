import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <main className="main d-flex justify-content-center align-items-center">
      <div className="mainDiv text-center">
        <h1>Welcome to Shopping Cart Application</h1>
        <div className="main-buttons">
          <button
            className="btn btn-outline-primary px-4"
            onClick={() => navigate("/newproduct")}
          >
            Add New Product
          </button>
          <button
            className="btn btn-primary px-4 ms-3"
            onClick={() => navigate("/productlist")}
          >
            See Products
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;

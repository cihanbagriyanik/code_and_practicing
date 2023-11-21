import React, { useState } from "react";
import ProductForm from "../components/ProductForm";

import axios from "axios";

const NewProduct = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   price: 0,
  //   amount: 0,
  //   dampingRate: 0.8,
  //   image: "",
  // });
  const initialValue = {
    name: "",
    price: 0,
    amount: 0,
    dampingRate: 0.8,
    image: "",
  };
  const [formData, setFormData] = useState(initialValue);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      "https://63f4e5583f99f5855db9e941.mockapi.io/products",
      formData
    );

    setFormData(initialValue);
  };

  return (
    <div className="container">
      <article
        id="add-product"
        className="mb-4 mt-4 col col-lg-6 mx-auto border rounded-2 bg-opacity-50 bg-light"
      >
        <h1 className="text-center"> New Product</h1>

        <ProductForm
          handleSubmit={handleSubmit}
          formData={formData}
          setFormData={setFormData}
        />
      </article>
    </div>
  );
};

export default NewProduct;

import axios from "axios";

import ProductForm from "../components/ProductForm";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const UpdateProduct = () => {
  const {
    state: { product },
  } = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(product);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `https://63f4e5583f99f5855db9e941.mockapi.io/products/${product.id}`,
      formData
    );

    navigate(-1);
  };

  return (
    <div className="container">
      <article
        name="add-product"
        className="mb-4 mt-4 col col-lg-6 mx-auto border rounded-2 bg-opacity-50 bg-light"
      >
        <h1 className="text-center">update Product</h1>

        <ProductForm
          handleSubmit={handleSubmit}
          formData={formData}
          setFormData={setFormData}
        />
      </article>
    </div>
  );
};

export default UpdateProduct;

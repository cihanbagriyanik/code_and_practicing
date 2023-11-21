import React, { useState } from "react";
import ProductForm from "../components/ProductForm";



const NewProduct = () => {
 


 
  return (
    <div className="container">
      <article
        id="add-product"
        className="mb-4 mt-4 col col-lg-6 mx-auto border rounded-2 bg-opacity-50 bg-light"
      >
        <h1 className="text-center"> New Product</h1>
        
        <ProductForm
          
        />
      </article>
    </div>
  );
};

export default NewProduct;

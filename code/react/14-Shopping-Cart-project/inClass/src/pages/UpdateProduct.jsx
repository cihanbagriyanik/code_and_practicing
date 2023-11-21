import axios from "axios";

import ProductForm from "../components/ProductForm";


const UpdateProduct = () => {
 

  
  return (
    <div className="container">
      <article
        name="add-product"
        className="mb-4 mt-4 col col-lg-6 mx-auto border rounded-2 bg-opacity-50 bg-light"
      >
        <h1 className="text-center">update Product</h1>
     
           
             
        <ProductForm />
      </article>
    </div>
  );
};

export default UpdateProduct;

import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios";

const ProductList = () => {
 
  


  return (
    <div className="container mt-3">
      <div className="d-sm-block d-md-flex">
        
          <>
            <article id="product-panel" className="col-md-6">
              {[].map(product => (
                <ProductCard key={product.id}  />
              ))}
            </article>
            <article className="col-md-4 m-3">
              <CardTotal />
            </article>
          </>
        
      </div>
    </div>
  );
};

export default ProductList;

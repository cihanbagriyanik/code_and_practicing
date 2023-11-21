import axios from "axios";

import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";

import React, { useEffect, useState } from "react";

const ProductList = () => {
  const BASE_URL = "https://63f4e5583f99f5855db9e941.mockapi.io/products";
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  //! get process
  const getData = async () => {
    try {
      const { data } = await axios.get(BASE_URL);
      // console.log(data);
      setProducts(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  if (error === true) {
    return (
      <p className="text-center text-danger w-100 ">
        Something went wrong......
      </p>
    );
  }

  return (
    <div className="container mt-3">
      <div className="d-sm-block d-md-flex">
        {loading === true ? (
          <p className="text-center text-primary w-100">LOADING......</p>
        ) : (
          <>
            <article id="product-panel" className="col-md-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  getData={getData}
                />
              ))}
            </article>
            <article className="col-md-4 m-3">
              <CardTotal />
            </article>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductList;

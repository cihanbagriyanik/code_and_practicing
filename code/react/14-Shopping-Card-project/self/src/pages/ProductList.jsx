import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const BASE_URL = "https://655a3f7d6981238d054d4acf.mockapi.io/products";

  const [product, setProduct] = useState([]);

  const [error, setError] = useState(false);
  const [loading, setLoad] = useState(true);

  const getproducts = async () => {
    try {
      const veri = await axios.get(BASE_URL);
      setProduct(veri.data);
      console.log(veri.data);
      setLoad(false);
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    getproducts();
  }, []);

  // //!POST İşlemi
  // const postBilgi = async (veri) => {
  //   await axios.post(BASE_URL, veri);

  //   getproducts();
  // };

  // const putBilgi = async (veri) => {
  //   try {
  //     await axios.put(`${BASE_URL}/`, veri);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     getproducts();
  //     //! Islem basarilida olsa hatayada dusse finally her turlu calisir
  //   }
  // };

  // const deleteBilgi = async (id) => {
  //   await axios.delete(`${BASE_URL}  ${id}/`);
  // };
  if (error) {
    return <p className="text-center text-danger w-100">ERROR....</p>;
  } else if (loading) {
    return <p className="text-center text-danger w-100">Loading....</p>;
  }
  return (
    <div className="container mt-3">
      <div className={"d-sm-block d-md-flex"}>
        {product.length ? (
          <>
            <article id="product-panel" className="col-md-6">
              <ProductCard product={product} />
            </article>
            <article className="col-md-4 m-3">
              <CardTotal />
            </article>
          </>
        ) : (
          <p className="text-center text-danger w-100">No products data...</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;

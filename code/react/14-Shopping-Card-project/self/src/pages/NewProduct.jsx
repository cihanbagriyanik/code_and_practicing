import React from "react";

import { useState } from "react";

const NewProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(1);
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Burada formun gönderilmesiyle ilgili işlemleri yapabilirsiniz.
    // Örneğin, bu bilgileri bir API'ye gönderebilir veya başka bir işlem yapabilirsiniz.

    // Örnek olarak konsola yazdırma:
    console.log("Product Information:", { name, price, amount, image });

    // Formu gönderdikten sonra state'i sıfırlayabilirsiniz.
    setName("");
    setPrice(0);
    setAmount(1);
    setImage("");
  };

  return (
    <div className="container">
      <article
        id="add-product"
        className="mb-4 mt-4 col col-lg-6 mx-auto border rounded-2 bg-opacity-50 bg-light"
      >
        <h1 className="text-center text-white p-3">New Product</h1>
        <form className="p-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              required=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Product Price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              required=""
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">
              Product Quantity
            </label>
            <input
              type="number"
              className="form-control"
              id="amount"
              required=""
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <label htmlFor="image" className="form-label">
            Product Image
          </label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
              https://example.com/
            </span>
            <input
              type="url"
              className="form-control"
              id="image"
              aria-describedby="basic-addon3"
              required=""
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="add-to-cart btn btn-success btn-sm m-4"
            >
              <i className="fa-solid fa-cart-plus me-2"></i>Save To New Product
            </button>
          </div>
        </form>
      </article>
    </div>
  );
};

export default NewProduct;
{
  /* <div>
<article id="add-product" className="mb-4 mt-4 col col-lg-6 mx-auto border rounded-2 bg-opacity-50 bg-light">
<h1 className="text-center text-white p-3">New Product</h1>
<form className="p-3">

<div className="mb-3">
<label for="add-name" className="form-label">Product Name</label>
<input type="text" className="form-control" id="name" required="" value="">

</div>
<div className="mb-3">
<label for="add-price" className="form-label">Product Price</label>
<input type="number" className="form-control" id="price" required="" value="0">

</div>
<div className="mb-3">
<label for="add-quantity" className="form-label">Product Quantity</label>
<input type="number" className="form-control" id="amount" required="" value="1">

</div>
<label for="add-image" className="form-label">Product Image</label>
<div className="input-group mb-3"><span className="input-group-text" id="basic-addon3">https://example.com/</span>
<input type="url" className="form-control" id="image" aria-describedby="basic-addon3" required="" value="">
</div>
<div className="text-center">
<button type="submit" className="add-to-cart btn btn-success btn-sm m-4">
<i className="fa-solid fa-cart-plus me-2"></i>Save To New Product</button>
</div>
</form>
</article>



</div> */
}

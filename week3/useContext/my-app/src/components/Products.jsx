import React, { useContext } from "react";
import { ContadorContext } from "../context/ContadorContext";
import fetchApi from "../hooks/fetchApi";

const Products = () => {
  const { products } = fetchApi("http://localhost:4000/products");

  const context = useContext(ContadorContext);
  const { productosArr, setProductosArr } = context;
  console.log(context);

  const addProduct = (product) => {
    setProductosArr([...productosArr, product]);
  };

  return (
    <div>
      Products
      {products.map((product) => {
        return (
          <button
            className="btn btn-primary mt-2 d-block"
            onClick={() => addProduct(product)}
          >
            {product.model}
          </button>
        );
      })}
    </div>
  );
};

export default Products;

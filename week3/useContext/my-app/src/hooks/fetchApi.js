import React, { useState, useEffect } from "react";

const fetchApi = (url) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData(url);
  }, [url]);

  const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data);
  };

  return { products, setProducts };
};

export default fetchApi;

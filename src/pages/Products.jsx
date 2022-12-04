import React from "react";
import { useQuery } from "react-query";

const Products = () => {
  const { isLoading, error, data } = useQuery("fake-products", () =>
    fetch("https://fakestoreapi.com/products").then((res) => res.json())
  );
  console.log(data);
  return <div>Products</div>;
};

export default Products;

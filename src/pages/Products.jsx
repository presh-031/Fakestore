import React from "react";
import { useQuery } from "react-query";
import Product from "../components/Product";

const Products = () => {
  const { isLoading, error, data } = useQuery("fake-products", () =>
    fetch("https://fakestoreapi.com/products").then((res) => res.json())
  );
  console.log(data);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="p-24 flex bg-[rgb(184, 184, 184)] flex-col gap-12">
      {data.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;

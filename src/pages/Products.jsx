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
    <div className="bg-[rgb(184, 184, 184)] flex flex-col gap-12 p-24 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;

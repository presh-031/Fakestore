import React from "react";
import { useQuery } from "react-query";
import Product from "../components/Product";

const Products = () => {
  const { isLoading, error, data } = useQuery("fake-products", () =>
    fetch("https://fakestoreapi.com/products").then((res) => res.json())
  );

  if (isLoading) return <p className="mt-24 text-center text-4xl">Loading available products...</p>;

  if (error) return <p className="mt-24 text-center text-4xl">An error has occurred: {error.message}</p>;

  return (
    <div className="bg-[rgb(184, 184, 184)] flex flex-col gap-12 p-24 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;

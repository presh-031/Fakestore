import { addToCart } from "../features/cart/cartSlice";
// src/components/Item.js
import { useDispatch } from "react-redux";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="rounded-xl border-[1px] border-gray-400 bg-white sm:flex sm:flex-col sm:justify-between">
      <div className="  flex  items-center justify-center py-4">
        <img
          className=" h-[14rem] w-[12rem] object-contain  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          src={product.image}
          alt="product"
        />
      </div>
      <div className="border-top-[1px] border-top-gray-400 p-4">
        <p className="mb-4 text-2xl font-bold leading-[2rem]">
          {product.title}
        </p>
        <p className="mb-4 text-xl font-medium">${product.price}</p>
        <button
          onClick={handleClick}
          className="w-[100%] bg-black py-4 text-2xl font-bold text-white "
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;

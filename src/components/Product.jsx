// src/components/Item.js
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="border border-red-800">
      <div className=" border py-4 border-black flex justify-center items-center">
        <img className="outline w-[12rem] h-[14rem]" src={product.image} alt="product" />
      </div>
      <div className="p-4">
        <p className="font-bold text-2xl mb-4 leading-[2rem]">{product.title}</p>
        <p className="mb-4 text-xl font-medium">${product.price}</p>
        <button onClick={handleClick} className="text-white text-2xl bg-black w-[100%] py-4 font-bold ">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;

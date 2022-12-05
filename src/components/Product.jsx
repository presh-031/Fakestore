// src/components/Item.js
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-white rounded-xl border-[1px] border-gray-400">
      <div className="  py-4  flex justify-center items-center">
        <img className=" w-[12rem] h-[14rem] object-contain" src={product.image} alt="product" />
      </div>
      <div className="border-top-[1px] border-top-gray-400 p-4">
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

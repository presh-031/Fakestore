import { incrementQuantity, decrementQuantity, removeItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const CartItem = ({ id, image, title, price, quantity = 0 }) => {
  const dispatch = useDispatch();

  return (
    <div className="outline mb-16 flex ">
      <div>
        <img className="h-48 w-36" src={image} alt="product" />
      </div>
      <div className="flex-1    border border-red-800">
        <div className="w-[18rem] h-[100%] flex flex-col justify-between outline mx-auto text-center">
          <p className="text-2xl font-semibold truncate">{title}</p>
          <p className="text-2xl">${price}</p>
          <div className="outline flex items-center gap-6 justify-center ">
            <button className=" p-4 bg-[#e5e5e5]" onClick={() => dispatch(decrementQuantity(id))}>
              <AiOutlineMinus className="font-bold" />
            </button>
            <p className="text-xl">{quantity}</p>
            <button className=" p-4 bg-[#e5e5e5]" onClick={() => dispatch(incrementQuantity(id))}>
              <AiOutlinePlus className="font-bold" style={{ fontWeight: "bold" }} />
            </button>
          </div>
          <button
            className="bg-[#ff9999] py-2 w-[10rem] mx-auto text-xl font-medium"
            onClick={() => dispatch(removeItem(id))}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

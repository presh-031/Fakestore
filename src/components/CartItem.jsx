import { incrementQuantity, decrementQuantity, removeItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const CartItem = ({ id, image, title, price, quantity = 0 }) => {
  const dispatch = useDispatch();

  return (
    <div className=" mb-16 flex outline">
      <div>
        <img className="h-48 w-36 object-contain" src={image} alt="product" />
      </div>
      <div className="flex-1   ">
        <div className="mx-auto flex h-[100%] w-[18rem] flex-col  justify-between text-center">
          <p className="truncate text-2xl font-semibold">{title}</p>
          <p className="text-2xl">${price}</p>
          <div className=" flex items-center justify-center gap-6 ">
            <button className=" bg-[#e5e5e5] p-4" onClick={() => dispatch(decrementQuantity(id))}>
              <AiOutlineMinus className="text-xl font-bold" />
            </button>
            <p className="text-xl">{quantity}</p>
            <button className=" bg-[#e5e5e5] p-4" onClick={() => dispatch(incrementQuantity(id))}>
              <AiOutlinePlus className="font-bold" style={{ fontWeight: "bold" }} />
            </button>
          </div>
          <button
            className="mx-auto w-[10rem] bg-[#ff9999] py-2 text-xl font-medium"
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

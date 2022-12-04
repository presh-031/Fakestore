import { incrementQuantity, decrementQuantity, removeItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const CartItem = ({ id, image, title, price, quantity = 0 }) => {
  const dispatch = useDispatch();

  return (
    <div className="outline mb-16 flex">
      <div>
        <img className="h-40 w-auto" src={image} alt="product" />
      </div>
      <div>
        <p>{title}</p>
        <p>{price}</p>
        <div>
          <AiOutlineMinus onClick={() => dispatch(decrementQuantity(id))} />
          <p>{quantity}</p>
          <AiOutlinePlus onClick={() => dispatch(incrementQuantity(id))} />
        </div>
        <button onClick={() => dispatch(removeItem(id))}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;

import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

import { useNavigate } from "react-router-dom";
const Cart = () => {
  const cart = useSelector((state) => state.cart);

  // To show total items in cart.
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  // Initialize navigate
  const navigate = useNavigate();
  return (
    <div className="mx-auto max-w-[80rem] px-12 outline sm:px-24">
      <h2 className="my-8 text-center text-4xl font-semibold">Your shopping cart:</h2>
      <div className="">
        {cart?.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>
      <p className="mb-14 text-center text-4xl font-semibold">
        Total ({getTotal().totalQuantity} items) : ${getTotal().totalPrice.toFixed(2)}
      </p>
      <button
        onClick={() => {
          alert("Thanks for stopping by!");
        }}
        className="mb-8 block  w-[100%] bg-[#46d7ff] py-4 text-3xl font-semibold"
      >
        Checkout
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="mb-8  block w-[100%] bg-[#ff9999] py-4 text-3xl font-semibold"
      >
        Close
      </button>
    </div>
  );
};

export default Cart;

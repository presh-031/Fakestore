import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

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

  console.log(cart);
  return (
    <div className="px-4">
      <h2 className="text-4xl text-center font-semibold">Your shopping cart</h2>
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
      <p>
        Total ({getTotal().totalQuantity} items) : <strong>${getTotal().totalPrice.toFixed(2)}</strong>
      </p>
      <button>Checkout</button>
      <button>Close</button>
    </div>
  );
};

export default Cart;

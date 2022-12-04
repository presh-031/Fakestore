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
    <div className="px-12">
      <h2 className="text-4xl my-8 text-center font-semibold">Your shopping cart:</h2>
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
      <p className="text-center text-4xl mb-14 font-semibold">
        Total ({getTotal().totalQuantity} items) : ${getTotal().totalPrice.toFixed(2)}
      </p>
      {/* checkout btn should show order successful popup, and close btn that goes back to homepage */}
      <button className="block bg-[#46ffd3]  mb-8 w-[100%] py-4 text-3xl font-semibold">Checkout</button>
      {/* Close btn should navigate back -1  */}
      <button className="block  bg-[#ff9999] mb-8 w-[100%] py-4 text-3xl font-semibold">Close</button>
    </div>
  );
};

export default Cart;

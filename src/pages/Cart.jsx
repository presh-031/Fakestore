import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  console.log(cart);
  return (
    <div>
      <h2>Your shopping cart</h2>
    </div>
  );
};

export default Cart;

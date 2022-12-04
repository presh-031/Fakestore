import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

// import state , then clg it first, then display number of items
import { useSelector } from "react-redux";
const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };
  return (
    <div className="bg-black text-white py-12 px-8">
      <h1 className="text-center text-8xl text-[#46ffd3] font-bold">FakeStore</h1>
      <ul className="text-4xl flex items-center justify-around mt-8 border border-red-800">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li className=" bg-white relative border border-red-800 flex text-black rounded-full p-4 items-center justify-center">
          <Link to={"/cart"}>
            <FaShoppingCart color="black" />
            <p className="absolute outline left-0 bottom-0">{getTotalQuantity() || 0}</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

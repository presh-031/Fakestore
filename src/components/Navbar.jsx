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
      <h1 className="text-center text-8xl text-[#46d7ff] font-bold">FakeStore</h1>
      <ul className="text-4xl flex items-center justify-around mt-8">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li className=" bg-white relative  flex text-black rounded-full p-6 items-center justify-center">
          <Link to={"/cart"}>
            <FaShoppingCart color="black" />
            <div className="absolute text-xl h-8 w-8 bg-[#ff9999] flex items-center justify-center rounded-full  left-0 bottom-0">
              <span>{getTotalQuantity() || 0}</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
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
        <li className="outline flex items-center justify-center">
          <Link to={"/cart"}>
            <FaShoppingCart />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <p className="border border-red-800">FakeStore</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"/cart"}>Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

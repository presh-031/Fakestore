import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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
  // Initialize navigate
  const navigate = useNavigate();
  return (
    <div className="bg-black py-12 px-8 text-white md:flex md:items-center md:justify-between md:px-12">
      <h1
        onClick={() => {
          navigate("/");
        }}
        className="cursor-pointer text-center text-6xl font-bold text-[#46d7ff] sm:text-8xl"
      >
        FakeStore
      </h1>
      <ul className="mt-8 flex items-center justify-around text-3xl sm:text-4xl md:gap-8">
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
          <Link
            to={"/cart"}
            className=" relative flex  items-center justify-center rounded-full bg-white p-6 text-black"
          >
            <FaShoppingCart color="black" />
            <div className="absolute left-0 bottom-0 flex h-8 w-8 items-center justify-center rounded-full  bg-[#ff9999] text-xl">
              <span>{getTotalQuantity() || 0}</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

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
    <div className="bg-black py-12 px-8 text-white md:flex md:items-center md:justify-between">
      <h1
        onClick={() => {
          navigate("/");
        }}
        className="cursor-pointer text-center text-6xl font-bold text-[#46d7ff] sm:text-7xl md:text-8xl"
      >
        FakeStore
      </h1>
      <ul className="mt-8 flex items-center justify-around text-3xl sm:text-4xl md:mt-0 md:gap-8">
        <li className=" transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-[#46d7ff]">
          <Link to="/">Home</Link>
        </li>
        <li className=" transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-[#46d7ff]">
          <Link to="/products">Products</Link>
        </li>
        <li className=" transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-[#46d7ff]">
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li className=" transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
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

import { Link, useNavigate } from "react-router-dom";
// import state , then clg it first, then display number of items
import { useDispatch, useSelector } from "react-redux";

import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };
  
  return (
    <div className="bg-black py-12 px-8 text-white md:flex md:items-center md:justify-between md:px-20 xl:px-44">
      <h1
        onClick={() => {
          navigate("/");
        }}
        className="cursor-pointer text-center text-6xl font-bold text-[#46d7ff] sm:text-7xl xl:text-8xl"
      >
        FakeStore
      </h1>
      <ul className="mt-8 flex items-center justify-around text-3xl sm:text-4xl md:mt-0 md:gap-8 md:text-3xl xl:text-4xl">
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

import { MdError } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center p-8">
      <p className="m-16 text-6xl font-semibold">Oops...</p>
      <div className="text-4xl flex justify-center items-center gap-6 mb-16 font-medium">
        <span>Page not found!</span>
        <span>
          <MdError />
        </span>
      </div>
      <button
        onClick={() => {
          navigate("/products");
        }}
        className="bg-black text-white text-4xl font-medium p-8 my-4  rounded-full"
      >
        Back to Shopping
      </button>
    </div>
  );
};

export default Error;

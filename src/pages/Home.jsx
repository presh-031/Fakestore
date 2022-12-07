import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="px-8 text-center">
      <p className="mt-16 text-2xl font-medium">BEST ONLINE STORE OF THE YEAR</p>
      <h2 className="mt-8 text-6xl  font-semibold leading-loose">We don't do fashion, we are fashion. </h2>
      <button
        onClick={() => {
          navigate("/products");
        }}
        className="my-4 rounded-full bg-black p-8 text-6xl font-bold  text-white"
      >
        Shop now
      </button>
    </div>
  );
};

export default Home;

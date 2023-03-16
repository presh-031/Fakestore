import { useNavigate } from "react-router-dom";
import bgImg from "../assets/pexels-karolina-grabowska-4464819 (1).jpg";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className=" px-8  md:mt-32 md:flex md:px-20 xl:px-44">
      <div className="text-center  md:flex-1 md:text-left">
        <p className="mt-16 text-2xl font-medium">
          BEST ONLINE STORE OF THE YEAR
        </p>
        <h2 className="mt-8 text-[4rem]  font-semibold leading-loose">
          We don't do fashion, we are fashion.{" "}
        </h2>
        <button
          onClick={() => {
            navigate("/products");
          }}
          className="my-4 rounded-full bg-black p-8 text-6xl font-bold  text-white"
        >
          Shop now
        </button>
      </div>
      <div className="hidden  md:block md:flex-1">
        <img
          src={bgImg}
          alt="background"
          className="h-full object-cover sm:object-left"
        />
      </div>
    </div>
  );
};

export default Home;

import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className=" pb-4 text-gray-800">
      <div className=" flex w-full items-center justify-center text-2xl md:text-3xl">
        -coded by{" "}
        <a href="https://github.com/presh-031" className="ml-2 flex items-center">
          presh-031{" "}
          <div className="ml-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:rotate-[360deg] hover:scale-110 ">
            <BsGithub size={16} />
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

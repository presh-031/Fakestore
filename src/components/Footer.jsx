import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className=" pb-4 text-gray-800">
      <p className=" flex w-full items-center justify-center text-2xl md:text-3xl">
        -coded by{" "}
        <a href="https://github.com/presh-031" className="ml-2 flex items-center">
          presh-031 <BsGithub size={16} />
        </a>
      </p>
    </footer>
  );
};

export default Footer;

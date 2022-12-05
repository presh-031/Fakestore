import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="py-12  bg-black text-[#46d7ff] ">
      <p className=" w-full flex items-center justify-center text-2xl">
        -coded by{" "}
        <a href="https://github.com/presh-031" className="flex ml-2 items-center">
          presh-031 <BsGithub size={16} />
        </a>
      </p>
    </footer>
  );
};

export default Footer;

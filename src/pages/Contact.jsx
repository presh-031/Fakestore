import { BsGithub, BsTwitter } from "react-icons/bs";
const Contact = () => {
  return (
    <>
      <div className="mt-16 flex justify-center gap-8 text-[4.8rem] sm:mt-32 sm:text-[8rem] md:mt-40 md:text-[10rem]">
        {/* Github */}
        <a href="https://github.com/presh-031">
          <BsGithub />
        </a>
        {/* Twitter */}
        <a href="https://twitter.com/Presh_031">
          <BsTwitter />
        </a>
      </div>
      <p className="mt-16 text-center text-4xl font-semibold">Fakestore</p>
      <p className="mt-16 text-center text-4xl font-semibold">
        Bob bobbity way, Earth.
      </p>
    </>
  );
};

export default Contact;

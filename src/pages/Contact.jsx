import { BsGithub, BsTwitter } from "react-icons/bs";
const Contact = () => {
  return (
    <>
      <div className="flex mt-16 justify-center gap-8">
        {/* Github */}
        <a href="https://github.com/presh-031">
          <BsGithub size={48} />
        </a>
        {/* Twitter */}
        <a href="https://twitter.com/Presh_031">
          <BsTwitter size={48} />
        </a>
      </div>
      <p className="text-center text-4xl font-semibold mt-16">Fakestore</p>
      <p className="text-center text-4xl font-semibold mt-16">Bob bobbity way, Earth.</p>
    </>
  );
};

export default Contact;

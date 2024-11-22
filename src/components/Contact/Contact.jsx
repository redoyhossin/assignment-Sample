import Contactform from "./Contactform/Contactform";
import ContactformMap from "./ContactformMap/ContactformMap";

const Contact = () => {
   
  return (
    <div className="bg-[#504b4b23]">
      <div className="text-center font-bold text-5xl py-24 text-white opacity-50 bg-[#3a3a3a]">
        <h1 className="">Contact Us</h1>
      </div>
      <div className="mx-auto max-w-screen-xl mt-4">
        <div className=" md:flex lg:flex">
          <Contactform />
          <ContactformMap />
        </div>
      </div>
    </div>
  );
};

export default Contact;

import { Helmet } from "react-helmet-async";
import Contactform from "./Contactform/Contactform";
import ContactformMap from "./ContactformMap/ContactformMap";
import MapsNameCard from "./MapsNameCard/MapsNameCard";
import SharedMap from "./SharedMap/SharedMap";

const Contact = () => {
  return (
    <div className="bg-[#504b4b23] pb-4">
       <Helmet>
        <title>  Contact Us-SGOil Refineries Limited</title>
      </Helmet>
      <div className="text-center font-bold text-5xl py-24 text-white opacity-50 bg-[#3a3a3a]">
        <h1 className="">Contact Us</h1>
      </div>
      <div className="mx-auto max-w-screen-xl mt-4">
        <div className=" md:flex lg:flex ">
          <Contactform />
          <ContactformMap />
        </div>
        <div className="mt-4">
          <MapsNameCard />
          <SharedMap />
        </div>
      </div>
    </div>
  );
};

export default Contact;

import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const BrandDynamicCards = () => {
  const { state } = useLocation();
  const {
    img,
    logotitle,
    logoimg,
    title,
    maindetailshighlight,
    maindetails,
    subdetailshighlight,
    subdetails,
    bodydetailshighlight,
    bodydetail,
    footerdetailshighlight,
    footerdetails,
    largefooter,
  } = state;
  // console.log(state)
  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="my-5 px-6">
        <img src={img && img ? img : logoimg} alt="" />
        <p className="text-gray-800 py-5">
          <strong>{title && title}</strong>{" "}
        </p>
        <p className=" leading-loose">
          <span className="text-gray-800 font-semibold italic underline">
            {maindetailshighlight && maindetailshighlight}
          </span>
          {maindetails && maindetails}
        </p>
        <p className="text-3xl my-4 font-bold">{subdetailshighlight}</p>
        <p className="leading-loose">
          {subdetails && subdetails ? subdetails : largefooter}
        </p>
      </div>

      <div className="my-5 px-6">
        <h4 className="text-gray-800 font-bold py-5">{bodydetailshighlight}</h4>
        <p className="leading-loose">{bodydetail && bodydetail}</p>
      </div>
      <div className="mt-5 px-6">
        <h4 className="text-gray-800 font-bold py-5">
          {footerdetailshighlight}
        </h4>
        <p className="leading-loose">{footerdetails && footerdetails}</p>
        {/* media */}
        <ul className="flex justify-center lg:justify-start gap-2 md:gap-3">
          <li className="bg-[#3b5998] p-2 transition hover:scale-90">
            <a
              href="https://web.facebook.com/rupchandabd/?_rdc=1&_rdr#"
              rel="noreferrer"
              target="_blank"
            >
              <FaFacebookSquare className="text-white text-4xl rounded-full" />
            </a>
          </li>
          <li className="bg-[#cd201f] p-2 transition hover:scale-90">
            <a
              href="https://www.youtube.com/channel/UCFcBlDUoLaGbFQEoRvvb8zw"
              rel="noreferrer"
              target="_blank"
            >
              <FaYoutube className="text-white text-4xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BrandDynamicCards;

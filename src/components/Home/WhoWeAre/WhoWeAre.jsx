import { Link } from "react-router-dom";
import OurBrands from "../OurBrands/OurBrands";

const WhoWeAre = () => {
  return (
    <div >
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:my-24">
          <div className="">
            <img
              alt=""
              src="https://beol-bd.com/wp-content/uploads/2024/09/Banner-2.jpg"
              className="h-full w-full object-cover "
            />
          </div>

          <div className="  ">
            <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
              Who we are?
            </h2>

            <p className=" text-gray-600 mt-10 ">
            SG Oil Refinery Limited is a joint-venture company that produces edible oil and exports its products to the world market. The factory is situated in Mogla EPZ and it is the highest exported of Mogla EPZ in terms of foreign currency. The main products of the refinery are palm and soybean oil. 

Its’ SG Oil brand is popular in India, especially North-East India, West Bengal, Jharkhand, Bihar and Uttar Pradesh. It is also exported to Africa and the Middle-East.
            </p>

            <div className="mt-12 ">
              <Link 
                className="group relative inline-flex items-center overflow-hidden rounded  px-8 py-3  text-white bg-blue-900 hover:bg-[#27272a]"
                to="/AboutUs"
              >
                <span className="absolute -start-full transition-all group-hover:start-4">
                  <svg
                    className="size-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>

                <span className="text-sm font-bold transition-all group-hover:ms-4">
                Know More
                </span>
              </Link>
            </div>
          </div>
        </div>
        <OurBrands/>
      </div>
    </div>
  );
};

export default WhoWeAre;

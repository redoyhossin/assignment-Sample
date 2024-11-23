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
              BEOL, which embarked on its journey in 1993, has successfully
              established a strong presence in the market, offering
              consumer-packaged edible oils, rice and goods under renowned
              household brands such as Rupchanda, Fortune, Meizan, King’s, Veola
              and Lucky. Since its inception, BEOL has been highlighting the
              quality considering the well-being of the consumers. BEOL is the
              first ever company to introduce packing of edible oil in PET
              bottles and pouch in Bangladesh. It is the pioneer company to
              introduce Vitamin A Fortification in edible oil in the country.{" "}
              <br /> <br />
              Competing with the established domestic brands and aggressive
              multinational corporations BEOL had a mammoth task ahead of it.
              Rupchanda is the flagship brand of Bangladesh Edible Oil Limited.
              It has started its journey in 1996 and since then it has made its
              place as the “numero-uno” in the branded edible oil category. From
              the very beginning, Rupchanda has taken steps to prepare the
              nation about the vitality of staying fit and healthy. Most
              significantly, for the last 3 decades BEOL’s number 1 edible oil
              brand Rupchanda has been continuously focusing on improving the
              quality of life of its consumers. Rupchanda Fortified Soyabean Oil
              has been awarded as “the best edible oil brand” in Best Brand
              Award given by Bangladesh Brand Forum, a multi-faceted knowledge
              sharing organization in Bangladesh, for 14 consecutive years.
              Moreover, Rupchanda received the ‘Superbrands Bangladesh’ award
              from the same organization since the inception of both of the
              awards.
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

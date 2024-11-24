import { Helmet } from "react-helmet-async";
import BrandsCard from "./BrandsCard/BrandsCard";

import { useEffect, useState } from "react";

const Brands = () => {
  const [Brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    // Fetch data
    fetch("data.json") // URL
      .then((response) => response.json())
      .then((data) => {
        setBrands(data[1]); // Set the fetched data
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Handle errors
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center mt-4">
        <div className="flex">
          <div className="relative">
            <div
              className="w-12 h-12 rounded-full absolute
                    border-4 border-solid border-gray-200"
            ></div>

            <div
              className="w-12 h-12 rounded-full animate-spin absolute
                    border-4 border-solid border-green-500 border-t-transparent"
            ></div>
          </div>
        </div>
      </div>
    );
  }

  // console.log(Brands)
  return (
    <div className="mx-auto max-w-screen-xl">
      <Helmet>
        <title>Brands-SGOil Refineries Limited</title>
      </Helmet>
      <div className="text-center my-3 ">
        <h2 className=" font-bold text-gray-800 md:text-3xl">Brands</h2>
        <div className="inline-block my-7">
          <hr className="bg-blue-900 h-[3px] w-24 " />
          <hr className="bg-blue-900 h-[4px] w-16 ms-4 my-1" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 m-5 md:grid-cols-2 lg:grid-cols-2 lg:gap-8 justify-items-center">
        {Brands.map((Brand) => (
          <BrandsCard key={Brand.id} Brand={Brand}></BrandsCard>
        ))}
      </div>
    </div>
  );
};

export default Brands;

import { useState } from "react";
// import OurBrandsCard from "./OurBrandsCard/OurBrandsCard";
import { useEffect } from "react";

const OurBrands = () => {
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
    return <div>Loading...</div>;
  }

  console.log(Brands);
  return (
    <div>
      <div className="text-center my-3">
        <h2 className=" font-bold text-gray-800 md:text-3xl">Our Brands</h2>
        <div className="inline-block my-7">
          <hr className="bg-blue-900 h-[3px] w-24 " />
          <hr className="bg-blue-900 h-[4px] w-16 ms-4 my-1" />
        </div>
        <p className=" text-gray-600 ">
          We are passionate to understand our consumers’ want and need. Our
          brands aim to improve the quality of people’s lives through continuous
          innovation and uncompromising quality control.
        </p>
      </div>
    </div>
  );
};

export default OurBrands;

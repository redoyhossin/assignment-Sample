import { useEffect, useState } from "react";

const TvOnlineVideo = () => {
  const [CartImg, setCarrlImg] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading 

  useEffect(() => {
    // Fetch data
    fetch("data.json") //  API URL
      .then((response) => response.json()) 
      .then((data) => {
        setCarrlImg(data[2]); // Set the fetched data
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

  console.log(CartImg);
  return (


<div className="mx-auto max-w-screen-xl">
      <div className="text-center my-3 mb-10">
        <h2 className=" font-bold text-gray-800 md:text-3xl">TV & Online Video Commercial</h2>
        <div className="inline-block ">
          <hr className="bg-blue-900 h-[3px] w-24 " />
          <hr className="bg-blue-900 h-[4px] w-16 ms-4 my-1" />
        </div>
      </div>


      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 justify-items-center">
      

      {CartImg.map((CalsData) => (
        <div className="" key={CalsData.id}>
          <iframe
            width="350"
            height="215"
            src={CalsData.url}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
    </div>


  );
};

export default TvOnlineVideo;

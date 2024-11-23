import { useState } from "react";
import GalleryHomeCard from "./GalleryHomeCard/GalleryHomeCard";
import { useEffect } from "react";

const GalleryHome = () => {
  const [Gallerys, setGallerys] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    // Fetch data
    fetch("data.json") // URL
      .then((response) => response.json())
      .then((data) => {
        setGallerys(data[3]); // Set the fetched data
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Handle errors
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div className="flex justify-center mt-4 ">
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
  }
  return (
    <div className="mx-auto max-w-screen-xl pt-20 mb-3">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-4 justify-items-center">
        {Gallerys.map((Gallery) => (
          <GalleryHomeCard key={Gallery.id} Gallery={Gallery} />
        ))}
      </div>
    </div>
  );
};

export default GalleryHome;

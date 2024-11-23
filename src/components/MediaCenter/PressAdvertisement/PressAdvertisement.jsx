import { useEffect } from "react";
import { useState } from "react";
import PressAdvertisementCard from "./PressAdvertisementCard/PressAdvertisementCard";


const PressAdvertisement = () => {
  const [Images, setImages] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Fetch data
    fetch("data.json") //  API URL
      .then((response) => response.json())
      .then((data) => {
        setImages(data[4]); // Set the fetched data
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
  // console.log(Images);

  

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % Images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + Images.length) % Images.length
    );
  };

  return (
    <div className="mx-auto max-w-screen-xl pt-20">
      <div className="text-center my-3 mb-10">
        <h2 className=" font-bold text-gray-800 md:text-3xl">
          Press Advertisement
        </h2>
        <div className="inline-block ">
          <hr className="bg-blue-900 h-[3px] w-24 " />
          <hr className="bg-blue-900 h-[4px] w-16 ms-4 my-1" />
        </div>
      </div>

      <div className="grid grid-cols-1 px-4 gap-4 md:grid-cols-2 lg:grid-cols-2 lg:gap-4 justify-items-center">
        {Images.map((Image, index) => {
          // console.log(Image,index)
          return (
            <div
            key={Image.id}
            className="cursor-pointer"
            onClick={() => openModal(index)}
          >
            <img
              src={Image.img}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg "
            />
          </div>
          )
        })}
      </div>

      {isOpen && (
        <PressAdvertisementCard
          Image={Images[currentImageIndex]}
          closeModal={closeModal}
          nextImage={nextImage}
          prevImage={prevImage}
        />
      )}


    </div>
  );
};

export default PressAdvertisement;

const PressAdvertisementCard = ({
  Image,
  closeModal,
  nextImage,
  prevImage,
}) => {
  const { img, id } = Image;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 ">
      <div className="relative bg-white rounded-lg overflow-hidden shadow-lg max-w-6xl w-full">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-black p-2 "
        >
          X
        </button>

        <div className="flex items-center justify-between ">
          <button
            onClick={prevImage}
            className="text-white bg-gray-800 p-2 rounded-lg"
          >
            &lt;
          </button>
          <button onClick={nextImage} className="text-white bg-gray-800 p-2 ms-1 rounded-lg ">
            &gt;
          </button>
          <img src={img} alt="modal" className="w-full h-auto object-cover rounded-lg " />

        
        </div>
      </div>

      
    </div>
  );
};

export default PressAdvertisementCard;

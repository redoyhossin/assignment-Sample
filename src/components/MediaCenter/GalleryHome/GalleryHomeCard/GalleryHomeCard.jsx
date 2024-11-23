const GalleryHomeCard = ({ Gallery }) => {
  const { name, img, id } = Gallery;

  return (
    <div >
      
      <div className="   border border-blue-gray-50 bg-white p-2 shadow-lg   transition hover:drop-shadow-2xl  text-center">
        <div>
          <img
            className="inline-block  border border-blue-gray-50 bg-white  shadow-lg transition duration-500 hover:shadow-2xl hover:scale-110 "
            src={img}
            alt="name"
          />
        </div>

        <a href="#">
          <h3 className="my-7 text-[22px] font-medium text-gray-900 hover:text-blue-800">
            {name}
          </h3>
        </a>
      </div>
    </div>
  );
};

export default GalleryHomeCard;

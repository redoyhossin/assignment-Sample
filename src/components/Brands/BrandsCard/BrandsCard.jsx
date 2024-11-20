
const BrandsCard = ({Brand}) => {
  const { id, img, logoname, logotitle } = Brand;
  
  return (
    <div>
      <div className="   border border-blue-gray-50 bg-white  shadow-lg   transition hover:drop-shadow-2xl text-center ">
        <div className="bg-[#0B60A90F] p-5" >
          <img
            className=""
            src={img}
            alt=""
          />
        </div>

       <div className="px-5 pb-2">
       <a href="#">
          <h3 className="my-7 text-[22px] font-medium text-gray-900 hover:text-blue-800">
            {logoname}
          </h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {logotitle}
        </p>

        <a
          href="#"
          className=" hover:text-blue-800 group mt-4 inline-flex items-center gap-1 text-base  font-semibold pb-4 text-gray-700 hover:text-[15px] transform hover:scale-95 transition-all duration-300 ease-in-out"
        >
          Know More
          <span aria-hidden="true" className="">
            &rarr;
          </span>
        </a>
       </div>
      </div>
    </div>
  );
};

export default BrandsCard;

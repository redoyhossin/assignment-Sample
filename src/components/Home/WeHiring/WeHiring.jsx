import { Link } from "react-router-dom";

const WeHiring = () => {
  return (
    <div className="text-center  my-14">
      <h2 className=" font-bold text-gray-700 text-sm italic"> We're Hiring</h2>

      <p className="text-3xl font-bold my-8">
        Interested? Get in touch with us at
      </p>
      <Link
        className="group relative inline-flex items-center overflow-hidden rounded  px-8 py-3  text-white bg-blue-900 hover:bg-[#27272a]"
        to="/Contact"
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
          Contact Us
        </span>
      </Link>
    </div>
  );
};

export default WeHiring;

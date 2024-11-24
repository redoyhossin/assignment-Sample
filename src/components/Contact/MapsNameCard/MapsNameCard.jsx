const MapsNameCard = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lg:gap-8 justify-items-center px-6">





        <div className=" h-60 bg-white  w-full p-5 ">
          <h4 className="text-2xl font-bold mb-2">
            Sgoil Refineries Limited (Factory):
          </h4>

          <p className="text-base font-bold my-3">
            Address: Plot: 5-8, 11 & 12 Mongla EPZ, Bagerhat Thana: Mongla
            District: Bagerhat
          </p>
          <a href="tel:+880-2-58815319" className=" font-bold my-2">
            Telephone: <span className="underline"> +880-2-58815319</span>
          </a>
        </div>

        <div className=" w-full h-60 bg-white p-5 hidden md:block lg:block">
          <h4 className="text-2xl font-bold mb-2">
            Shun Shing Edible Oil Limited (Factory):
          </h4>

          <p className="text-base font-bold my-3">
            Plot No. I-1, Mongla Port Industrial Area,
          </p>
          <p className=" font-bold my-2">Mongla, Bagerhat</p>
        </div>









        {/* hideMap */}
        <div className="w-full p-4  sm:my-4   bg-white block md:hidden lg:hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3686.4637458107895!2d89.6002198741466!3d22.486777436112575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s5-8%2C%2011%20%26%2012%20Mongla%20EPZ%2C%20Bagerhat%20%20Mongla%20%20Bagerhat!5e0!3m2!1sen!2sbd!4v1732438682190!5m2!1sen!2sbd"
            width="100%"
            height="330"
            // style="border:0;"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* hideMap */}
      </div>
    </div>
  );
};

export default MapsNameCard;

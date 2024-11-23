const MapsNameCard = () => {
  return (
    <div className="p-4">
      <div className="md:flex lg:flex items-center">

        <div className="p-6 m-2 h-60 bg-white">
          <h4 className="text-2xl font-bold mb-2">
            Bangladesh Edible Oil Limited (Factory):
          </h4>

          <p className="text-base font-bold my-3">
            Uttar Rupshi, Rupshi Bazar, Rupganj, Narayanganj, Bangladesh.
          </p>
          <a href="tel:+880-2-58815319" className=" font-bold my-2">
          Telephone: <span className="underline"> +880-2-58815319</span>
          </a>
        </div>



        <div className="sm:hidden md:block lg:block p-6 mx-2 h-60 bg-white">
          <h4 className="text-2xl font-bold mb-2">
            Shun Shing Edible Oil Limited (Factory):
          </h4>

          <p className="text-base font-bold my-3">
            Plot No. I-1, Mongla Port Industrial Area,
          </p>
          <p className=" font-bold my-2">Mongla, Bagerhat</p>
        </div>







        <div className="w-full p-4 sm:block sm:my-4 md:hidden lg:hidden  bg-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d116840.10827635988!2d90.44031746416651!3d23.77398978799387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sBangladesh%20Edible%20Oil%20Limited!5e0!3m2!1sen!2sbd!4v1732315751373!5m2!1sen!2sbd"
            width="100%"
            height="330"
            // style="border:0;"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MapsNameCard;

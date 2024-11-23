const SharedMap = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lg:gap-8 justify-items-center px-6">
        <div className="sm:hidden md:block lg:block w-full p-4  bg-white">
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
        <div className=" p-6 mx-2 md:hidden lg:hidden h-60 bg-white">
          <h4 className="text-2xl font-bold mb-2">
            Shun Shing Edible Oil Limited (Factory):
          </h4>

          <p className="text-base font-bold my-3">
            Plot No. I-1, Mongla Port Industrial Area,
          </p>
          <p className=" font-bold my-2">Mongla, Bagerhat</p>
        </div>

        <div className="w-full p-4 bg-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.585682761998!2d89.58278487414766!3d22.519722934908444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0025d4be1741dd%3A0x9d2e32e26e7b0346!2sShun%20Shing%20Edible%20Oil%20Ltd.%20(%20A%20subsidiary%20company%20of%20BEOL)!5e0!3m2!1sen!2sbd!4v1732315576191!5m2!1sen!2sbd"
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

export default SharedMap;

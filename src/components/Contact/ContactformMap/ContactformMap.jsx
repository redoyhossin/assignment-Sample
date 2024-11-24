const ContactformMap = () => {
  // const mapUrl = `https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d467526.0096345602!2d90.42001382080336!3d23.727867552204025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sBangladesh%20Edible%20Oil%20Limited!5e0!3m2!1sen!2sbd!4v1732222971919!5m2!1sen!2sbd`;
  return (
    <div className="px-4 w-full">
      <div className="bg-white p-6">
        <h4 className="text-2xl font-bold mb-2">CORPORATE   HEAD OFFICE:</h4>
        <a href="tel:+880-2-58815319" className="underline font-bold my-2">
          +880-2-58815319
        </a>
        <p className="text-base font-bold my-3">
        Mostafa Centre, House 59, Road 27, Block K, Banani, Dhaka-1213
        </p>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2982.4487979666355!2d90.4062399572459!3d23.79451389792813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70051bf42cf%3A0xb7988b7486cd2182!2sMostafa%20Center!5e0!3m2!1sen!2sbd!4v1732438918493!5m2!1sen!2sbd"
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

export default ContactformMap;

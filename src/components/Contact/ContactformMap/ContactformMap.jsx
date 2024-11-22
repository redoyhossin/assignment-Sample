const ContactformMap = () => {
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d467526.0096345602!2d90.42001382080336!3d23.727867552204025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sBangladesh%20Edible%20Oil%20Limited!5e0!3m2!1sen!2sbd!4v1732222971919!5m2!1sen!2sbd`;
  return (
    <div className="w-full">
      <div className="bg-white my-2 py-6 px-4">
        <h4 className="text-2xl font-bold my-2">BEOL HEAD OFFICE:</h4>
        <a href="tel:+880-2-58815319" className="underline font-bold my-2">
          +880-2-58815319
        </a>
        <p className="text-base font-bold my-3">
          28 Gulshan North C/A, Gulshan Circle 2,Dhaka 1212, Bangladesh
        </p>
        <iframe
          className="mt-5"
          title="Google Map"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          src={mapUrl}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ContactformMap;

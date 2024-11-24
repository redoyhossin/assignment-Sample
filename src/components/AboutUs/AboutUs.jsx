import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <div className="mx-auto max-w-screen-xl">
      <Helmet>
        <title>About Us-SGOil Refineries Limited</title>
      </Helmet>
      <div className="text-center my-3 mb-10">
        <h2 className=" font-bold text-gray-800 md:text-3xl">About Us</h2>
        <div className="inline-block my-7">
          <hr className="bg-blue-900 h-[3px] w-24 " />
          <hr className="bg-blue-900 h-[4px] w-16 ms-4 my-1" />
        </div>
      </div>
      <div>
        <p className=" text-gray-600 px-4">
          BEOL, which embarked on its journey in 1993, has successfully
          established a strong presence in the market, offering
          consumer-packaged edible oils, rice and goods under renowned household
          brands such as Rupchanda, Fortune, Meizan, King’s, Veola and Lucky.
          Since its inception, BEOL has been highlighting the quality
          considering the well-being of the consumers. BEOL is the first ever
          company to introduce packing of edible oil in PET bottles and pouch in
          Bangladesh. It is the pioneer company to introduce Vitamin A
          Fortification in edible oil in the country. <br /> <br />
          Competing with the established domestic brands and aggressive
          multinational corporations BEOL had a mammoth task ahead of it.
          Rupchanda is the flagship brand of Bangladesh Edible Oil Limited. It
          has started its journey in 1996 and since then it has made its place
          as the “numero-uno” in the branded edible oil category. From the very
          beginning, Rupchanda has taken steps to prepare the nation about the
          vitality of staying fit and healthy. Most significantly, for the last
          3 decades BEOL’s number 1 edible oil brand Rupchanda has been
          continuously focusing on improving the quality of life of its
          consumers. Rupchanda Fortified Soyabean Oil has been awarded as “the
          best edible oil brand” in Best Brand Award given by Bangladesh Brand
          Forum, a multi-faceted knowledge sharing organization in Bangladesh,
          for 14 consecutive years. Moreover, Rupchanda received the
          ‘Superbrands Bangladesh’ award from the same organization since the
          inception of both of the awards. <br /> <br />
          “Fortune”, a brand of BEOL, was launched in Bangladesh back in 2014
          and within a short time it became popular in Bangladesh. A revolution
          in the world of cooking oils, rice bran oil is naturally enriched with
          multiple nutrients that transform into health benefits for every
          member in the family. Fortune Fortified Edible Rice Bran Oil is a
          physically refined rice bran oil with numerous benefits, having a high
          smoke point makes the oil a wholesome oil. <br /> <br /> Bearing that
          torch right up to this day, Bangladesh Edible Oil Limited acquired
          Shun Shing Edible Oil Limited in June 2016 to tailor to the increasing
          demand for edible oil in Bangladesh. Veola Soyabean Oil is the new
          addition under the umbrella of BEOL. <br /> <br />
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
